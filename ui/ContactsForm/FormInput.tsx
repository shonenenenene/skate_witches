import styled from 'styled-components';

interface FormInputProps {
    label: string;
    inputType?: string;
    id: string;
    name: string;
    value: string;
    onChange: any;
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
        width: 50%;
        padding: 4px 30px;
        border-radius: 4px;
        border: 1px solid black;
    }
    textarea {
        width: 50%;
        height: 200px;
        max-width: 70%;
        max-height: 440px;
        background-color: #00007cdf;
        border-radius: 4px;
        border: 1px solid black;
        padding: 8px;
    }
`;

const FormInput = ({ label, inputType, id, name, value, onChange }: FormInputProps) => {
    return (
        <StyledInput>
            <label htmlFor={name}>{label}</label>
            {inputType === 'textarea' ? (
                <textarea id={id} name={name} value={value} onChange={onChange} />
            ) : (
                <input type={inputType} id={id} name={name} value={value} onChange={onChange} />
            )}
        </StyledInput>
    );
};
export default FormInput;
