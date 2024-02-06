import { FormEvent, useState } from 'react';
import FormInput from './FormInput';
import styled from 'styled-components';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import bonfire from '@/assets/bonfire.gif';

const CAPTCHA_KEY = process.env.NEXT_PUBLIC_SITE_KEY;

const StyledContactsForm = styled.div`
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

const StyledSentMessage = styled.h3`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    font-size: 20px;
`;

const StyledSendContainer = styled.div`
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

const ContactsForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const [captcha, setCaptcha] = useState<null | string>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        fetch('https://formcarry.com/s/Ki1A3ktimDE', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ email: formData.email, message: formData.message }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.code === 200) {
                    setSubmitted(true);
                } else {
                    setError(true);
                }
            });
    };

    return (
        <StyledContactsForm>
            {submitted ? (
                <StyledSentMessage>
                    thank you! i will answer you as soon as possible ⋆
                    <Image src={bonfire.src} alt='bonfire' width={200} height={200} />
                </StyledSentMessage>
            ) : error ? (
                <StyledSentMessage>
                    oh no... something went wrong <br />
                    <br />
                    write to me at
                    <br />
                    danya.sytaev@gmail.com
                    <Image src={bonfire.src} alt='bonfire' width={200} height={200} />
                </StyledSentMessage>
            ) : (
                <form onSubmit={handleSubmit}>
                    <FormInput
                        inputType='email'
                        label='your email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='
                    enter your email'
                    />
                    <FormInput
                        inputType='textarea'
                        label='message'
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='
                    place for your suggestions :)
                    '
                    />
                    <StyledSendContainer>
                        <ReCAPTCHA
                            sitekey={CAPTCHA_KEY!}
                            onChange={setCaptcha}
                            theme='dark'
                            size='normal'
                            style={{ transform: 'scale(0.8)', width: '300px' }}
                        />
                        <button type='submit' disabled={!captcha}>
                            →
                        </button>
                    </StyledSendContainer>
                </form>
            )}
        </StyledContactsForm>
    );
};

export default ContactsForm;
