import styled from "styled-components";
import { useBoards } from "../contexts/BoardsContext";
import { useEffect, useState } from "react";
import OpenedTask from "./OpenedTask";

function ColumnTaskItem({ task, columnName }) {
  const { boards, setBoards, selectedBoard, setRender, render } = useBoards();
  const [isOpen, setIsOpen] = useState("");
  const subTasksNumber = task.subtasks.length;
  const [completedSubtasks, setCompletedSubtasks] = useState(
    task.subtasks.filter((subtask) => subtask.isCompleted).length
  );

  useEffect(
    function () {
      const activeBoard = boards
        .filter((board) => board.name === selectedBoard)
        .at(0);
      if (activeBoard.name === "Roadmap") {
        return;
      }
      // console.log(activeBoard);
      const activeColumn = activeBoard.columns
        .filter((column) => column.name === columnName)
        .at(0);
      console.log(activeColumn);
      if (completedSubtasks === 0) {
        activeColumn.tasks = activeColumn.tasks.filter(
          (activeTask) => activeTask !== task
        );
        activeBoard.columns[0].tasks.push(task);
        task.status = "Todo";
      } else if (completedSubtasks > 0 && completedSubtasks < subTasksNumber) {
        activeColumn.tasks = activeColumn.tasks.filter(
          (activeTask) => activeTask !== task
        );
        activeBoard.columns[1].tasks.push(task);
      } else if (completedSubtasks === subTasksNumber) {
        activeColumn.tasks = activeColumn.tasks.filter(
          (activeTask) => activeTask !== task
        );
        activeBoard.columns[2].tasks.push(task);
      }
      setBoards(boards);
      setRender(!render);
    },
    [isOpen]
  );

  return (
    <StyledColumnTaskItem onClick={() => setIsOpen(true)}>
      <h1>{task.title}</h1>
      <p>
        {completedSubtasks} of {subTasksNumber} substasks
      </p>
      {isOpen && (
        <OpenedTask
          task={task}
          subTasksNumber={subTasksNumber}
          completedSubtasks={completedSubtasks}
          setCompletedSubtasks={setCompletedSubtasks}
          columnName={columnName}
          setIsOpen={setIsOpen}
        />
      )}
    </StyledColumnTaskItem>
  );
}

export default ColumnTaskItem;

const StyledColumnTaskItem = styled.div`
  cursor: pointer;
  padding: 2.3rem 1.6rem 2.3rem 1.6rem;
  background-color: white;
  border-radius: 10px;
  width: 28rem;

  & > h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.89rem;
  }

  & > p {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
  }
`;
