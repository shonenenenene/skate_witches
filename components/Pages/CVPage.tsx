import styled from 'styled-components';

import avatar from '@/assets/photos/hh.jpg';
import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';
import { useState } from 'react';
import Image from 'next/image';

const StyledCVPage = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    @media (max-width: 800px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const StyledCVPhoto = styled.div`
    width: 300px;
    height: 313px;
    margin: 15px 15px;
`;

const StyledAboutMeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 15px;
    h2 {
        font-size: 52px;
        margin: 5px 10px;
    }
    h3 {
        font-size: 38px;
        margin: 5px 10px;
    }
    h4 {
        margin: 5px 10px;
        font-size: 24px;
        span {
            font-size: 16px;
        }
    }
    p {
        margin: 5px 10px;
        max-width: 600px;
        font-size: 17px;
    }

    span {
        margin: 5px 10px;
        font-size: 18px;
        background-color: #ff7cee34;
        &::selection {
            color: #ff7cee;
        }
    }
    a {
        margin: 5px 10px;
        font-size: 18px;
        cursor: pointer;
        background-color: #ff7cee34;
        &:hover {
            color: #ff7cee;
            transition: 0.3s all;
        }
    }
`;

const StyledTechStackWrapper = styled.div`
    flex-basis: 40%;
    background-color: #ffffff1d;
    padding: 14px;
    h5 {
        margin: 10px 0;
        font-size: 30px;
        text-decoration: underline;
    }
    h6 {
        font-size: 24px;
    }
    @media (max-width: 800px) {
        flex-basis: 92%;
    }
`;

const StyledTechStackList = styled.ul`
    margin: 15px;
    font-size: 20px;
    background-color: #ffffff1d;
`;

const StyledTechStackItem = styled.li`
    display: list-item;
    margin: 10px;
    list-style-position: inside;
    &::marker {
        color: #fff;
        font-size: 1.2em;
        content: '💠 ';
    }
`;

const StyledLangSwitcherForm = styled.form`
    display: flex;
    width: 100px;
    margin: 1px 15px;
    label {
        display: block;
        text-align: center;
        -webkit-tap-highlight-color: transparent;
        &:first-child input {
            border-radius: 0.5em 0 0 0.5em;
            box-shadow:
                0.1em 0 0 #2726267f inset,
                -0.1em 0 0 #27262600 inset,
                0 0.1em 0 #afa490 inset,
                0 -0.1em 0 #ffffff3f,
                0 0.2em 0.5em #0000007f,
                0 -0.1em 0 #926086 inset,
                -0.1em -0.2em 0 #ffffff7f inset,
                0.2em 0 0 #ffffff7f inset;
        }
        &:last-child input {
            border-radius: 0 0.5em 0.5em 0;
            box-shadow:
                0 -0.1em 0 #926086 inset,
                0.1em 0 0 #2726267f inset,
                -0.1em 0 0 #2726267f inset,
                0 0.1em 0 #afa490 inset,
                -0.1em 0 0 #afa490 inset,
                0 -0.1em 0 #ffffff3f,
                0 0.2em 0.5em #0000007f,
                -0.1em -0.1em 0 0.1em #ffffff7f inset;
        }
        &:first-child input:checked {
            box-shadow:
                0.1em 0 0 #272626af inset,
                -0.1em 0 0 #272626 inset,
                0 0.1em 0 #847a62 inset,
                0 -0.1em 0 #ffffff3f,
                0 0.1em 0 #ffffff7f,
                0 -0.1em 0 #722257 inset,
                -0.1em -0.2em 0 #ffffff7f inset,
                0.2em 0 0 #ffffff7f inset;
        }
        &:last-child input:checked {
            box-shadow:
                0.1em 0 0 #272626af inset,
                -0.1em 0 0 #272626 inset,
                0 -0.1em 0 #722257 inset,
                0 0.1em 0 #847a62 inset,
                -0.1em 0 0 #847a62 inset,
                0 -0.1em 0 #ffffff3f,
                0 0.1em 0 #ffffff7f,
                -0.1em -0.1em 0 0.1em #ffffff7f inset;
        }
        input {
            background-image: linear-gradient(#ffffff 33%, #414751 58%, #837b52, #c5baa1, #c3adaa);
            border-radius: 0;
            box-shadow:
                0.1em 0 0 #2726267f inset,
                -0.1em 0 0 #27262600 inset,
                0 0.1em 0 #afa490 inset,
                0 -0.1em 0 #ffffff3f,
                0 0.2em 0.5em #0000007f,
                0 -0.1em 0 #926086 inset,
                -0.1em -0.2em 0 #ffffff7f inset;
            cursor: pointer;
            display: block;
            margin-bottom: 0.5em;
            width: 100%;
            height: 1em;
            transition: box-shadow var(--transDur) ease-in-out;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 50px;
        }
        input:checked {
            background-image: linear-gradient(#ffffff 33%, #414751 58%, #827a7b, #c0b6ac, #c3adaa);
            box-shadow:
                0.1em 0 0 #272626af inset,
                -0.1em 0 0 #272626 inset,
                0 0.1em 0 #847a62 inset,
                0 -0.1em 0 #ffffff3f,
                0 0.1em 0 #ffffff7f,
                0 -0.1em 0 #722257 inset,
                -0.1em -0.2em 0 #ffffff7f inset;
        }
        input:checked + span {
            opacity: 1;
        }
        input:focus {
            outline: transparent;
        }
        input + span {
            opacity: 0.45;
            transition: opacity var(--transDur) ease-in-out;
        }
    }
`;

const CVPage = () => {
    const [lang, setLang] = useState('RU');

    return (
        <SwitchPageAnimationProvider>
            <StyledCVPage>
                <StyledAboutMeWrapper>
                    <StyledCVPhoto>
                        <Image draggable={false} src={avatar.src} alt='my CV photo' width={300} height={313} />
                    </StyledCVPhoto>
                    <StyledLangSwitcherForm>
                        <label>
                            <input type='radio' name='band' value='RU' onChange={(e) => setLang(e.target.value)} checked={lang === 'RU'} />
                            <span>RU</span>
                        </label>
                        <label>
                            <input type='radio' name='band' value='EN' onChange={(e) => setLang(e.target.value)} checked={lang === 'EN'} />
                            <span>EN</span>
                        </label>
                    </StyledLangSwitcherForm>
                    {lang === 'RU' ? (
                        <>
                            <h2>Даниил Сытаев</h2>
                            <h3>Frontend Developer</h3>
                            <h4>Опыт работы: ~3 года</h4>
                            <p>Использую в своих проектах React, TypeScript, Styled-Components, Next, Redux</p>
                            <p>
                                Стремлюсь создавать приложения сочетающие в себе современные технологии, красивый дизайн и дух
                                интернет-культуры.
                            </p>
                            <h4>Контакты:</h4>
                            <a href='https://github.com/shonenenenene' target='_blank' draggable={false}>
                                github
                            </a>
                            <a href='https://t.me/shonethegrappler' target='_blank' draggable={false}>
                                tg: @shonethegrappler
                            </a>
                            <a href='mailto:danya.sytaev@gmail.com' target='_blank' draggable={false}>
                                mail: danya.sytaev@gmail.com
                            </a>
                            {/* <a href='/CV_Sytaev_Daniil.pdf' target='_blank' rel='noopener noreferrer' draggable={false} download>
                                скачать PDF
                            </a> */}
                        </>
                    ) : lang === 'EN' ? (
                        <>
                            <h2>Daniil Sytaev</h2>
                            <h3>Frontend Developer</h3>
                            <h4>Work experience: ~3 year</h4>
                            <p>Using React, TypeScript, Next, Redux, Styled-Components stack.</p>
                            <p>
                                I strive to create applications that combine modern technology, beautiful design and the spirit of Internet
                                culture.
                            </p>
                            <h4>Links:</h4>
                            <a href='https://github.com/shonenenenene' target='_blank' draggable={false}>
                                github
                            </a>
                            <a href='https://t.me/shonethegrappler' target='_blank' draggable={false}>
                                tg: @shonethegrappler
                            </a>
                            <a href='mailto:danya.sytaev@gmail.com' target='_blank' draggable={false}>
                                mail: danya.sytaev@gmail.com
                            </a>
                            {/* <a href='/CV_Sytaev_Daniil.pdf' target='_blank' rel='noopener noreferrer' draggable={false} download>
                                download PDF
                            </a> */}
                        </>
                    ) : null}
                </StyledAboutMeWrapper>
                {lang === 'RU' ? (
                    <StyledTechStackWrapper>
                        <h5>Стек:</h5>

                        <h6>Основной:</h6>

                        <StyledTechStackList>
                            <StyledTechStackItem>react, typescript, styled-components</StyledTechStackItem>
                        </StyledTechStackList>

                        <h6>В практике использовал:</h6>

                        <StyledTechStackList>
                            <StyledTechStackItem>next</StyledTechStackItem>
                            <StyledTechStackItem>redux, react-hook-form, zod</StyledTechStackItem>
                            <StyledTechStackItem>axios, graphql</StyledTechStackItem>
                            <StyledTechStackItem>react-three, GSAP</StyledTechStackItem>
                            <StyledTechStackItem>scss/sass</StyledTechStackItem>
                            <StyledTechStackItem>git</StyledTechStackItem>
                        </StyledTechStackList>

                        <h6>Навыки:</h6>

                        <StyledTechStackList>
                            <StyledTechStackItem>
                                опыт разработки React приложений с использованием функциональных компонентов
                            </StyledTechStackItem>
                            <StyledTechStackItem>адаптивная/отзывчивая верстка (flex, grid)</StyledTechStackItem>
                            <StyledTechStackItem>пользоваться документацией, в т.ч. на английском</StyledTechStackItem>
                            <StyledTechStackItem>умение гуглить и самостоятельно решать возникшие проблемы</StyledTechStackItem>
                            <StyledTechStackItem>креативность</StyledTechStackItem>
                            <StyledTechStackItem>быстрая обучаемость и усидчивость</StyledTechStackItem>
                            <StyledTechStackItem>Русский, English (B1)</StyledTechStackItem>
                        </StyledTechStackList>
                    </StyledTechStackWrapper>
                ) : lang === 'EN' ? (
                    <StyledTechStackWrapper>
                        <h5>Tech Stack:</h5>

                        <h6>Main:</h6>

                        <StyledTechStackList>
                            <StyledTechStackItem>react, typescript, styled-components</StyledTechStackItem>
                        </StyledTechStackList>

                        <h6>Other technologies I used:</h6>

                        <StyledTechStackList>
                            <StyledTechStackItem>next</StyledTechStackItem>
                            <StyledTechStackItem>redux, react-hook-form, zod</StyledTechStackItem>
                            <StyledTechStackItem>axios, graphql</StyledTechStackItem>
                            <StyledTechStackItem>react-three, GSAP</StyledTechStackItem>
                            <StyledTechStackItem>scss/sass</StyledTechStackItem>
                            <StyledTechStackItem>git</StyledTechStackItem>
                        </StyledTechStackList>

                        <h6>Skills:</h6>

                        <StyledTechStackList>
                            <StyledTechStackItem>
                                experience in developing React applications using functional components
                            </StyledTechStackItem>
                            <StyledTechStackItem>adaptive/responsive layout (flex, grid)</StyledTechStackItem>
                            <StyledTechStackItem>use documentation, incl. in English</StyledTechStackItem>
                            <StyledTechStackItem>I know how to use Google and solve problems on my own</StyledTechStackItem>
                            <StyledTechStackItem>creativity</StyledTechStackItem>
                            <StyledTechStackItem>Русский, English (B1)</StyledTechStackItem>
                        </StyledTechStackList>
                    </StyledTechStackWrapper>
                ) : null}
            </StyledCVPage>
        </SwitchPageAnimationProvider>
    );
};

export default CVPage;
