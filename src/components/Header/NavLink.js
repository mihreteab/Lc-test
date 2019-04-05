import styled, { css } from 'styled-components';
// import { utils } from 'styled-minimal';
import { NavLink as navLink } from 'react-router-dom';

// const { responsive } = utils;

const NavLink = styled(navLink).attrs({
  to: `${props => props.to}`,
  activeStyle: {
    padding: '8px 20px',
    boxShadow:
      '0px 1px 2px rgba(8, 35, 48, 0.1), 0px 2px 6px rgba(8, 35, 48, 0.1)',
  },
  className: 'active',
})`
  color: #001b36 !important;
  border-radius: 6px;
  padding: 18px 20px;
  font-size: 14px;
  text-decoration: none !important;

  ${props =>
    props.border &&
    css`
      border: 1px solid #007bff;
      padding: 8px 20px;
    `};
`;

export default NavLink;
