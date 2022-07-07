import styled from "styled-components";

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 70px;
  font-weight: 800;
  text-align: center;
  color: var(--color-text);

  @media (max-width: 575px) {
    font-size: 33px;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: 300;
  text-align: center;
  color: var(--color-text);
  @media (max-width: 575px) {
    font-size: 14px;
  }
`;

export const NotFound = () => {
  return (
    <>
      <Item>
        <Title>
          404 <span style={{ fontWeight: 300 }}>|</span> Not Found
        </Title>
      </Item>
      <Text>The requested page was not found</Text>
    </>
  );
};
