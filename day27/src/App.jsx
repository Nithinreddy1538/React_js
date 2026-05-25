import {
  useEffect,
  useState
} from "react";

function App() {

  const [posts, setPosts] =
  useState([]);

  const [title, setTitle] =
  useState("");


  // READ DATA
  useEffect(() => {

    fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    )
    .then(res => res.json())
    .then(data => setPosts(data));

  }, []);


  // CREATE DATA
  function addPost(){

    const newPost = {
      title:title
    };

    setPosts([
      newPost,
      ...posts
    ]);

    setTitle("");

  }


  // DELETE DATA
  function deletePost(index){

    const updatedPosts =
    posts.filter(
      (_, i) => i !== index
    );

    setPosts(updatedPosts);

  }


  // UPDATE DATA
  function updatePost(index){

    const updatedPosts =
    [...posts];

    updatedPosts[index].title =
    "Updated Post 🚀";

    setPosts(updatedPosts);

  }


  return (

    <div>

      <h1>
        CRUD Operations 🚀
      </h1>


      <input
        type="text"
        placeholder="Enter Post"
        value={title}
        onChange={(e)=>
          setTitle(e.target.value)
        }
      />


      <button
        onClick={addPost}
      >
        Add
      </button>


      <hr />


      {
        posts.map(
          (post,index)=>(

            <div key={index}>

              <h3>
                {post.title}
              </h3>


              <button
                onClick={()=>
                  updatePost(index)
                }
              >
                Update
              </button>


              <button
                onClick={()=>
                  deletePost(index)
                }
              >
                Delete
              </button>

              <hr />

            </div>

          )
        )
      }

    </div>

  );

}

export default App;