import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

const login: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (emailRegex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (passwordRegex.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };
  useEffect(() => {
    if (emailValid && passwordValid) {
      setNotAllow(false);
      return;
    } else {
      setNotAllow(true);
    }
  }, [emailValid, passwordValid]);

  return (
    <LoginContainer>
      <div>
        <h2 className="title-wrap">로그인</h2>
      </div>
      <div className="content-wrap">
        <div>
          <div className="input-title">이메일</div>
          <div className="input-wrap">
            <input
              type="email"
              placeholder="text@email.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="error-message">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요</div>
            )}
          </div>
        </div>
        <div>
          <div className="input-title">비밀번호</div>
          <div className="input-wrap">
            <input
              type="password"
              placeholder="숫자,영문자,특수문자 8자이상 입력"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="error-message">
            {!passwordValid && password.length > 0 && (
              <div>특수문자,영문자,숫자를 포함 8자 이상 </div>
            )}
          </div>
        </div>
        <Link href="/home">
          <button disabled={notAllow} className="button">
            로그인
          </button>
        </Link>
      </div>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title-wrap {
    text-align: center;
  }
  .content-wrap {
    .error-message {
      font-size: 12px;
      color: red;
      margin-top: 8px;
    }
    .input-title {
      font-size: 12px;
      font-weight: 600px;
      color: ${(props) => props.theme.colors.fontColor};
      padding-top: 10px;
    }
    .input-wrap {
      width: 100%;
      border: 1px solid #eee;
      border-radius: 8px;
      margin-top: 8px;
      padding: 10px;
      &:focus-within {
        border: 1px solid ${(props) => props.theme.colors.mainColor};
      }
      input {
        width: 100%;
        outline: none;
        border: none;
        height: 17px;
        font-size: 14px;
        font-weight: 400px;
        &::placeholder {
          color: "#dadada";
          font-size: 12px;
        }
      }
    }
  }
  .button {
    width: 100%;
    height: 30px;
    margin-top: 8px;
    border-radius: 60px;
    border: none;
    background-color: ${(props) => props.theme.colors.mainColor};
    color: white;
    font-weight: 700;
    cursor: pointer;
    :disabled {
      background-color: #dadada;
      color: white;
    }
  }
`;
export default login;
