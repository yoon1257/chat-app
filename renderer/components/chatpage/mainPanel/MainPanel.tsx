import { useEffect, useState } from "react";
import styled from "styled-components";
import Message from "./Message";
import MessageForm from "./MessageForm";
import MessageHeader from "./MessageHeader";
import { useSelector } from "react-redux";
import firebase from "../../../firebase";
import { NextPage } from "next";

const MainPanel: NextPage = () => {
  const chatRoom = useSelector((state: any) => state.chatRoom.currentChatRoom);
  const user = useSelector((state: any) => state.user.currentUser);
  const messageRef = firebase.database().ref("message");
  const [message, setMessage] = useState([]);
  const [messageLoading, setMessageLoading] = useState(true);
  useEffect(() => {
    if (chatRoom) {
      addMessageListeners(chatRoom.id);
    }
  }, [chatRoom]);

  const addMessageListeners = (chatRoomId) => {
    let messageArray = [];
    messageRef.child(chatRoomId).on("child_added", (DataSnapShot) => {
      messageArray.push(DataSnapShot.val());
      setMessage(messageArray);
      setMessageLoading(false);
    });
  };
  const renderMessage = (message) =>
    message.length > 0 &&
    message.map((message) => (
      <Message key={message.timestamp} message={message} user={user} />
    ));
  return (
    <MainPanelContainer>
      <MessageHeader />
      <div className="context-wrap">{renderMessage(message)}</div>
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
