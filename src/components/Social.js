import React from 'react';
import styled from 'styled-components';
import { config } from '@config';
import { Icon } from '@components/icons';

const { socialMedia } = config;

const StyledSocialList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    a {
      padding: 24px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Social = () => (
  <StyledSocialList>
    {socialMedia &&
      socialMedia.map(({ url, name }, i) => (
        <li key={i}>
          <a href={url} aria-label={name} target="_blank" rel="noreferrer">
            <Icon name={name} />
          </a>
        </li>
      ))}
  </StyledSocialList>
);

export { Social };
