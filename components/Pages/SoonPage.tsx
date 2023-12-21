import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';
import styled from 'styled-components';

const StyledSoonPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;
const StyledSoonTitle = styled.h3`
    margin-top: 400px;
`;
const StyledPyramid = styled.div`
    position: absolute;
    top: 30%;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    animation: animate 4s linear infinite;
    div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
    }
    div span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#003911, #00ff84);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        transform: rotateY(calc(90deg * var(--i))) translateZ(99px) rotateX(30deg);
        transform-origin: bottom;
    }
    @keyframes animate {
        0% {
            transform: rotateX(-30deg) rotateY(0deg);
        }
        100% {
            transform: rotateX(-30deg) rotateY(360deg);
        }
    }
`;
const StyledPyramidGlow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00ff84;
    transform: rotateX(90deg) translateZ(-150px);
    filter: blur(20px);
    box-shadow: 0 0 500px #00ff84;
`;

const SoonPage = () => {
    return (
        <SwitchPageAnimationProvider>
            <StyledSoonPage>
                <StyledSoonTitle>CONTENT COMING SOON</StyledSoonTitle>
                <StyledPyramid>
                    <StyledPyramidGlow />
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </StyledPyramid>
            </StyledSoonPage>
        </SwitchPageAnimationProvider>
    );
};

export default SoonPage;
