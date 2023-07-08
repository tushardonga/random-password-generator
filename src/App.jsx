import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const randomPassword = Math.random().toString(36).slice(-8); // Generate a random password
    setPassword(randomPassword);
    navigator.clipboard.writeText(randomPassword); // Copy the password to clipboard
    toast.success("Password copied to clipboard!", {
      position: toast.POSITION.TOP_CENTER,
    }); // Show toast
  };

  return (
    <div className="app">
      <h1>GET YOUR RANDOM PASSWORD</h1>
      <div className="password-box">
        <input type="text" value={password} readOnly placeholder="--------" />
        <button onClick={generatePassword}>Generate My Password</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
