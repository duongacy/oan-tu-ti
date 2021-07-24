import './App.css';
import {Computer} from './components/Computer';
import {Player} from './components/Player';
import {Result} from './components/Result';
import {ReactNode} from 'react';

function App() {
    return (
        <GameContainer>
            <Player />
            <Result />
            <Computer />
        </GameContainer>
    );
}

export default App;

interface IGameContainerProps {
    children: string | ReactNode | ReactNode[];
}
const GameContainer: React.FC<IGameContainerProps> = ({children}) => {
    const {mainBg} = myStyle;
    return (
        <main {...mainBg}>
            <div className='container py-5'>
                <div className='row'>{children}</div>
            </div>
        </main>
    );
};

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
