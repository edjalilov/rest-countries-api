import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { searchByCountry } from "../config";
import { Info } from "../components/Info";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--color-ui-base);
  &:hover {
    box-shadow: var(--shadow);
  }
  transition: 0.3s;
  line-height: 2.5;
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text);
  cursor: pointer;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const Details = () => {
  const [country, setCountry] = useState(null);
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <>
      <Button onClick={() => navigate(-1)}>
        <IoChevronBackOutline /> Back
      </Button>
      {country ? (
        <Info navigate={navigate} {...country} />
      ) : (
        <Loader>
          <ThreeDots height="80" width="80" color="grey" ariaLabel="loading" />
        </Loader>
      )}
    </>
  );
};
