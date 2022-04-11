import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { Layout } from '@components';
import { navDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledMainContainer = styled.main`
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: var(--yellow);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;
const StyledHomeButton = styled(Link)`
  margin-top: 40px;
`;

const NotFoundPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const content = (
    <StyledMainContainer className="fillHeight flex-center">
      <StyledTitle>404</StyledTitle>
      <StyledSubtitle>Page Not Found</StyledSubtitle>
      <StyledHomeButton href="/">
        <a className="big-button">Go Home</a>
      </StyledHomeButton>
    </StyledMainContainer>
  );

  return (
    <Layout>
      <Head>
        <title>Page Not Found</title>
      </Head>

      {prefersReducedMotion ? (
        <>{content}</>
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition timeout={500} classNames="fadeup">
              {content}
            </CSSTransition>
          )}
        </TransitionGroup>
      )}
    </Layout>
  );
};

export default NotFoundPage;
