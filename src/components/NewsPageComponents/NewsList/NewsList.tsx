import NewsItem from '../NewsItem/NewsItem';
import { useAppSelector } from '../../../redux/hooks';

import { selectNews } from '../../../redux/news/slice';

import { INewsItem } from '../NewsItem/NewsItem';

import css from './NewsList.module.css';

const NewsList = (): JSX.Element => {
  const news = useAppSelector(selectNews);
  const newsList = news.results as INewsItem[];

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
      );
    </div>
  );
};

export default NewsList;
