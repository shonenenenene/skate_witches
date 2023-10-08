import { FC } from 'react';
import styled from 'styled-components';

const StyledHomeItem = styled.div`
    width: 120px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    img {
        width: 80px;
        filter: saturate(500%) contrast(800%) brightness(500%) invert(80%) sepia(50%) hue-rotate(120deg);
    }
    &:hover {
        background-color: white;
        color: black;
        transition: 0.3s;
        img {
            filter: saturate(0) contrast(0) brightness(0) invert(0) sepia(0) hue-rotate(0);
        }
    }
`;
export interface HomeItemProps {
    id?: number;
    image: string;
    text: string;
    onClick?: () => void;
}

const HomeItem: FC<HomeItemProps> = ({ image, text, onClick }) => {
    return (
        <StyledHomeItem onClick={onClick}>
            <img src={image} />
            <p>{text}</p>
        </StyledHomeItem>
    );
};

export default HomeItem;
