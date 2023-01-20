import { NextPage } from "next";
import styled from "styled-components";
import moment from "moment";

interface MessageProps {
  message?;
  user?;
}

const Message: NextPage<MessageProps> = ({ message, user }) => {
  const timeNow = (timeStamp) => moment(timeStamp).fromNow();

  const isImage = (message) => {
    return message.hasOwnProperty("image") && !message.hasOwnProperty("text");
  };
  return (
    <MessageContainer>
      <div>
        <img className="profile" src={message.user.image} />
      </div>
      <div className="content-area">
        <span className="user">{message.user.name}</span>
        <span className="time-now">{timeNow(message.timestamp)}</span>
        {isImage(message) ? (
          <img className="image" src={message.image} alt="image" />
        ) : (
          <div className="content">{message.text}</div>
        )}
      </div>
    </MessageContainer>
  );
};
const MessageContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 5px;
  .profile {
    width: 40px;
    border-radius: 20px;
  }
  .content-area {
    margin-left: 5px;
    .user {
      font-size: 13px;
      font-weight: 700;
    }
    .time-now {
      font-size: 10px;
      color: gray;
      margin-left: 10px;
    }
    .image {
      min-width: 100px;
    }
    .content {
      font-size: 12px;
      margin-top: 3px;
    }
  }
`;
export default Message;
