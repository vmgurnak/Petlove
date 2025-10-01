import clsx from 'clsx';
import { FC } from 'react';

import { IFriend } from '../../../types.ts';
import WorkStatus from './workStatus.ts';

import css from './FriendsItem.module.css';

interface IFriendsItemProps {
  friendsItem: IFriend;
}

const FriendsItem: FC<IFriendsItemProps> = ({ friendsItem }) => {
  const { imageUrl, title, email, address, addressUrl, phone, url, workDays } =
    friendsItem;

  return (
    <div className={css.friendsItem}>
      <div className={css.imageWrap}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={css.friendInfo}>
        <div className={css.workDaysWrap}>{WorkStatus(workDays)}</div>
        <h3 className={css.title}>{title}</h3>
        {email && (
          <address className={css.infoTitle}>
            Email:
            <a
              className={css.infoContent}
              href={`mailto:${email}`}
              target="_blank"
            >
              {email}
            </a>
          </address>
        )}
        {address && (
          <address className={css.infoTitle}>
            Address:
            <a
              className={clsx(css.infoContent, css.linkWebsite)}
              href={addressUrl?.toString()}
              target="_blank"
              rel="noopenner noreferrer"
            >
              {address}
            </a>
          </address>
        )}
        {!address && (
          <p className={css.infoTitle}>
            Address:
            <span className={css.infoContent}>website only</span>
          </p>
        )}
        {phone && (
          <address className={css.infoTitle}>
            Phone:
            <a className={css.infoContent} href={`tel:${phone}`}>
              {phone}
            </a>
          </address>
        )}
        {!phone && (
          <p className={css.infoTitle}>
            Phone:
            <span className={css.infoContent}>email only</span>
          </p>
        )}
        {url && (
          <p className={css.infoTitle}>
            Website:
            <a
              className={clsx(css.infoContent, css.linkWebsite)}
              href={url?.toString()}
              target="_blank"
              rel="noopenner noreferrer"
            >
              {new URL(url).hostname}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default FriendsItem;
