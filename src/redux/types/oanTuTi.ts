type IResult = "THANG" | "HOA" | "THUA" |"";
export const CHON = "CHON";
export const RANDOM = "RANDOM";
export const RANDOM_SUCCESS = "RANDOM_SUCCESS";
export const RANDOM_ING = "RANDOM_ING";
export interface IOanTuTiInitState {
    playerChoose: string;
    computerChoose: string;
    result: IResult;
    match:number;
    win:number,
    listChoose:{
        name: string,
        status : boolean
    }[]
}

