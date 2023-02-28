import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;

  > div {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%);
  }
`;

export const Users = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid #ccc;
  overflow: hidden;
  padding: 16px;
  gap: 20px;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  p {
    font-size: 2.4rem;
  }
`;
