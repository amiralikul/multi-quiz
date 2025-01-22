import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'success' | 'disabled';
    children: React.ReactNode;
}

const Button = ({ 
    variant = 'primary',
    disabled,
    className = '',
    children,
    ...props 
}: ButtonProps) => {
    const baseStyles = "px-6 py-3 rounded text-white transition-colors";
    
    const variantStyles = {
        primary: 'bg-blue-500 hover:bg-blue-600',
        success: 'bg-green-500 hover:bg-green-600',
        disabled: 'bg-gray-400 cursor-not-allowed'
    };

    const buttonStyle = `${baseStyles} ${disabled ? variantStyles.disabled : variantStyles[variant]} ${className}`;

    return (
        <button 
            className={buttonStyle}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button; 