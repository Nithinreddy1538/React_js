import {
  useContext,
  useState
} from "react";

import {
  TaskContext
} from "../context/TaskContext";

function TaskList() {

  const { state, dispatch } =
  useContext(TaskContext);

  const [task, setTask] =
  useState("");


  function addTask(){

    dispatch({
      type:"ADD_TASK",
      payload:task
    });

    setTask("");

  }


  return (

    <div>

      <h1>
        Task Manager 🚀
      </h1>


      <input
        type="text"
        value={task}
        placeholder="Enter Task"
        onChange={(e)=>
          setTask(e.target.value)
        }
      />


      <button
        onClick={addTask}
      >
        Add
      </button>


      {
        state.tasks.map(
          (item,index)=>(

            <p key={index}>

              {item}

              <button
                onClick={()=>
                  dispatch({
                    type:"REMOVE_TASK",
                    payload:index
                  })
                }
              >
                Delete
              </button>

            </p>

          )
        )
      }

    </div>

  );

}

export default TaskList;