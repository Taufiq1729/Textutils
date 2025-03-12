import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [buttonText, setButtonText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setButtonText("Enable Light Mode");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setButtonText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        mode={mode}
        aboutText="About Us"
        toggleMode={toggleMode}
        buttonText={buttonText}
      />
      <Alert alert={alert} />
      <div className="container-fluid my-4 p=0">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter your Text to analyze below"
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
