import styled, { css } from 'styled-components';
import { utils } from 'styled-minimal';

const { responsive } = utils;

const ArrowDir = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-radius: 2px;

  ${responsive({
    lg: `border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 16px solid #c4c4c4;`,
    md: `borderLeft: 12px solid transparent !important; 
        border-right: 10px solid transparent; 
        border-top: 14px solid #c4c4c4`,
  })}

  ${props =>
    props.up &&
    css`
      transform: rotate(180deg);
      top: 22px;
      left: 16px;
    `};

  ${props =>
    props.down &&
    css`
      top: 24px;
      left: 16px;
    `};
`;

export default ArrowDir;
