import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLElement>;
  [key: string]: unknown;
}

/**
 * Reusable animated button component
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-accent-500 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5',
    secondary:
      'glass glass-hover text-white hover:-translate-y-0.5',
    outline:
      'border border-primary-500/50 text-primary-300 hover:bg-primary-500/10 hover:border-primary-400 hover:-translate-y-0.5',
    ghost:
      'text-gray-400 hover:text-white hover:bg-white/5',
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
