import styled from 'styled-components';

const StyledCVPage = styled.div`
    h2 {
        font-size: 50px;
        margin: 10px;
    }
    h3 {
        font-size: 40px;
        margin: 10px;
    }
    h4 {
        margin: 10px;
        font-size: 24px;
    }
    h5 {
        margin: 10px;
        font-size: 20px;
    }
`;

const StyledStackWrapper = styled.div`
    display: flex;
`;

const StyledCVPhoto = styled.img`
    width: 300px;
    margin: 15px 15px;
`;

const StyledTechStackList = styled.ul`
    margin: 10px;
`;
const StyledTechStackItem = styled.li`
    margin: 5px;
`;

const CVPage = () => {
    return (
        <StyledCVPage>
            <StyledStackWrapper>
                <StyledCVPhoto draggable={false} src='/public/photos/hh.jpg' />
            </StyledStackWrapper>

            <h2>Даниил Сытаев</h2>
            <h3>React Developer</h3>
            <h4>Опыт работы: 3 месяца стажировки в IT компании</h4>
            <h5>Tech Stack:</h5>
            <StyledTechStackList>
                <StyledTechStackItem>⊗ JavaScript, HTML, CSS(SASS/LESS), React, Styled-Components, TypeScript, Git</StyledTechStackItem>
                <StyledTechStackItem>⊗ react-three</StyledTechStackItem>
                <StyledTechStackItem>⊗ Русский, English (B1)</StyledTechStackItem>
            </StyledTechStackList>
        </StyledCVPage>
    );
};

export default CVPage;
