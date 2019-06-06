import styled from 'styled-components';
import { utils } from 'styled-minimal';

const { responsive } = utils;
const SelectedItem = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  font-size: 24px;
  padding: 10px 12px;
  vertical-align: middle;
`;

export default SelectedItem;
