import { Title } from "../Title";
import * as S from "./styles";
import image from "../../assets/region.jpg";

export const Regions = () => {
  return (
    <S.Container>
      <Title>Regions</Title>
      <img src={image} alt="region" />
    </S.Container>
  );
};
