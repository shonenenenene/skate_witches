import { CustomButton } from '@/ui/styles';
import { navs } from '@/utils/constants';
import { NavItem } from './NavItem';
import { useState } from 'react';
import { switchIconMini, switchIconOffMini } from '@/assets/icons';
import { StyledTurnOnIcon } from '../TurnOffScreen';
import { StyledNavBar, StyledToLogo, StyledNavBtnsWrapper, StyledNavsWrapper } from './NavBar.styles';
import { useRouter } from 'next/router';

interface NavBarProps {
    turnOnImageFlag: boolean | null;
    setTurnOnImageFlag: React.Dispatch<React.SetStateAction<boolean | null>>;
    setTurnOn: React.Dispatch<React.SetStateAction<boolean>>;
    fullscreenWindow: boolean;
    setFullscreenWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar = ({ setTurnOn, setTurnOnImageFlag, turnOnImageFlag, fullscreenWindow, setFullscreenWindow }: NavBarProps) => {
    const [activeNav, setActiveNav] = useState<string | null>(null);

    const [isOpenedBurger, setIsOpenedBurger] = useState(false);

    const router = useRouter();

    const isPageOpen = router.asPath !== '/';

    return (
        <StyledNavBar>
            <StyledToLogo
                onClick={() => {
                    router.push('/logo');
                }}
            >
                🔮🧙‍♂️
            </StyledToLogo>
            <StyledNavsWrapper isOpenedBurger={isOpenedBurger}>
                <CustomButton
                    onClick={() => {
                        setIsOpenedBurger(!isOpenedBurger);
                    }}
                >
                    {isOpenedBurger ? '✖' : '☰'}
                </CustomButton>
                {navs.map((item) => (
                    <NavItem
                        activeNav={activeNav}
                        setActiveNav={setActiveNav}
                        fullscreenWindow={fullscreenWindow}
                        setFullscreenWindow={setFullscreenWindow}
                        item={item}
                        key={item.id}
                    />
                ))}
            </StyledNavsWrapper>

            <StyledNavBtnsWrapper>
                {isPageOpen ? (
                    <CustomButton
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        <svg
                            width='26px'
                            height='26px'
                            viewBox='-8 -4.5 30 30'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            aria-labelledby='previousAltIconTitle'
                            stroke='#fff'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            color='#fff'
                        >
                            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                            <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g>
                            <g id='SVGRepo_iconCarrier'>
                                <path d='M8 4L4 8L8 12'></path>
                                <path d='M4 8H14.5C17.5376 8 20 10.4624 20 13.5V13.5C20 16.5376 17.5376 19 14.5 19H5'></path>
                            </g>
                        </svg>
                    </CustomButton>
                ) : null}
                <CustomButton
                    onClick={() => {
                        setTurnOnImageFlag(false);
                        setTimeout(() => {
                            setTurnOn(false);
                        }, 500);
                    }}
                >
                    <StyledTurnOnIcon draggable={false} src={turnOnImageFlag ? switchIconMini.src : switchIconOffMini.src} />
                </CustomButton>
            </StyledNavBtnsWrapper>
        </StyledNavBar>
    );
};
