import { css, styled } from 'styled-components';
import { pics } from '../../constants';
import { useState, FC } from 'react';

const StyledPicsPage = styled.div<{ isSelected: boolean }>`
    height: 100%;
    width: 100%;
    padding: 30px;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px 30px;
    img {
        cursor: pointer;
    }

    ${({ isSelected }) =>
        isSelected
            ? css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
              `
            : css`
                  display: grid;
              `};

    @media (max-width: 970px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 632px) {
        grid-template-columns: repeat(2, 1fr);
    }
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
    max-width: 100px;
    min-width: 30px;
    height: 100%;
    font-size: 30px;
    flex-grow: 1;
    &:hover {
        background-color: #ffffff4c;
        transition: 0.3s;
    }
`;

const StyledPic = styled.img`
    object-fit: contain;
    height: 580px;
`;

const PicsPage: FC = () => {
    const [pictureId, setPictureId] = useState<number | null>(null);

    const picsComponent = (id: number) => {
        const chosen = pics.find((e) => e.id === id);
        return (
            <StyledPicsContainer>
                <StyledPicsHandler onClick={() => setPictureId((state) => (state !== null && state > 1 ? state - 1 : null))}>
                    ❮
                </StyledPicsHandler>
                <StyledPic src={chosen?.pic} alt={chosen?.name} onClick={() => setPictureId(null)} />
                <StyledPicsHandler onClick={() => setPictureId((state) => (state !== null && state < pics.length ? state + 1 : null))}>
                    ❯
                </StyledPicsHandler>
            </StyledPicsContainer>
        );
    };

    return (
        <StyledPicsPage isSelected={pictureId !== null}>
            {pictureId !== null
                ? picsComponent(pictureId)
                : pics.map((e) => <img key={e.id} src={e.pic} alt={e.name} onClick={() => setPictureId(e.id)} />)}
        </StyledPicsPage>
    );
};

export default PicsPage;
