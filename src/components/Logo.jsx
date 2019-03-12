import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Icon } from 'assets/media/brand/icon.svg';

export const Logo = styled.div`
  align-items: flex-start;
  display: inline-flex;
  font-size: 0;
  transform: scale(1.8);
  margin-left: 15px;

  svg {
    height: auto;
    max-height: 100%;
    width: 6.8rem;
  }
`;

export default () => (
  <Logo>
    <Icon />
  </Logo>
);
