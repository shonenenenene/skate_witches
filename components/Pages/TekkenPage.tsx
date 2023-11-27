import styled from 'styled-components';

import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';

const TekkenWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const TekkenPage = () => {
    return (
        <SwitchPageAnimationProvider>
            <TekkenWrapper>
                <iframe
                    src='https://www.retrogames.cc/embed/40238-tekken-3.html'
                    width='100%'
                    height='100%'
                    frameBorder='no'
                    // allowfullscreen='true'
                    // webkitallowfullscreen='true'
                    // mozallowfullscreen='true'
                    scrolling='no'
                ></iframe>
            </TekkenWrapper>
        </SwitchPageAnimationProvider>
    );
};

export default TekkenPage;
