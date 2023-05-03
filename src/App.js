import "./App.css";

import Navbar from "./components/Navbar";

import Textform from "./components/Textform";

import About from "./components/About";

import Alert from "./components/Alert";

import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,

      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");

      document.body.style.backgroundColor = "#042743";

      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";

      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils-VD"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <Routes>
        <Route
          path="/"
          element={
            <Textform
              showAlert={showAlert}
              heading="Enter the text to analyze"
              mode={mode}
            />
          }
        />

        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
