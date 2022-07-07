import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Container } from "./Container";
import styled from "styled-components";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--color-text);
  font-size: 18px;
  text-decoration: none;
  font-weight: 800;
  @media (max-width: 575px) {
    font-size: 14px;
  }
`;

const Span = styled.span`
  margin-left: 0.75rem;
  font-size: 16px;
  @media (max-width: 575px) {
    font-size: 14px;
  }
`;

const ModeSwitcher = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text);
  font-size: 14px;
  cursor: pointer;
  font-weight: 800;
  text-transform: capitalize;
`;

export const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Countries of The World</Title>
          <ModeSwitcher onClick={changeTheme}>
            {theme === "light" ? (
              <IoMoonOutline size="16px" />
            ) : (
              <IoMoon size="16px" />
            )}

            <Span>{theme} Theme</Span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
