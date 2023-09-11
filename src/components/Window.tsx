import styled from 'styled-components';
import NavBar from './NavBar';
import Home from './Home';

const StyledWindow = styled.div`
    background-color: rgb(0, 0, 233);
    max-width: 1100px;
    min-width: 960px;
    min-height: 620px;
    border: 2px solid whitesmoke;
    border-radius: 8px;
    @media (max-width: 970px) {
        max-width: 100%;
        min-width: 100%;
        min-height: 100%;
    }
`;
const Window = () => {
    return (
        <StyledWindow>
            <NavBar />
            <main>
                <Home />
            </main>
        </StyledWindow>
    );
};

export default Window;
