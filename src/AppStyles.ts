import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  flex-direction: column;
  background-color: #f1f1f1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 7%;
  background-color: #000;
  position: fixed;

  @media (max-width: 993px) {
    justify-content: space-between;
  }
`;

export const MenuMobile = styled.div`
  width: 10%;
  height: 100%;
  padding: 10px;
  color: #fff;
  display: none;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  min-width: 22%;
  height: 100vh;
  position: fixed;
  top: 7%;
  animation: open-menu 0.3s;

  @media (max-width: 992px) {
    display: none;
  }

  @keyframes open-menu {
    0% {
      left: -22%;
    }
    100% {
      left: 0;
    }
  }
`;

export const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 78%;
  height: 1000px;
  margin-left: 22%;
  margin-top: 6%;
  padding: 0px 16px;

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

  .card-infos {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
  }

  .regions-feeds {
    display: flex;
    width: 100%;
    gap: 1.6rem;
    margin-top: 30px;
  }

  @media (max-width: 992px) {
    margin-left: 0px;
    width: 100%;
  }
`;
