import styled from "styled-components";
import SideList from "./SideList";
import { useSelector } from "react-redux";
import { signOut, getAuth } from "firebase/auth";
import { collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
  const user = useSelector((state: any) => state.user.currentUser);
  const handleLogout = () => {
    signOut(auth);
  };

  const userRef = collection(db, "users");
  const [userSnapShots, loading2] = useCollection(userRef);
  console.log("aldk", userSnapShots?.docs[0]?.data());

  return (
    <SidebarContainer>
      <div className="nav">
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
      </div>
      <div>
        <div className="search-form">
          <input type="text" placeholder="find user" />
          <button>+</button>
        </div>
      </div>
      <div className="side-list">
        {userSnapShots?.docs?.map((item) => (
          <SideList
            key={item.id}
            name={item?.data().name}
            image={item?.data().photoURL}
            email={item?.data().email}
            id={item.id}
          />
        ))}
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  .nav {
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
  }
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
`;
