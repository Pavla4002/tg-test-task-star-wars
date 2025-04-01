import { create } from 'zustand'
import {Character} from "../types/characters";
import { devtools } from 'zustand/middleware'


interface CharactersStore {
    characters: Character[];
    loading: boolean;
    error: string | null;
    modalOpen: boolean;
    selectCharacter: Character | null;
    setCharacters: (characters: Character[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setModalOpen: (modalOpen: boolean) => void;
    setSelectCharacter: (selectCharacter: Character) => void;
}

const useCharactersStore = create<CharactersStore>()(devtools((set) => ({
    characters: [],
    loading: false,
    error: null,
    modalOpen: false,
    selectCharacter: null,
    setCharacters: (characters) => set({ characters }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
    setModalOpen: (modalOpen) => set({ modalOpen }),
    setSelectCharacter: (selectCharacter) => set({ selectCharacter }),
})))

export default useCharactersStore;