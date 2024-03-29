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
        filter: saturate(500%) contrast(800%) brightness(600%) invert(80%) sepia(50%) hue-rotate(120deg);
    }
    p {
        text-align: center;
    }
    &:hover {
        background-color: #fff;
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

export const HomeItem: FC<HomeItemProps> = ({ image, text, onClick }) => {
    return (
        <StyledHomeItem onClick={onClick}>
            <img src={image} draggable='false' />
            <p>{text}</p>
        </StyledHomeItem>
    );
};
