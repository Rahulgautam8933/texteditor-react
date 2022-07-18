
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from "react";
import Alart from "./components/Alart";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light"); //whether dark mode is enabled or not

  const [alart, setAlart] = useState(null);

  const showAlart = (message, type) => {
    setAlart({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlart(null);
    }, 1000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#100e38";
      showAlart("Dark mode is enabled", "success ");
      document.title = "Text Editor darkmode";
      // setInterval(()=>{
      //   document.title = "Text Editor Amazing Mode";
      // },2000);
      // setInterval(()=>{
      //   document.title = " install Text Editor now ";
      // },1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlart("Light mode is enabled", "Success ");
      document.title = "Text Editor lightmode";
    }
  };

  return (
    <>
      <Navbar
        title="Text Editor"
        aboutText=" About us"
        mode={mode}
        togglemode={togglemode}
      />
      <Alart alart={alart} />
      <div className="container">
        <TextForm showAlart={showAlart} heading="" mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
