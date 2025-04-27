
import React from 'react';
import { cn } from '@/lib/utils';

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  className?: string;
  icon?: React.ReactNode;
}

const LinkCard = ({ href, title, description, className, icon }: LinkCardProps) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group relative flex items-center p-4 w-full rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-brand-purple/30 hover:scale-[1.01]',
        className
      )}
    >
      {icon && (
        <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-gray-50 group-hover:bg-brand-purple/10 group-hover:text-brand-purple transition-colors">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
      
      <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-brand-purple to-brand-blue opacity-0 rounded-l-lg group-hover:opacity-100 transition-opacity"></div>
    </a>
  );
};

export default LinkCard;
