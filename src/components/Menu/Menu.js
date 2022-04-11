import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { config } from '@config';
import { KEY_CODES } from '@utils';
import { useOnClickOutside } from '@hooks';
import styles from './Menu.module.scss';

const { navLinks } = config;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const buttonRef = useRef(null);
  const navRef = useRef(null);

  let menuFocusables;
  let firstFocusableEl;
  let lastFocusableEl;

  const setFocusables = () => {
    menuFocusables = [buttonRef.current, ...Array.from(navRef.current.querySelectorAll('a'))];
    firstFocusableEl = menuFocusables[0];
    lastFocusableEl = menuFocusables[menuFocusables.length - 1];
  };

  const handleBackwardTab = (e) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl.focus();
    }
  };

  const handleForwardTab = (e) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  };

  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false);
        break;
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault();
          break;
        }
        if (e.shiftKey) {
          handleBackwardTab(e);
        } else {
          handleForwardTab(e);
        }
        break;
      }

      default: {
        break;
      }
    }
  };

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    setFocusables();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setMenuOpen(false));

  return (
    <div className={styles.menu}>
      {/* <Head>
        <body className={menuOpen ? 'blur' : ''} />
      </Head> */}

      <div ref={wrapperRef}>
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          ref={buttonRef}
          aria-label="Menu"
        >
          <div className={styles['ham-box']}>
            <div className={styles['ham-box-inner']} />
          </div>
        </button>

        <aside
          className={`${styles.sidebar} ${menuOpen ? styles.open : ''}`}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
        >
          <nav ref={navRef}>
            <ol>
              {navLinks
                ? navLinks.map(({ url, name }, i) => (
                    <li key={i}>
                      <Link href={url}>
                        <a className="link" onClick={() => setMenuOpen(false)}>
                          {name}
                        </a>
                      </Link>
                    </li>
                  ))
                : null}
            </ol>

            <a
              href="https://drive.google.com/file/d/1PJRwqPwg1S3M0eOUj5QzXCGS-oUhWdtN/view?usp=sharing"
              className={`${styles['resume-link']} big-button`}
            >
              Resume
            </a>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export { Menu };
