import { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
  className?: string;
}

export const Button = ({ variant = 'primary', children, className = '' }: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-full font-medium transition-colors duration-200';
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-white text-black border border-gray-200 hover:bg-gray-50'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};