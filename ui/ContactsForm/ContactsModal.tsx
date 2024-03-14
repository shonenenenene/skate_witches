import { useState } from 'react';
import ContactsForm from './ContactsForm';
import { StyledContactsModal, StyledModalButton } from './Contacts.styles';

interface ContactsModalProps {
    hideContactsform: boolean;
}

export const ContactsModal = ({ hideContactsform }: ContactsModalProps) => {
    const [openedModal, setOpenedModal] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    return (
        <StyledContactsModal style={{ display: hideContactsform ? 'none' : 'flex' }}>
            <StyledModalButton onClick={() => setOpenedModal(!openedModal)}>{openedModal ? 'x' : '✎'}</StyledModalButton>
            {openedModal ? <ContactsForm submitted={submitted} setSubmitted={setSubmitted} /> : null}
        </StyledContactsModal>
    );
};
