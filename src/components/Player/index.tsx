import React from 'react';
import {useSelector} from 'react-redux';
import {ButtonChon} from '../ButtonChon';
import * as formatTypes from '../../formatTypes';

export const Player = () => {
    const {oanTuTiState}: any = useSelector((root) => root);
    const {playerChoose, listChoose} = oanTuTiState;

    const {player} = myStyle;
    return (
        <div className='col-3'>
            <div className='position-relative'>
                <div
                    className='position-absolute p-2'
                    style={{
                        right: '-130px',
                        width: '130px',
                        height: '130px',
                        background: "url('images/talk-1.png') no-repeat",
                    }}>
                    <img src={`images/${playerChoose}.png`} width='60' alt='' />
                </div>
                <img src='images/player.png' {...player} alt='' />
            </div>
            <div className='d-flex gap-2 ms-4'>
                {listChoose.map((item: formatTypes.IGameItem, key: number) => (
                    <ButtonChon item={item} key={key} />
                ))}
            </div>
        </div>
    );
};
const myStyle = {
    player: {
        style: {
            maxWidth: '300px',
        },
    },
};
