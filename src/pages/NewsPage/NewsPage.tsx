import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import Header from '../../components/Header/Header';
import NewsList from '../../components/NewsPageComponents/NewsList/NewsList';
import Pagination from '../../components/NewsPageComponents/Pagination/Pagination';
import SearchField from '../../components/NewsPageComponents/SearchField/SearchField';
import Title from '../../components/Title/Title';

import { fetchNewsRequest } from '../../redux/news/operations';

import css from './NewsPage.module.css';

const NewsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNewsRequest());
  }, [dispatch]);

  return (
    <div className={css.newsPage}>
      <Header addClass={css.header} />
      <div className={css.titleSearchWrap}>
        <Title textTitle="News" addClass={css.title} />
        <SearchField />
      </div>
      <NewsList />
      <Pagination />
    </div>
  );
};

export default NewsPage;
