import { NextPage } from "next";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import firebase from "../firebase";

interface LoginType {
  email: string;
  password: string;
}
const LoginPage: NextPage = () => {
  const router = useRouter();
  const [errorNotice, setErrorNotice] = useState("");
  const [loading, setLoading] = useState(false);
  const methods = useForm<LoginType>({ mode: "onBlur" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: LoginType) => {
    try {
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      setLoading(false);
      alert("로그인에 성공하였습니다.");
      router.push("/userlist");
    } catch (error) {
      setErrorNotice(error.message);
      setLoading(false);
    }
  };
  return (
    <LoginContainer>
      <div>
        <h2>로그인</h2>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email && <p>This email field is required</p>}
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p>This password field is required</p>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <p>Password must have at least 6</p>
          )}
          {errorNotice && <p>{errorNotice}</p>}

          <button type="submit" disabled={loading}>
            submit
          </button>
          <Link href="/signup">
            <div className="link">아직 아이디가 없다면...</div>
          </Link>
        </form>
      </FormProvider>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    width: 370px;
    margin: 0 auto;
  }

  h2 {
    font-weight: 700;
    color: ${(props) => props.theme.colors.fontColor};
    text-align: center;
    padding-bottom: 10px;
  }

  .form {
    background: #0e101c;
    max-width: 400px;
    margin: 0 auto;
  }

  p {
    color: #bf1650;
  }

  p::before {
    display: inline;
    content: "⚠ ";
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.mainColor};
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin: 5px 0;
    color: ${(props) => props.theme.colors.fontColor};
    font-size: 14px;
    font-weight: 200;
  }

  button[type="submit"],
  input[type="submit"] {
    width: 100%;
    background: ${(props) => props.theme.colors.mainColor};
    color: white;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 10px;
    margin: auto;
  }

  button[type="submit"]:hover,
  input[type="submit"]:hover {
    background: #e46390;
  }

  button[type="submit"]:active,
  input[type="button"]:active,
  input[type="submit"]:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  input:disabled {
    opacity: 0.4;
  }

  input[type="button"]:hover {
    transition: 0.3s all;
  }

  button[type="submit"],
  input[type="button"],
  input[type="submit"] {
    -webkit-appearance: none;
  }

  button[type="button"] {
    display: block;
    appearance: none;
    background: #333;
    color: white;
    border: none;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 4px;
  }

  hr {
    margin-top: 30px;
  }

  button {
    display: block;
    appearance: none;
    margin-top: 40px;
    border: 1px solid #333;
    margin-bottom: 20px;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 4px;
  }
  .link {
    color: ${(props) => props.theme.colors.fontColor};
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
export default LoginPage;
