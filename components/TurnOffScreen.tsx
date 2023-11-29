import { FC } from 'react';
import styled from 'styled-components';
import { CustomButton } from '@/ui/styles';
import { switchIcon, switchIconOff } from '@/assets/icons';

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
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 28 20' width='20' height='20' fill='#fff'>
                    <path d='M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z' />
                    <path d='m7.293 13.293 1.414 1.414L12 11.414l3.293 3.293 1.414-1.414L12 8.586l-4.707 4.707z' />
                </svg>
                &nbsp;press the button and wait for the boot
            </StyledHelper>
        </StyledTurnOffScreen>
    );
};
