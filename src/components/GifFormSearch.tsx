import { ChangeEvent, FormEvent, useState } from 'react';

interface FormProps {
  onAddCategory: (category: string) => void;
}

export const GifFormSearch = ({ onAddCategory }: FormProps) => {
  const [inputSearch, setInputSearch] = useState('');

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(target.value);
  };

  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    onAddCategory(inputSearch);
    setInputSearch('');
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input type="text" placeholder="Search gif" value={inputSearch} onChange={onInputChange} />
    </form>
  );
};
