import React from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import * as types from './redux/types';
import {useDispatch} from 'react-redux';
import {ButtonChon} from './components/ButtonChon';
import * as formatTypes from './formatTypes';

function App() {
    const dispatch = useDispatch();
    const {oanTuTiState}: any = useSelector((root) => root);
    const {playerChoose, computerChoose, result, match, win, listChoose} =
        oanTuTiState;
    
    const playGame=()=>{
      const action:types.IAction ={
        type: types.RANDOM,
        payload: ""
      }
      dispatch(action)
    }

    const {mainBg, player} = myStyle;
    return (
        <main {...mainBg}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='position-relative'>
                            <div
                                className='position-absolute p-2'
                                style={{
                                    right: '-130px',
                                    width: '130px',
                                    height: '130px',
                                    background:
                                        "url('images/talk-1.png') no-repeat",
                                }}>
                                <img
                                    src={`images/${playerChoose}.png`}
                                    width='60'
                                    alt=''
                                />
                            </div>
                            <img src='images/player.png' {...player} alt='' />
                        </div>
                        <div className='d-flex gap-2 ms-4'>
                            {listChoose.map(
                                (item: formatTypes.IGameItem, key: number) => (
                                    <ButtonChon item={item} key={key} />
                                )
                            )}
                        </div>
                    </div>
                    <div className='col-6 text-center fw-bold d-flex flex-column justify-content-center align-items-center gap-4'>
                        <h1 className='text-white '>{result}</h1>
                        <h2 className='text-warning'>Số bàn thắng: {win}</h2>
                        <h2 className='text-warning'>Số bàn chơi: {match}</h2>
                        <button className='btn btn-success px-5 rounded-0' onClick={playGame}>
                            Chơi
                        </button>
                    </div>
                    <div className='col-3 position-relative'>
                        <div
                            className='position-absolute p-2'
                            style={{
                                left: 0,
                                width: '130px',
                                height: '130px',
                                background:
                                    "url('images/talk-2.png') no-repeat",
                            }}>
                            <img
                                src={`images/${computerChoose}.png`}
                                width='60'
                                alt=''
                                style={{transform: 'rotate(180deg)'}}
                            />
                        </div>
                        <img
                            src='images/playerComputer.png'
                            {...player}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default App;

const myStyle = {
    mainBg: {
        style: {
            backgroundImage: "url('images/bgGame.png')",
            height: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        },
    },
    player: {
        style: {
            maxWidth: '300px',
        },
    },
};
