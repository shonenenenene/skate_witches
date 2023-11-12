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

const StyledWindow = styled.div<{ fullscreenWindow: boolean; turnOnImageFlag: boolean | null }>`
    position: relative;
    z-index: 99;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(255, 255, 255, 0);

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
    ${({ turnOnImageFlag }) => {
        if (turnOnImageFlag) {
            return css`
                text-shadow: 0.06rem 0 0.06rem #ea36af, -0.05rem 0 0.06rem #75fa69;
                animation-duration: 0.01s, 2s;
                animation-name: textflicker, crt-power-on;
                animation-iteration-count: infinite, 1;
                animation-direction: alternate;
                animation-timing-function: ease, ease-out;
                animation-fill-mode: none, forwards;
                animation-delay: 1s;
            `;
        } else if (turnOnImageFlag !== null && !turnOnImageFlag) {
            return css`
                animation: crt-power-off 1s forwards ease-in-out;
                animation-delay: 0.3s;
                border: 2px solid whitesmoke;
                background-color: #0000e9;
            `;
        } else if (!turnOnImageFlag) {
            return css`
                border: 2px solid rgba(255, 255, 255, 0);
            `;
        }
    }}

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

    @keyframes crt-power-on {
        0% {
            transform: scale(1, 0.8) translate3d(0, 0, 0);
            filter: brightness(30);
            background-color: #ffffff;
            opacity: 1;
            border: 2px solid rgba(255, 255, 255, 0);
        }
        3% {
            transform: scale(1, 0.8) translate3d(0, 100%, 0);
        }
        4% {
            transform: scale(1, 0.8) translate3d(0, -100%, 0);
        }
        9% {
            transform: scale(1.3, 0.6) translate3d(0, 100%, 0);
        }
        11% {
            transform: scale(1, 1) translate3d(0, 0, 0);
            filter: contrast(0) brightness(0);
            background-color: rgba(0, 0, 233, 0);
            opacity: 0.5;
        }
        100% {
            transform: scale(1, 1) translate3d(0, 0, 0);
            filter: contrast(1) brightness(1) saturate(1);
            opacity: 1;
            background-color: #0000e9;
            border: 2px solid whitesmoke;
        }
    }

    @keyframes crt-power-off {
        0% {
            transform: scale(1, 1.3) translate3d(0, 0, 0);
            filter: brightness(1);
            background-color: #0000e9;
            border: 2px solid whitesmoke;
        }
        60% {
            transform: scale(1.3, 0.001) translate3d(0, 0, 0);
            filter: brightness(10);
            background-color: #5a5a5a;
        }
        99% {
            transform: scale(0, 0.0001) translate3d(0, 0, 0);
            filter: brightness(50);
        }
        100% {
            transform: scale(1, 1) translate3d(0, 0, 0);
            filter: brightness(50);
            background-color: rgba(0, 0, 233, 0);
            border: 2px solid rgba(255, 255, 255, 0);
        }
    }
`;

const Window: FC = () => {
    const [page, setPage] = useState('');

    const [turnOn, setTurnOn] = useState(false);

    const [turnOnImageFlag, setTurnOnImageFlag] = useState<boolean | null>(null);

    const [fullscreenWindow, setFullscreenWindow] = useState<boolean>(false);

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
        <StyledWindow fullscreenWindow={fullscreenWindow} turnOnImageFlag={turnOnImageFlag}>
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
