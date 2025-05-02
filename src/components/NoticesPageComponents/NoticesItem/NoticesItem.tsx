import { format } from 'date-fns';
import { FC } from 'react';

import { INoticesItem } from '../../../types.ts';
import Button from '../../REUSABLE/Button/Button.tsx';
import { SvgIcon } from '../../REUSABLE/SvgIcon';
import { ICONS } from '../../../constants/constants.ts';

import css from './NoticesItem.module.css';

interface INoticesItemProps {
  noticesItem: INoticesItem;
}

const NoticesItem: FC<INoticesItemProps> = ({ noticesItem }) => {
  const {
    imgURL,
    title,
    popularity,
    name,
    birthday,
    sex,
    species,
    category,
    comment,
    price,
  } = noticesItem;

  const toUSD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    useGrouping: false,
  });

  return (
    <li className={css.noticesItem}>
      <div className={css.wrapNoticesItem}>
        <div className={css.wrapImg}>
          <img className={css.noticeImg} src={imgURL} alt={title} />
        </div>
        <div className={css.wrapTitlePopularity}>
          <div className={css.title}>{title}</div>
          <SvgIcon addClass={css.iconRating} icon={ICONS.starRating} />
          <div className={css.popularity}>{Math.round(popularity / 1000)}</div>
        </div>
        <div className={css.wrapInfo}>
          <div className={css.wrapInfoItem}>
            <span className={css.infoItemTitle}>Name</span>
            <span className={css.infoItemValue}>{name}</span>
          </div>
          <div className={css.wrapInfoItem}>
            <span className={css.infoItemTitle}>Birthday</span>
            <span className={css.infoItemValue}>
              {birthday && format(new Date(birthday), 'dd.MM.yyyy')}
            </span>
          </div>
          <div className={css.wrapInfoItem}>
            <span className={css.infoItemTitle}>Sex</span>
            <span className={css.infoItemValue}>{sex}</span>
          </div>
          <div className={css.wrapInfoItem}>
            <span className={css.infoItemTitle}>Species</span>
            <span className={css.infoItemValue}>{species}</span>
          </div>
          <div className={css.wrapInfoItem}>
            <span className={css.infoItemTitle}>Category</span>
            <span className={css.infoItemValue}>{category}</span>
          </div>
        </div>
        <div className={css.noticeComment}>{comment}</div>
        {price && <div className={css.noticePrice}>{toUSD.format(price)}</div>}
      </div>
      <div className={css.wrapBtn}>
        <Button addClass={css.learnMoreBtn} type="button">
          Learn more
        </Button>
        <button className={css.favorBtn} type="button">
          <SvgIcon addClass={css.iconFavor} icon={ICONS.favorite} />
        </button>
      </div>
    </li>
  );
};

export default NoticesItem;

// import { format } from 'date-fns';

// import { Link } from 'react-router-dom';

// import { FC } from 'react';

// import { INewsItem } from '../../../types.ts';

// interface INewsItemProps {
//   newsItem: INewsItem;
// }

// import css from './NewsItem.module.css';
// const NewsItem: FC<INewsItemProps> = ({ newsItem }) => {
//   const { imgUrl, title, text, date, url } = newsItem;

//   return (
//     <div className={css.newsItem}>
//       <div className={css.wrapImg}>
//         <img className={css.neswImg} src={imgUrl} alt={title} />
//       </div>
//       <h3 className={css.newsTitle}>{title}</h3>
//       <p className={css.newsText}>{text}</p>
//       <div className={css.wrapDateLink}>
//         <span className={css.newsDate}>
//           {format(new Date(date), 'dd/MM/yyyy')}
//         </span>
//         <Link className={css.newsLink} to={url} target="_blank">
//           Read more
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;
