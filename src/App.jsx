import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import "./styles/index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  const [] = useState(false);
  return (
    <>
      <HomePage />
      <ToastContainer autoClose={2000} position="bottom-right" />
    </>
  );
}

export default App;
