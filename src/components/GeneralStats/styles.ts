import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 5px;
`;

type Props = {
  bgColor: string;
  fontColor: string;
  width: number;
};

export const Stats = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    font-size: 1.5rem;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .container-bar {
    display: flex;
    width: 100%;
    height: 4rem;
    background-color: #9e9e9e;

    span {
      height: 100%;
      width: ${(props) => props.width}%;
      background-color: ${(props) => props.bgColor};
      color: ${(props) => props.fontColor};
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
