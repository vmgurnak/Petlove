import toast from 'react-hot-toast';

import { useEffect } from 'react';
import { useAppDispatch } from '../../redux/hooks';

import Header from '../../components/Header/Header';
import NewsList from '../../components/NewsPageComponents/NewsList/NewsList';
import Pagination from '../../components/NewsPageComponents/Pagination/Pagination';
import SearchField from '../../components/NewsPageComponents/SearchField/SearchField';
import Title from '../../components/Title/Title';

import { fetchNewsRequest } from '../../redux/news/operations';
// import { selectNews } from '../../redux/news/slice';
// import { INewsItem } from '../../components/NewsPageComponents/NewsItem/NewsItem';

import css from './NewsPage.module.css';

const NewsPage = () => {
  const dispatch = useAppDispatch();
  // const news = useAppSelector(selectNews);
  // const newsList = news.results as INewsItem[];

  useEffect(() => {
    dispatch(fetchNewsRequest({}))
      .unwrap()
      .then((response) => {
        console.log(response);
        if (response === 0) {
          toast(
            'Sorry, there are no news matching your search query. Please try again'
          );
        }
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <div className={css.newsPage}>
      <Header addClass={css.header} />
      <div className={css.titleSearchWrap}>
        <Title textTitle="News" addClass={css.title} />
        <SearchField placeholder="Search" />
      </div>
      <NewsList />
      <Pagination />
    </div>
  );
};

export default NewsPage;
