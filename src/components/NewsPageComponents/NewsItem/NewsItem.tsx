import { format } from 'date-fns';

import { Link } from 'react-router-dom';

import { FC } from 'react';

import { INewsItem } from '../../../types.ts';

interface INewsItemProps {
  newsItem: INewsItem;
}

import css from './NewsItem.module.css';
const NewsItem: FC<INewsItemProps> = ({ newsItem }) => {
  const { imgUrl, title, text, date, url } = newsItem;

  return (
    <div className={css.newsItem}>
      <div className={css.wrapImg}>
        <img className={css.neswImg} src={imgUrl} alt={title} />
      </div>
      <h3 className={css.newsTitle}>{title}</h3>
      <p className={css.newsText}>{text}</p>
      <div className={css.wrapDateLink}>
        <span className={css.newsDate}>
          {format(new Date(date), 'dd/MM/yyyy')}
        </span>
        <Link className={css.newsLink} to={url} target="_blank">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
