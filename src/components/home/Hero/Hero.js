import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { Social } from '@components/Social';
import styles from './Hero.module.scss';

import profilePic from '@images/me.jpg';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const picture = (
    <Image
      className="img"
      src={profilePic}
      width={200}
      height={200}
      quality={100}
      alt="Daniele Serfilippi"
      style={{ borderRadius: '50%' }}
      placeholder="blur"
    />
  );
  const name = <h1 className="main-heading">Daniele Serfilippi</h1>;
  const tagline = <h2 className="tagline">Senior Software Engineer &amp; Architect</h2>;
  const social = <Social />;

  const items = [picture, name, tagline, social];

  return (
    <section className={`${styles.hero} flex-center`}>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </section>
  );
};

export { Hero };
