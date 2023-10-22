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
            margin: 20px;
            font-size: 16px;
        }
    }

    .rhap_container {
        background-color: #ffffff28;
        border-radius: 0 0 6px 6px;
        padding: 5px 25px;
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
`;
const StyledRadioStation = styled.img<{ isSelected?: boolean }>`
    width: 45%;
    transition: 0.15s;
    cursor: pointer;
    display: block;
    border-radius: 8px;
    ${({ isSelected }) => css`
        border: ${isSelected ? '5px solid #ffffff' : '1px solid #ffffff'};
        box-shadow: ${isSelected ? '0px 0px 14px 10px rgb(255, 0, 255)' : 'none'};
    `}
    &:hover {
        box-shadow: 0px 0px 16px 8px #8a31ff;
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
            <h3>choose station</h3>
            <StyledRadioStyle>
                {STATIONS_KEYS.map((key) => (
                    <StyledRadioStation
                        key={STATIONS[key].name}
                        draggable='false'
                        isSelected={selectedStation === STATIONS[key].name}
                        src={STATIONS[key].girl}
                        onClick={() => radioApi(STATIONS[key].name)}
                    />
                ))}
            </StyledRadioStyle>

            <LoaderProvider isLoading={isLoading}>
                {stationUrl ? (
                    <AudioPlayer
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
