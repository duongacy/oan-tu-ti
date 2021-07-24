import * as types from "../types";

export const randomSuccess = (value: any) => {
    return {
        type: types.RANDOM_SUCCESS,
        payload: value
    }
}
export const randomIng = (value: any) => {
    console.log("aaaa");
    
    return {
        type: types.RANDOM_ING,
        payload: value
    }
}
export const random = (value: any) => {
    return {
        type: types.RANDOM,
        payload: value
    }
}