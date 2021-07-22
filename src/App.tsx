import React from 'react';
import './App.css';
import {useSelector} from 'react-redux';
import {IOanTuTiState} from './redux/types';

function App() {
    const {oanTuTiState}: any = useSelector((root) => root);
    const {playerChoose, computerChoose, result, match, win} = oanTuTiState;

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
                                <img src='images/keo.png' width='60' alt='' />
                            </div>
                            <img src='images/player.png' {...player} alt='' />
                        </div>
                        <div className='d-flex gap-2 ms-4'>
                            <button>
                                <img src='images/keo.png' width='50px' alt='' />
                            </button>
                            <button>
                                <img src='images/bua.png' width='50px' alt='' />
                            </button>
                            <button>
                                <img src='images/bao.png' width='50px' alt='' />
                            </button>
                        </div>
                    </div>
                    <div className='col-6 text-center fw-bold d-flex flex-column justify-content-center align-items-center gap-4'>
                        <h1 className='text-white '>Y dep trai</h1>
                        <h2 className='text-warning'>Số bàn thắng</h2>
                        <h2 className='text-warning'>Số bàn chơi</h2>
                        <button className='btn btn-success px-5 rounded-0'>
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
                                src='images/keo.png'
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
