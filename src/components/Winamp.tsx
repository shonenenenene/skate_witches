import { useEffect, useState } from 'react';
// @ts-ignore
import useSound from 'use-sound';
import vira from '../assets/music/iDontCare.mp3';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import viraCover from '../assets/music/covers/vira.jpg';
import styled from 'styled-components';
import { CustomButton } from './UI/UI.styles';

const StyledWinamp = styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 2px solid whitesmoke;
    border-radius: 8px;
    background-color: #000000b5;
    img {
        width: 120px;
        height: 120px;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Winamp = () => {
    const [isOpened, setIsOpened] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, { pause, duration, sound }] = useSound(vira);
    const [currTime, setCurrTime] = useState({
        min: '',
        sec: '',
    }); // текущее положение звука в минутах и секундах

    const [seconds, setSeconds] = useState(); // текущая позиция звука в секундах

    const playingButton = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([])); // устанавливаем состояние с текущим значением в секундах
                const min = String(Math.floor(sound.seek([]) / 60));
                const sec = String(Math.floor(sound.seek([]) % 60));
                setCurrTime({
                    min,
                    sec,
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

    const openHandler = () => {
        pause();
        setIsPlaying(false);
        setIsOpened(!isOpened);
        console.log('asd');
    };

    return (
        <StyledWinamp>
            <CustomButton onClick={openHandler}>{!isOpened ? '⮛' : '⮙'}</CustomButton>
            {isOpened ? (
                <div>
                    <img src={viraCover} />
                    <div>
                        <h3>VIOLENT VIRA</h3>
                        <p>I DON'T CARE NIGHTCORE</p>
                        <span>
                            <button>
                                <IconContext.Provider value={{ size: '3em', color: 'white' }}>
                                    <BiSkipPrevious />
                                </IconContext.Provider>
                            </button>
                            {!isPlaying ? (
                                <button onClick={playingButton}>
                                    <IconContext.Provider value={{ size: '3em', color: 'white' }}>
                                        <AiFillPlayCircle />
                                    </IconContext.Provider>
                                </button>
                            ) : (
                                <button onClick={playingButton}>
                                    <IconContext.Provider value={{ size: '3em', color: 'white' }}>
                                        <AiFillPauseCircle />
                                    </IconContext.Provider>
                                </button>
                            )}
                            <button>
                                <IconContext.Provider value={{ size: '3em', color: 'white' }}>
                                    <BiSkipNext />
                                </IconContext.Provider>
                            </button>
                        </span>
                        <div>
                            <div>
                                <p>
                                    {currTime.min}:{currTime.sec}
                                </p>
                            </div>
                            <input
                                type='range'
                                min='0'
                                max={duration / 1000}
                                value={seconds}
                                defaultValue='0'
                                onChange={(e) => {
                                    sound.seek([e.target.value]);
                                }}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </StyledWinamp>
    );
};

export default Winamp;
