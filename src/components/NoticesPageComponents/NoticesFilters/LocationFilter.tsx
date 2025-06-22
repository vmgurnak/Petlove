// import clsx from 'clsx';
// import toast from 'react-hot-toast';

// import { FC, useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

// import { SvgIcon } from '../../REUSABLE/SvgIcon';
// import { ICONS } from '../../../constants/constants';

// import { requestCities, requestCitiesPets } from '../../../services/api';

// import css from './LocationFilter.module.css';
// import { ICities } from '../../../types';

// interface LocationFilterProps {
//   placeholder?: string;
//   addClass?: string;
// }

// const LocationFilter: FC<LocationFilterProps> = ({ placeholder, addClass }) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [citiesPets, setCitiesPets] = useState<ICities[]>([]);

//   const searchCity = searchParams.get('locationId');

//   const [valueFilter, setValueFilter] = useState<string>(searchCity ?? '');

//   useEffect(() => {
//     const fetchCitiesPets = async () => {
//       try {
//         const response = await requestCitiesPets();
//         setCitiesPets(response);
//       } catch (error) {
//         console.error('Error fetching CitiesPets:', error);
//       }
//     };

//     fetchCitiesPets();
//   }, []);

//   const handleSubmit = (evt: React.FormEvent) => {
//     evt.preventDefault();
//     if (valueFilter.trim() === '') {
//       toast('Please enter your request.');
//       return;
//     }
//     if (valueFilter === searchCity) {
//       return;
//     }
//     setSearchParams((prev) => {
//       const params = new URLSearchParams(prev);
//       params.set('page', '1');
//       params.set('locationId', valueFilter);
//       return params;
//     });
//   };

//   const handleDeleteFilter = () => {
//     setValueFilter('');
//     // setSearchParams({});
//     setSearchParams((prev) => {
//       const params = new URLSearchParams(prev);
//       params.set('page', '1');
//       params.delete('locationId');
//       return params;
//     });
//   };

//   return (
//     <form
//       className={clsx(css.searchFieldWrap, addClass)}
//       onSubmit={handleSubmit}
//     >
//       <input
//         className={css.searchFieldInput}
//         name="search"
//         type="text"
//         placeholder={placeholder}
//         value={valueFilter}
//         onChange={(evt) => setValueFilter(evt.target.value)}
//       />
//       <button className={css.searchBtn} type="submit">
//         <SvgIcon addClass={css.iconSearch} icon={ICONS.search} />
//       </button>
//       {valueFilter && (
//         <button onClick={handleDeleteFilter}>
//           <SvgIcon addClass={css.iconCross} icon={ICONS.crossSearch} />
//         </button>
//       )}
//     </form>
//   );
// };

// export default LocationFilter;

import { FC, useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Select from 'react-select/async';
import debounce from 'lodash.debounce';
import clsx from 'clsx';

import { requestCities, requestCitiesPets } from '../../../services/api';
import { SvgIcon } from '../../../components/REUSABLE/SvgIcon';
import { ICONS } from '../../../constants/constants';
import { ICities } from '../../../types';

import css from './LocationFilter.module.css';

type OptionType = {
  value: string;
  label: string;
};

interface LocationFilterProps {
  placeholder?: string;
  addClass?: string;
}

const LocationFilter: FC<LocationFilterProps> = ({
  placeholder = 'Location',
  addClass,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [citiesWithPets, setCitiesWithPets] = useState<ICities>([]);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  useEffect(() => {
    const fetchCitiesPets = async () => {
      try {
        const res = await requestCitiesPets();
        setCitiesWithPets(res);
      } catch (error) {
        console.error('Error fetching cities with pets:', error);
      }
    };
    fetchCitiesPets();
  }, []);

  const citiesMap = useMemo(
    () => new Map(citiesWithPets.map((city) => [city._id, city])),
    [citiesWithPets]
  );

  console.log(citiesMap);

  const loadOptions = debounce(
    async (inputValue: string, callback: (options: OptionType[]) => void) => {
      if (!inputValue.trim()) return callback([]);

      try {
        const results = await requestCities(inputValue);
        const filtered = results.filter((city) => citiesMap.has(city._id));

        const options = filtered.map((city) => ({
          value: city._id,
          label: `${city.stateEn}, ${city.cityEn}`,
        }));

        callback(options);
      } catch (error) {
        console.error('Search error:', error);
        callback([]);
      }
    },
    300
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOption) return;

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('locationId', selectedOption.value);
      params.set('page', '1');
      return params;
    });
  };

  const handleReset = () => {
    setSelectedOption(null);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.delete('locationId');
      params.set('page', '1');
      return params;
    });
  };

  return (
    <form
      className={clsx(css.searchFieldWrap, addClass)}
      onSubmit={handleSubmit}
    >
      <Select
        classNamePrefix="select"
        className={css.selectField}
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        value={selectedOption}
        onChange={(option) => setSelectedOption(option)}
        placeholder={placeholder}
        isClearable={false}
        components={{
          IndicatorSeparator: () => null, // убираем серую черту между input и иконкой
        }}
      />

      <button type="submit" className={css.searchBtn}>
        <SvgIcon addClass={css.iconSearch} icon={ICONS.search} />
      </button>

      {selectedOption && (
        <button type="button" onClick={handleReset}>
          <SvgIcon addClass={css.iconCross} icon={ICONS.crossSearch} />
        </button>
      )}
    </form>
  );
};

export default LocationFilter;
