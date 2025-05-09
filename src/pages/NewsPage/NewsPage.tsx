import toast from 'react-hot-toast';

import { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchNewsRequest } from '../../redux/news/operations';
import { selectTotalPages, selectNewsList } from '../../redux/news/slice';

import Header from '../../components/Header/Header';
import NewsList from '../../components/NewsPageComponents/NewsList/NewsList';
import Pagination from '../../components/NewsPageComponents/Pagination/Pagination';
import SearchField from '../../components/REUSABLE/SearchField/SearchField.tsx';
import Title from '../../components/Title/Title';

import { INewsParams } from '../../types.ts';

import css from './NewsPage.module.css';

const NewsPage: FC = () => {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('keyword');
  const page = parseInt(searchParams.get('page') || '1', 10);

  const totalPages = useAppSelector(selectTotalPages);
  const newsList = useAppSelector(selectNewsList);

  useEffect(() => {
    const paramsRequest: INewsParams = {
      keyword: searchQuery,
      page,
      limit: 6,
    };
    dispatch(fetchNewsRequest(paramsRequest))
      .unwrap()
      .then((response) => {
        if (response.results.length === 0) {
          toast(
            'Sorry, there are no news matching your search query. Please try again'
          );
        }
      })
      .catch((error) => {
        toast.error(
          `Error: ${error.response.status} ${error.response.data.message}`
        );
      });
  }, [dispatch, searchQuery, page]);

  const onPageChange = (page: number) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('page', String(page));
      return params;
    });
  };

  return (
    <div className={css.newsPage}>
      <Header addClass={css.header} />
      <div className={css.titleSearchWrap}>
        <Title textTitle="News" addClass={css.title} />
        <SearchField addClass={css.searchFieldWrap} placeholder="Search" />
      </div>
      {Array.isArray(newsList) && newsList.length > 0 && <NewsList />}
      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default NewsPage;
