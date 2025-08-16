import './Input.css';

const Input = ({
    type = 'text',
    placeholder = '',
    value = '',
    onChange,
    className = '',
    variant= 'primary',
    ...props
})=>{
    const baseClass = `input ${variant} ${className}`;
    
    return(
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={baseClass}
            {...props}
        />
    );
}

export default Input;