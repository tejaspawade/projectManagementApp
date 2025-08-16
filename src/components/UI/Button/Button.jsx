import './Button.css'

function Button({
    children,
    onClick,
    className = '',
    type = 'button',
    variant = 'primary',
    ...props
}){
    const baseClass = `btn ${variant} ${className}`
    return (
        <button className={baseClass} type={type} onClick={onClick} {...props}>
            {children}
        </button>
    );
}

export default Button;