import { useState } from 'react';
import styled from 'styled-components';

const StyledContactsModal = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    width: 80%;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -0);
    border-radius: 8px 8px 0 0;
    box-shadow: 0px -23px 25px 0px #ff00ff39 inset, 0px -36px 30px 0px #ff00ff32 inset, 0px -79px 40px 0px #ff00ff61 inset;
`;

const StyledModalButton = styled.button`
    position: absolute;
    right: 40px;
    top: -20px;
    width: 80px;
    height: 20px;
    border-radius: 8px 8px 0 0;
    transition: 0.2s;
    color: #fff;
    font-size: 14px;
    z-index: 1;
    background: linear-gradient(to top left, #0400ffab, #ff00ff9d);
    border: 1px solid #ff00ff5c;
    animation: eye-catch 7s infinite ease-in-out 3s;

    &:hover {
        background-color: #ff00ffc5;
        height: 24px;
        top: -24px;
        animation: none;
    }

    @keyframes eye-catch {
        0% {
            height: 20px;
            top: -20px;
        }
        5% {
            height: 23px;
            top: -23px;
        }
        10% {
            height: 20px;
            top: -20px;
        }
        100% {
            height: 20px;
            top: -20px;
        }
    }
`;

const StyledContactsForm = styled.div`
    padding: 10px;
    width: 100%;
    word-wrap: break-word;
    animation: modal-appearance 0.2s ease-in-out both;
    @keyframes modal-appearance {
        0% {
            transform: scale(1, 0);
        }
        100% {
            transform: scale(1, 1);
        }
    }
`;

export const ContactsModal = () => {
    const [openedModal, setOpenedModal] = useState(false);
    return (
        <StyledContactsModal>
            <StyledModalButton onClick={() => setOpenedModal(!openedModal)}>contacts</StyledModalButton>
            {openedModal ? (
                <StyledContactsForm>
                    напишимненапишимненапишимненапишимненапинапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненнапишимненапишимненпшимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимненапишимне
                </StyledContactsForm>
            ) : null}
        </StyledContactsModal>
    );
};
