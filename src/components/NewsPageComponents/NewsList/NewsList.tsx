import NewsItem from '../NewsItem/NewsItem';
import { useSelector } from 'react-redux';

import { selectNews } from '../../../redux/news/slice';

import css from './NewsList.module.css';

const NewsList = () => {
  const news = useSelector(selectNews);
  const newsList = news.results;

  return (
    <div>
      {Array.isArray(newsList) && newsList.length > 0 && (
        <ul className={css.newsList}>
          {newsList.map((newsItem) => (
            <li className={css.newsItem} key={newsItem._id}>
              <NewsItem newsItem={newsItem} />
            </li>
          ))}
        </ul>
      )}
      );
    </div>
  );
};

export default NewsList;
