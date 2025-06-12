import Select, { SingleValue } from 'react-select';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// import { requestNoticesCategories } from '@/services/api.ts';
import { requestNoticesCategories } from '../../../../services/api';

import { INoticesCategories } from '@/types';

import css from './CategoryFilter.module.css';

type OptionType = {
  value: string;
  label: string;
};

const CategoryFilter = () => {
  const [category, setCategory] = useState<OptionType | null>(null);
  const [categoriesList, setCategoriesList] = useState<INoticesCategories>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchCategoriesList = async () => {
      try {
        const categoriesList = await requestNoticesCategories();
        setCategoriesList(categoriesList);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategoriesList();
  }, []);

  const options: OptionType[] = [
    { value: '', label: 'Show all' },
    ...categoriesList.map((item) => ({
      value: item,
      label: item.charAt(0).toUpperCase() + item.slice(1),
    })),
  ];

  const handleChange = (selectedOption: SingleValue<OptionType>) => {
    setCategory(selectedOption);

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('page', '1');

      if (selectedOption?.value) {
        params.set('category', selectedOption.value);
      } else {
        params.delete('category');
      }
      return params;
    });
  };

  return (
    <Select
      className={css.selectContainer}
      classNamePrefix="select"
      value={category}
      onChange={handleChange}
      options={options}
      placeholder="Category"
      isSearchable={false}
    />
  );
};

export default CategoryFilter;
