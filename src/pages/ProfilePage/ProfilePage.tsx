import Header from '../../components/Header/Header';
import css from './ProfilePage.module.css';

const ProfilePage = () => {
  return (
    <div className={css.profilePage}>
      <Header addClass={css.header} />
      ProfilePage
    </div>
  );
};

export default ProfilePage;
