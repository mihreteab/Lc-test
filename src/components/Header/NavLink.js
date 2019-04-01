import styled, { css } from 'styled-components';

const NavLink = styled.a.attrs({
  className: props => props.border,
})`
  color: #000000 !important;
  margin-right: 15px;
  border-radius: 6px;
  padding: 10px;

  ${props => {
    return (
      props.active &&
      css`
        padding: 8px 20px;
        box-shadow: 0px 1px 2px rgba(8, 35, 48, 0.24),
          0px 2px 6px rgba(8, 35, 48, 0.16);
      `
    );
  }}
`;

export default NavLink;
