import clsx from 'clsx';
import toast from 'react-hot-toast';

import { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SvgIcon } from '../SvgIcon';
import { ICONS } from '../../../constants/constants';

import css from './SearchField.module.css';

interface SearchFieldProps {
  placeholder?: string;
  addClass?: string;
}

const SearchField: FC<SearchFieldProps> = ({ placeholder, addClass }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('keyword');

  const [valueFilter, setValueFilter] = useState<string>(searchQuery ?? '');

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (valueFilter.trim() === '') {
      toast('Please enter your request.');
      return;
    }
    if (valueFilter === searchQuery) {
      return;
    }
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('page', '1');
      params.set('keyword', valueFilter);
      return params;
    });
  };

  const handleDeleteFilter = () => {
    setValueFilter('');
    // setSearchParams({});
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('page', '1');
      params.delete('keyword');
      return params;
    });
  };

  return (
    <form
      className={clsx(css.searchFieldWrap, addClass)}
      onSubmit={handleSubmit}
    >
      <input
        className={css.searchFieldInput}
        name="search"
        type="text"
        placeholder={placeholder}
        value={valueFilter}
        onChange={(evt) => setValueFilter(evt.target.value)}
      />
      <button className={css.searchBtn} type="submit">
        <SvgIcon addClass={css.iconSearch} icon={ICONS.search} />
      </button>
      {valueFilter && (
        <button onClick={handleDeleteFilter}>
          <SvgIcon addClass={css.iconCross} icon={ICONS.crossSearch} />
        </button>
      )}
    </form>
  );
};

export default SearchField;
