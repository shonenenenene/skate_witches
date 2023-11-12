import styled, { css } from 'styled-components';
import { NavBar } from './NavBar/NavBar';
import { Home } from './Home/Home';
import { FC, useMemo, useState, Suspense, useEffect } from 'react';
import { TurnOffScreen } from './TurnOffScreen';
import CVPage from './Pages/CVPage';
import PicsPage from './Pages/PicsPage';
import RadioPage from './Pages/RadioPage';
import LogoPage from './Pages/LogoPage';
import MapsPage from './Pages/MapsPage';
import { StyledLoader } from './UI';

const StyledWindow = styled.div<{ fullscreenWindow: boolean }>`
    position: relative;
    z-index: 99;
    ${({ fullscreenWindow }) =>
        fullscreenWindow
            ? css`
                  width: 100%;
                  height: 100vh;
                  margin-bottom: auto;
              `
            : css`
                  max-width: 1060px;
                  min-width: 1060px;
                  height: 680px;
              `};

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
        height: 94vh;
        margin-bottom: auto;
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

    const [turnOn, setTurnOn] = useState(false);

    const [turnOnImageFlag, setTurnOnImageFlag] = useState(false);

    const [fullscreenWindow, setFullscreenWindow] = useState(false);

    useEffect(() => {
        if (!turnOn) {
            setFullscreenWindow(false);
        }
        if (!fullscreenWindow) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }, [turnOn, fullscreenWindow]);

    const pageComponent = useMemo(() => {
        switch (page) {
            case 'CV':
                return <CVPage />;

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

            case 'maps':
                return <MapsPage />;

            default:
                return <></>;
        }
    }, [page]);

    return (
        <StyledWindow fullscreenWindow={fullscreenWindow}>
            {turnOn ? (
                <>
                    <NavBar
                        setTurnOn={setTurnOn}
                        setPage={setPage}
                        isPageOpen={Boolean(page)}
                        turnOnImageFlag={turnOnImageFlag}
                        setTurnOnImageFlag={setTurnOnImageFlag}
                        fullscreenWindow={fullscreenWindow}
                        setFullscreenWindow={setFullscreenWindow}
                    />
                    <main style={{ flexGrow: 1 }}>{!Boolean(page) ? <Home setPage={setPage} /> : pageComponent}</main>{' '}
                </>
            ) : (
                <TurnOffScreen turnOnImageFlag={turnOnImageFlag} setTurnOnImageFlag={setTurnOnImageFlag} setTurnOn={setTurnOn} />
            )}
        </StyledWindow>
    );
};

export default Window;
