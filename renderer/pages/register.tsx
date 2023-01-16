import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const register: NextPage = () => {
  return (
    <RegisterContainer>
      <h1>회원가입</h1>
      <div className="content">
        <input type="text" />
        <input type="email" />
        <input type="password" />
        <input type="password" />
        <Link href="/login">
          <button>회원가입하기</button>
        </Link>
      </div>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  height: 100vh;
  h1 {
    text-align: center;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      width: 15em;
      margin: 10px;
    }
  }
`;
export default register;
