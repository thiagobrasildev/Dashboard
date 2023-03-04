import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;

  > div {
    width: 100%;
  }
`;

type Props = {
  bg: string;
  colorIcon: string;
};

export const IconList = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  background-color: ${(props) => props.bg};

  i {
    margin: 10px 8px 10px 16px;
    width: 9%;
    height: 100%;
    color: ${(props) => props.colorIcon};
  }

  p {
    margin: 10px 8px 10px 16px;
    display: flex;
    height: 100%;
    font-style: italic;

    &:first-of-type {
      width: 60%;
      font-style: normal;
    }
  }
`;
