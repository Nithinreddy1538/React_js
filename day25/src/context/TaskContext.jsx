import {
  createContext,
  useReducer
} from "react";

export const TaskContext =
createContext();

const initialState = {
  tasks: []
};

function reducer(state, action) {

  switch(action.type){

    case "ADD_TASK":

      return {

        tasks: [
          ...state.tasks,
          action.payload
        ]

      };


    case "REMOVE_TASK":

      return {

        tasks:
        state.tasks.filter(
          (task, index) =>
          index !== action.payload
        )

      };


    default:

      return state;

  }

}


function TaskProvider({ children }) {

  const [state, dispatch] =
  useReducer(
    reducer,
    initialState
  );


  return (

    <TaskContext.Provider
      value={{
        state,
        dispatch
      }}
    >

      {children}

    </TaskContext.Provider>

  );

}

export default TaskProvider;