// import { useSearchParams } from 'react-router-dom';
import SearchField from '../../REUSABLE/SearchField/SearchField';
import CategoryFilter from './CategoryFilter/CategoryFilter';

import css from './NoticesFilters.module.css';

const NoticesFilters = () => {
  return (
    <div className={css.noticesFilters}>
      <SearchField addClass={css.searchFieldWrap} placeholder="Search" />
      <CategoryFilter />
    </div>
  );
};

export default NoticesFilters;
