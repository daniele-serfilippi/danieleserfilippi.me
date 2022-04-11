import { config } from '@config';
import { Icon } from '@components/icons';
import styles from './Social.module.scss';

const { socialMedia } = config;

const Social = () => (
  <ul className={styles['social-list']}>
    {socialMedia &&
      socialMedia.map(({ url, name }, i) => (
        <li key={i}>
          <a href={url} aria-label={name} target="_blank" rel="noreferrer">
            <Icon name={name} />
          </a>
        </li>
      ))}
  </ul>
);

export { Social };
