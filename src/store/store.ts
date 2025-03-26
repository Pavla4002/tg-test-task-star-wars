import { create } from 'zustand'


const useCharactersStore = create((set) => ({
    characters: [],
}))

export default useCharactersStore;