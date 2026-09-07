import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  withText = false,
  variant = 'dark',
}) => {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        className={`${sizeMap[size]} rounded-full overflow-hidden shadow-md ring-2 ring-amber-400/60 bg-emerald-950 flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-105`}
      >
        <img
          src="./logo.jpg"
          alt="Arab Mexico Guide Logo"
          className="w-full h-full object-cover object-center"
          loading="eager"
          onError={(e) => {
            // Fallback to stylized emblem if image loading fails
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>

      {withText && (
        <div className="flex flex-col text-left">
          <span className="text-lg sm:text-xl font-bold tracking-tight leading-tight">
            {variant === 'dark' ? (
              <>
                <span className="text-amber-300">Arab Mexico </span>
                <span className="text-emerald-400">Guide</span>
              </>
            ) : (
              <>
                <span className="text-emerald-900">Arab Mexico </span>
                <span className="text-amber-600">Guide</span>
              </>
            )}
          </span>
          <span
            className={`text-[11px] font-semibold tracking-wide ${
              variant === 'dark' ? 'text-emerald-300' : 'text-emerald-700'
            }`}
          >
            Your Arabic Travel Companion in Mexico
          </span>
        </div>
      )}
    </div>
  );
};
