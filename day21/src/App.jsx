import { useState } from "react";

function App() {

  const [name, setName] =
  useState("");

  const [email, setEmail] =
  useState("");

  const [password, setPassword] =
  useState("");

  const [error, setError] =
  useState("");

  const [success, setSuccess] =
  useState("");


  function handleSubmit(e) {

    e.preventDefault();

    setError("");
    setSuccess("");


    if (name === "") {

      setError(
        "Name is required"
      );

      return;
    }


    if (!email.includes("@")) {

      setError(
        "Valid email required"
      );

      return;
    }


    if (password.length < 6) {

      setError(
        "Password must be 6 characters"
      );

      return;
    }


    setSuccess(
      "Form Submitted Successfully 🚀"
    );

  }


  return (

    <div>

      <h1>
        Signup Form
      </h1>


      <form
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e)=>
            setName(e.target.value)
          }
        />

        <br />
        <br />


        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <br />
        <br />


        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <br />
        <br />


        <button>
          Submit
        </button>

      </form>


      <p>
        {error}
      </p>


      <p>
        {success}
      </p>

    </div>

  );

}

export default App;