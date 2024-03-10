import { styled } from 'styled-components';

export const StyledContactsForm = styled.div`
    padding: 10px;
    width: 100%;
    min-height: 360px;
    word-wrap: break-word;
    animation: modal-appearance 0.2s ease-in-out both;
    form {
        display: flex;
        flex-direction: column;
    }

    @keyframes modal-appearance {
        0% {
            transform: scale(1, 0);
        }
        100% {
            transform: scale(1, 1);
        }
    }
`;

export const StyledSentMessage = styled.h3`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    font-size: 20px;
`;

export const StyledSendContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    flex-wrap: wrap;

    button {
        padding: 10px;
        align-self: center;
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background-color: #00007cdf;
        transition: 0.2s;
        background: linear-gradient(to left, #0400ffb0, #00007cda);
        &:hover {
            background-color: #fff;
        }
        &:disabled {
            background: linear-gradient(to left, #ff0000af, #000);
            cursor: not-allowed;
        }
    }
`;

export const StyledContactsModal = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 92%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -0);
    border-radius: 8px 8px 0 0;
    background-color: #575af7c8;
    box-shadow: 0px -23px 25px 0px #ff00ff39 inset, 0px -36px 30px 0px #ff00ff32 inset, 0px -79px 40px 0px #ff00ff61 inset;
    min-width: 260px;
`;

export const StyledModalButton = styled.button`
    position: absolute;
    right: 10px;
    top: -20px;
    width: 44px;
    height: 20px;
    border-radius: 8px 8px 0 0;
    transition: 0.2s;
    color: #fff;
    font-size: 0.78em;
    z-index: 1;
    background: linear-gradient(to top left, #0400ffab, #ff00ff9d);
    border: 1px solid #ff00ff5c;
    animation: eye-catch 7s infinite ease-in-out 3s;

    &:hover {
        background-color: #ff00ffc5;
        height: 25px;
        top: -25px;
        animation: none;
    }

    @keyframes eye-catch {
        0% {
            height: 20px;
            top: -20px;
            background: linear-gradient(to top left, #0400ffab, #ff00ff9d);
        }
        5% {
            height: 23px;
            top: -23px;
            background-color: #ff00ffc5;
        }
        10% {
            height: 20px;
            top: -20px;
            background: linear-gradient(to top left, #0400ffab, #ff00ff9d);
        }
        100% {
            height: 20px;
            top: -20px;
            background: linear-gradient(to top left, #0400ffab, #ff00ff9d);
        }
    }
`;

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
        margin: 4px;
    }
    input {
        background-color: #00007cdf;
        height: 36px;
        min-width: 200px;
        width: 70%;
        padding: 4px 10px;
        border-radius: 4px;
        border: 1px solid black;
    }
    textarea {
        width: 70%;
        height: 200px;
        max-width: 80%;
        min-width: 200px;
        max-height: 440px;
        min-height: 80px;
        background-color: #00007cdf;
        border-radius: 4px;
        border: 1px solid black;
        padding: 8px;
    }
`;
