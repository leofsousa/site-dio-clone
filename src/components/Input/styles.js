import styled from "styled-components";

export const InputContainer = styled.div`
  max-width: 275px;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #8647ad;

  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const IconContainer = styled.div`
  margin: 0 10px;
  color: #8647ad;
`;
export const ErrorText = styled.p`
  color: #ff0000;
  font-size: 12px;
  margin: 5px 0;
`;

export const InputText = styled.input`
  background-color: transparent;
  color: #ffffff;
  width: 100%;
  border: 0;
  height: 30px;
  border: none;
  &:focus {
    border-bottom: 1px solid #8647ad;
    outline: none;
  }
`;
