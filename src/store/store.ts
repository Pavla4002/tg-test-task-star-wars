import { create } from 'zustand'
import {Character} from "../types/characters";


interface CharactersStore {
    characters: Character[];
    loading: boolean;
    error: string | null;
    setCharacters: (characters: Character[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
}

const useCharactersStore = create<CharactersStore>((set) => ({
    characters: [],
    loading: false,
    error: null,
    setCharacters: (characters) => set({ characters }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),

}))

export default useCharactersStore;