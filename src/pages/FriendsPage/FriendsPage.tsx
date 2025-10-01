import toast from 'react-hot-toast';

import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchFriendsRequest } from '../../redux/friends/operations';
import { selectFriends } from '../../redux/friends/selectors';

import FriendsList from '../../components/FriendsPageComponents/FriendsList/FriendsList';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';

import css from './FriendsPage.module.css';

const FriendsPage: FC = () => {
  const dispatch = useAppDispatch();

  const friendsList = useAppSelector(selectFriends);

  useEffect(() => {
    dispatch(fetchFriendsRequest())
      .unwrap()
      .then((response) => {
        if (response.length === 0) {
          toast('Sorry, there are no friends. Please try again');
        }
      })
      .catch((error) => {
        toast.error(
          `Error: ${error.response.status} ${error.response.data.message}`
        );
      });
  }, [dispatch]);

  return (
    <div className={css.friendsPage}>
      <Header addClass={css.header} />
      <Title textTitle="Our friends" addClass={css.title} />
      {Array.isArray(friendsList) && friendsList.length > 0 && <FriendsList />}
    </div>
  );
};

export default FriendsPage;
