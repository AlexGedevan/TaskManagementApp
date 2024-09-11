import styled from "styled-components";
import { useBoards } from "../contexts/BoardsContext";
import { useEffect, useState } from "react";
import OpenedTask from "./OpenedTask";
import TasksColumnItem from "./TasksColumnItem";

function ColumnTaskItem({ task, columnName }) {
  // console.log(task);
  const { boards, setBoards, selectedBoard, setRender, render, isDarkMode } =
    useBoards();
  const [isOpen, setIsOpen] = useState(false);
  const subTasksNumber = task.subtasks.length;
  const [completedSubtasks, setCompletedSubtasks] = useState(
    task.subtasks.filter((subtask) => subtask.isCompleted).length
  );

  useEffect(
    function () {
      const activeBoard = boards
        .filter((board) => board.name === selectedBoard)
        .at(0);
      if (
        activeBoard.name !== "Platform Launch" &&
        activeBoard.name !== "Marketing Plan"
      ) {
        return;
      }
      // console.log(activeBoard);
      const activeColumn = activeBoard.columns
        .filter((column) => column.name === columnName)
        .at(0);
      // console.log(activeColumn);
      if (completedSubtasks === 0 && task.status !== "Todo") {
        activeColumn.tasks = activeColumn.tasks.filter(
          (activeTask) => activeTask !== task
        );
        activeBoard.columns[0].tasks.push(task);
        task.status = "Todo";
      } else if (
        completedSubtasks > 0 &&
        completedSubtasks < subTasksNumber &&
        task.status !== "Doing"
      ) {
        activeColumn.tasks = activeColumn.tasks.filter(
          (activeTask) => activeTask !== task
        );
        activeBoard.columns[1].tasks.push(task);
        task.status = "Doing";
      } else if (
        completedSubtasks === subTasksNumber &&
        task.status !== "Done"
      ) {
        task.status = "Done";
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
    <StyledColumnTaskItem
      onClick={() => setIsOpen(true)}
      isDarkMode={isDarkMode}
    >
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
  background-color: ${(props) => (props.isDarkMode ? "#2B2C37" : "white")};

  border-radius: 10px;
  width: 28rem;

  & > h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.89rem;
    color: ${(props) => props.isDarkMode && "white"};
  }

  & > p {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
    color: ${(props) => props.isDarkMode && "#828FA3"};
  }
`;
