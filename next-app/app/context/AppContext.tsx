'use client'
import { createContext, useContext, ReactNode, useState, useEffect, useMemo, SetStateAction, Dispatch } from 'react';
const fakeData = require('../../lib/fakeData.json')
interface AppContextData {
    allGraphsData: GraphData[];
    allTags: Set<string>;
    selectedTags: Set<string>;
    toggleTag: (tag: string) => void;
    filteredCards: GraphData[];
    selectedCard: GraphData | null;
    setSelectedCard: Dispatch<SetStateAction<GraphData | null>>;
}
// Create the initial context with default values
const AppContext = createContext<AppContextData | undefined>(undefined);
// Create a custom hook for using the context
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
};
// Create a provider component
interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
    const [allGraphsData, setAllGraphsData] = useState<GraphData[]>(fakeData);
    const [selectedCard, setSelectedCard] = useState<GraphData | null>(null);
    const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

    /** map all tags in all graphs */
    const allTags = useMemo(() => {
        const set = new Set<string>();
        allGraphsData.forEach(gd => {
            gd.tags.forEach(t => { set.add(t) });
        });
        return set;
    }, [allGraphsData])

    /** filter cards according to search */
    const filteredCards = useMemo(() => {
        if (!selectedTags.size) return allGraphsData
        return allGraphsData.filter(gd => {
            const res = gd.tags.some(tag => selectedTags.has(tag))
            return res;
        });
    }, [selectedTags])

    const toggleTag = (tag: string) => {
        setSelectedTags(prev => {
            const st = new Set(prev);
            !st.delete(tag) && st.add(tag) // if tag is selected remove it ! else add it
            return st;
        })
    }

    const contextValue: AppContextData = {
        allGraphsData,
        allTags,
        selectedTags,
        toggleTag,
        filteredCards,
        selectedCard,
        setSelectedCard,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
