import toast from 'react-hot-toast';

import NewsItem from '../NewsItem/NewsItem';
import { useAppSelector } from '../../../redux/hooks';

import { selectNews } from '../../../redux/news/slice';

import { INewsItem } from '../NewsItem/NewsItem';

import css from './NewsList.module.css';

const NewsList = () => {
  const news = useAppSelector(selectNews);
  const newsList = news.results as INewsItem[];

  // if (newsList.length === 0) {
  //   toast(
  //     'Sorry, there are no news matching your search query. Please try again'
  //   );
  // }

  return (
    <div>
      {Array.isArray(newsList) && newsList.length > 0 && (
        <ul className={css.newsList}>
          {newsList.map((item) => (
            <li className={css.newsItem}>
              <NewsItem newsItem={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsList;
