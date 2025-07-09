import type React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false
}) => {
  return (
    <img
      src={src}
      alt={alt}
        className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      width={width}
      height={height}
    />
  );
};

export default OptimizedImage;
