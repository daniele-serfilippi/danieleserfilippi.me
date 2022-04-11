import { useEffect } from 'react';
import { Head, Nav, Footer, TopBottomEllipses } from '@components';
import styles from './Layout.module.scss';

const Layout = ({ children, home = false }) => {
  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, []);

  return (
    <>
      <Head />

      <div id="root">
        <div className={styles.container}>
          <TopBottomEllipses />
          <Nav isHome={home} />
          <div id="content">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export { Layout };
