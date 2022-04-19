import "../styles/globals.css";
import Login from "../componenets/authentication/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Navbar from "../componenets/Navbar";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Login />;
  }
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
