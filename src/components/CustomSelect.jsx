import styled from "styled-components";

import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: "var(--color-ui-base)",
      color: "var(--color-text)",
      borderRadius: "5px",
      padding: "0.25rem",
      border: "none",
      height: "50px",
      cursor: "pointer",
      transition: "0.3s",
      boxShadow: "var(--shadow)",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      color: "var(--color-text)",
      "&:hover": {
        backgroundColor: "var(--color-bg)",
      },
      backgroundColor: state.isSelected
        ? "var(--color-bg)"
        : "var(--color-ui-base)",
    }),
  },
})`
  width: 200px;
  border: none;
  border-radius: 8px;
  & > * {
    &:hover {
      box-shadow: var(--shadow);
    }
    transition: 0.3s;
  }
  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--color-text) !important;
  }
  & > div[id] {
    background-color: var(--color-ui-base);
  }
`;
