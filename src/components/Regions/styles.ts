import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  overflow: hidden;
  gap: 15px;

  img {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
