import { useState, useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { config } from '@config';
import { loaderDelay } from '@utils';
import { useScrollDirection, usePrefersReducedMotion } from '@hooks';
import { Menu } from '@components';
import { Logo as IconLogo } from '@components/icons';
import styles from './Nav.module.scss';

const { navLinks } = config;

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const timeout = isHome ? loaderDelay : 0;
  const fadeClass = isHome ? 'fade' : '';
  const fadeDownClass = isHome ? 'fadedown' : '';

  const Logo = (
    <div className="logo flex-center" tabIndex={-1}>
      {isHome ? (
        <a href="/" aria-label="home">
          <IconLogo />
        </a>
      ) : (
        <Link href="/" aria-label="home">
          <a>
            <IconLogo />
          </a>
        </Link>
      )}
    </div>
  );

  const ResumeLink = (
    <a
      className="resume-button small-button"
      href="https://drive.google.com/file/d/1PJRwqPwg1S3M0eOUj5QzXCGS-oUhWdtN/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );

  return (
    <header
      className={`${styles.header} ${styles[`scrolling-${scrollDirection}`]} ${
        scrolledToTop ? styles.scrolledToTop : ''
      }`}
    >
      <nav className={styles.nav}>
        {prefersReducedMotion ? (
          <>
            {Logo}

            <div className={styles.links}>
              <ol>
                {navLinks
                  ? navLinks.map(({ url, name }, i) => (
                      <li key={i}>
                        <Link href={url}>
                          <a>{name}</a>
                        </Link>
                      </li>
                    ))
                  : null}
              </ol>
              <div>{ResumeLink}</div>
            </div>

            <Menu />
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted ? (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <>{Logo}</>
                </CSSTransition>
              ) : null}
            </TransitionGroup>

            <div className={styles.links}>
              <ol>
                <TransitionGroup component={null}>
                  {isMounted && navLinks
                    ? navLinks.map(({ url, name }, i) => (
                        <CSSTransition key={i} classNames={fadeDownClass} timeout={timeout}>
                          <li key={i} style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}>
                            <Link href={url}>
                              <a>{name}</a>
                            </Link>
                          </li>
                        </CSSTransition>
                      ))
                    : null}
                </TransitionGroup>
              </ol>

              <TransitionGroup component={null}>
                {isMounted ? (
                  <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                    <div style={{ transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms` }}>
                      {ResumeLink}
                    </div>
                  </CSSTransition>
                ) : null}
              </TransitionGroup>
            </div>

            <TransitionGroup component={null}>
              {isMounted ? (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <Menu />
                </CSSTransition>
              ) : null}
            </TransitionGroup>
          </>
        )}
      </nav>
    </header>
  );
};

Nav.propTypes = {
  isHome: PropTypes.bool,
};

export { Nav };
