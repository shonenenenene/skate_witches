import styled from 'styled-components';

import avatar from '@/assets/photos/hh.jpg';

const StyledCVPage = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
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

const CVPage = () => {
    return (
        <StyledCVPage>
            <StyledAboutMeWrapper>
                <StyledCVPhoto>
                    <img draggable={false} src={avatar.src} />
                </StyledCVPhoto>
                <h2>Daniil Sytaev</h2>
                <h3>React Developer</h3>
                <h4>
                    Work experience: 3 months <span>(hotels.ru internship)</span>
                </h4>
                <p>
                    Quickly mastered HTML, CSS/SASS, JavaScript. Currently I use it in my projects and deepen my knowledge in the React,
                    TypeScript, Next, Redux, Styled-Components stack.
                </p>
                <p>
                    I try to improve my use of current technologies and learn new ones. I have internship experience at an IT product
                    company.
                </p>
                <p>Looking for a company where I can realize my potential as a Frontend developer. Ready for long-term cooperation.</p>
                <h4>Links:</h4>
                <a href='https://github.com/shonenenenene' target='_blank'>
                    github
                </a>
                <a href='https://t.me/shonethegrappler' target='_blank'>
                    tg: @shonethegrappler
                </a>
                <a href='mailto:danya.sytaev@gmail.com' target='_blank'>
                    mail: danya.sytaev@gmail.com
                </a>
            </StyledAboutMeWrapper>

            <StyledTechStackWrapper>
                <h5>Tech Stack:</h5>

                <h6>Main:</h6>

                <StyledTechStackList>
                    <StyledTechStackItem>react, typescript, styled-components</StyledTechStackItem>
                </StyledTechStackList>

                <h6>Other technologies I used:</h6>

                <StyledTechStackList>
                    <StyledTechStackItem>next</StyledTechStackItem>
                    <StyledTechStackItem>redux, valtio</StyledTechStackItem>
                    <StyledTechStackItem>react-three</StyledTechStackItem>
                    <StyledTechStackItem>scss/sass</StyledTechStackItem>
                    <StyledTechStackItem>git</StyledTechStackItem>
                </StyledTechStackList>

                <h6>Skills:</h6>

                <StyledTechStackList>
                    <StyledTechStackItem>experience in developing React applications using functional components</StyledTechStackItem>
                    <StyledTechStackItem>adaptive/responsive layout (flex, grid)</StyledTechStackItem>
                    <StyledTechStackItem>use documentation, incl. in English</StyledTechStackItem>
                    <StyledTechStackItem>I know how to use Google :) and solve problems on my own</StyledTechStackItem>
                    <StyledTechStackItem>quick learner and perseverance</StyledTechStackItem>
                    <StyledTechStackItem>Русский, English (B1)</StyledTechStackItem>
                </StyledTechStackList>
            </StyledTechStackWrapper>
        </StyledCVPage>
    );
};

export default CVPage;
