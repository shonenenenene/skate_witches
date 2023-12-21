import styled from 'styled-components';

const Styled404 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 40px;
`;

export default function Custom404() {
    return <Styled404>404 - Page Not Found :(</Styled404>;
}
