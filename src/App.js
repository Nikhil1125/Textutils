import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
// import About from "./component/About";
import { useState } from "react";
import Alert from "./Alert";
// import {
//   BrowserRouter as Router, Routes, Route
// } from "react-router-dom";

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
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Textutils Dark Mode";
      // setInterval(() => {
      //   document.title='Download app'
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "Textutils Light Mode";
    }
  };
  return (
    <>
        {/* <Router> */}
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
        <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
        {/* <Routes>
        <Route exact path="/TextForm"
                element={<TextForm
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />}
              />
              <Route exact path="/About" element={<About />}
              />
        </Routes>
        </div>
        </Router> */}
      </div>

      </>

  );
}

export default App;

