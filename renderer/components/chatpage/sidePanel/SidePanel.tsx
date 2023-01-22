import styled from "styled-components";
import Navbar from "./Navbar";
import Search from "./Search";
import ChatList from "./ChatList";

const SidePanel = () => {
  return (
    <SidePanelContainer>
      <Navbar />
      <Search />
      <ChatList />
    </SidePanelContainer>
  );
};

const SidePanelContainer = styled.div`
  /* background-color: ${(props) => props.theme.colors.mainColor};
  padding: 2rem;
  height: 100vh;
  color: white;
  font-weight: 600;
  min-width: 150px; */
`;
export default SidePanel;
