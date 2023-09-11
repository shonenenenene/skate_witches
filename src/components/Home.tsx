import styled from 'styled-components';
import HomeItem from './HomeItem';
import { pages } from '../constants';
import { useMemo, useState } from 'react';
import AnimePage from './AnimePage';

const StyledHome = styled.div`
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px 30px;
    justify-items: center;
    @media (max-width: 970px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 632px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
const Home = () => {
    const [page, setPage] = useState('');

    const pageComponent = useMemo(() => {
        switch (page) {
            case 'anime':
                return <AnimePage />;

            default:
                return <></>;
        }
    }, [page]);

    console.log(page, 'page');

    return (
        <StyledHome>
            {!Boolean(page)
                ? pages.map((e) => <HomeItem onClick={() => setPage(e.path || '')} key={e.id} text={e.name} image={e.icon} />)
                : pageComponent}
        </StyledHome>
    );
};

export default Home;
