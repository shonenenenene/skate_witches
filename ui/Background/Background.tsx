import {
    StyledBackgroundButton,
    StyledBackgroundButtonsContainer,
    StyledSpaceBackground,
    StyledSpaceBackgroundColor,
    StyledTextureBackground,
} from './styles';
import { PropsWithChildren } from 'react';

const BackgroundButton = ({ children }: PropsWithChildren) => {
    return <StyledBackgroundButton>{children}</StyledBackgroundButton>;
};

const backs = [
    <StyledTextureBackground />,
    <StyledSpaceBackgroundColor>
        <StyledSpaceBackground />
    </StyledSpaceBackgroundColor>,
];

export const Background = () => {
    return (
        <>
            <StyledBackgroundButtonsContainer>
                <BackgroundButton>❮</BackgroundButton>
                <BackgroundButton>❯</BackgroundButton>
            </StyledBackgroundButtonsContainer>

            {/* <StyledTextureBackground /> */}
            <StyledSpaceBackgroundColor>
                <StyledSpaceBackground />
            </StyledSpaceBackgroundColor>
        </>
    );
};
