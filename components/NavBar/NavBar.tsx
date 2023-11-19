import { CustomButton } from '@/ui/styles';
import { navs } from '@/utils/constants';
import { NavItem } from './NavItem';
import { useState } from 'react';
import { switchIconMini, switchIconOffMini } from '@/assets/icons';
import { StyledTurnOnIcon } from '../TurnOffScreen';
import { StyledNavBar, StyledToLogo, StyledNavBtnsWrapper } from './NavBar.styles';
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
            <StyledNavBtnsWrapper>
                {isPageOpen ? (
                    <CustomButton
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        ⮌
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
