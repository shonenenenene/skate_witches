import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';
import styled from 'styled-components';
import witchcraft from '@/assets/witchcraft.png';
import Image from 'next/image';

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
        border-bottom: 1px solid #fff;
        img {
            position: absolute;
            bottom: 0;
            left: 50px;
        }
        background: linear-gradient(#ffffff, #0000ac);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        transform: rotateY(calc(90deg * var(--i))) translateZ(99px) rotateX(30deg);
        transform-origin: bottom;
        &:nth-child(1) {
            --i: 0;
        }
        &:nth-child(2) {
            --i: 1;
        }
        &:nth-child(3) {
            --i: 2;
        }
        &:nth-child(4) {
            --i: 3;
        }
    }
    @keyframes animate {
        0% {
            transform: rotateX(-30deg) rotateY(360deg);
        }
        100% {
            transform: rotateX(-30deg) rotateY(0deg);
        }
    }
`;
const StyledPyramidGlow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00007c;
    transform: rotateX(90deg) translateZ(-150px);
    filter: blur(20px);
    box-shadow: 0 0 500px #fff;
`;

const SoonPage = () => {
    return (
        <SwitchPageAnimationProvider>
            <StyledSoonPage>
                <StyledSoonTitle>CONTENT COMING SOON</StyledSoonTitle>
                <StyledPyramid>
                    <StyledPyramidGlow />
                    <div>
                        <span>
                            <Image alt='wiitchcraft' src={witchcraft.src} width={110} height={110} />
                        </span>
                        <span>
                            <Image alt='wiitchcraft' src={witchcraft.src} width={110} height={110} />
                        </span>
                        <span>
                            <Image alt='wiitchcraft' src={witchcraft.src} width={110} height={110} />
                        </span>
                        <span>
                            <Image alt='wiitchcraft' src={witchcraft.src} width={110} height={110} />
                        </span>
                    </div>
                </StyledPyramid>
            </StyledSoonPage>
        </SwitchPageAnimationProvider>
    );
};

export default SoonPage;
