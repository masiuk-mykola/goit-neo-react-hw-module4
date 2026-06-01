import type { UnsplashImage } from '../../types/image';

import styles from './ImageCard.module.css'

interface ImageCardProps {
  image: UnsplashImage;
  onSelect: (image: UnsplashImage) => void;
}

export default function ImageCard({ image, onSelect }: ImageCardProps) {
  return (
    <div onClick={() => onSelect(image)} className={styles.container}>
      <img
        className={styles.image}
        src={image.urls.small}
        alt={image.alt_description ?? ''}
        title={image.alt_description ?? ''}
      />
    </div>
  );
}
