import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Select, { SingleValue } from 'react-select';
import clsx from 'clsx';

import { ISelectList } from '../../../types';

import css from './FilterSelect.module.css';

type FilterSelectProps = {
  requestSelectList: () => Promise<ISelectList>;
  placeholder: string;
  filter: string;
  addClass?: string;
};

type OptionType = {
  value: string;
  label: string;
};

const FilterSelect: FC<FilterSelectProps> = ({
  requestSelectList,
  placeholder,
  filter,
  addClass,
}) => {
  const [value, setValue] = useState<OptionType | null>(null);
  const [selectList, setSelectList] = useState<ISelectList>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchSelectList = async () => {
      try {
        const selectOptions = await requestSelectList();
        setSelectList(selectOptions);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchSelectList();
  }, [requestSelectList]);

  console.log(selectList);

  const options: OptionType[] = [
    { value: '', label: 'Show all' },
    ...selectList.map((item) => ({
      value: item,
      label: item.charAt(0).toUpperCase() + item.slice(1),
    })),
  ];

  const handleChange = (selectedOption: SingleValue<OptionType>) => {
    setValue(selectedOption);

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('page', '1');

      if (selectedOption?.value) {
        params.set(filter, selectedOption.value);
      } else {
        params.delete(filter);
      }
      return params;
    });
  };

  return (
    <Select
      className={clsx(css.selectContainer, addClass)}
      classNamePrefix="select"
      value={value}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      isSearchable={false}
    />
  );
};

export default FilterSelect;
