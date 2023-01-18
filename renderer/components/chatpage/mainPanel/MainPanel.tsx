import styled from "styled-components";
import MessageForm from "./MessageForm";
import MessageHeader from "./MessageHeader";

const MainPanel = () => {
  return (
    <MainPanelContainer>
      <MessageHeader />
      <div className="context-wrap"></div>
      <MessageForm />
    </MainPanelContainer>
  );
};

const MainPanelContainer = styled.div`
  padding: 2rem 2rem 0 2rem;
  .context-wrap {
    width: 100%;
    height: 300px;
    border: 0.2rem solid #eee;
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 1rem;
    overflow-y: auto;
  }
`;
export default MainPanel;