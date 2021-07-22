type IResult = "THANG" | "HOA" | "THUA" |"";
export const CHON = "CHON";
export const RANDOM = "RANDOM";
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

