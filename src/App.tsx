import styled from 'styled-components';
import Window from './components/Window';
import { GlobalStyle } from './styles';

const StyledApp = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledBackground = styled.div`
    position: absolute;
    inset: -200%;
    opacity: 20%;
    background-image: url('textures/glitch.jpg');
    background-size: 5%;
    animation: shift 50s linear infinite both;
    @keyframes shift {
        0% {
            transform: translateX(10%) translateY(10%);
        }

        100% {
            transform: translateX(-10%) translateY(-10%);
        }
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <StyledApp>
                <Window />
                <StyledBackground />
            </StyledApp>
        </>
    );
}

export default App;
