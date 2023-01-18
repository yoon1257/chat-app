import { AiFillWechat } from "react-icons/ai";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";

const UserPanel = () => {
  return (
    <UserPanelContainer>
      <h3>
        <AiFillWechat /> chat App
      </h3>
      <div className="user-wrap">
        <Image className="profile" src="../images/profile.png" roundedCircle />
        <Dropdown>
          <Dropdown.Toggle className="dropdown" id="dropdown-basic">
            username
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">프로필사진변경</Dropdown.Item>
            <Dropdown.Item href="#/action-2">로그아웃</Dropdown.Item>
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
