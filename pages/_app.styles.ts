import styled, { css } from 'styled-components';

import glitch from '@/assets/textures/glitch.jpg';
import rain from '@/assets/textures/rain-back.gif';

export const StyledWindow = styled.div<{ fullscreenwindow: string; turnonimageflag: string | null }>`
    position: relative;
    z-index: 99;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    border: 2px solid rgba(255, 255, 255, 0);
    ${({ fullscreenwindow }) =>
        fullscreenwindow === 'true'
            ? css`
                  width: 100%;
                  height: 100vh;
                  margin-bottom: auto;
              `
            : css`
                  max-width: 1120px;
                  min-width: 1120px;
                  height: 740px;
              `};
    ${({ turnonimageflag }) => {
        if (turnonimageflag === 'true') {
            return css`
                text-shadow: 0.06rem 0 0.06rem #ea36af, -0.05rem 0 0.06rem #75fa69;
                animation-duration: 0.01s, 2s;
                animation-name: textflicker, crt-power-on;
                animation-iteration-count: infinite, 1;
                animation-direction: alternate;
                animation-timing-function: ease, ease-out;
                animation-fill-mode: none, forwards;
                animation-delay: 1s;

                &::after {
                    content: ' ';
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: rgba(18, 16, 16, 0.055);
                    opacity: 0;
                    z-index: 999;
                    pointer-events: none;
                    animation: flicker 0.15s infinite;
                    animation-delay: 1.5s;
                }
                &::before {
                    content: ' ';
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.151) 50%),
                        linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                    z-index: 999;
                    background-size: 100% 2px, 3px 100%;
                    pointer-events: none;

                    animation: powerOn 1.5s forwards ease-out;
                }
            `;
        } else if (turnonimageflag !== null && !(turnonimageflag === 'true')) {
            return css`
                animation: crt-power-off 0.6s forwards ease-in-out;
                animation-delay: 0.05s;
                border: 2px solid #fff;
                background-color: #0000e9;
            `;
        } else if (!(turnonimageflag === 'true')) {
            return css`
                border: 2px solid rgba(255, 255, 255, 0);
            `;
        }
    }}

    @media (max-width: 1120px) {
        max-width: 100%;
        min-width: 100%;
        height: 100vh;
        height: 100svh; // for mobile safari
        margin-bottom: auto;
    }

    @keyframes powerOn {
        0% {
            opacity: 0;
            content: ' ';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            z-index: 999;
            background-size: 100% 2px, 3px 100%;
            pointer-events: none;
        }
        99% {
            opacity: 0;
            content: ' ';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            z-index: 999;
            background-size: 100% 2px, 3px 100%;
            pointer-events: none;
        }
        100% {
            opacity: 1;
            content: ' ';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
                linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            z-index: 999;
            background-size: 100% 2px, 3px 100%;
            pointer-events: none;
        }
    }

    @keyframes flicker {
        0% {
            opacity: 0.20861;
        }
        5% {
            opacity: 0.30769;
        }
        10% {
            opacity: 0.20604;
        }
        15% {
            opacity: 0.80626;
        }
        20% {
            opacity: 0.80128;
        }
        25% {
            opacity: 0.80891;
        }
        30% {
            opacity: 0.60583;
        }
        35% {
            opacity: 0.60807;
        }
        40% {
            opacity: 0.20559;
        }
        45% {
            opacity: 0.80693;
        }
        50% {
            opacity: 0.86019;
        }
        55% {
            opacity: 0.00594;
        }
        60% {
            opacity: 0.10313;
        }
        65% {
            opacity: 0.61988;
        }
        70% {
            opacity: 0.43455;
        }
        75% {
            opacity: 0.27288;
        }
        80% {
            opacity: 0.61428;
        }
        85% {
            opacity: 0.60419;
        }
        90% {
            opacity: 0.6003;
        }
        95% {
            opacity: 0.30108;
        }
        100% {
            opacity: 0.20387;
        }
    }

    @keyframes textflicker {
        from {
            text-shadow: 1px 0 0 #ea36af, -2px 0 0 #75fa69;
        }
        to {
            text-shadow: 2px 0.5px 2px #ea36af, -1px -0.4px 2px #75fa69;
        }
    }

    @keyframes crt-power-on {
        0% {
            transform: scale(1, 0.8) translate3d(0, 0, 0);
            filter: brightness(30);
            background-color: #ffffff;
            opacity: 1;
            border: 2px solid rgba(255, 255, 255, 0);
        }
        3% {
            transform: scale(1, 0.8) translate3d(0, 100%, 0);
        }
        4% {
            transform: scale(1, 0.8) translate3d(0, -100%, 0);
        }
        9% {
            transform: scale(1.3, 0.6) translate3d(0, 100%, 0);
        }
        11% {
            transform: scale(1, 1) translate3d(0, 0, 0);
            filter: contrast(0) brightness(0);
            background-color: rgba(0, 0, 233, 0);
            opacity: 0.5;
        }
        100% {
            transform: scale(1, 1) translate3d(0, 0, 0);
            filter: contrast(1) brightness(1) saturate(1);
            opacity: 1;
            background-color: #0000e9;
            border: 2px solid #fff;
        }
    }

    @keyframes crt-power-off {
        0% {
            transform: scale(1, 1.3) translate3d(0, 0, 0);
            filter: brightness(1);
            background-color: #0000e9;
            border: 2px solid #fff;
        }
        60% {
            transform: scale(1.3, 0.001) translate3d(0, 0, 0);
            filter: brightness(10);
            background-color: #5a5a5a;
        }
        99% {
            transform: scale(0, 0.0001) translate3d(0, 0, 0);
            filter: brightness(50);
        }
        100% {
            transform: scale(1, 1) translate3d(0, 0, 0);
            filter: brightness(50);
            background-color: rgba(0, 0, 233, 0);
            border: 2px solid rgba(255, 255, 255, 0);
        }
    }
`;

export const StyledMain = styled.main`
    flex-grow: 1;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    scroll-behavior: smooth;
    height: 600px;
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: #0000e9;
        border-radius: 8px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #00007c;
        border-radius: 8px;
        border: 3px solid #00007c;
    }
`;

export const StyledApp = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledBackground = styled.div`
    position: absolute;
    inset: -200%;
    opacity: 20%;
    background-image: url(${glitch.src});
    background-size: 5%;
    animation: shift 150s linear infinite both;
    @keyframes shift {
        0% {
            transform: translateX(10%) translateY(10%);
        }

        100% {
            transform: translateX(-10%) translateY(-10%);
        }
    }
`;
