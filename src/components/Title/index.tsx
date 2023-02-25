import { Container } from "./styles";

type Props = {
  children: React.ReactNode;
};
export const Title = ({ children }: Props) => {
  return <Container>{children}</Container>;
};
