import { FC } from 'react';
import styled from 'styled-components';
import { CustomButton } from '@/ui/styles';
import { switchIcon, switchIconOff } from '@/assets/icons';
import { UpArrowIcon } from '@/ui/icons';

const StyledTurnOffScreen = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: end;
    padding-bottom: 60px;
    button {
        width: 120px;
    }
`;

const StyledHelper = styled.div`
    position: absolute;
    bottom: 16px;
    left: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
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
                <StyledTurnOnIcon draggable={false} src={turnOnImageFlag ? switchIconOff.src : switchIcon.src} />
            </CustomButton>
            <StyledHelper>
                <UpArrowIcon /> &nbsp;
                <span>press the button and wait for the boot</span>
            </StyledHelper>
        </StyledTurnOffScreen>
    );
};
