import styled from 'styled-components';

const InputContainer = styled.input`
  border: 1px solid #c9d6df;
  padding: 10px;
  font-size: 16px;
  color: #52616b;
  paddingleft: 10px;
  background: #fff;
  width: 250px;
  margin-top: 10px;
  border-radius: 4px;

  @media (max-width: 350px) {
    width: 150px;
  }
`;

export default InputContainer;
