import { useState, useContext } from "react";
import {
  FaBell,
  FaBullseye,
  FaCog,
  FaHistory,
  FaLandmark,
  FaMoon,
  FaRegEye,
  FaRegGem,
  FaTachometerAlt,
  FaUsers,
  FaWindowClose,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import * as S from "./styles";

type Props = {
  closeMenu?: boolean;
  handleMenuToggle?: () => void;
};

export const Navbar = ({ closeMenu, handleMenuToggle }: Props) => {
  const [btnClose, setBtnClose] = useState(closeMenu);

  return (
    <S.Container>
      <h1>Dasboard</h1>
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
        <li>
          <NavLink to="/">
            <FaTachometerAlt />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/overview">
            <FaUsers />
            Overview
          </NavLink>
        </li>

        <li>
          <NavLink to="/views">
            <FaRegEye />
            Views
          </NavLink>
        </li>

        <li>
          <NavLink to="/traffic">
            <FaUsers />
            Traffic
          </NavLink>
        </li>

        <li>
          <NavLink to="geo">
            <FaBullseye />
            Geo
          </NavLink>
        </li>

        <li>
          <NavLink to="orders">
            <FaRegGem />
            Orders
          </NavLink>
        </li>

        <li>
          <NavLink to="news">
            <FaBell />
            News
          </NavLink>
        </li>

        <li>
          <NavLink to="general">
            <FaLandmark />
            General
          </NavLink>
        </li>

        <li>
          <NavLink to="history">
            <FaHistory />
            History
          </NavLink>
        </li>

        <li>
          <NavLink to="settings">
            <FaCog />
            Settings
          </NavLink>
        </li>
      </ul>
    </S.Container>
  );
};
