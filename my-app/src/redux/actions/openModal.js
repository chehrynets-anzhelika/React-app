import { openModalType } from "../type";

export const openModal = (payload) => 
({ type: openModalType.OPEN_MODAL, payload });

export const closeModal = (payload) => 
({type: openModalType.CLOSE_MODAL, payload });
