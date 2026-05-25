import {
  useEffect,
  useState
} from "react";

function Users() {

  const [users, setUsers] =
  useState([]);

  const [loading, setLoading] =
  useState(true);


  useEffect(() => {

    fetch(
      "https://jsonplaceholder.typicode.com/users"
    )
    .then(response =>
      response.json()
    )
    .then(data => {

      setUsers(data);

      setLoading(false);

    });

  }, []);


  if(loading){

    return (
      <h2>
        Loading Users...
      </h2>
    );

  }


  return (

    <div>

      <h1>
        Backend Integration 🚀
      </h1>


      {
        users.map(user => (

          <div key={user.id}>

            <h3>
              {user.name}
            </h3>

            <p>
              {user.email}
            </p>

            <hr />

          </div>

        ))
      }

    </div>

  );

}

export default Users;