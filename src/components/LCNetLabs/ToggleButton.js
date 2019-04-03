import styled, { css } from 'styled-components';

const ToggleButton = styled.button.attrs({
  className: 'col-lg-6 col-md-6 col-sm-6 col-xs-6',
})`
  font-size: 15px;
  padding: 15px;
  border-radius: 25px;
  font-weight: bolder;

  ${props =>
    props.active &&
    css`
      color: #fff;
      background: #00d67c;
    `};
`;

export default ToggleButton;
