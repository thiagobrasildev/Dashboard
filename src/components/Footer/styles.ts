import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 400;
  }

  p {
    font-size: 1.5rem;
  }

  a {
    color: ${(props) => props.theme.colors.text};
  }
`;
