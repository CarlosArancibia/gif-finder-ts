import { useState } from 'react';
import { GifFormSearch } from './components/GifFormSearch';
import { GifGrid } from './components/GifGrid';

export const GifFinderApp = () => {
  const [categories, setCategories] = useState(['naruto']);

  const onAddCategory = (category: string) => {
    if (categories.includes(category)) return;

    setCategories([category, ...categories]);
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
