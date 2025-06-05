import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface FavoriteUser {
  login: string;
  avatar_url: string;
  name?: string;
}

interface FavoriteContextType {
  favorites: FavoriteUser[];
  toggleFavorite: (user: FavoriteUser) => void;
  isFavorited: (username: string) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider = ({ children }: { children:ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteUser[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (user: FavoriteUser) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.login === user.login);
      if (exists) {
        return prev.filter((fav) => fav.login !== user.login);
      } else {
        return [...prev, user];
      }
    });
  };

  const isFavorited = (username: string) => {
    return favorites.some((user) => user.login === username);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorited }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites must be in a provider");
  }
  return context;
};
