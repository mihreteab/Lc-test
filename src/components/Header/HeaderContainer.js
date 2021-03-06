import styled from 'styled-components';
import { utils } from 'styled-minimal';

const { spacer } = utils;

const HeaderContainer = styled.div.attrs({
  className: 'mx-5',
})`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  padding-bottom: ${spacer(2)};
  padding-top: ${spacer(2)};
`;

export default HeaderContainer;
