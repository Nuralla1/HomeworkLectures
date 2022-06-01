import { useDrag } from "react-dnd";

const Task = ({ id, value }: any) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: id },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));
  return (
    <div
      ref={drag}
      style={{ border: isDragging ? "1px solid pink" : "0px", width: "300px" }}
    >
      {value}
    </div>
  );
};
export default Task;
