import axios from 'axios';

import type { UnsplashSearchResponse } from '../types/image';

export const unsplashClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
    'Accept-Version': 'v1',
  },
});

export interface SearchImagesParams {
  query: string;
  page?: number;
  perPage?: number;
}

export async function searchImages({
  query,
  page = 1,
  perPage = 12,
}: SearchImagesParams): Promise<UnsplashSearchResponse> {
  const { data } = await unsplashClient.get<UnsplashSearchResponse>(
    '/search/photos',
    {
      params: {
        query,
        page,
        per_page: perPage,
      },
    }
  );

  return data;
}
