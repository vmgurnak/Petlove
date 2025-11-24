import SearchField from '../../REUSABLE/SearchField/SearchField';
import FilterSelect from './FilterSelect';

import LocationFilter from './LocationFilter';

import { requestNoticesCategories } from '../../../services/api';
import { requestNoticesSex } from '../../../services/api';
import { requestNoticesSpecies } from '../../../services/api';

import css from './NoticesFilters.module.css';

const NoticesFilters = () => {
  return (
    <div className={css.noticesFilters}>
      <div className={css.filtersWrap}>
        <SearchField addClass={css.searchFieldWrap} placeholder="Search" />
        <FilterSelect
          requestSelectList={requestNoticesCategories}
          placeholder="Category"
          filter="category"
          addClass={css.categoryWrap}
        />
        <FilterSelect
          requestSelectList={requestNoticesSex}
          placeholder="By gender"
          filter="sex"
          addClass={css.sexWrap}
        />
        <FilterSelect
          requestSelectList={requestNoticesSpecies}
          placeholder="By type"
          filter="species"
          addClass={css.speciesWrap}
        />
        <LocationFilter addClass={css.locationWrap} placeholder="Location" />
      </div>
    </div>
  );
};

export default NoticesFilters;
