import { Link } from 'react-router-dom';

import css from './NewsItem.module.css';
const NewsItem = () => {
  return (
    <div className={css.newsItem}>
      <img className={css.neswImg} src="" alt="" />
      <h3 className={css.newsTitle}>NewsItem</h3>
      <p className={css.newsText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nisi.
      </p>
      <div>
        <span className={css.newsDate}>Date</span>
        <Link className={css.newsLink} to="/">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
