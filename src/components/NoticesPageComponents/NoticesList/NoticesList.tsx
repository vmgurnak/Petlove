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
