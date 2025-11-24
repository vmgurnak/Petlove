// import { FC, useMemo, useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import Select from 'react-select/async';
// import debounce from 'lodash.debounce';
// import clsx from 'clsx';

// import { requestCities, requestCitiesPets } from '../../../services/api';
// import { SvgIcon } from '../../../components/REUSABLE/SvgIcon';
// import { ICONS } from '../../../constants/constants';
// import { ICities } from '../../../types';

// import css from './LocationFilter.module.css';

// type OptionType = {
//   value: string;
//   label: string;
// };

// interface LocationFilterProps {
//   placeholder?: string;
//   addClass?: string;
// }

// const LocationFilter: FC<LocationFilterProps> = ({
//   placeholder = 'Location',
//   addClass,
// }) => {
//   const [, setSearchParams] = useSearchParams();
//   const [citiesWithPets, setCitiesWithPets] = useState<ICities>([]);
//   const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

//   useEffect(() => {
//     const fetchCitiesPets = async () => {
//       try {
//         const res = await requestCitiesPets();
//         setCitiesWithPets(res);
//       } catch (error) {
//         console.error('Error fetching cities with pets:', error);
//       }
//     };
//     fetchCitiesPets();
//   }, []);

//   const citiesMap = useMemo(
//     () => new Map(citiesWithPets.map((city) => [city._id, city])),
//     [citiesWithPets]
//   );

//   console.log(citiesMap);

//   const loadOptions = useMemo(() => {
//     const load = async (
//       inputValue: string,
//       callback: (options: OptionType[]) => void
//     ) => {
//       if (!inputValue.trim()) return callback([]);

//       try {
//         const results = await requestCities(inputValue);
//         const filtered = results.filter((city) => citiesMap.has(city._id));

//         const options = filtered.map((city) => ({
//           value: city._id,
//           label: `${city.stateEn}, ${city.cityEn}`,
//         }));

//         callback(options);
//       } catch (error) {
//         console.error('Search error:', error);
//         callback([]);
//       }
//     };

//     return debounce(load, 300) as (
//       inputValue: string,
//       callback: (options: OptionType[]) => void
//     ) => void;
//   }, [citiesMap]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!selectedOption) return;

//     setSearchParams((prev) => {
//       const params = new URLSearchParams(prev);
//       params.set('locationId', selectedOption.value);
//       params.set('page', '1');
//       return params;
//     });
//   };

//   const handleReset = () => {
//     setSelectedOption(null);
//     setSearchParams((prev) => {
//       const params = new URLSearchParams(prev);
//       params.delete('locationId');
//       params.set('page', '1');
//       return params;
//     });
//   };

//   return (
//     <form
//       className={clsx(css.searchFieldWrap, addClass)}
//       onSubmit={handleSubmit}
//     >
//       <Select
//         classNamePrefix="select"
//         className={css.selectField}
//         cacheOptions
//         loadOptions={loadOptions}
//         defaultOptions
//         value={selectedOption}
//         onChange={(option) => setSelectedOption(option)}
//         placeholder={placeholder}
//         isClearable={false}
//         components={{
//           IndicatorSeparator: () => null, // убираем серую черту между input и иконкой
//         }}
//       />

//       <button type="submit" className={css.searchBtn}>
//         <SvgIcon addClass={css.iconSearch} icon={ICONS.search} />
//       </button>

//       {selectedOption && (
//         <button type="button" onClick={handleReset}>
//           <SvgIcon addClass={css.iconCross} icon={ICONS.crossSearch} />
//         </button>
//       )}
//     </form>
//   );
// };

// export default LocationFilter;

import clsx from 'clsx';
import toast from 'react-hot-toast';

import { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SvgIcon } from '../../../components/REUSABLE/SvgIcon';
import { ICONS } from '../../../constants/constants';

import css from './LocationFilter.module.css';

interface LocationFilterProps {
  placeholder?: string;
  addClass?: string;
}

const LocationFilter: FC<LocationFilterProps> = ({ placeholder, addClass }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchLocation = searchParams.get('locationId');

  const [valueFilter, setValueFilter] = useState<string>(searchLocation ?? '');

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (valueFilter.trim() === '') {
      toast('Please enter your location.');
      return;
    }
    if (valueFilter === searchLocation) {
      toast('Please enter new location.');
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
      className={clsx(css.searchLocationWrap, addClass)}
      onSubmit={handleSubmit}
    >
      <input
        className={css.searchLocationInput}
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
        <button onClick={handleDeleteFilter} type="button">
          <SvgIcon addClass={css.iconCross} icon={ICONS.crossSearch} />
        </button>
      )}
    </form>
  );
};

export default LocationFilter;
