import { useState, FC, useEffect } from 'react';
import Image from 'next/image';
import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';
import {
    StyledPicList,
    StyledPicPaginator,
    StyledPicsContainer,
    StyledPicsForm,
    StyledPicsHandler,
    StyledPicsMessage,
    StyledPicsPage,
    StyledPicsPaginatorHandler,
} from './PicsPage.styles';
import { StyledLoader } from '@/ui/Loader';

interface unsplashAPI {
    alt_description: string;
    id: string;
    urls: {
        thumb: string;
        regular: string;
    };
}
const PicsPage: FC = ({}) => {
    const UNSPLASH_KEY = process.env.NEXT_PUBLIC_UNSPLASH_KEY;

    const [pictureIndex, setPictureIndex] = useState<number | null>(null);

    const [picSearch, setPicSearch] = useState<string>('gothic architecture');

    const [status, setStatus] = useState('idle');

    const [res, setRes] = useState<unsplashAPI[]>([]);

    const [currPage, setCurrPage] = useState(1);

    const [totalPages, setTotalPages] = useState(0);

    const fetchRequest = async () => {
        setStatus('loading');
        try {
            const data = await fetch(
                `https://api.unsplash.com/search/photos?page=${currPage}&per_page=10&query=${picSearch}&client_id=${UNSPLASH_KEY}`
            );
            const dataJ = await data.json();
            const result = dataJ.results;
            const totalPg = dataJ.total_pages;
            setRes(result);
            setStatus('success');
            setTotalPages(totalPg);
        } catch {
            setStatus('error');
        }
    };
    useEffect(() => {
        fetchRequest();
        // mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currPage]);

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCurrPage(1);
        if (!!picSearch) {
            fetchRequest();
        }
    };

    // const paginanionHandler = (action: string) => {
    //     switch (action) {
    //         case 'incr':
    //             setCurrPage(currPage + 1);
    //             console.log(currPage, 'incr');
    //             fetchRequest();
    //             break;
    //         case 'decr':
    //             setCurrPage(currPage === 1 ? currPage : currPage - 1);
    //             console.log(currPage, 'decr');
    //             fetchRequest();
    //             break;
    //         default:
    //             fetchRequest();
    //     }
    // };

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
                {status === 'loading' ? (
                    <StyledLoader />
                ) : totalPages === 0 ? (
                    <StyledPicsMessage>oh no, nothing found (╥﹏╥) </StyledPicsMessage>
                ) : status === 'error' ? (
                    <StyledPicsMessage>
                        oh no, server is missing (＿ ＿*) Z z z
                        <span>(skate_witches are limited to 50 requests per hour and the witches will certainly fix it)</span>
                    </StyledPicsMessage>
                ) : (
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
                )}
                {pictureIndex === null
                    ? status === 'success' &&
                      totalPages > 1 && (
                          <StyledPicPaginator>
                              <StyledPicsPaginatorHandler onClick={() => setCurrPage(currPage - 1)} disabled={currPage <= 1}>
                                  ❮
                              </StyledPicsPaginatorHandler>

                              <span>{currPage}</span>

                              <StyledPicsPaginatorHandler onClick={() => setCurrPage(currPage + 1)} disabled={currPage > totalPages}>
                                  ❯
                              </StyledPicsPaginatorHandler>
                          </StyledPicPaginator>
                      )
                    : null}
            </StyledPicsPage>
        </SwitchPageAnimationProvider>
    );
};
export default PicsPage;
