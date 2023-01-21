import React from "react";
import styled from "styled-components";

const MessageList = () => {
  return (
    <MessageListContainer className="own">
      <div className="message-info">
        <img src="/images/logo.png" />
        <span>now</span>
      </div>
      <div className="message-content">
        <p>hello my yoon</p>
        <img className="picture" src="images/logo.png" />
      </div>
    </MessageListContainer>
  );
};

export default MessageList;

const MessageListContainer = styled.div`
  display: flex;
  gap: 20px;
  &.own {
    flex-direction: row-reverse;
    .message-content {
      align-items: flex-end;
      p {
        background-color: pink;
        color: white;
        border-radius: 10px 0px 10px 10px;
      }
    }
  }
  .message-info {
    display: flex;
    flex-direction: column;
    font-weight: 20px;
    margin-bottom: 10px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: covers;
    }
  }
  .message-content {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      background-color: white;
      padding: 10px 20px;
      border-radius: 0px 10px 10px 10px;
      max-width: max-content;
    }
    .picture {
      width: 50%;
    }
  }
`;
