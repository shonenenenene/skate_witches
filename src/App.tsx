import styled from 'styled-components';
import Window from './components/Window';
import { GlobalStyle } from './styles';

const StyledApp = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <StyledApp>
                <Window />
            </StyledApp>
        </>
    );
}

export default App;
