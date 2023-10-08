import { FC } from 'react';
import styled from 'styled-components';

const StyledCustomButton = styled.button`
    font-size: 20px;
    color: white;
`;

interface CustomButtonProps {
    text: string;
    onClick?: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({ text, onClick }) => {
    return <StyledCustomButton onClick={onClick}>{text}</StyledCustomButton>;
};

export default CustomButton;
