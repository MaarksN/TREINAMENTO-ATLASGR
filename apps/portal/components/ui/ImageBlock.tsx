import React from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

// REGRAS DE NEGÓCIO DA PLATAFORMA (ATLASGR):
// 1. Imagens genéricas são estritamente proibidas.
// 2. O foco de todas as imagens deve ser o contexto da operação logística,
//    trazendo elementos reais ou representações fiéis do nosso "centro de comando".
// 3. Este componente assegura que tenhamos um nível adequado de contraste
//    para manter o visual "Premium Enterprise".

export interface ImageBlockProps extends ImageProps {
  className?: string;
}

export const ImageBlock = React.forwardRef<HTMLImageElement, ImageBlockProps>(
  ({ className, alt, placeholder = 'blur', blurDataURL, ...props }, ref) => {
    // Quando usamos blur em local/estático, o Next resolve automaticamente se for um import.
    // Mas se for uma URL externa ou se não provermos um blurDataURL, vamos cair num fallback se necessário,
    // ou remover o placeholder se blurDataURL não estiver presente (para evitar erro do next/image sem dados estáticos).

    // Simplificando o placeholder default para quando não passamos blurDataURL:
    const finalPlaceholder = blurDataURL ? placeholder : 'empty';

    return (
      <div className={cn('relative overflow-hidden rounded-md', className)}>
        <Image
          ref={ref}
          alt={alt}
          placeholder={finalPlaceholder}
          blurDataURL={blurDataURL}
          className={cn(
            'object-cover transition-all duration-300',
            // Reforça o contraste e saturação para um visual mais denso/premium
            'contrast-125 saturate-105'
          )}
          {...props}
        />
      </div>
    );
  }
);

ImageBlock.displayName = 'ImageBlock';
