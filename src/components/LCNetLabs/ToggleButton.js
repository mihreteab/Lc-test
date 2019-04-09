import styled, { css } from 'styled-components';

const ToggleButton = styled.button`
  width: 112px;
  height: 40px;
  font-size: 12px !important;
  padding: 10px;
  border-radius: 20px;
  font-weight: bolder;
  ${props =>
    props.active &&
    css`
      color: #fff;
      background: #00d67c;
    `};
  &:focus {
    outline: none;
  }
`;

export default ToggleButton;
