import Header from '../../components/Header/Header';
import NewsList from '../../components/NewsPageComponents/NewsList/NewsList';
import Pagination from '../../components/NewsPageComponents/Pagination/Pagination';
import SearchField from '../../components/NewsPageComponents/SearchField/SearchField';

import Title from '../../components/Title/Title';
import css from './NewsPage.module.css';
const NewsPage = () => {
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
