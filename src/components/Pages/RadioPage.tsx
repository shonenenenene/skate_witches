import { useCallback, useState } from 'react';
import { RadioBrowserApi } from 'radio-browser-api';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { breakcoreGirl, vaporwaveGirl } from '../../assets/pics';
import styled, { css } from 'styled-components';
import { LoaderProvider } from '../UI';

const StyledRadioContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    & {
        h3 {
            margin: 25px;
            font-size: 16px;
        }
    }

    .rhap_container {
        background-color: #ffffff28;
        border-radius: 0 0 6px 6px;
        padding: 5px 25px;
        height: 130px;
    }

    .rhap_controls-section {
        padding: 0;
        margin: 0;
    }
    .rhap_progress-section {
        display: none;
    }

    .rhap_forward-button,
    .rhap_rewind-button {
        display: none;
    }

    .rhap_play-pause-button {
        width: 60px;
        height: 60px;
        svg {
            width: 100%;
            height: 100%;
        }
    }

    svg {
        path {
            fill: #fff;
        }
    }
`;

const StyledRadioStyle = styled.div`
    display: flex;
    height: 100%;
    justify-content: space-evenly;
    align-items: start;
    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`;
const StyledRadioStation = styled.div<{ isSelectedStation?: boolean }>`
    position: relative;
    width: 40%;
    transition: 0.15s;
    cursor: pointer;
    display: block;
    border-radius: 8px;
    ${({ isSelectedStation }) => css`
        border: ${isSelectedStation ? '5px solid #ffffff' : '1px solid #ffffff'};
        box-shadow: ${isSelectedStation ? '0px 0px 14px 10px #ff00ff' : 'none'};
    `}
    &:hover {
        box-shadow: 0px 0px 16px 8px #8a31ff;
    }
    @media (max-width: 900px) {
        width: 330px;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`;

const StyledPlayAnimation = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0.4;
    z-index: -10;
    display: flex;
    justify-content: space-around;
    align-items: end;
    div {
        z-index: -9;
        background: #ffffff;
        width: 50px;
        animation: sound 0ms -800ms linear infinite alternate;
    }
    div:nth-child(1) {
        animation-duration: 474ms;
    }
    div:nth-child(2) {
        animation-duration: 433ms;
    }
    div:nth-child(3) {
        animation-duration: 407ms;
    }
    div:nth-child(4) {
        animation-duration: 458ms;
    }
    div:nth-child(5) {
        animation-duration: 400ms;
    }
    div:nth-child(6) {
        animation-duration: 427ms;
    }
    div:nth-child(7) {
        animation-duration: 407ms;
    }
    div:nth-child(8) {
        animation-duration: 487ms;
    }

    @keyframes sound {
        0% {
            opacity: 0.35;
            height: 3px;
        }
        100% {
            opacity: 1;
            height: 90%;
        }
    }
`;

const STATIONS = {
    BREAKCORE: {
        name: 'Breakcore Mashcore Radio.Mosco.win',
        girl: breakcoreGirl,
    },
    WITCH_HOUSE: {
        name: 'SomaFM Vaporwaves',
        girl: vaporwaveGirl,
    },
} as const;

type Station = (typeof STATIONS)[keyof typeof STATIONS]['name'];

const STATIONS_KEYS = Object.keys(STATIONS) as Array<keyof typeof STATIONS>;

const RadioPage = () => {
    const [stationUrl, setStationUrl] = useState<string | null>(null);
    const [selectedStation, setSelectedStation] = useState<Station | null>(null);
    const [isLoading, setLoading] = useState(false);
    const [onPlay, setOnPlay] = useState(false);

    const api = new RadioBrowserApi('My Radio App');

    const radioApi = useCallback(
        async (name: Station) => {
            if (name === selectedStation) {
                setStationUrl(null);
                setSelectedStation(null);
                return;
            }
            setLoading(true);
            const station = await api.getStationsBy('byName', name);
            setLoading(false);
            setStationUrl(station[0].urlResolved);
            setSelectedStation(name);
        },
        [selectedStation]
    );

    return (
        <StyledRadioContainer>
            <h3>{selectedStation === null ? 'choose station' : selectedStation}</h3>
            <StyledRadioStyle>
                {STATIONS_KEYS.map((key) => (
                    <StyledRadioStation
                        key={STATIONS[key].name}
                        isSelectedStation={selectedStation === STATIONS[key].name}
                        onClick={() => radioApi(STATIONS[key].name)}
                    >
                        <img src={STATIONS[key].girl} draggable='false' />
                        {onPlay && selectedStation === STATIONS[key].name ? (
                            <StyledPlayAnimation>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </StyledPlayAnimation>
                        ) : null}
                    </StyledRadioStation>
                ))}
            </StyledRadioStyle>

            <LoaderProvider isLoading={isLoading}>
                {stationUrl ? (
                    <AudioPlayer
                        onPlay={() => setOnPlay(true)}
                        onPause={() => setOnPlay(false)}
                        src={stationUrl}
                        volume={0.2}
                        autoPlay
                        customProgressBarSection={[]}
                        customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
                    />
                ) : null}
            </LoaderProvider>
        </StyledRadioContainer>
    );
};

export default RadioPage;
