// components/Search.tsx
import { useState, useEffect } from "react";
import { searchUsers } from "../../utils/githubService"; 
import { useDebounce } from "../../hooks/useDebounce"; 
import UserCard from "../userCard/UserCard";

interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
}

const Search = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const [results, setResults] = useState<GitHubUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedQuery) {
        setResults([]);
        return;
      }

      try {
        const res = await searchUsers(debouncedQuery);
        setResults(res.data.items);
      } catch (err) {
        console.error("Search failed", err);
        setResults([]);
      }
    };

    fetchData();
  }, [debouncedQuery]);

  return (
    <div style={{ padding: "1rem" }}>
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          fontSize: "1rem",
          marginBottom: "1rem",
        }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {results.map((user) => (
          <UserCard
            key={user.login}
            username={user.login}
            avatar={user.avatar_url}
            url={user.html_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
