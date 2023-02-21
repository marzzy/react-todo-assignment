import {create} from 'zustand'

const useSnackbarStore = create((set) => ({
    status: false,
    setOpen: () => set({status: true}),
    setClose: () => set({status: false}),
}))

export default useSnackbarStore;
