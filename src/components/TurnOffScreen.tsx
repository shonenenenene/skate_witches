import { FC } from 'react';
import styled from 'styled-components';
import { CustomButton } from './UI';
import { switchIcon, switchIconOff } from './../assets/icons';

const StyledTurnOffScreen = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: end;
    button {
        width: 120px;
    }
`;

const StyledHelper = styled.div`
    position: absolute;
    bottom: -40px;
    left: 54px;
    text-shadow: none;
`;

export const StyledTurnOnIcon = styled.img`
    filter: saturate(500%) contrast(800%) brightness(500%) invert(80%) sepia(50%) hue-rotate(120deg);
`;

interface TurnOffScreenProps {
    setTurnOn: React.Dispatch<React.SetStateAction<boolean>>;
    setTurnOnImageFlag: React.Dispatch<React.SetStateAction<boolean | null>>;
    turnOnImageFlag: boolean | null;
}

export const TurnOffScreen: FC<TurnOffScreenProps> = ({ setTurnOn, setTurnOnImageFlag, turnOnImageFlag }) => {
    return (
        <StyledTurnOffScreen>
            <CustomButton
                onClick={() => {
                    setTurnOnImageFlag(true);
                    setTimeout(() => {
                        setTurnOn(true);
                    }, 1500);
                }}
            >
                <StyledTurnOnIcon draggable={false} src={turnOnImageFlag ? switchIconOff : switchIcon} />
            </CustomButton>
            <StyledHelper>🠕 press the button and wait for the boot</StyledHelper>
        </StyledTurnOffScreen>
    );
};
