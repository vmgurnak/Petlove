import NoticesItem from '../NoticesItem/NoticesItem';
import { useAppSelector } from '../../../redux/hooks';
import { selectNoticesList } from '../../../redux/notices/selectors';

import css from './NoticesList.module.css';

const NoticesList = () => {
  const noticesList = useAppSelector(selectNoticesList);

  return (
    <ul className={css.noticesList}>
      {noticesList.map((item) => (
        <NoticesItem key={item._id} noticesItem={item} />
      ))}
    </ul>
  );
};

export default NoticesList;

// import NewsItem from '../NewsItem/NewsItem';
// import { useAppSelector } from '../../../redux/hooks';
// import { selectNewsList } from '../../../redux/news/slice';

// import css from './NewsList.module.css';

// const NewsList = () => {
//   const newsList = useAppSelector(selectNewsList);

//   return (
//     <ul className={css.newsList}>
//       {newsList.map((item) => (
//         <li className={css.newsItem} key={item._id}>
//           <NewsItem newsItem={item} />
//         </li>
//       ))}
//     </ul>
//   );
// };
