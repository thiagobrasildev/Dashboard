import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

type Props = {
  colorBar: string;
};
export const Title = styled.div<Props>`
  font-size: 1.8rem;
  color: #fff;
  font-weight: 400;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: ${(props) => props.colorBar};
    margin-top: 24px;
  }
`;
export const ItemMenu = styled.div`
  font-size: 1.5rem;
  color: #fff;
`;
