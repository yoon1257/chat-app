import { NextPage } from "next";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import md5 from "md5";
import { AiOutlineHome } from "react-icons/ai";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { auth } from "../firebase";

interface SignupType {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
const signup: NextPage = () => {
  const router = useRouter();
  const [errorNotice, setErrorNotice] = useState("");
  const [loading, setLoading] = useState(false);
  const methods = useForm<SignupType>({ mode: "onBlur" });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = methods;

  const password = useRef<string>();
  password.current = watch("password");

  const onSubmit = async (data: SignupType) => {
    try {
      setLoading(true);
      let createdUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: `http://gravatar.com/avatar/${md5(
          createdUser.user.email
        )}?d=identicon`,
      });
      // 데이터 저장
      const db = getFirestore();

      await setDoc(doc(db, "users", createdUser.user.uid), {});

      setLoading(false);
      alert("회원가입에 성공하였습니다.");
      router.push("/login");
    } catch (error) {
      setErrorNotice(error.message);
      setLoading(false);
    }
  };
  const gotoHome = () => {
    router.push("/home");
  };

  return (
    <SignupContainer>
      <div onClick={gotoHome} className="gohome">
        <AiOutlineHome />
      </div>
      <h2>회원가입</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            {...register("name", { required: true, maxLength: 10 })}
          />
          {errors.name && errors.name.type === "required" && (
            <p>This name field is required</p>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <p>Your input exceed maximum length</p>
          )}
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
          <label>PasswordConfirm</label>
          <input
            name="passwordConfirm"
            type="password"
            {...register("passwordConfirm", {
              required: true,
              validate: (value) => value === password.current,
            })}
          />
          {errors.passwordConfirm &&
            errors.passwordConfirm.type === "required" && (
              <p>This password confirm field is required</p>
            )}
          {errors.passwordConfirm &&
            errors.passwordConfirm.type === "validate" && (
              <p>The passwords do not match</p>
            )}
          {errorNotice && <p>{errorNotice}</p>}

          <button type="submit" disabled={loading}>
            submit
          </button>
          <Link href="/login">
            <div className="link">이미 아이디가 있다면...</div>
          </Link>
        </form>
      </FormProvider>
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .gohome {
    position: absolute;
    color: ${(props) => props.theme.colors.subColor};
    font-size: 30px;
    top: 0;
    cursor: pointer;
  }

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
export default signup;
