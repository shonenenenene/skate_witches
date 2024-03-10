import { StyledInput } from './Contacts.styles';

interface FormInputProps {
    label: string;
    inputType?: string;
    id: string;
    name: string;
    value: string;
    onChange: any;
    placeholder?: string;
}

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
