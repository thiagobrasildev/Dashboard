import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
`;

export const Avatar = styled.div`
  display: flex;
  overflow: hidden;
  margin-left: 16px;
  margin-top: 22px;
  margin-right: 46px;

  img {
    max-width: 46px;
    max-height: 46px;
    border-radius: 50%;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 60px;
  margin-top: 22px;

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 5px;
  }

  div {
    display: flex;
    height: 100%;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 15px;
      cursor: pointer;

      svg {
        font-size: 1.5rem;
      }

      &:hover {
        background-color: #ccc;
      }
    }
  }
`;
