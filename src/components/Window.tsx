import styled from 'styled-components';
import NavBar from './NavBar';
import Home from './Home';
import { useMemo, useState } from 'react';
import AnimePage from './HomeContent/AnimePage';
import PicsPage from './HomeContent/PicsPage';

const StyledWindow = styled.div`
    background-color: rgb(0, 0, 233);
    max-width: 960px;
    min-width: 960px;
    min-height: 620px;
    border: 2px solid whitesmoke;
    border-radius: 8px;
    @media (max-width: 970px) {
        max-width: 100%;
        min-width: 100%;
        min-height: 100%;
    }
`;
const Window = () => {
    const [page, setPage] = useState('');

    const pageComponent = useMemo(() => {
        switch (page) {
            case 'anime':
                return <AnimePage />;

            case 'pics':
                return <PicsPage />;

            default:
                return <></>;
        }
    }, [page]);

    return (
        <StyledWindow>
            <NavBar />
            <main>{!Boolean(page) ? <Home setPage={setPage} /> : pageComponent}</main>
        </StyledWindow>
    );
};

export default Window;
