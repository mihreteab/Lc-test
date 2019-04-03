import styled, { css } from 'styled-components';
import { utils } from 'styled-minimal';
import { NavLink as navLink } from 'react-router-dom';

const { responsive } = utils;

const NavLink = styled(navLink).attrs({
  to: `${props => props.to}`,
  activeStyle: {
    padding: '8px 20px',
    boxShadow:
      '0px 1px 2px rgba(8, 35, 48, 0.24), 0px 2px 6px rgba(8, 35, 48, 0.16)',
  },
  className: 'active',
})`
  color: #001b36 !important;
  border-radius: 6px;
  padding: 10px;

  ${responsive({
    lg: 'font-size: 16px;',
    md: 'font-size: 12px; padding: 8px',
    sm: 'font-size: 10px; padding: 4px',
  })}; /* stylelint-disable-line */

  ${props =>
    props.border &&
    css`
      border: 1px solid #007bff;
    `};
`;

export default NavLink;
