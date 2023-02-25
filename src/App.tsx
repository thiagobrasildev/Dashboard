import {
  FaComment,
  FaRegEye,
  FaShareAlt,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
import * as S from "./AppStyles";
import { CardColors } from "./components/CardColors";
import { Feeds } from "./components/Feeds";
import { Logo } from "./components/Logo";
import { Navbar } from "./components/Navbar";
import { Regions } from "./components/Regions";
import { UserCard } from "./components/UserCard";

export const App = () => {
  return (
    <S.ContainerMain>
      <S.Header>
        <S.MenuMobile>menu</S.MenuMobile>
        <Logo />
      </S.Header>
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
      </S.Dashboard>
    </S.ContainerMain>
  );
};
