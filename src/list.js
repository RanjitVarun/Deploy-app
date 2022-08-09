import React, { useEffect, useState } from "react";

export const List = () => {
  const [task, setTask] = useState({
    "Organize closet": [
      {
        id: 1,
        task_name: "Donate old clothes and shoes",
        isCompleted: false,
      },
      {
        id: 2,
        task_name: "Buy new shelf",
        isCompleted: false,
      },
      {
        id: 3,
        task_name: "Put in shelf by color",
        isCompleted: false,
      },
    ],
    "Finish homework": [
      {
        id: 1,
        task_name: "Finish math homework",
        isCompleted: false,
      },
      {
        id: 2,
        task_name: "Finish science homework",
        isCompleted: false,
      },
      {
        id: 3,
        task_name: "Finish science homework",
        isCompleted: false,
      },
    ],
    "Achieve nirvana": [
      {
        id: 1,
        task_name: "Meditate a little",
        isCompleted: false,
      },
      {
        id: 2,
        task_name: "Gain some wisdom",
        isCompleted: false,
      },
    ],
  });

  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  console.log("list", task);
  const changeStatus = (cat, id) => {
    //console.log("status", task[cat], id);
    let result = task;
    result[cat].map((obj) => {
      if (obj.id === id) {
        obj.isCompleted = !obj.isCompleted;
      }
    });
    console.log("task", result);
    setTask(result);
  };

  return (
    <div>
      <h1>List</h1>
      {Object.keys(task).map((key, index) => {
        return (
          <div key={key}>
            <ul style={{ fontWeight: "bold" }}>{key}</ul>
            {task[key].map((subitem, i) => {
              return (
                <ul>
                  <li>{subitem.task_name}</li>
                  <button
                    onClick={() => changeStatus(key, subitem.id)}
                    style={{
                      background: subitem.isCompleted ? "green" : "red",
                    }}
                  >
                    {subitem.isCompleted ? "completed" : "Incomplete"}
                  </button>
                </ul>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
