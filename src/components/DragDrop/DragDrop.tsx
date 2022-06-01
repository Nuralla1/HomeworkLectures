import Task from "../Task/Task";
import { useState } from "react";
import { useDrop } from "react-dnd";

const tasksList = [
  { id: 1, text: "Test app" },
  { id: 2, text: "Check new task" },
  { id: 3, text: "Pass code review" },
  { id: 4, text: "Clean desk" },
];

const DragDrop = () => {
  const [doneList, setDoneList]: any = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item: any) => addTaskToDoneList(item.id),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  }));
  const addTaskToDoneList = (id: any) => {
    const taskMatch = tasksList.filter((elem) => id === elem.id);
    setDoneList((board: any): any => [...board, taskMatch[0]]);
  };
  return (
    <>
      <h2>TODO</h2>
      <div
        className="toDo"
        style={{ border: "1px solid black", width: "400px" }}
      >
        {tasksList.map((task: { id: number; text: string }) => {
          return <Task id={task.id} value={task.text} />;
        })}
      </div>
      <h2>DONE</h2>
      <div
        className="done"
        ref={drop}
        style={{ border: "1px solid green", width: "400px", height: "400px" }}
      >
        {doneList.map((task: { id: number; text: string }) => {
          return <Task id={task.id} value={task.text} />;
        })}
      </div>
    </>
  );
};

export default DragDrop;
