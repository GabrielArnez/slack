import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  padding: 0 16px;
  margin-top: 22px;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 7px;

  &::placeholder {
    color: #8a8c90;
    padding-left: 10px;
  }
`;