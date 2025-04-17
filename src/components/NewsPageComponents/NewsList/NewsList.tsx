import toast from 'react-hot-toast';

import NewsItem from '../NewsItem/NewsItem';
import { useAppSelector } from '../../../redux/hooks';
import { selectNewsList } from '../../../redux/news/slice';

import css from './NewsList.module.css';

const NewsList = () => {
  const newsList = useAppSelector(selectNewsList);

  return (
    <ul className={css.newsList}>
      {newsList.map((item) => (
        <li className={css.newsItem} key={item._id}>
          <NewsItem newsItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
