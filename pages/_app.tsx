// pages/_app.tsx
import { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { StyledApp, StyledMain, StyledWindow } from './_app.styles';
import { NavBar } from '@/components/NavBar';
import { TurnOffScreen } from '@/components/TurnOffScreen';
import { GlobalStyle } from '@/ui/global.styles';
import { ContactsModal } from '@/ui/ContactsForm/ContactsModal';
import favicon from '@/assets/witch.svg';
import { Background } from '@/ui/Background/Background';
import StoreProvider from '../redux/StoreProvider';

function App({ Component, pageProps }: AppProps) {
    const [turnOn, setTurnOn] = useState(false);
    const [turnOnImageFlag, setTurnOnImageFlag] = useState<boolean | null>(null);
    const [fullscreenWindow, setFullscreenWindow] = useState<boolean>(false);
    const [hideContactsform, setHideContactsform] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        if (!fullscreenWindow) {
            setFullscreenWindow(false);
        } else if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
            console.error('oooops, fullscreen api on safari is broken');
        } else {
            document.documentElement.requestFullscreen().catch((e) => console.error(e));
        }
    }, [fullscreenWindow]);

    if (!mounted) {
        return null;
    }

    return (
        <StyledApp>
            <Head>
                <title>skatewitchesWIP</title>
                <link rel='icon' href={favicon.src} />
            </Head>
            <GlobalStyle />
            <StoreProvider>
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
                                hideContactsform={hideContactsform}
                                setHideContactsform={setHideContactsform}
                            />
                            <StyledMain>
                                <Component {...pageProps} />
                                <ContactsModal hideContactsform={hideContactsform} />
                            </StyledMain>
                        </>
                    ) : (
                        <TurnOffScreen turnOnImageFlag={turnOnImageFlag} setTurnOnImageFlag={setTurnOnImageFlag} setTurnOn={setTurnOn} />
                    )}
                </StyledWindow>
                <Background turnOn={turnOn} />
            </StoreProvider>
        </StyledApp>
    );
}

export default App;
