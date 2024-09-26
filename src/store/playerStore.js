import { playlists, songs } from "@/lib/data"
import { create } from "zustand"

export const usePlayerstore = create((set) => ({
    isPlaying: false,
    currentMusic:{ playlists:null, song: null, songs: []},
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic })
}))