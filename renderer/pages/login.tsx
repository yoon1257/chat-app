import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

const login: NextPage = () => {
  return (
    <LoginContainer>
      <h1> login</h1>
      <input type="email" placeholder="이메일을 입력해주세요" />
      <input type="password" placeholder="비밀번호를 입력해주세요" />
      <Link href="/home">
        <button> 로그인하기</button>
      </Link>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default login;
