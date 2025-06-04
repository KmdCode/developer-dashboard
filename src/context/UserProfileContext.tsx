import React, { createContext, useContext, useState, useEffect } from "react";
import type {ReactNode} from 'react';
import { fetchUser } from "../utils/githubService";

interface UserProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
}

interface UserProfileContextType {
  profile: UserProfile | null;
  loadUserProfile: (username: string) => void;
}

const UserProfileContext = createContext<UserProfileContextType | undefined>(undefined);

export const UserProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const loadUserProfile = async (username: string) => {
    try {
      const data = await fetchUser(username);
      setProfile(data);
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  };

  return (
    <UserProfileContext.Provider value={{ profile, loadUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
};
