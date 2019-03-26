import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Icon } from 'assets/media/brand/new-icon.svg';

export const Logo = styled.div`
  align-items: flex-start;
  display: inline-flex;
  font-size: 0;
  transform: scale(3);
  margin-left: 50px;

  svg {
    height: auto;
    max-height: 100%;
    width: 4.8rem;
  }
`;

export default () => (
  <Logo>
    <Icon />
  </Logo>
);
