import styled, { css } from 'styled-components';
import { utils } from 'styled-minimal';

const { responsive } = utils;

const SelectBoxWrapper = styled.div`
  width: 350px;
  position: absolute;
  top: 15px;

  @media (max-width: 400px) {
    width: 256px;
  }

  ${props =>
    props.top &&
    css`
      top: 0px;
    `}
`;

export default SelectBoxWrapper;
