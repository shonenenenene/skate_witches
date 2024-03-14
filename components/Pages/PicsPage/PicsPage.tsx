import { useState, FC, useEffect } from 'react';

import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';
import { StyledPicPaginator, StyledPicsForm, StyledPicsPage, StyledPicsPaginatorButton } from './PicsPage.styles';
import { useHandlePictureIndex } from './useHandlePictureIndex';
import { PhotoItem } from './types';
import { Status } from '@/utils/types';
import { PicComponent } from './PicComponent/PicComponent';
import { ThumbnailsList } from './ThumbnailsList/ThumbnailsList';
const PicsPage: FC = () => {
    const UNSPLASH_KEY = process.env.NEXT_PUBLIC_UNSPLASH_KEY;

    const [pictureIndex, setPictureIndex] = useState<number | null>(null);

    const [picSearch, setPicSearch] = useState<string>('gothic architecture');

    const [status, setStatus] = useState<Status>('idle');

    const [res, setRes] = useState<PhotoItem[]>([]);

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
            const dataStatus = totalPg === 0 ? 'no-data' : 'success';
            if (result === undefined) {
                setStatus('error');
            } else {
                setRes(result);
                setStatus(dataStatus);
                setTotalPages(totalPg);
            }
        } catch {
            setStatus('error');
        }
    };
    useEffect(() => {
        fetchRequest();
    }, [currPage]);

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCurrPage(1);
        if (!!picSearch) {
            fetchRequest();
        }
    };

    const handlePictureIndex = useHandlePictureIndex({ resLength: res.length, setPictureIndex });

    const isPagination = pictureIndex === null && status === 'success' && totalPages > 1;

    return (
        <SwitchPageAnimationProvider>
            <StyledPicsPage>
                {pictureIndex === null ? (
                    <StyledPicsForm onSubmit={(e) => submitForm(e)}>
                        <input
                            placeholder='what pics do we want to see?'
                            type='text'
                            value={picSearch}
                            onChange={(e) => setPicSearch(e.target.value)}
                        />
                        <button type='submit'>🔍</button>
                    </StyledPicsForm>
                ) : (
                    <PicComponent handlePictureIndex={handlePictureIndex} chosen={res[pictureIndex]} />
                )}

                <ThumbnailsList status={status} res={res} pictureIndex={pictureIndex} setPictureIndex={setPictureIndex} />

                {isPagination && (
                    <StyledPicPaginator>
                        <StyledPicsPaginatorButton onClick={() => setCurrPage(currPage - 1)} disabled={currPage <= 1}>
                            ❮
                        </StyledPicsPaginatorButton>

                        <span>{currPage}</span>

                        <StyledPicsPaginatorButton onClick={() => setCurrPage(currPage + 1)} disabled={currPage > totalPages}>
                            ❯
                        </StyledPicsPaginatorButton>
                    </StyledPicPaginator>
                )}
            </StyledPicsPage>
        </SwitchPageAnimationProvider>
    );
};
export default PicsPage;
