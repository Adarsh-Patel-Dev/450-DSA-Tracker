import React from "react";
import "./App.css";
import { AuthHome } from "./components/Auth";
import { AuthProvider } from "./context/AuthContext";
import { QuestionDataContext2Provider } from "./context/QuestionDataContext2";

function App() {
  // const { isAuthenticated, user, logout } = useAuth0();

  React.useEffect(() => {
    // isAuthenticated &&
    //   (async function () {
    //     if (user !== undefined) {
    //       localStorage.setItem("uuid", `${user.sub}`);
    //       const resp = await (
    //         await fetch(`/.netlify/functions/mango`, {
    //           credentials: "same-origin",
    //           headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${user.sub}`,
    //           },
    //         })
    //       ).json();
    //       console.log({ resp });
    //     }
    //   })();

    console.log("App initialized");
  }, []);

  return (
    <>
      {/*> redirectUri={window.location.origin}*/}
      {/* {isAuthenticated ? <QuestionDataContext2Provider /> : <AuthHome />}
      {isAuthenticated && <button onClick={() => logout()}> Logout </button>} */}
      <AuthProvider>
        <AuthHome />
      </AuthProvider>
    </>
  );
}

export default App;