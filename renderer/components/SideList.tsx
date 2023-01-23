// 유저목록 보여주기
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const SideList = () => {
  const [friends, setFriends] = useState(["a", "b", "c"]);
  const router = useRouter();

  return (
    <SideListContainer>
      <div className="search-form">
        <input type="text" placeholder="find user" />
        <button>+</button>
      </div>

      {friends.map((friends) => (
        <div className="user-chats">
          <img src="/images/logo.png" />
          <div className="user-info">
            <span>지민</span>
          </div>
        </div>
      ))}
    </SideListContainer>
  );
};

export default SideList;

const SideListContainer = styled.div`
  border-bottom: 1px solid gray;
  .search-form {
    display: flex;
    padding: 10px;
    input {
      background-color: transparent;
      border: none;
      color: white;
      outline: none;
      ::placeholder {
        color: lightgray;
      }
    }
  }
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
  }
`;
