import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import type { NextPage } from "next";
import { FaHandHoldingHeart } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Head>
        <title>chat-app</title>
      </Head>
      <div>
        <h1>chat-app</h1>
      </div>
      <div className="logo">
        <FaHandHoldingHeart />
      </div>
      <div className="content">
        <Link href="/login">
          <button>로그인</button>
        </Link>
        <span> 처음회원이시라면...</span>
        <Link href="/register">
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

  h1 {
    text-align: center;
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
      width: 13em;
    }
  }
`;

export default Home;
