import { Rain } from 'react-rainfall';
import {
    StyledBackgroundButton,
    StyledBackgroundButtonsContainer,
    StyledSpaceBackground,
    StyledBackgroundColor,
    StyledTextureBackground,
} from './styles';

import { useState } from 'react';

const backgrounds = [
    <StyledBackgroundColor>
        <StyledSpaceBackground />
    </StyledBackgroundColor>,
    <StyledBackgroundColor>
        <Rain numDrops={40} />
    </StyledBackgroundColor>,
    <StyledTextureBackground />,
];

interface BackgroundProps {
    turnOn: boolean;
}

export const Background = ({ turnOn }: BackgroundProps) => {
    const [currentBackground, setCurrentBackground] = useState(0);

    const backgroundIncrementor = () => {
        if (currentBackground === backgrounds.length - 1) {
            setCurrentBackground(0);
            return;
        }
        setCurrentBackground((state) => state + 1);
    };

    const backgroundDecrementor = () => {
        if (currentBackground === 0) {
            setCurrentBackground(backgrounds.length - 1);
            return;
        }
        setCurrentBackground((state) => state - 1);
    };

    return (
        <>
            <StyledBackgroundButtonsContainer turnon={turnOn}>
                <StyledBackgroundButton onClick={backgroundDecrementor}>❮</StyledBackgroundButton>
                <StyledBackgroundButton onClick={backgroundIncrementor}>❯</StyledBackgroundButton>
            </StyledBackgroundButtonsContainer>
            {backgrounds[currentBackground]}
        </>
    );
};
