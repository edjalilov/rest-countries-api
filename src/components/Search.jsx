import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--color-ui-base);
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: var(--shadow);
  transition: 0.3s;
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search for a country...",
  color: "var(--color-text)",
})`
  ::placeholder {
    color: var(--color-text);
  }
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--color-ui-base);
`;

export const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};
