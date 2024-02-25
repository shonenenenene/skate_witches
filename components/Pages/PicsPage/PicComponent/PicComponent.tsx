import { StyledPicsContainer, StyledPicsButton, StyledImage } from './PicComponent.styles';
import { PhotoItem } from '../types';

import { StyledLoader } from '@/ui/Loader';
import { useEffect, useState } from 'react';

interface PicComponentProps {
    chosen?: PhotoItem;
    handlePictureIndex: (action?: 'decr' | 'incr') => void;
}

export const PicComponent = ({ chosen, handlePictureIndex }: PicComponentProps) => {
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        if (chosen) {
            setLoaded(false);
        }
    }, [chosen]);

    if (!chosen) {
        return null;
    }

    return (
        <StyledPicsContainer>
            <StyledPicsButton disabled={!isLoaded} onClick={() => handlePictureIndex('decr')}>
                ❮
            </StyledPicsButton>
            <div>
                {!isLoaded ? <StyledLoader style={{ position: 'absolute', top: 0, left: 0 }} /> : <></>}
                <StyledImage
                    src={chosen?.urls.regular}
                    alt={chosen?.alt_description || ''}
                    onClick={() => handlePictureIndex()}
                    style={{ objectFit: 'contain', cursor: 'pointer', height: '690px', width: 'auto' }}
                    width={690}
                    height={690}
                    draggable={false}
                    onLoadingComplete={() => setLoaded(true)}
                    priority
                    isLoaded={isLoaded}
                />
            </div>
            <StyledPicsButton disabled={!isLoaded} onClick={() => handlePictureIndex('incr')}>
                ❯
            </StyledPicsButton>
        </StyledPicsContainer>
    );
};
