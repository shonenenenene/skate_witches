import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styled from 'styled-components';

const StyledMapWrapper = styled.div`
    width: 100%;
    height: 640px;
    @media (max-width: 1060px) {
        height: 100%;
    }
`;

const MapsPage = () => {
    const defaultState = {
        center: [38.458903, 140.000853],
        zoom: 5,
    };

    return (
        <StyledMapWrapper>
            <YMaps
                query={{
                    load: 'package.full',
                    apikey: '0eb65888-66fd-40ce-acf9-8d9784f88aaa',
                }}
            >
                <Map width='100%' height='100%' defaultState={defaultState}>
                    <Placemark geometry={[defaultState.center]} />
                </Map>
            </YMaps>
        </StyledMapWrapper>
    );
};

export default MapsPage;
