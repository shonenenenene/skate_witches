import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';
import { YMaps, Map } from '@pbe/react-yandex-maps';
import styled from 'styled-components';

const API_KEY = '0eb65888-66fd-40ce-acf9-8d9784f88aaa';

const StyledMapWrapper = styled.div`
    width: 100%;
    height: 100%;
    @media (max-width: 1060px) {
        height: 100%;
    }
    .ymaps-2-1-79-float-button {
        display: none;
    }
`;

const MapsPage = () => {
    const defaultState = {
        center: [38.458903, 140.000853],
        zoom: 5,
    };

    return (
        <SwitchPageAnimationProvider>
            <StyledMapWrapper>
                <YMaps
                    query={{
                        load: 'package.full',
                        apikey: API_KEY,
                    }}
                >
                    <Map width='100%' height='100%' defaultState={defaultState} />
                </YMaps>
            </StyledMapWrapper>
        </SwitchPageAnimationProvider>
    );
};

export default MapsPage;
