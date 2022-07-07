import styled from "styled-components";

const Wrapper = styled.article`
  border-radius: 8px;
  background-color: var(--color-ui-base);
  &:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow);
  }
  transition: 0.3s;
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-postion: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 16px;
  margin: 0;
  font-weight: 800;
`;

const CardList = styled.ul`
  list-style: none;
  padding: 1rem 0 0;
  margin: 0;
`;

const CardListItem = styled.li`
  font-size: 14px;
  line-height: 1.5;

  & > b {
    font-weight: 800;
  }
`;

export const Card = ({ img, name, info, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}: </b> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};
