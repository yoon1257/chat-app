import { NextPage } from "next";
import styled from "styled-components";
import SidePanel from "../components/chatpage/sidePanel/SidePanel";
import MainPanel from "../components/chatpage/mainPanel/MainPanel";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const userlist: NextPage = () => {
  return (
    <UserListContainer>
      <div className="sidepanel-wrap">
        <Sidebar />
      </div>
      <div className="mainpanel-wrap">
        <Chat />
      </div>
    </UserListContainer>
  );
};

const UserListContainer = styled.div`
  display: flex;
  height: 100vh;
  .sidepanel-wrap {
    width: 300px;
    background-color: #a7bcff;
  }
  .mainpanel-wrap {
    width: 100%;
  }
`;
export default userlist;
