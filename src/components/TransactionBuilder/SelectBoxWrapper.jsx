import styled, { css } from 'styled-components';

const SelectBoxWrapper = styled.div`
  width: 350px;
  position: absolute;
  top: 15px;

  ${props =>
    props.top &&
    css`
      top: 0px;
    `}
`;

export default SelectBoxWrapper;
