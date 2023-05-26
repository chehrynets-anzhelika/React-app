import { openModalType } from "../type";

const defaultStore = {
    open: false,
    content: {
        header: "",
        text: "",
        actions: [],
        closeButton: true,
    }
}

export const openModalReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case openModalType.OPEN_MODAL:
            return {...state, open: true, content: {...action.payload}}
        

        case openModalType.CLOSE_MODAL:
            return { ...state, open: false }

        default:
            return state;
    }
}