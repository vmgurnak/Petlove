import { useSearchParams } from 'react-router-dom';
import SearchField from '../../REUSABLE/SearchField/SearchField';
import css from './NoticesFilters.module.css';

const NoticesFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('keyword');

  const onSetSearchParams = (query: string): void => {
    if (query === searchQuery) {
      return;
    }
    setSearchParams({ keyword: query });
  };

  return (
    <form className={css.noticesFilters}>
      <SearchField
        addClass={css.searchFieldWrap}
        placeholder="Search"
        searchQuery={searchQuery}
        setSearchParams={setSearchParams}
        onSetSearchParams={onSetSearchParams}
      />
    </form>
  );
};

export default NoticesFilters;
