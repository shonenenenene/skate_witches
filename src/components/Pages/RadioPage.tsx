import { useEffect, useState } from 'react';
import { RadioBrowserApi } from 'radio-browser-api';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const RadioPage = () => {
    const [station, setStation] = useState('');
    useEffect(() => {
        const radioApi = async () => {
            const api = new RadioBrowserApi('My Radio App');
            const station = await api.getStationsBy('byName', 'Breakcore Mashcore Radio.Mosco.win');
            setStation(station[0].urlResolved);
        };
        radioApi();
    }, []);

    return (
        <div>
            <AudioPlayer
                src={station}
                volume={0.2}
                customProgressBarSection={[]}
                autoPlayAfterSrcChange={false}
                customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
            />
        </div>
    );
};

export default RadioPage;
