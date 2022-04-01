import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { config } from '@config';
// import { scrollReveal } from '@utils/scrollReveal';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';

// const { scrollRevealConfig } = config;

const StyledSkillsSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }

    .tech-container {
      padding: 16px;
      text-align: center;

      svg,
      img {
        width: 64px;
        height: 64px;
      }

      p {
        font-weight: 300;
        font-size: var(--fz-sm);
        margin-top: 10px;
      }
    }
  }
`;
const StyledText = styled.div``;

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
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Something about me...</p>

            <p>Something else about me...</p>

            <p>Something else about me...</p>
          </div>

          <div className="tech-list">
            {techs.map((tech, i) => (
              <div className="tech-container" key={i}>
                <Icon name={tech} key={i} />
                <p>{tech}</p>
              </div>
            ))}
          </div>
        </StyledText>
      </div>
    </StyledSkillsSection>
  );
};

export { Skills };
