import { FC, useState } from 'react';
import styled from 'styled-components';
import { CustomButton } from './UI';
import { switchIcon, switchIconOff } from './../assets/icons';

const StyledTurnOffScreen = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledTurnOnIcon = styled.img`
    filter: saturate(500%) contrast(800%) brightness(500%) invert(80%) sepia(50%) hue-rotate(120deg);
`;

interface TurnOffScreenProps {
    setTurnOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TurnOffScreen: FC<TurnOffScreenProps> = ({ setTurnOn }) => {
    const [turnOnFlag, setTurnOnFlag] = useState(true);

    return (
        <StyledTurnOffScreen>
            <CustomButton
                onClick={() => {
                    setTurnOnFlag(false);
                    setTimeout(() => {
                        setTurnOn(true);
                    }, 1500);
                }}
            >
                <StyledTurnOnIcon src={turnOnFlag ? switchIcon : switchIconOff} />
            </CustomButton>
        </StyledTurnOffScreen>
    );
};
