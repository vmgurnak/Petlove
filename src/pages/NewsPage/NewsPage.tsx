import toast from 'react-hot-toast';

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch } from '../../redux/hooks';
import { fetchNewsRequest } from '../../redux/news/operations';

import Header from '../../components/Header/Header';
import NewsList from '../../components/NewsPageComponents/NewsList/NewsList';
import Pagination from '../../components/NewsPageComponents/Pagination/Pagination';
import SearchField from '../../components/NewsPageComponents/SearchField/SearchField';
import Title from '../../components/Title/Title';

import css from './NewsPage.module.css';

const NewsPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('keyword');
  console.log(searchParams);
  console.log(searchQuery);

  useEffect(() => {
    dispatch(fetchNewsRequest({ keyword: searchQuery, page: 1, limit: 6 }))
      .unwrap()
      .then((response) => {
        console.log(response);
        if (response.results.length === 0) {
          toast(
            'Sorry, there are no news matching your search query. Please try again'
          );
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          `Error: ${error.response.status} ${error.response.data.message}`
        );
      });
  }, [dispatch, searchQuery]);

  const onSetSearchParams = (query: string): void => {
    if (query === searchQuery) {
      return;
    }
    setSearchParams({ keyword: query });
  };

  return (
    <div className={css.newsPage}>
      <Header addClass={css.header} />
      <div className={css.titleSearchWrap}>
        <Title textTitle="News" addClass={css.title} />
        <SearchField
          placeholder="Search"
          searchQuery={searchQuery}
          setSearchParams={setSearchParams}
          onSetSearchParams={onSetSearchParams}
        />
      </div>
      <NewsList />
      <Pagination />
    </div>
  );
};

export default NewsPage;
