import { useRef, useState } from 'react';
import FormInput from './FormInput';
import styled from 'styled-components';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import bonfire from '@/assets/bonfire.gif';

const StyledContactsForm = styled.div`
    padding: 10px;
    width: 100%;
    min-height: 360px;
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

const StyledSentMessage = styled.h3`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    font-size: 20px;
`;

const ContactsForm = () => {
    const [formData, setFormData] = useState({
        company: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // const captchaRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (captchaRef.current !== null) {
        //     const token = captchaRef.current.getValue();
        //     captchaRef.current.reset();
        // }

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
                    <button type='submit'>send</button>
                    {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef} /> */}
                </form>
            )}
        </StyledContactsForm>
    );
};

export default ContactsForm;
