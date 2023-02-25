import {
  FaBell,
  FaBullseye,
  FaCog,
  FaHistory,
  FaLandmark,
  FaRegEye,
  FaRegGem,
  FaUsers,
} from "react-icons/fa";
import * as S from "./styles";

export const Navbar = () => {
  return (
    <S.Container>
      <h1>Dashboard</h1>
      <ul>
        <li className="selected">
          <FaUsers />
          Overview
        </li>
        <li>
          <FaRegEye />
          Views
        </li>
        <li>
          <FaUsers />
          Traffic
        </li>
        <li>
          <FaBullseye />
          Geo
        </li>
        <li>
          <FaRegGem />
          Orders
        </li>
        <li>
          <FaBell />
          News
        </li>
        <li>
          <FaLandmark />
          General
        </li>
        <li>
          <FaHistory />
          History
        </li>
        <li>
          <FaCog />
          Settings
        </li>
      </ul>
    </S.Container>
  );
};
