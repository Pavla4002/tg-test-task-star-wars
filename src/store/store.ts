import { create } from 'zustand'
import {Character} from "../types/characters";
import { devtools } from 'zustand/middleware'


interface CharactersStore {
    characters: Character[];
    loading: boolean;
    error: string | null;
    setCharacters: (characters: Character[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

const useCharactersStore = create<CharactersStore>()(devtools((set) => ({
    characters: [],
    loading: false,
    error: null,
    setCharacters: (characters) => set({ characters }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
})))

export default useCharactersStore;