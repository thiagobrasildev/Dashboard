import styled from "styled-components";

export const Orders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 300px;
  margin-top: 80px;
  padding: 0px 16px;
  min-height: 100vh;

  span {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 12px;
    gap: 5px;

    svg {
      font-size: 1.8rem;
    }

    b {
      font-size: 1.8rem;
      font-weight: bolder;
    }
  }
`;
