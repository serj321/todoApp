import { auth, provider, signInWithPopup } from "../../firebase";
import styled from "styled-components";
import { Button } from "@mui/material";
import Head from "next/head";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <Button onClick={signIn} variant="contained" color="success">Sign in with Google</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export default Login;