import { useState } from "react";
import {
  FaBell,
  FaBullseye,
  FaCog,
  FaHistory,
  FaLandmark,
  FaRegEye,
  FaRegGem,
  FaUsers,
  FaWindowClose,
} from "react-icons/fa";
import * as S from "./styles";

type Props = {
  closeMenu?: boolean;
  handleMenuToggle?: () => void;
};

export const Navbar = ({ closeMenu, handleMenuToggle }: Props) => {
  const [btnClose, setBtnClose] = useState(closeMenu);
  return (
    <S.Container>
      <h1>Dashboard</h1>
      {closeMenu && (
        <div
          className="btn-close-menu"
          onClick={handleMenuToggle}
          title="close menu"
        >
          <FaWindowClose />
          Close menu
        </div>
      )}
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
