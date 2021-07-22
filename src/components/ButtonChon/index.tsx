import React from 'react';

import * as formatTypes from "../../formatTypes";
import * as types from "../../redux/types";
import {useDispatch} from "react-redux";

interface IButtonChonProps {
    item: formatTypes.IGameItem
}
export const ButtonChon:React.FC<IButtonChonProps> = ({item}) => {
    const dispatch = useDispatch();
    const handleChon = ()=>{
        const action:types.IAction = {
            type: types.CHON,
            payload: item.name
        }
        dispatch(action);
    }
    const btnClass = item.status === true ? 'btn-danger' : ''

    return (
        <button className={`btn btn-secondary rounded-0 position-relative ${btnClass}`} style={{width: "fit-content", zIndex:10}}>
            <img
                onClick={handleChon}
                src={`images/${item.name}.png`}
                width='50px'
                alt=''
            />
        </button>
    );
};
