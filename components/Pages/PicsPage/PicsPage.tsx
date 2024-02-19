import { useState, FC } from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';
import { pics } from '@/utils/constants';
import { SwitchPageAnimationProvider } from '@/ui/SwitchPageAnimation';
import { StyledPicList, StyledPicsContainer, StyledPicsHandler, StyledPicsPage } from './PicsPage.styles';

// interface unsplashAPI {
//     alt_description: string;
//     id: string;
//     urls: {
//         thumb: string;
//         regular: string;
//     };
// }
const StyledPic = styled(Image)`
    object-fit: contain;
    height: 660px;
    width: auto;
    cursor: pointer;
`;

const PicsPage: FC = () => {
    const [pictureId, setPictureId] = useState<number | null>(null);

    const picsComponent = (id: number) => {
        const chosen = pics.find((e) => e.id === id);

        if (!chosen) {
            return <></>;
        }
        return (
            <StyledPicsContainer>
                <StyledPicsHandler onClick={() => setPictureId((state) => (state !== null && state > 1 ? state - 1 : null))}>
                    ❮
                </StyledPicsHandler>
                <div>
                    <StyledPic alt={chosen?.name || ''} onClick={() => setPictureId(null)} {...chosen.pic} draggable={false} />
                </div>
                <StyledPicsHandler onClick={() => setPictureId((state) => (state !== null && state < pics.length ? state + 1 : null))}>
                    ❯
                </StyledPicsHandler>
            </StyledPicsContainer>
        );
    };

    return (
        <SwitchPageAnimationProvider>
            <StyledPicsPage>
                {pictureId !== null ? picsComponent(pictureId) : null}
                <StyledPicList isselected={pictureId}>
                    {pics.map((e) => (
                        <Image
                            key={e.id}
                            src={e.pic.src}
                            alt={e.name}
                            onClick={() => setPictureId(e.id)}
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
