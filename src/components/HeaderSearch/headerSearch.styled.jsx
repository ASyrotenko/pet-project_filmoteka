import styled from "styled-components";
import { Search } from "../../shared/utils/icons";

const Form = styled.form`
  position: relative;
  margin: 0 auto;
  max-width: 336px;
`;

const Input = styled.input`
  padding-right: 16px;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.headerInputBorder};
  outline: none;

  font-family: "Roboto-Regular";
  font-size: 14px;
  line-height: 1.14;
  color: ${({ theme }) => theme.colors.headerText};
`;

const Button = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  right: 0;
`;

const SearchIcon = styled(Search)``;

export { Form, Input, Button, SearchIcon };
