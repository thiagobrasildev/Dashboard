import { useState } from "react";
import { Title } from "../Title";
import { comments } from "../../Data/comments";

import * as S from "./styles";

export const RecentComments = () => {
  const [listComments, setListComments] = useState(comments);
  return (
    <S.Container>
      <Title>Recent Comments</Title>
      <div>
        {listComments.map((item, index) => (
          <S.Comments key={index}>
            <img src={item.avatar} alt="avatar" />
            <div>
              <span>
                <b>{item.nickName}</b>
                <p>{item.date}</p>
              </span>
              <article>{item.comment}</article>
            </div>
          </S.Comments>
        ))}
      </div>
    </S.Container>
  );
};
