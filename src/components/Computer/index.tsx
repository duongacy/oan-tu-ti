import React from 'react';
import {useSelector} from 'react-redux';

export const Computer = () => {
    const {oanTuTiState}: any = useSelector((root) => root);
    const {computerChoose} = oanTuTiState;
    const {player} = myStyle;
    return (
        <div className='col-3 position-relative'>
            <div
                className='position-absolute p-2'
                style={{
                    left: 0,
                    width: '130px',
                    height: '130px',
                    background: "url('images/talk-2.png') no-repeat",
                }}>
                <img
                    src={`images/${computerChoose}.png`}
                    width='60'
                    alt=''
                    style={{transform: 'rotate(180deg)'}}
                />
            </div>
            <img src='images/playerComputer.png' {...player} alt='' />
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
