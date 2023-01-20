import styled from "styled-components";
import ChatRoom from "./ChatRoom";
import DirectMessage from "./DirectMessage";
import Favorited from "./Favorited";
import UserPanel from "./UserPanel";

const SidePanel = () => {
  return (
    <SidePanelContainer>
      <UserPanel />
      <Favorited />
      <ChatRoom />
      <DirectMessage />
    </SidePanelContainer>
  );
};

const SidePanelContainer = styled.div`
  background-color: ${(props) => props.theme.colors.mainColor};
  padding: 2rem;
  height: 100vh;
  color: white;
  font-weight: 600;
  min-width: 150px;
`;
export default SidePanel;
