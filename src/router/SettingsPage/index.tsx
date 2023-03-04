import { FaCog } from "react-icons/fa";
import * as S from "./styles";

export const SettingsPage = () => {
  return (
    <S.Settings>
      <span>
        <FaCog />
        <b>Settings</b>
      </span>
    </S.Settings>
  );
};
