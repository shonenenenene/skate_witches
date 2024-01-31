import { useState } from 'react';
import FormInput from './FormInput';
import styled from 'styled-components';

const StyledContactsForm = styled.div`
    padding: 10px;
    width: 100%;
    word-wrap: break-word;
    animation: modal-appearance 0.2s ease-in-out both;
    form {
        display: flex;
        flex-direction: column;

        button {
            margin-top: 10px;
            padding: 10px 30px;
            align-self: center;
            width: 140px;
            border-radius: 8px;
            background-color: #00007cdf;
            transition: 0.2s;
            background: linear-gradient(to top left, #0400ffb0, #00007cda);
            &:hover {
                background-color: #fff;
            }
        }
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

const ContactsForm = () => {
    const [formData, setFormData] = useState({
        company: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    console.log(formData.company);

    return (
        <StyledContactsForm>
            <form onSubmit={handleSubmit}>
                <FormInput
                    inputType='text'
                    label='company/name'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                />
                <FormInput inputType='email' label='your email' id='email' name='email' value={formData.email} onChange={handleChange} />
                <FormInput
                    inputType='textarea'
                    label='message'
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                />
                <button type='submit'>send</button>
            </form>
        </StyledContactsForm>
    );
};

export default ContactsForm;
