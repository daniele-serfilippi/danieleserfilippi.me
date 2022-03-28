import React from 'react';
import styled from 'styled-components';

const xOffset = 750;
const yOffset = 650;
const width = 1500;
const height = 800;

const commonStyles = `
  position: fixed;
  z-index: -1;
  background-color: #233554;
  border-radius: 50%;
  height: ${height}px;
  width: ${width}px;
`;

const StyledTopEllipse = styled.div`
  ${commonStyles}
  top: -${yOffset}px;
  left: -${xOffset}px;
`;

const StyledBottomEllipse = styled.div`
  ${commonStyles}
  bottom: -${yOffset}px;
  right: -${xOffset}px;
`;

const TopBottomEllipses = () => (
  <>
    <StyledTopEllipse />
    <StyledBottomEllipse />
  </>
);

export { TopBottomEllipses };
