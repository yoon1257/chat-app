import styled from "styled-components";

const ChatList = () => {
  return (
    <ChatListContainer>
      <div className="user-chats">
        <img src="/images/logo.png" />
        <div className="user-info">
          <span>지민</span>
          <p>Hello</p>
        </div>
      </div>
    </ChatListContainer>
  );
};

export default ChatList;

const ChatListContainer = styled.div`
  .user-chats {
    display: flex;
    padding: 10px;
    align-items: center;
    gap: 10px;
    color: white;
    cursor: pointer;
    :hover {
      background-color: #2f2d52;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
    span {
      font-size: 18px;
    }
    p {
      font-size: 14px;
      color: gray;
    }
  }
`;
