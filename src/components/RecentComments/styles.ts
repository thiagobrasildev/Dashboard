import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const Comments = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 80px;
  margin-bottom: 30px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;

    span {
      display: flex;
    }

    span > b {
      font-size: 2rem;
      font-weight: normal;
      padding-bottom: 5px;
    }

    span > p {
      font-size: 1.5rem;
      font-weight: 400;
      opacity: 0.6;
    }
  }

  article {
    font-size: 1.5rem;
    width: 95%;
  }

  @media (max-width: 426px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;
