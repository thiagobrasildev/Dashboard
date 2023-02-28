import { useState } from "react";
import {
  FaBars,
  FaComment,
  FaRegEye,
  FaShareAlt,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
import * as S from "./AppStyles";
import { CardColors } from "./components/CardColors";
import { Countries } from "./components/Countries";
import { Feeds } from "./components/Feeds";
import { Footer } from "./components/Footer";
import { GeneralStats } from "./components/GeneralStats";
import { Logo } from "./components/Logo";
import { MenuFooter } from "./components/MenuFooter";
import { Navbar } from "./components/Navbar";
import { RecentComments } from "./components/RecentComments";
import { RecentUser } from "./components/RecentUser";
import { Regions } from "./components/Regions";
import { UserCard } from "./components/UserCard";

export const App = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <S.ContainerMain>
      <S.Header>
        <S.MenuMobile onClick={handleMenuToggle}>
          <FaBars color="#fff" size={18} />
          Menu
        </S.MenuMobile>
        <Logo />
      </S.Header>
      {toggleMenu && (
        <S.Modal onClick={handleMenuToggle} title="close side menu">
          <S.SidebarMobile onClick={(e) => e.stopPropagation()} title="">
            <UserCard />
            <Navbar
              closeMenu={toggleMenu}
              handleMenuToggle={handleMenuToggle}
            />
          </S.SidebarMobile>
        </S.Modal>
      )}
      <S.Sidebar>
        <UserCard />
        <Navbar />
      </S.Sidebar>
      <S.Dashboard>
        <span>
          <FaTachometerAlt />
          <b>My Dashboard</b>
        </span>
        <div className="card-infos">
          <CardColors
            icon={<FaComment />}
            number={52}
            text="Messages"
            color="#f44336"
          />
          <CardColors
            icon={<FaRegEye />}
            number={99}
            text="Views"
            color="#2196f3"
          />
          <CardColors
            icon={<FaShareAlt />}
            number={23}
            text="Shares"
            color="#009688"
          />
          <CardColors
            icon={<FaUsers />}
            number={50}
            text="Users"
            color="#ff9800"
          />
        </div>
        <div className="regions-feeds">
          <Regions />
          <Feeds />
        </div>
        <div className="general-stats">
          <GeneralStats />
        </div>
        <div className="countries">
          <Countries />
        </div>
        <div className="recent-users">
          <RecentUser />
        </div>
        <div className="recent-comments">
          <RecentComments />
        </div>
      </S.Dashboard>
      <div className="menu-footer">
        <MenuFooter
          title="Demographic"
          colorBar="#4caf50"
          links={["Language", "Country", "City"]}
        />
        <MenuFooter
          title="System"
          colorBar="#f44336"
          links={["Browser", "OS", "More"]}
        />
        <MenuFooter
          title="Target"
          colorBar="#ff9800"
          links={["Users", "Active", "Geo", "Interests"]}
        />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </S.ContainerMain>
  );
};
