import styled from 'styled-components';

interface FormInputProps {
    label: string;
    inputType?: string;
    id: string;
    name: string;
    value: string;
    onChange: any;
    placeholder?: string;
}

const StyledInput = styled.div`
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

const FormInput = ({ label, inputType, id, name, value, placeholder, onChange }: FormInputProps) => {
    return (
        <StyledInput>
            <label htmlFor={name}>{label}</label>
            {inputType === 'textarea' ? (
                <textarea id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} required />
            ) : (
                <input type={inputType} id={id} name={name} value={value} placeholder={placeholder} onChange={onChange} required />
            )}
        </StyledInput>
    );
};
export default FormInput;
