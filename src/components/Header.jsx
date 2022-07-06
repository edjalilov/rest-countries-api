import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMoon, IoMoonOutline } from "react-icons/io5";
import { Container } from "./Container";

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
  font-size: 14px;
  text-decoration: none;
  font-weight: 800;
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
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where us the world?</Title>
          <ModeSwitcher onClick={changeTheme}>
            {theme === "light" ? (
              <IoMoonOutline size="16px" />
            ) : (
              <IoMoon size="16px" />
            )}

            <span style={{ marginLeft: "0.75rem" }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
