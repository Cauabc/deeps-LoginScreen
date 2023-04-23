import SignIn from "./pages/SignIn/SignIn"
import SignUp from "./pages/SignUp/SignUp"
import Content from "./components/Content/Content"
import {Routes, Route, useLocation} from 'react-router-dom'
import { createGlobalStyle } from "styled-components";
import { useEffect } from "react";


export const GlobalStyles = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body{
      min-height: 100vh;
      overflow-y: ${(props) => props.overflow};
      overflow-x: hidden;
      font-family: 'Ubuntu', sans-serif;
    }`


function App() {

    const location = useLocation();

    useEffect(() => {
      const handleRouteChange = () => {
        const body = document.querySelector("body");
        if (location.pathname === "/") {
          body.style.overflow = "hidden";
        } else {
          body.style.overflow = "auto";
        }
      };

      handleRouteChange();
      window.addEventListener("popstate", handleRouteChange);
      return () => {
        window.removeEventListener("popstate", handleRouteChange);
      };
    }, [location]);
    

  return (
    <>
      <GlobalStyles overflow="auto"/>
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    </>

  )
}

export default App