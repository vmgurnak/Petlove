import toast from 'react-hot-toast';

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import NoticesFilters from '../../components/NoticesPageComponents/NoticesFilters/NoticesFilters';
import NoticesList from '../../components/NoticesPageComponents/NoticesList/NoticesList';
import Pagination from '../../components/REUSABLE/Pagination/Pagination.tsx';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchNoticesRequest } from '../../redux/notices/operations';
import {
  selectNoticesList,
  selectTotalPages,
} from '../../redux/notices/selectors';

import { INoticesParams } from '../../types.ts';

import css from './NoticesPage.module.css';

const NoticesPage = () => {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('keyword');
  const category = searchParams.get('category');
  const sex = searchParams.get('sex');
  const species = searchParams.get('species');
  const locationId = searchParams.get('locationId');
  const page = parseInt(searchParams.get('page') || '1', 10);

  const totalPage = useAppSelector(selectTotalPages);
  const noticesList = useAppSelector(selectNoticesList);

  useEffect(() => {
    const paramsRequest: INoticesParams = {
      keyword: searchQuery,
      category: category,
      sex: sex,
      species: species,
      locationId: locationId,
      page,
      limit: 6,
    };

    dispatch(fetchNoticesRequest(paramsRequest))
      .unwrap()
      .then((response) => {
        if (response.results.length === 0) {
          toast(
            'Sorry, there are no notices matching your search query. Please try again'
          );
        }
      })
      .catch((error) => {
        toast.error(
          `Error: ${error.response.status} ${error.response.data.message}`
        );
      });
  }, [dispatch, searchQuery, page, category, sex, species, locationId]);

  const onPageChange = (page: number) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set('page', String(page));
      return params;
    });
  };

  return (
    <div className={css.noticesPage}>
      <Header addClass={css.header} />
      <Title textTitle="Find your favorite pet" addClass={css.title} />
      <NoticesFilters />
      {Array.isArray(noticesList) && noticesList.length > 0 && <NoticesList />}
      {totalPage > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPage}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default NoticesPage;
