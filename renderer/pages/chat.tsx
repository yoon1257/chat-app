import { NextPage } from "next";
import styled from "styled-components";
import SidePanel from "../components/chatpage/sidePanel/SidePanel";
import MainPanel from "../components/chatpage/mainPanel/MainPanel";

const userlist: NextPage = () => {
  return (
    <UserListContainer>
      <div className="sidepanel-wrap">
        <SidePanel />
      </div>
      <div className="mainpanel-wrap">
        <MainPanel />
      </div>
    </UserListContainer>
  );
};

const UserListContainer = styled.div`
  display: flex;
  .sidepanel-wrap {
    width: 300px;
  }
  .mainpanel-wrap {
    width: 100%;
  }
`;
export default userlist;
