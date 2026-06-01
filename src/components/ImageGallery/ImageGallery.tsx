import { memo } from 'react'

import type { UnsplashImage } from '../../types/image';
import styles from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard";

interface ImageGalleryProps {
  images: UnsplashImage[];
  onSelect: (image: UnsplashImage) => void;
}

function ImageGallery({ images, onSelect }: ImageGalleryProps) {
  return (
    <ul className={styles.container}>
      {images.map((image) => (
        <li key={image.id}>
            <ImageCard image={image} onSelect={onSelect}/>
        </li>
      ))}
    </ul>
  );
}

export default memo(ImageGallery);
