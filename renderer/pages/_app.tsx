import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import { theme } from "../styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import { wrapper } from "../redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../redux/actions/user_action";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, setDoc } from "firebase/firestore";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        router.push("/home");
        dispatch(clearUser());
      }
    });
  }, []);
  // useEffect(() => {
  //   if (user) {
  //     setDoc(
  //       doc(db, "users", user?.uid),
  //       {
  //         name: user?.displayName,
  //         email: user?.email,
  //         photoURL: user?.photoURL,
  //         online: false,
  //       },
  //       { merge: true }
  //     );
  //   }
  //   if (user) {
  //     setDoc(
  //       doc(db, "users", user?.uid),
  //       {
  //         name: user?.displayName,
  //         email: user?.email,
  //         photoURL: user?.photoURL,
  //         online: true,
  //       },
  //       { merge: true }
  //     );
  //   }
  // }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>chat-app</title>
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
