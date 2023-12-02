import styled from 'styled-components';
import { HomeItem } from './HomeItem';
import { pages } from '@/utils/constants';
import { FC } from 'react';
import { useRouter } from 'next/router';

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

export const Home: FC = () => {
    const router = useRouter();

    return (
        <StyledHome>
            {pages.map((e) => (
                <HomeItem
                    onClick={() => {
                        router.push(e.path);
                    }}
                    key={e.id}
                    text={e.name}
                    image={e.icon.src}
                />
            ))}
        </StyledHome>
    );
};
