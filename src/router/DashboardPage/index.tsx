import {
  FaComment,
  FaRegEye,
  FaShareAlt,
  FaTachometerAlt,
  FaUsers,
} from "react-icons/fa";
import { CardColors } from "../../components/CardColors";
import { Countries } from "../../components/Countries";
import { Feeds } from "../../components/Feeds";
import { GeneralStats } from "../../components/GeneralStats";
import { RecentComments } from "../../components/RecentComments";
import { RecentUser } from "../../components/RecentUser";
import { Regions } from "../../components/Regions";
import * as S from "./styles";

export const DashboardPage = () => {
  return (
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
  );
};
