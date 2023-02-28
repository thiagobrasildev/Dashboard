import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #ccc;
  }
`;

type Props = {
  bgColor: string;
};

export const CountriesItem = styled.div<Props>`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #ccc;
  font-size: 1.5rem;
  padding: 10px 10px;
  background-color: ${(props) => props.bgColor};

  p:first-of-type {
    width: 70%;
  }

  &:hover {
    background-color: #ccc;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 20px;
  background-color: #616161;
  padding: 10px 16px;
  font-size: 1.5rem;
  color: #fff;
  gap: 5px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background-color: #ccc;
    color: #000;
  }
`;
