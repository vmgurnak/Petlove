import { Link } from 'react-router-dom';

import css from './NewsItem.module.css';
const NewsItem = () => {
  return (
    <div className={css.newsItem}>
      <img className={css.neswImg} src="" alt="" />
      <h3 className={css.newsTitle}>On Pets, Moral Logic and Love</h3>
      <p className={css.newsText}>
        In January, I fell in love with someone. It was the last thing I’d
        expect and caught me completely off guard. He has sandy blond hair with
        flecks of gray and gorgeous, sad eyes.
      </p>
      <div className={css.wrapDateLink}>
        <span className={css.newsDate}>Date</span>
        <Link className={css.newsLink} to="/">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
