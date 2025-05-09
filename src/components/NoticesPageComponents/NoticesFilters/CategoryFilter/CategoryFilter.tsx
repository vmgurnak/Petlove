import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import css from './CategoryFilter.module.css';

const CategoryFilter = () => {
  const [category, setCategory] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeParams = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('page', '1');
      if (value !== '') {
        params.set('category', value);
      } else {
        params.delete('category');
      }
      return params;
    });
  };

  return (
    <select
      value={category}
      onChange={handleChangeParams}
      className={css.categoryFilter}
    >
      <optgroup label="Category">
        <option value="">Show all</option>
        <option value="found">Found</option>
        <option value="free">Free</option>
        <option value="lost">Lost</option>
        <option value="sell">Sell</option>
      </optgroup>
    </select>
  );
};

export default CategoryFilter;
