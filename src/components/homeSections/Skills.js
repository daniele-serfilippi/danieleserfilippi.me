import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { scrollRevealConfig } from '@config';
import { scrollReveal } from '@utils/scrollReveal';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';

const StyledSkillsSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
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

    scrollReveal.reveal(revealContainer.current, scrollRevealConfig());
  }, []);

  const skills = ['JavaScript', 'TypeScript', 'React', 'NodeJs'];

  return (
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Something about me...</p>

            <p>Something else about me...</p>

            <p>Something else about me...</p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <div className="skills-list">
            {skills.map((skill, i) => (
              <Icon name={skill} key={i} />
            ))}
          </div>
        </StyledText>
      </div>
    </StyledSkillsSection>
  );
};

export { Skills };
