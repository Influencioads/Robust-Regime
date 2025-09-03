import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-medium rounded-md transition-all duration-200 flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-[#fe6302] hover:bg-[#fe6302] text-white shadow-sm',
    secondary: 'bg-gray-800 hover:bg-gray-900 text-white shadow-sm',
    outline: 'border-2 border-[#fe6302] text-[#fe6302] hover:bg-[#fe6302]', // Assuming red-50 was a light shade of red
    ghost: 'text-[#fe6302] hover:bg-[#fe6302]', // Assuming red-50 was a light shade of red
  };
  
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;