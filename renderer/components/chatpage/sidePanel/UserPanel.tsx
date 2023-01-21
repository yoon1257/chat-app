import { useRef } from "react";
import { AiFillWechat } from "react-icons/ai";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import mime from "mime-types";
import { auth } from "../../../firebase";
import { signOut } from "firebase/auth";

const UserPanel = () => {
  const user = useSelector((state: any) => state.user.currentUser);
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <UserPanelContainer>
      <h3>
        <AiFillWechat /> chat App
      </h3>
      <div className="user-wrap">
        <Image className="profile" src={user && user?.photoURL} roundedCircle />
        <input
          className="input-area"
          type="file"
          accept="image/jpeg, image/png"
          // onChange={handleUpload}
        />
        <Dropdown>
          <Dropdown.Toggle className="dropdown" id="dropdown-basic">
            {user?.displayName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
            // onClick={handleOpenImg}
            >
              프로필사진변경
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>로그아웃</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </UserPanelContainer>
  );
};

const UserPanelContainer = styled.div`
  .user-wrap {
    display: flex;
    margin-bottom: 1rem;
  }
  .profile {
    width: 30px;
    height: 30px;
    margin-top: 3px;
  }
  input {
    display: none;
  }
  .dropdown {
    background-color: transparent;
    border: none;
    :hover {
      background-color: ${(props) => props.theme.colors.subColor};
      border-radius: 5px;
    }
  }
`;
export default UserPanel;
