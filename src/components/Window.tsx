import styled from 'styled-components';
import { NavBar } from './NavBar/NavBar';
import { Home } from './Home/Home';
import { FC, useMemo, useState } from 'react';
import { TurnOff } from './TurnOff';
import AnimePage from './Pages/AnimePage';
import PicsPage from './Pages/PicsPage';

const StyledWindow = styled.div`
    position: relative;
    max-width: 960px;
    min-width: 960px;
    height: 620px;
    border: 2px solid whitesmoke;
    border-radius: 8px;
    background-color: rgb(0, 0, 233);
    display: flex;
    flex-direction: column;
    @media (max-width: 970px) {
        max-width: 100%;
        min-width: 100%;
        min-height: 100%;
    }
`;

const Window: FC = () => {
    const [page, setPage] = useState('');

    const pageComponent = useMemo(() => {
        switch (page) {
            case 'anime':
                return <AnimePage />;

            case 'pics':
                return <PicsPage />;

            default:
                return <></>;
        }
    }, [page]);

    const [turnOn, setTurnOn] = useState(true);

    return (
        <StyledWindow>
            {turnOn ? (
                <>
                    <NavBar setTurnOn={setTurnOn} setPage={setPage} isPageOpen={Boolean(page)} />
                    <main style={{ flexGrow: 1 }}>{!Boolean(page) ? <Home setPage={setPage} /> : pageComponent}</main>{' '}
                </>
            ) : (
                <TurnOff />
            )}
        </StyledWindow>
    );
};

export default Window;
