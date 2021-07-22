import { IOanTuTiInitState } from "../types";
import * as types from "../types";

type IResult = "THANG" | "HOA" | "THUA";
const listRandom = ['keo', 'bua', 'bao'];

const initialState: IOanTuTiInitState = {
    playerChoose: "",
    computerChoose: "",
    result: "",
    match: 0,
    win: 0,
    listChoose: [
        { name: "keo", status: false },
        { name: "bua", status: false },
        { name: "bao", status: false },
    ]
}

const handleWin = (a: string, b: string): IResult => {
    const indexA = listRandom.findIndex(item => item === a);
    const indexB = listRandom.findIndex(item => item === b);
    if (indexA === indexB - 1 || indexA === indexB + 2) {
        return "THUA";
    }
    if (indexA === indexB + 1 || indexA === indexB - 2) {
        return "THANG";
    }
    return "HOA";
}

export const oanTuTiReducer = (state = initialState, action: types.IAction) => {
    switch (action.type) {
        case types.CHON:
            state.computerChoose = "";
            state.result = "";
            state.playerChoose = action.payload;
            const itemChon = state.listChoose.find(item => item.name === action.payload);
            state.listChoose.forEach(item => {
                item.status = false;
            })
            if (itemChon !== undefined) {
                itemChon.status = true;
            }
            break;

        case types.RANDOM:
            state.match += 1;
            const indexRandom = Math.floor(Math.random() * 3);
            state.computerChoose = listRandom[indexRandom];
            state.result = handleWin(state.playerChoose, state.computerChoose);
            if (state.result === "THANG") { state.win += 1; }
            break;
        default:
            return { ...state }
    }
    return { ...state };
}
