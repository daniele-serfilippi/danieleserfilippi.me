import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@components/icons';
import { config } from '@config';
import styles from './Footer.module.scss';

const { socialMedia } = config;

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    fetch('https://api.github.com/repos/daniele-serfilippi/danieleserfilippi.me')
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <footer className={`${styles.footer} flex-between`}>
      <div className={styles['social-links']}>
        <ul className="flex-center">
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </div>

      <div className={styles.credit} tabIndex={-1}>
        <a href="https://github.com/daniele-serfilippi/danieleserfilippi.me">
          <div>Designed &amp; Built by Daniele Serfilippi</div>

          {githubInfo.stars && githubInfo.forks ? (
            <div className="github-stats">
              <span>
                <Icon name="Star" />
                <span>{githubInfo.stars.toLocaleString()}</span>
              </span>
              <span>
                <Icon name="Fork" />
                <span>{githubInfo.forks.toLocaleString()}</span>
              </span>
            </div>
          ) : null}
        </a>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export { Footer };
