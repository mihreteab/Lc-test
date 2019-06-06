import styled from 'styled-components';

const InputContainerLarge = styled.input`
  padding: 8px;
  font-size: 16px;
  color: #000;
  padding-left: 10px;
  border: none;
  background: #f0f5f9;
  width: 690px;
  height: ${props => props.height || '50px'};
`;

export default InputContainerLarge;
