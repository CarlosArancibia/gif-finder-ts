import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

interface GifProps {
  category: string;
}

interface GifItem {
  id: string;
  title: string;
  url: string;
}

export const GifGrid = ({ category }: GifProps) => {
  const [gifs, setGifs] = useState<GifItem[]>([]);

  const getGifsAsync = async () => {
    setGifs(await getGifs(category));
  };

  useEffect(() => {
    getGifsAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>{category}</h2>
      <div className="cards">
        {gifs.map((gif) => {
          return <GifGridItem key={gif.id} {...gif} />;
        })}
      </div>
    </>
  );
};
