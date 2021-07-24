import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as types from "../../redux/types";
import {random} from "../../redux/actions/oanTuTiAction";

export const Result = () => {
    const dispatch = useDispatch();
    const {oanTuTiState}: any = useSelector((root) => root);
    const {result, match, win} = oanTuTiState;

    const playGame = () => {
        // console.log("playgame");
        
        // const action: types.IAction = {
        //     type: types.RANDOM,
        //     payload: '',
        // };
        dispatch(random(""));
    };
    return (
        <div className='col-6 text-center fw-bold d-flex flex-column justify-content-center align-items-center gap-4'>
            <h1 className='text-white '>{result}</h1>
            <h2 className='text-warning'>Số bàn thắng: {win}</h2>
            <h2 className='text-warning'>Số bàn chơi: {match}</h2>
            <button
                className='btn btn-success px-5 rounded-0'
                onClick={playGame}>
                Chơi
            </button>
        </div>
    );
};
