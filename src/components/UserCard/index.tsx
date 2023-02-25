import * as S from "./styles";
import { FaEnvelope, FaUserAlt, FaCog } from "react-icons/fa";
import avatar from "../../assets/avatar2.png";

export const UserCard = () => {
  return (
    <S.Container>
      <S.Avatar>
        <img src={avatar} alt="avatar" />
      </S.Avatar>
      <S.Infos>
        <h1>
          Welcome, <b>Mike</b>
        </h1>
        <div>
          <span>
            <FaEnvelope />
          </span>
          <span>
            <FaUserAlt />
          </span>
          <span>
            <FaCog />
          </span>
        </div>
      </S.Infos>
    </S.Container>
  );
};
