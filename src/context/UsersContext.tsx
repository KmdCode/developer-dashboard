import { createContext, useContext, useState, useEffect } from "react";
import { fetchUsers } from "../utils/githubService";

interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

interface UsersContextType {
  users: User[];
  nextPage: () => void;
}

const UsersContext = createContext<UsersContextType | null>(null);

export const GithubProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [since, setSince] = useState<number>(0);

  const getUsers = async (start: number) => {
    const data = await fetchUsers(start);
    setUsers(data);
  };

  useEffect(() => {
    getUsers(since);
  }, [since]);

  const nextPage = () => setSince(users[users.length - 1]?.id || since + 20);

  return (
    <UsersContext.Provider value={{ users, nextPage }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UsersContext);
  if (!context) throw new Error("Can't use outside the provider");
  return context;
};
