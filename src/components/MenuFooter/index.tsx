import * as S from "./styles";

type Props = {
  links: string[];
  title: string;
  colorBar: string;
};

export const MenuFooter = ({ links, title, colorBar }: Props) => {
  return (
    <S.Container>
      <S.Title colorBar={colorBar}>{title}</S.Title>
      {links.map((item, index) => (
        <S.ItemMenu key={index}>{item}</S.ItemMenu>
      ))}
    </S.Container>
  );
};
