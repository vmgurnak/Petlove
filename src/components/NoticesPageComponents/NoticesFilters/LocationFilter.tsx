import clsx from 'clsx';
import toast from 'react-hot-toast';

import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SvgIcon } from '../../REUSABLE/SvgIcon';
import { ICONS } from '../../../constants/constants';

import { requestCities, requestCitiesPets } from '../../../services/api';

import css from './LocationFilter.module.css';
import { ICities } from '../../../types';

interface LocationFilterProps {
  placeholder?: string;
  addClass?: string;
}

const LocationFilter: FC<LocationFilterProps> = ({ placeholder, addClass }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [citiesPets, setCitiesPets] = useState<ICities[]>([]);

  const searchCity = searchParams.get('locationId');

  const [valueFilter, setValueFilter] = useState<string>(searchCity ?? '');

  useEffect(() => {
    const fetchCitiesPets = async () => {
      try {
        const response = await requestCitiesPets();
        setCitiesPets(response);
      } catch (error) {
        console.error('Error fetching CitiesPets:', error);
      }
    };

    fetchCitiesPets();
  }, []);

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (valueFilter.trim() === '') {
      toast('Please enter your request.');
      return;
    }
    if (valueFilter === searchCity) {
      return;
    }
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('page', '1');
      params.set('locationId', valueFilter);
      return params;
    });
  };

  const handleDeleteFilter = () => {
    setValueFilter('');
    // setSearchParams({});
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('page', '1');
      params.delete('locationId');
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

export default LocationFilter;
