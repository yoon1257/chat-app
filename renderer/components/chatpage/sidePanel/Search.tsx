import styled from "styled-components";

const Search = () => {
  return (
    <SearchContainer>
      <div className="search-form">
        <input type="text" placeholder="find user" />
      </div>
      <div className="user-chats">
        <img src="/images/logo.png" />
        <div className="user-info">
          <span>지민</span>
        </div>
      </div>
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.div`
  border-bottom: 1px solid gray;
  .search-form {
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
