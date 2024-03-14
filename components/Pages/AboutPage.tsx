import styled from 'styled-components';

import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';

const StyledAboutPageWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 12px;
    h3 {
        text-align: center;
        font-size: 30px;
        margin-bottom: 20px;
    }
    div {
        font-size: 22px;
        margin-bottom: 10px;

        span {
            font-style: oblique;
            font-size: 20px;
        }
    }
`;

const AboutPage = () => {
    return (
        <SwitchPageAnimationProvider>
            <StyledAboutPageWrapper>
                <h3>🔮 Welcome! 🔮</h3>
                <div>This is my project which in addition to the portfolio contains a lot of different cool things.</div>
                <div> At the moment, the project is in active development</div>
                <div>
                    Tech used:
                    <span> React, Typescript, Next, Styled-Components</span>
                </div>
                <div>
                    Other libs:
                    <span> react-three, react-h5-audio-player, react-yandex-maps, react-to-print, react-rainfall</span>
                </div>
                <div> Enjoy🪄</div>
            </StyledAboutPageWrapper>
        </SwitchPageAnimationProvider>
    );
};

export default AboutPage;
