import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({
  children,
  className = '',
  hover = false,
  onClick,
  header,
  footer,
}: CardProps) {
  const hoverClass = hover ? 'hover:shadow-lg hover:scale-105 cursor-pointer' : '';
  const transitionClass = hover ? 'transition-all duration-200' : '';

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm ${transitionClass} ${hoverClass} ${className}`}
    >
      {header && <div className="border-b border-gray-100 px-6 py-4">{header}</div>}
      <div className="px-6 py-4">{children}</div>
      {footer && <div className="border-t border-gray-100 px-6 py-4">{footer}</div>}
    </div>
  );
}
