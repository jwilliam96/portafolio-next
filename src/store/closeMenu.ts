import { create } from "zustand"

interface Props {
    isMenu: boolean
    closeMenu: () => void
}

export const onMenu = create<Props>()((set) => ({
    isMenu: true,
    closeMenu: () => set(state => ({ isMenu: !state.isMenu }))
}))