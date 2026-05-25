import {
  useState,
  useEffect
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


  if (loading) {

    return (
      <h2>
        Loading...
      </h2>
    );

  }


  return (

    <div>

      <h1>
        Users List 🚀
      </h1>


      {
        users.map(user => (

          <p key={user.id}>

            {user.name}

          </p>

        ))
      }

    </div>

  );

}

export default Users;