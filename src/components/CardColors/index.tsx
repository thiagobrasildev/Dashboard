import { FaTachometerAlt } from "react-icons/fa";
import * as S from "./styles";

type PropsType = {
  icon: React.ReactNode;
  number: number;
  text: string;
  color?: string;
};
export const CardColors = ({ icon, number, text, color }: PropsType) => {
  return (
    <S.Container bgColor={color}>
      <div>
        <S.Icon>{icon}</S.Icon>
        <S.Number>{number}</S.Number>
      </div>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
};
