import styled from "styled-components";
import SideList from "./SideList";
import SideNav from "./SideNav";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SideNav />
      <SideList />
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div``;
