import styled from "styled-components";
import SideList from "./SideList";
import SideNav from "./SideNav";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <SideNav />
      </div>
      <div className="side-list">
        <SideList />
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  .side-list {
    border: 1px solid red;
  }
`;
