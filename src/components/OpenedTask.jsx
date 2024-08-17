import styled from "styled-components";
import SubtaskItem from "./SubtaskItem";
import Status from "./Status";
import Elipsis from "../../public/assets/icon-vertical-ellipsis.svg";
import { useEffect, useRef, useState } from "react";
function OpenedTask({
  task,
  subTasksNumber,
  completedSubtasks,
  setCompletedSubtasks,
  columnName,
  setIsOpen,
}) {
  const divRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (divRef.current && divRef.current.contains(event.target)) {
        console.log("Div was clicked!");
        // Add your custom logic here
      } else {
        console.log("Clicked outside of the div.");

        setIsOpen(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClick);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <Overlay>
      <StyledOpenedTask ref={divRef}>
        <Flex>
          <h1>{task.title}</h1>
          <img src={Elipsis} />
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
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const Overlay = styled.div`
  padding: 1rem;
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
