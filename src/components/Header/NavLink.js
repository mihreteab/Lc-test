import styled from 'styled-components';

const NavLink = styled.a.attrs({
  className: props => props.border,
})`
  color: #000000 !important;
  margin-right: 15px;
  border-radius: 6px;
  padding: 10px;
`;

export default NavLink;
