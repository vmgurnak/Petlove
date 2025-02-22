import clsx from 'clsx';
import toast from 'react-hot-toast';

import { FC, useState } from 'react';

import { SvgIcon } from '../../../helpers/SvgIcon';
import { ICONS } from '../../../constants/constants';

import css from './SearchField.module.css';

interface SearchFieldProps {
  placeholder: string;
  addClass?: string;
}

const SearchField: FC<SearchFieldProps> = ({ placeholder, addClass }) => {
  const [valueFilter, setValueFilter] = useState('');

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    if (valueFilter.trim() === '') {
      toast('Please enter your request.');
      return;
    }
    console.log(valueFilter);
    setValueFilter('');
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
    </form>
  );
};

export default SearchField;

// const SearchBox = ({ filter, setFilter }) => {
//   // function change state filter
//   const onChange = (evt) => setFilter(evt.target.value);

//   return (
//     <div className={css.searchBoxWrap}>
//       <p className={css.searchBoxTitle}>Find contacts by name</p>
//       <input
//         className={css.searchBoxInput}
//         type="text"
//         value={filter}
//         onChange={onChange}
//       />
//     </div>
//   );
// };

// const SearchForm = ({ onSetSearchParams, searchQuery }) => {
//   const { t } = useTranslation();
//   const initialValues = { query: searchQuery ?? '' };
//   // const initialValues = { query: '' };

//   const handlerSubmit = (values) => {
//     if (!values.query.trim()) {
//       toast('Please enter your request.');
//       return;
//     }
//     onSetSearchParams(values.query);
//     values.query = '';
//   };

//   return (
//     <Formik initialValues={initialValues} onSubmit={handlerSubmit}>
//       <Form className={css.MoviesPageForm} autoComplete="off">
//         <Field
//           className={css.MoviesPageInput}
//           name="query"
//           type="text"
//           placeholder={t('searchPlaceholder')}
//         />
//         <Button title={t('searchButton')} addClass={css.MoviesPageBtn} />
//       </Form>
//     </Formik>
//   );
// };
