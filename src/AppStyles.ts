import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  flex-direction: column;
  background-color: #f1f1f1;

  .menu-footer {
    display: flex;
    margin-top: 20px;
    background-color: #616161;
    margin-left: 300px;
    padding: 40px 30px;
    gap: 30px;
  }

  .footer {
    display: flex;
    margin-left: 300px;
    padding: 30px 20px;
  }

  @media (max-width: 993px) {
    .menu-footer,
    .footer {
      margin-left: 0px;
    }
  }

  @media (max-width: 426px) {
    .menu-footer,
    .footer {
      flex-direction: column;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 4px 0px;
  background-color: #000;
  position: fixed;
  z-index: 999;

  @media (max-width: 993px) {
    justify-content: space-between;
    height: 46px;
  }
`;

export const MenuMobile = styled.div`
  height: 100%;
  padding: 10px;
  margin-left: 10px;
  color: #fff;
  display: none;
  font-size: 1.8rem;

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 10px;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 300px;
  height: 100%;
  position: fixed;
  margin-top: 46px;
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

export const Modal = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: open-modal 0.5s;
  top: 46px;
  z-index: 1000;
  cursor: pointer;

  @keyframes open-modal {
    0% {
      background-color: rgba(0, 0, 0, 0.2);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const SidebarMobile = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  background-color: #fff;
  animation: open-sidebar-mobile 0.5s;

  @keyframes open-sidebar-mobile {
    0% {
      left: -300px;
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
  margin-left: 300px;
  margin-top: 80px;
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

  .general-stats {
    display: flex;
    width: 100%;
    margin-top: 60px;
  }

  .countries {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 60px;
  }

  .recent-users {
    display: flex;
    width: 100%;
    margin-top: 60px;
  }

  .recent-comments {
    display: flex;
    width: 100%;
    margin-top: 60px;
  }

  @media (max-width: 992px) {
    margin-left: 0px;
    width: 100%;
  }

  @media (max-width: 600px) {
    .card-infos,
    .regions-feeds {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 0;
    }

    .regions-feeds {
      gap: 20px;
    }
  }
`;
