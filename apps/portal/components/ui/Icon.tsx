import React from 'react';
import { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface IconProps extends Omit<LucideProps, 'size'> {
  icon: React.ElementType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, size = 'md', className, strokeWidth = 1.5, ...props }, ref) => {
    return (
      <IconComponent
        ref={ref}
        size={sizeMap[size]}
        strokeWidth={strokeWidth}
        className={cn('shrink-0', className)}
        {...props}
      />
    );
  }
);
Icon.displayName = 'Icon';
