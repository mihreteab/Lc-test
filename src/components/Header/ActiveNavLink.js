import styled from 'styled-components';
import NavLink from './NavLink';

const ActiveNavLink = styled(NavLink)`
  padding: 8px 20px;
  box-shadow: 0px 1px 2px rgba(8, 35, 48, 0.24), 0px 2px 6px rgba(8, 35, 48, 0.16);
`;

export default ActiveNavLink;
