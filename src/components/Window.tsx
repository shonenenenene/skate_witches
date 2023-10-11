import styled from 'styled-components';
import { NavBar } from './NavBar/NavBar';
import { Home } from './Home/Home';
import { FC, useMemo, useState } from 'react';
import { TurnOffScreen } from './TurnOffScreen';
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
    text-shadow: 0.06rem 0 0.06rem #ea36af, -0.05rem 0 0.06rem #75fa69;
    animation-duration: 0.01s;
    animation-name: textflicker;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    @media (max-width: 970px) {
        max-width: 100%;
        min-width: 100%;
        min-height: 100%;
    }
    @keyframes textflicker {
        from {
            text-shadow: 1px 0 0 #ea36af, -2px 0 0 #75fa69;
        }
        to {
            text-shadow: 2px 0.5px 2px #ea36af, -1px -0.4px 2px #75fa69;
        }
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

    const [turnOn, setTurnOn] = useState(false);

    return (
        <StyledWindow>
            {turnOn ? (
                <>
                    <NavBar setTurnOn={setTurnOn} setPage={setPage} isPageOpen={Boolean(page)} />
                    <main style={{ flexGrow: 1 }}>{!Boolean(page) ? <Home setPage={setPage} /> : pageComponent}</main>{' '}
                </>
            ) : (
                <TurnOffScreen setTurnOn={setTurnOn} />
            )}
        </StyledWindow>
    );
};

export default Window;
