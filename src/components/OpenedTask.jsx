import styled from "styled-components";
import SubtaskItem from "./SubtaskItem";
import Status from "./Status";
import Elipsis from "../../public/assets/icon-vertical-ellipsis.svg";
import { useEffect, useRef, useState } from "react";
import { useBoards } from "../contexts/BoardsContext";
function OpenedTask({
  task,
  subTasksNumber,
  completedSubtasks,
  setCompletedSubtasks,
  columnName,
  setIsOpen,
}) {
  const {
    boards,
    setBoards,
    selectedBoard,
    editingTask,
    setEditingTask,
    setSelectedTask,
  } = useBoards();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const divRef = useRef(null);
  const deleteRef = useRef(null);

  function handleEditTask() {
    setEditingTask(true);
  }

  function handleDeleteTask() {
    const updatedBoards = boards.map((board) => {
      if (board.name === selectedBoard) {
        return {
          ...board,
          columns: board.columns.map((column) => {
            if (column.name === task.status) {
              return {
                ...column,
                tasks: column.tasks.filter((item) => item !== task),
              };
            }
            return column;
          }),
        };
      }
      return board;
    });
    setIsOpen(false);
    setBoards(updatedBoards);
  }

  useEffect(function () {
    setSelectedTask(task);
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      if (divRef.current && divRef.current.contains(event.target)) {
        console.log("Div was clicked!");
        if (deleteRef.current && deleteRef.current.contains(event.target)) {
          handleDeleteTask();
          setIsOpen(false);
        }
        // Add your custom logic here
      } else {
        setIsOpen(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [setIsOpen]);
  return (
    <Overlay>
      <StyledOpenedTask ref={divRef}>
        <Flex>
          <h1>{task.title}</h1>
          <img src={Elipsis} onClick={() => setSettingsOpen(!settingsOpen)} />
          {settingsOpen && (
            <TaskSettings>
              <p onClick={() => setSettingsOpen(false)}>Close</p>
              <p onClick={handleEditTask}>Edit</p>
              <p ref={deleteRef}>Delete</p>
            </TaskSettings>
          )}
        </Flex>
        <p>{task.description}</p>
        <h2>
          Subtasks ({completedSubtasks} of {subTasksNumber})
        </h2>
        {task.subtasks.map((subtask) => (
          <SubtaskItem
            subtask={subtask}
            key={subtask.title}
            task={task}
            subTasksNumber={subTasksNumber}
            completedSubtasks={completedSubtasks}
            setCompletedSubtasks={setCompletedSubtasks}
          />
        ))}
        <p>Current Status</p>
        <Status columnName={columnName} />
      </StyledOpenedTask>
    </Overlay>
  );
}

export default OpenedTask;

const StyledOpenedTask = styled.div`
  min-width: 30rem;
  padding: 2.4rem 2.4rem 3.2rem 2.4rem;
  background-color: white;
  border-radius: 10px;

  & > h1 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.268rem;
  }

  & > p {
    margin-top: 2.4rem;
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2.3rem;
    color: #828fa3;
  }
  & > h2 {
    margin-top: 2.4rem;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
    color: #828fa3;
  }
  @media screen and (min-width: 760px) {
    padding: 3.2rem;
  }
`;

const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  & > img:hover {
    height: 25px;
  }
`;

const Overlay = styled.div`
  padding: 10rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100; /* Ensure it's above other content */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TaskSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  background-color: white;
  padding: 2rem;
  right: -120px;
  border-radius: 10px;
  top: 0px;
  font-size: 1.4rem;

  & > p:hover {
    border-bottom: 1px solid black;
  }
`;
