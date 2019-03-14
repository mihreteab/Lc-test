import styled from 'styled-components';
import { utils } from 'styled-minimal';

const { responsive, spacer } = utils;

const Button = styled.button`
  align-items: center;
  color: #333;
  display: flex;
  font-size: 1.3rem;
  padding: ${spacer(2)};

  ${responsive({ lg: 'font-size: 1.6rem;' })}; /* stylelint-disable-line */

  color: #000;
}
      &.active {

  span {
    display: inline-block;
    margin-right: 0.4rem;
    text-transform: uppercase; 
  }
`;

export default Button;
