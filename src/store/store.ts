import { create } from 'zustand'

const useStore = create((set) => ({
    bears: 0,
}))

export default useStore