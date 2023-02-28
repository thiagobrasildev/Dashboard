import { useState } from "react";
import { Title } from "../Title";
import { users } from "../../Data/users";

import * as S from "./styles";

export const RecentUser = () => {
  const [listUsers, setListUsers] = useState(users);
  return (
    <S.Container>
      <Title>Recent Users</Title>
      <div>
        {listUsers.map((item, index) => (
          <S.Users key={index}>
            <img src={item.avatar} alt="avatar" />
            <p>{item.nickName}</p>
          </S.Users>
        ))}
      </div>
    </S.Container>
  );
};
