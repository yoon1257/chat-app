import React from "react";
import styled from "styled-components";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const Chat = () => {
  return (
    <ChatContainer>
      <div className="chat-title">
        <span>이든</span>
        <div className="chat-icon">
          <BsFillCameraVideoFill />
          <FaUserCircle />
          <AiOutlineHeart />
        </div>
      </div>
      <ChatContainer />
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  .chat-title {
    height: 50px;
    background-color: #5d5b8d;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .chat-icon {
    display: flex;
    gap: 10px;
    height: 24px;
    font-size: 15px;
    color: white;
  }
`;
