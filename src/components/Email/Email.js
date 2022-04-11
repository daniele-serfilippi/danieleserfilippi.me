import { config } from '@config';
import styles from './Email.module.scss';

const { email } = config;

const Email = () => (
  <div className={styles.email}>
    <a href={`mailto:${email}`}>{email}</a>
  </div>
);

export { Email };
