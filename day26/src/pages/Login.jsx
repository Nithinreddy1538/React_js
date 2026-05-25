import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] =
  useState("");

  const navigate =
  useNavigate();


  function handleLogin(){

    localStorage.setItem(
      "user",
      username
    );

    navigate("/dashboard");

  }


  return (

    <div>

      <h1>
        Login Page
      </h1>


      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e)=>
          setUsername(e.target.value)
        }
      />

      <br />
      <br />


      <button
        onClick={handleLogin}
      >
        Login
      </button>

    </div>

  );

}

export default Login;