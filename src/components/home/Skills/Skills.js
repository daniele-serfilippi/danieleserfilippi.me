import { useEffect, useRef } from 'react';
// import { scrollReveal } from '@utils/scrollReveal';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';
import styles from './Skills.module.scss';

// const { scrollRevealConfig } = config;

const Skills = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    // scrollReveal.reveal(revealContainer.current, scrollRevealConfig());
  }, []);

  const techs = ['JavaScript', 'TypeScript', 'React', 'NodeJS'];

  return (
    <section id="skills" className={styles.skills} ref={revealContainer}>
      <h2 className="heading">About Me</h2>

      <div className={styles.inner}>
        <div>
          <p>Something about me...</p>

          <p>Something else about me...</p>

          <p>Something else about me...</p>
        </div>

        <div className="tech-list">
          {techs.map((tech, i) => (
            <div className={styles['tech-container']} key={i}>
              <Icon name={tech} key={i} />
              <p>{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Skills };
