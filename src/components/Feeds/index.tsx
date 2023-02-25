import { useState } from "react";
import { Title } from "../Title";
import * as S from "./styles";
import { feeeds } from "../../Data/DataFeeds";

type ListFeeds = {
  icon: string;
  name: string;
  time: string;
  colorBg: string;
  colorIcon: string;
};

export const Feeds = () => {
  const [data, setData] = useState<ListFeeds[]>(feeeds);
  return (
    <S.Container>
      <Title>Feeds</Title>
      <div>
        {data.map((item, index) => (
          <S.IconList key={index} bg={item.colorBg} colorIcon={item.colorIcon}>
            <i className={item.icon}></i>
            <p>{item.name}</p>
            <p>{item.time}</p>
          </S.IconList>
        ))}
      </div>
    </S.Container>
  );
};
