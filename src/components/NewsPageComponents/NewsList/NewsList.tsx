import NewsItem from '../NewsItem/NewsItem';
import css from './NewsList.module.css';

const NewsList = () => {
  const news = [1, 1, 1, 1, 1, 1];

  return (
    <ul className={css.newsList}>
      {news.map((item, index) => (
        <li className={css.newsItem} key={index}>
          <NewsItem />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
