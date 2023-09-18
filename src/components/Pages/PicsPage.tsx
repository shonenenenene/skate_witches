import { css, styled } from 'styled-components';
import { pics } from '../../constants';
import { useState, FC } from 'react';

const StyledPicsPage = styled.div<{ isSelected: boolean }>`
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

const PicsPage: FC = () => {
    const [pictureId, setPictureId] = useState<number | null>(null);

    const picsComponent = (id: number) => {
        const chosen = pics.find((e) => e.id === id);
        return <img src={chosen?.pic} alt={chosen?.name} onClick={() => setPictureId(null)} />;
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
