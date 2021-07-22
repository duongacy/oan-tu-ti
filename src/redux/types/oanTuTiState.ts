type IResult = "THANG" | "HOA" | "THUA" |""
export interface IOanTuTiState {
    playerChoose: string;
    computerChoose: string;
    result: IResult;
    match:number;
    win:number
}