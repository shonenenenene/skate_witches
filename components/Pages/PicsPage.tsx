import { css, styled } from 'styled-components';
import { useState, FC, useEffect } from 'react';
import Image from 'next/image';
import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';

const StyledPicsPage = styled.div`
    height: 100%;
    width: 100%;
`;

const StyledPicsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
`;
const StyledPicsHandler = styled.button`
    background-color: #ffffff1d;
    max-width: 120px;
    min-width: 60px;
    height: 100%;
    font-size: 30px;
    flex-grow: 1;
    &:hover {
        background-color: #ffffff4c;
        transition: 0.3s;
    }
`;

const StyledPicList = styled.div<{ isselected: number | null }>`
    height: 100%;
    width: 100%;
    padding: 30px;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px 30px;
    box-sizing: border-box;

    img {
        cursor: pointer;
        object-fit: scale-down;
        width: 180px;
        height: 180px;
    }

    ${({ isselected }) =>
        isselected !== null
            ? css`
                  display: none;
              `
            : css`
                  display: grid;
              `}

    @media (max-width: 970px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 632px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const PicsPage: FC = () => {
    const UNSPLASH_KEY = process.env.NEXT_PUBLIC_UNSPLASH_KEY;

    const [pictureIndex, setPictureIndex] = useState<number | null>(null);

    const [res, setRes] = useState([]);

    const fetchRequest = async () => {
        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=1&per_page=30&query=gothic architecture&client_id=${UNSPLASH_KEY}`
        );
        const dataJ = await data.json();
        const result = dataJ.results;
        console.log(result);
        setRes(result);
    };
    useEffect(() => {
        fetchRequest();
    }, []);

    const picsComponent = (index: number) => {
        const chosen = res[index];

        if (!chosen) {
            return <></>;
        }
        return (
            <StyledPicsContainer>
                <StyledPicsHandler onClick={() => setPictureIndex((state) => (state !== null && state > 1 ? state - 1 : null))}>
                    ❮
                </StyledPicsHandler>
                <div>
                    <Image
                        src={chosen?.urls.regular}
                        alt={chosen?.alt_description || ''}
                        onClick={() => setPictureIndex(null)}
                        style={{ objectFit: 'contain', cursor: 'pointer', height: '690px', width: 'auto' }}
                        width={690}
                        height={690}
                        draggable={false}
                        loading='lazy'
                    />
                </div>
                <StyledPicsHandler
                    onClick={() => setPictureIndex((state) => (state !== null && state < res.length - 1 ? state + 1 : null))}
                >
                    ❯
                </StyledPicsHandler>
            </StyledPicsContainer>
        );
    };

    return (
        <SwitchPageAnimationProvider>
            <StyledPicsPage>
                {pictureIndex !== null ? picsComponent(pictureIndex) : null}
                <StyledPicList isselected={pictureIndex}>
                    {res.map((e, i) => (
                        <Image
                            key={e.id}
                            src={e.urls.thumb}
                            alt={e.alt_description}
                            onClick={() => setPictureIndex(i)}
                            width={150}
                            height={120}
                            quality={20}
                        />
                    ))}
                </StyledPicList>
            </StyledPicsPage>
        </SwitchPageAnimationProvider>
    );
};

export default PicsPage;
