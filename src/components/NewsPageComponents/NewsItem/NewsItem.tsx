import { Link } from 'react-router-dom';

import { FC } from 'react';

interface INewsItem {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}

import css from './NewsItem.module.css';
const NewsItem = ({ newsItem }) => {
  const { imgUrl, title, text, date, url } = newsItem;

  return (
    <div className={css.newsItem}>
      <img className={css.neswImg} src={imgUrl} alt={title} />
      <h3 className={css.newsTitle}>{title}</h3>
      <p className={css.newsText}>{text}</p>
      <div className={css.wrapDateLink}>
        <span className={css.newsDate}>{date}</span>
        <Link className={css.newsLink} to={url}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
