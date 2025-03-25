import clsx from 'clsx';
import toast from 'react-hot-toast';

import { FC, useState } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

import { SvgIcon } from '../../REUSABLE/SvgIcon';
import { ICONS } from '../../../constants/constants';

import css from './SearchField.module.css';

interface SearchFieldProps {
  searchQuery?: string | null;
  setSearchParams: SetURLSearchParams;
  onSetSearchParams: (query: string) => void;
  placeholder: string;
  addClass?: string;
}

const SearchField: FC<SearchFieldProps> = ({
  searchQuery,
  setSearchParams,
  onSetSearchParams,
  placeholder,
  addClass,
}) => {
  const [valueFilter, setValueFilter] = useState<string>(searchQuery ?? '');

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (valueFilter.trim() === '') {
      toast('Please enter your request.');
      return;
    }
    onSetSearchParams(valueFilter);
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
        <button
          onClick={() => {
            setValueFilter('');
            setSearchParams({});
          }}
        >
          <SvgIcon addClass={css.iconCross} icon={ICONS.crossSearch} />
        </button>
      )}
    </form>
  );
};

export default SearchField;
