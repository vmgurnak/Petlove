import { FC } from 'react';

import { useAppSelector } from '../../../redux/hooks';
import { selectFriends } from '../../../redux/friends/selectors';

import FriendsItem from '../FriendsItem/FriendsItem';

import css from './FriendsList.module.css';

const FriendsList: FC = () => {
  const friendsList = useAppSelector(selectFriends);

  return (
    <ul className={css.friendsList}>
      {friendsList.map((item) => (
        <li className={css.friendsItem} key={item._id}>
          <FriendsItem friendsItem={item} />
        </li>
      ))}
    </ul>
  );
};

export default FriendsList;
