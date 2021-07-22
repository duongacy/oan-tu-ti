import { IOanTuTiState } from "../types";
import { IAction } from "../types";

const initialState: IOanTuTiState = {
    playerChoose: "000",
    computerChoose: "000",
    result: "",
    match: 0,
    win: 0
}

export const oanTuTiReducer = (state = initialState, action:IAction) => {
    switch (action.type) {
        default:
            return { ...state }
    }
}
