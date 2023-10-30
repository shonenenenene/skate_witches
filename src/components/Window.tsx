import styled from 'styled-components';
import { NavBar } from './NavBar/NavBar';
import { Home } from './Home/Home';
import { FC, useMemo, useState, Suspense } from 'react';
import { TurnOffScreen } from './TurnOffScreen';
import AnimePage from './Pages/AnimePage';
import PicsPage from './Pages/PicsPage';
import RadioPage from './Pages/RadioPage';
import LogoPage from './Pages/LogoPage';
import { StyledLoader } from './UI';

const StyledWindow = styled.div`
    position: relative;
    z-index: 99;
    max-width: 1060px;
    min-width: 1060px;
    height: 680px;
    border: 2px solid whitesmoke;
    border-radius: 8px;
    background-color: #0000e9;
    display: flex;
    flex-direction: column;
    text-shadow: 0.06rem 0 0.06rem #ea36af, -0.05rem 0 0.06rem #75fa69;
    animation-duration: 0.01s;
    animation-name: textflicker;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    @media (max-width: 1060px) {
        max-width: 100%;
        min-width: 100%;
        height: 100vh;
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

            case 'radio':
                return <RadioPage />;

            case 'logo':
                return (
                    <Suspense fallback={<StyledLoader />}>
                        <LogoPage />
                    </Suspense>
                );

            default:
                return <></>;
        }
    }, [page]);

    const [turnOn, setTurnOn] = useState(false);

    return (
        <StyledWindow>
            {/* {turnOn ? (
                <>
                    <NavBar setTurnOn={setTurnOn} setPage={setPage} isPageOpen={Boolean(page)} />
                    <main style={{ flexGrow: 1 }}>{!Boolean(page) ? <Home setPage={setPage} /> : pageComponent}</main>{' '}
                </>
            ) : (
                <TurnOffScreen setTurnOn={setTurnOn} />
            )} */}
            <NavBar setTurnOn={setTurnOn} setPage={setPage} isPageOpen={Boolean(page)} />
            <main style={{ flexGrow: 1 }}>{!Boolean(page) ? <Home setPage={setPage} /> : pageComponent}</main>{' '}
        </StyledWindow>
    );
};

export default Window;
