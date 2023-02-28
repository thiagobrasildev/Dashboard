import styled from "styled-components";

type Props = {
  bgColor?: string;
};

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.bgColor};
  flex: 1;
  color: #fff;
  padding: 16px;

  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  font-size: 4.8rem;
`;

export const Number = styled.div`
  font-size: 2.4rem;
  margin-top: 10px;
`;

export const Text = styled.p`
  font-size: 2rem;
  margin-bottom: 10px;
`;
