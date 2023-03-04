import styled from "styled-components";

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
