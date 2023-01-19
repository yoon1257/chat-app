import { useRef } from "react";
import { AiFillWechat } from "react-icons/ai";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import firebase from "../../../firebase";
import mime from "mime-types";

const UserPanel = () => {
  const user = useSelector((state) => state.user.currentUser);
  const openImgRef = useRef<HTMLInputElement>();

  const handleLogout = () => {
    firebase.auth().signOut();
  };
  // const handleOpenImg = () => {
  //   openImgRef.current.click();
  // };
  // const handleUpload = async (event) => {
  //   const file = event.target.files[0];
  //   const metadata = { contentType: mime.lookup(file.name) };
  //   try {
  //     const uploadSnapShot = await firebase
  //       .storage()
  //       .ref()
  //       .child(`user_image/${user.uid}`)
  //       .put(file, metadata);
  //     console.log("shapshot", uploadSnapShot);
  //   } catch (error) {}
  // };
  return (
    <UserPanelContainer>
      <h3>
        <AiFillWechat /> chat App
      </h3>
      <div className="user-wrap">
        <Image className="profile" src={user && user.photoURL} roundedCircle />
        <input
          className="input-area"
          type="file"
          ref={openImgRef}
          accept="image/jpen, image/png"
          // onChange={handleUpload}
        />
        <Dropdown>
          <Dropdown.Toggle className="dropdown" id="dropdown-basic">
            {user.displayName}
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
