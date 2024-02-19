import { useState, FC, useEffect } from 'react';
import Image from 'next/image';
import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';
import {
    StyledPicList,
    StyledPicPaginator,
    StyledPicsContainer,
    StyledPicsForm,
    StyledPicsHandler,
    StyledPicsPage,
    StyledPicsPaginatorHandler,
} from './PicsPage.styles';

interface unsplashAPI {
    alt_description: string;
    id: string;
    urls: {
        thumb: string;
        regular: string;
    };
}

const PicsPage: FC = () => {
    const UNSPLASH_KEY = process.env.NEXT_PUBLIC_UNSPLASH_KEY;

    const [pictureIndex, setPictureIndex] = useState<number | null>(null);

    const [picSearch, setPicSearch] = useState<string>('gothic architecture');
    const [res, setRes] = useState<unsplashAPI[]>([]);
    const [currPage, setCurrPage] = useState(1);

    const fetchRequest = async () => {
        const data = await fetch(
            `https://api.unsplash.com/search/photos?page=${currPage}&per_page=30&query=${picSearch}&client_id=${UNSPLASH_KEY}`
        );
        const dataJ = await data.json();
        const result = dataJ.results;
        console.log(result);
        setRes(result);
    };

    useEffect(() => {
        fetchRequest();
    }, []);

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchRequest();
    };

    const paginanionHandler = (action: string) => {
        switch (action) {
            case 'incr':
                setCurrPage(currPage + 1);
                console.log(currPage);
                fetchRequest();
                break;
            case 'decr':
                console.log(currPage, 'decr');
                setCurrPage(currPage === 1 ? currPage : currPage - 1);
                fetchRequest();
                break;
            default:
                fetchRequest();
        }
    };

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
                {pictureIndex !== null ? (
                    picsComponent(pictureIndex)
                ) : (
                    <StyledPicsForm onSubmit={(e) => submitForm(e)}>
                        <input
                            placeholder='what pics do we want to see?'
                            type='text'
                            value={picSearch}
                            onChange={(e) => setPicSearch(e.target.value)}
                        />
                        <button type='submit'>🔍</button>
                    </StyledPicsForm>
                )}
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
                    {pictureIndex === null ? (
                        <StyledPicPaginator>
                            <StyledPicsPaginatorHandler onClick={() => paginanionHandler('decr')}>❮</StyledPicsPaginatorHandler>
                            <StyledPicsPaginatorHandler onClick={() => paginanionHandler('incr')}>❯</StyledPicsPaginatorHandler>
                        </StyledPicPaginator>
                    ) : null}
                </StyledPicList>
            </StyledPicsPage>
        </SwitchPageAnimationProvider>
    );
};

export default PicsPage;
