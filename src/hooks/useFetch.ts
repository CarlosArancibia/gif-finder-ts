import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

interface GifItem {
  id: string;
  title: string;
  url: string;
}

export const useFetch = (category: string) => {
  const [gifs, setGifs] = useState<GifItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifsAsync = async () => {
    setGifs(await getGifs(category));
    setIsLoading(false);
  };

  useEffect(() => {
    getGifsAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    gifs,
    isLoading,
  };
};
