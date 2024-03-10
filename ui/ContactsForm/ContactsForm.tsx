import { FormEvent, useState } from 'react';
import FormInput from './FormInput';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';
import bonfire from '@/assets/bonfire.gif';
import { StyledContactsForm, StyledSendContainer, StyledSentMessage } from './Contacts.styles';

interface ContactsFormProps {
    submitted: boolean;
    setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactsForm = ({ submitted, setSubmitted }: ContactsFormProps) => {
    const CAPTCHA_KEY = process.env.NEXT_PUBLIC_SITE_KEY;

    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });

    const [error, setError] = useState(false);

    const [captcha, setCaptcha] = useState<null | string>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
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
