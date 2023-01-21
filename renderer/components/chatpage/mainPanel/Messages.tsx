import styled from "styled-components";
import MessageList from "./MessageList";

const Messages = () => {
  return (
    <MessagesContainer>
      <MessageList />
      <MessageList />
      <MessageList />

      <MessageList />
      <MessageList />

      <MessageList />
      <MessageList />
      <MessageList />
    </MessagesContainer>
  );
};

export default Messages;

const MessagesContainer = styled.div`
  background-color: ${(props) => props.theme.colors.mainColor};
  padding: 10px;
  height: 80vh;
  overflow: auto;
`;
