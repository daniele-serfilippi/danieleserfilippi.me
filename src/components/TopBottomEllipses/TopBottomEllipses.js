import styles from './TopBottomEllipses.module.scss';

const TopBottomEllipses = () => (
  <>
    <div className={`${styles.ellipse} ${styles.top}`} />
    <div className={`${styles.ellipse} ${styles.bottom}`} />
  </>
);

export { TopBottomEllipses };
