import styled from 'styled-components';
import './style.css';

const ToggleButton = styled.button.attrs({
  className: props => props.active,
})`
  font-size: 15px;
  padding: 15px;
  border-radius: 25px;
  font-weight: bolder;
`;

export default ToggleButton;
