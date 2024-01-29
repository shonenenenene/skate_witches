import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { StyledApp, StyledBackground, StyledMain, StyledWindow } from './_app.styles';
import { NavBar } from '@/components/NavBar';
import { TurnOffScreen } from '@/components/TurnOffScreen';
import { GlobalStyle } from '@/ui/global.styles';

import favicon from '@/assets/witch.svg';
import { ContactsModal } from '@/ui/ContactsModal';

const App = ({ Component, pageProps }: AppProps) => {
    const [turnOn, setTurnOn] = useState(false);

    const [turnOnImageFlag, setTurnOnImageFlag] = useState<boolean | null>(null);

    const [fullscreenWindow, setFullscreenWindow] = useState<boolean>(false);

    useEffect(() => {
        if (!fullscreenWindow) {
            setFullscreenWindow(false);
        } else if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
            console.log('oooops, fullscreen api on safari is broken');
        } else {
            document.documentElement.requestFullscreen().catch((e) => console.error(e));
        }
    }, [fullscreenWindow]);

    return (
        <StyledApp>
            <Head>
                <title>skatewitchesWIP</title>
                <link rel='icon' href={favicon.src} />
            </Head>
            <GlobalStyle />
            <StyledWindow
                fullscreenwindow={fullscreenWindow.toString()}
                turnonimageflag={turnOnImageFlag === null ? null : turnOnImageFlag.toString()}
            >
                {turnOn ? (
                    <>
                        <NavBar
                            setTurnOn={setTurnOn}
                            turnOnImageFlag={turnOnImageFlag}
                            setTurnOnImageFlag={setTurnOnImageFlag}
                            fullscreenWindow={fullscreenWindow}
                            setFullscreenWindow={setFullscreenWindow}
                        />
                        <StyledMain>
                            <Component {...pageProps} />
                            <ContactsModal />
                        </StyledMain>
                    </>
                ) : (
                    <TurnOffScreen turnOnImageFlag={turnOnImageFlag} setTurnOnImageFlag={setTurnOnImageFlag} setTurnOn={setTurnOn} />
                )}
            </StyledWindow>
            <StyledBackground />
        </StyledApp>
    );
};

export default App;
