import styled from '@emotion/styled';

export const Form = styled.form`
  border: 1px solid #bbb3b3;
  border-radius: 5px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  background-color: #e4eba1;
`;

export const Label = styled.label`
  display: flex;
  flex-flow: column wrap;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 2;
  font-size: 20px;
  color: #2a2a2a;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 350px;
  height: 25px;
  color: #2a2a2a;
  background-color: #eaf7c1;
  border: 1px solid #bbb3b3;
  border-radius: 3px;
  margin: auto;
`;

export const ButtonAdd = styled.button`
  width: 130px;
  height: 40px;
  text-transform: uppercase;
  background-color: #4ec6ef;
  color: #eaf7c1;
  cursor: pointer;
  border: 1px solid #4ec6ef;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 30px;
`;