import { css, styled } from 'styled-components';
import { pics } from '@/utils/constants';
import { useState, FC } from 'react';
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

const StyledPic = styled(Image)`
    object-fit: contain;
    height: 660px;
    width: auto;
    cursor: pointer;
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
                        <Image key={e.id} src={e.pic.src} alt={e.name} onClick={() => setPictureId(e.id)} width={300} height={300} />
                    ))}
                </StyledPicList>
            </StyledPicsPage>
        </SwitchPageAnimationProvider>
    );
};

export default PicsPage;
