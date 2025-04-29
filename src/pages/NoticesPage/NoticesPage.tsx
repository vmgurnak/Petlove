import toast from 'react-hot-toast';

import { useEffect } from 'react';

import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import NoticesFilters from '../../components/NoticesPageComponents/NoticesFilters/NoticesFilters';
import NoticesList from '../../components/NoticesPageComponents/NoticesList/NoticesList';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchNoticesRequest } from '../../redux/notices/operations';
import { selectNoticesList } from '../../redux/notices/selectors';

import css from './NoticesPage.module.css';

const NoticesPage = () => {
  const dispatch = useAppDispatch();
  const noticesList = useAppSelector(selectNoticesList);

  useEffect(() => {
    dispatch(fetchNoticesRequest())
      .unwrap()
      .then((response) => {
        if (response.results.length === 0) {
          toast(
            'Sorry, there are no news matching your search query. Please try again'
          );
        }
      })
      .catch((error) => {
        toast.error(
          `Error: ${error.response.status} ${error.response.data.message}`
        );
      });
  }, [dispatch]);

  return (
    <div className={css.noticesPage}>
      <Header addClass={css.header} />
      <Title textTitle="Find your favorite pet" addClass={css.title} />
      <NoticesFilters />
      {Array.isArray(noticesList) && noticesList.length > 0 && <NoticesList />}
    </div>
  );
};

export default NoticesPage;
