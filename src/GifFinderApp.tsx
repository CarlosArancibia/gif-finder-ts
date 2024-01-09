import { useEffect, useState } from 'react';
import { GifFormSearch } from './components/GifFormSearch';
import { GifGrid } from './components/GifGrid';

const loadCategories = (): string[] => {
  const storedCategories = localStorage.getItem('categories');
  return storedCategories ? JSON.parse(storedCategories) : [];
};

export const GifFinderApp = () => {
  const [categories, setCategories] = useState(() => loadCategories());

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

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
