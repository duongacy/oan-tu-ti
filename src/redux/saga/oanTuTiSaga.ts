import { randomSuccess, randomIng } from "../actions/oanTuTiAction";
import { put } from 'redux-saga/effects';
export function* randomSaga() {
    const listRandom = ['keo', 'bua', 'bao'];
    const indexRandom = Math.floor(Math.random() * 3);
    yield put(randomSuccess(listRandom[indexRandom]));

}
