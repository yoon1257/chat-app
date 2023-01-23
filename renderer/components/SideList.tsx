// 유저목록 보여주기
import React from "react";
import styled from "styled-components";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface SideListProps {
  name: string;
  image: string;
  email: string;
  id: string;
}

const SideList: React.FC<SideListProps> = ({ image, name, email, id }) => {
  const [user, loading] = useAuthState(auth);
  const addChat = async () => {
    await setDoc(doc(db, "chats", `chats-${user.uid},${id}`), {
      user: [user?.email, email],
    });
  };
  return (
    <SideListContainer>
      <div className="user-chats" onClick={addChat}>
        <img src={image} />
        <div className="user-info">
          <span>{name}</span>
        </div>
      </div>
    </SideListContainer>
  );
};

export default SideList;

const SideListContainer = styled.div`
  border-bottom: 1px solid gray;

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
