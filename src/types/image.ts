export interface ImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface ImageUser {
  name: string;
  username: string;
}

export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  description: string | null;
  color: string | null;
  width: number;
  height: number;
  likes: number;
  urls: ImageUrls;
  user: ImageUser;
}

export interface UnsplashSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}
