import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import type { NextPage } from "next";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Head>
        <title>home | happy-talk</title>
      </Head>

      <div>
        <h1>happy-talk</h1>
      </div>
      <div className="logo">
        <HiOutlineEmojiHappy />
      </div>
      <div className="content">
        <Link href="/login">
          <button>로그인</button>
        </Link>
        <Link href="/signup">
          <button>회원가입</button>
        </Link>
      </div>
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 4px solid ${(props) => props.theme.colors.mainColor};
  border-radius: 30px;

  h1 {
    text-align: center;
    font-size: 70px;
    font-weight: 900;
  }
  .logo {
    color: pink;
    text-align: center;
    font-size: 250px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      border: none;
      padding: 10px;
      border-radius: 10px;
      background-color: ${(props) => props.theme.colors.mainColor};
      color: white;
      font-weight: 600;
      width: 300px;
      margin: 20px;

      :hover {
        background-color: ${(props) => props.theme.colors.subColor};
      }
    }
  }
`;

export default Home;
