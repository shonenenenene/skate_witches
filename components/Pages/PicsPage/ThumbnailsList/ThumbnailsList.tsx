import { StyledPicList, StyledPicsMessage } from './ThumbnailsList.styles';
import { PhotoItem, Status } from '../types';
import Image from 'next/image';
import { StyledLoader } from '@/ui/Loader';

interface ThumbnailsListProps {
    status: Status;
    pictureIndex: number | null;
    setPictureIndex: (val: number) => void;
    res: PhotoItem[];
}

export const ThumbnailsList = ({ status, pictureIndex, setPictureIndex, res }: ThumbnailsListProps) => {
    switch (status) {
        case 'loading':
            return <StyledLoader />;
        case 'no-data':
            return <StyledPicsMessage>oh no, nothing found (╥﹏╥) </StyledPicsMessage>;
        case 'error':
            return (
                <StyledPicsMessage>
                    oh no, server is missing (＿ ＿*) Z z z
                    <span>(skate_witches are limited to 50 requests per hour and the witches will certainly fix it)</span>
                </StyledPicsMessage>
            );
        case 'success':
            return (
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
            );
    }
};
