import { HiOutlineEmojiHappy } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
const DirectMessage = () => {
  return (
    <DirectMessageContainer>
      <div className="chatroom-wrap">
        <div>
          <HiOutlineEmojiHappy />
          chatRoom
        </div>
        <div className="pluse-button">
          <AiOutlinePlus />
        </div>
      </div>
    </DirectMessageContainer>
  );
};
const DirectMessageContainer = styled.div`
  .chatroom-wrap {
    display: flex;
    justify-content: space-between;
    .pluse-button {
      cursor: pointer;
    }
  }
`;
export default DirectMessage;
