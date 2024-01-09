import { useState } from 'react';
import { GifFormSearch } from './components/GifFormSearch';
import { GifGrid } from './components/GifGrid';
import { getGifs } from './helpers/getGifs';

export const GifFinderApp = () => {
  const [categories, setCategories] = useState(['naruto']);

  const onAddCategory = (category: string) => {
    setCategories([category, ...categories]);
    getGifs('one piece');
  };

  return (
    <>
      <h1>GifFinderApp</h1>
      <GifFormSearch onAddCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
