import React from "react";
import styled from "styled-components";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Messages from "./Messages";
import Input from "./Input";

const MainPanel = () => {
  return (
    <MainPanelContainer>
      <div className="chat-title">
        <span>이든</span>
        <div className="chat-icon">
          <BsFillCameraVideoFill />
          <FaUserCircle />
          <AiOutlineHeart />
        </div>
      </div>
      <div>
        <Messages />
        <Input />
      </div>
    </MainPanelContainer>
  );
};

export default MainPanel;

const MainPanelContainer = styled.div`
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

// import { useEffect, useState } from "react";
// import styled from "styled-components";
// import MessageForm from "./MessageForm";
// import MessageHeader from "./MessageHeader";
// import { useSelector } from "react-redux";
// import { getDatabase, ref } from "firebase/database";
// import { NextPage } from "next";

// const MainPanel: NextPage = () => {
//   return (
//     <MainPanelContainer>
//       <MessageHeader />
//       <div className="context-wrap"></div>
//       <MessageForm />
//     </MainPanelContainer>
//   );
// };

// const MainPanelContainer = styled.div`
//   padding: 2rem 2rem 0 2rem;
//   .context-wrap {
//     width: 100%;
//     height: 300px;
//     border: 0.2rem solid #eee;
//     border-radius: 5px;
//     padding: 1rem;
//     margin-bottom: 1rem;
//     overflow-y: auto;
//   }
// `;
// export default MainPanel;
