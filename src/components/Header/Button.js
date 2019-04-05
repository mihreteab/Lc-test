import styled from 'styled-components';
import { utils } from 'styled-minimal';

const { responsive, spacer } = utils;

const Button = styled.button`
  align-items: center;
  color: #333;
  font-size: 1.3rem;
  padding: ${spacer(2)};

  ${responsive({ lg: 'font-size: 1.6rem;' })}; /* stylelint-disable-line */

  &.active {
    span {
      display: inline-block;
      margin-right: 0.4rem;
      text-transform: uppercase;
    }
  }
`;

export default Button;
