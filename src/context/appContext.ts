import { createContext, useState, useEffect } from "react";
import type { ReactNode } from 'react';

interface User {
    id: number,
    name: string,
    avatarUrl: string
}

interface AppContextType {
    users: User[],
    fetchFavouriteUsers: () => {}
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {

    const [favorite, setFavorite] = useState<User[]>();

    useEffect(() => {
        
    })

    

}