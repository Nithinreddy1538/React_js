import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate =
  useNavigate();

  const user =
  localStorage.getItem("user");


  function logout(){

    localStorage.removeItem(
      "user"
    );

    navigate("/");

  }


  return (

    <div>

      <h1>
        Welcome {user} 🚀
      </h1>


      <button
        onClick={logout}
      >
        Logout
      </button>

    </div>

  );

}

export default Dashboard;