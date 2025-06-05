import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
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
  prevPage: () => void;
}

const UsersContext = createContext<UsersContextType | null>(null);

export const UsersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [since, setSince] = useState<number>(0);

  const getUsers = async (start: number) => {
    const data = await fetchUsers(start);
    setUsers(data);

    localStorage.setItem("github_users", JSON.stringify(data));
    localStorage.setItem("github_since", String(start));
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem("github_users");
    const storedSince = localStorage.getItem("github_since");

    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    if (storedSince) {
      setSince(Number(storedSince));
    } else {
      getUsers(0);
    }
  }, []);

  useEffect(() => {
    if (since !== 0) {
      getUsers(since);
    }
  }, [since]);

  const nextPage = () => {
    if (users.length > 0){
      setSince(since+20)
    }
  };

  const prevPage = () => {

    setSince(since - 20)
  }

  return (
    <UsersContext.Provider value={{ users, nextPage , prevPage}}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UsersContext);
  if (!context) throw new Error("Can't use outside the provider");
  return context;
};
