import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  background-color: ${(props) => props.theme.colors.backgroundSidebar};

  h1 {
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 20px;
    margin-left: 10px;
  }

  ul {
    width: 100%;

    li {
      width: 100%;

      a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        padding: 10px 16px;
        font-size: 1.5rem;
        font-weight: 400;
        cursor: pointer;
        gap: 10px;
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};

        &.active {
          background-color: #2196f3;
          color: #fff;
        }

        svg {
          font-size: 1.5rem;
        }

        &:hover {
          background-color: #ccc;
          color: #000;
        }
      }
    }
  }

  .btn-close-menu {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    background-color: #616161;
    padding: 16px;
    color: #fff;
    font-size: 1.5rem;
    gap: 10px;

    &:hover {
      background-color: #000;
    }
  }
`;
