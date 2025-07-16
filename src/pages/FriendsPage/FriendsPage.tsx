import FriendsList from '../../components/FriendsPageComponents/FriendsList/FriendsList';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';

import css from './FriendsPage.module.css';

const FriendsPage = () => {
  return (
    <div className={css.friendsPage}>
      <Header addClass={css.header} />
      <Title textTitle="News" addClass={css.title} />
      <FriendsList />
    </div>
  );
};

export default FriendsPage;
