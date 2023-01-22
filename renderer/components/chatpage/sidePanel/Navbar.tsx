import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { signOut, getAuth } from "firebase/auth";
const Navbar = () => {
  const auth = getAuth();
  const user = useSelector((state: any) => state.user.currentUser);
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <NavbarContainer>
      <div className="logo">happy-Chat</div>
      <div className="user">
        <div>
          <img src={user && user?.photoURL} />
          <span>{user?.displayName}</span>
        </div>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  background-color: #2f2d52;
  .logo {
    text-align: center;
    padding: 10px;
    color: white;
    font-weight: 900;
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    img {
      margin-right: 3px;
      height: 24px;
      width: 24px;
      border-radius: 50%;
    }
    span {
      color: white;
    }
    button {
      background-color: #5d5b8d;
      color: white;
      border: none;
      padding: 3px 5px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
