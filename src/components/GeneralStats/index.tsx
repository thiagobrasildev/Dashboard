import { Title } from "../Title";
import { generalStats } from "../../Data/generalStats";
import * as S from "./styles";
import { useState } from "react";

export const GeneralStats = () => {
  const [stats, setStats] = useState(generalStats);
  return (
    <S.Container>
      <Title>Genaral Stats</Title>
      <div>
        {stats.map((item, index) => (
          <S.Stats
            key={index}
            bgColor={item.bgColor}
            fontColor={item.fontColor}
            width={item.progress}
          >
            <p>{item.info}</p>
            <div className="container-bar">
              <span>{item.stats}</span>
            </div>
          </S.Stats>
        ))}
      </div>
    </S.Container>
  );
};
