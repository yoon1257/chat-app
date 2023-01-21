import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <InputContainer>
      <input type="text" placeholder="메세지를 입력해주세요" />
      <div className="send-area">
        <button>send</button>
      </div>
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 10px;
    ::placeholder {
      color: lightgray;
    }
  }
  button {
    border: none;
    padding: 15px 15px;
    color: white;
    font-weight: bold;
    background-color: #8da4f1;
  }
`;
