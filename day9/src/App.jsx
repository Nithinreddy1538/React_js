import React from "react";

function App() {

  const students = [
    "Nithin",
    "Rahul",
    "Kiran",
    "Sneha"
  ];

  return (

    <div>

      <h1>
        React Lists & Keys 🚀
      </h1>

      <ul>

        {
          students.map(
            (student, index) => (

              <li key={index}>

                {student}

              </li>

            )
          )
        }

      </ul>

    </div>

  );

}

export default App;