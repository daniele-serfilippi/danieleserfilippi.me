import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { Social } from '@components/Social';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding: 10vh 0;
  }

  h1 {
    margin-top: 40px;
    color: var(--white);
    font-weight: 400;
  }

  h2 {
    color: var(--slate);
    line-height: 0.9;
    margin-bottom: 5vh;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

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
    <StaticImage
      className="img"
      src="../../images/me.jpg"
      width={200}
      heigth={200}
      quality={100}
      alt="Daniele Serfilippi"
      style={{ borderRadius: '50%' }}
    />
  );
  const name = <h1 className="heading">Daniele Serfilippi</h1>;
  const tagline = <h2 className="tagline">Senior Software Engineer &amp; Architect</h2>;
  const social = <Social />;

  const items = [picture, name, tagline, social];

  return (
    <StyledHeroSection>
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
    </StyledHeroSection>
  );
};

export { Hero };
