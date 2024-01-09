import { GifGridItem } from './GifGridItem';
import { useFetch } from '../hooks/useFetch';

interface GifProps {
  category: string;
}

export const GifGrid = ({ category }: GifProps) => {
  const { gifs, isLoading } = useFetch(category);

  return (
    <>
      <h2>{category}</h2>
      <div className="cards">
        {isLoading && <div>Loading...</div>}

        {gifs.map((gif) => {
          return <GifGridItem key={gif.id} {...gif} />;
        })}
      </div>
    </>
  );
};
