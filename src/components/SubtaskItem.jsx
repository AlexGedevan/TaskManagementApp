import styled from "styled-components";
import checkIcon from "../../public/assets/icon-check.svg";
import { useEffect, useState } from "react";
import { useBoards } from "../contexts/BoardsContext";
function SubtaskItem({
  subtask,
  task,
  subTasksNumber,
  completedSubtasks,
  setCompletedSubtasks,
}) {
  const { boards, setBoards, setRender } = useBoards();
  function handleSubtask() {
    subtask.isCompleted = !subtask.isCompleted;
    setBoards(boards);
    setCompletedSubtasks(
      task.subtasks.filter((subtask) => subtask.isCompleted).length
    );
  }

  // console.log(subtask);
  return (
    <StyledSubtaskItem>
      <Subtask>
        {subtask.isCompleted ? (
          <CheckIconDiv onClick={handleSubtask}>
            <img src={checkIcon} />
          </CheckIconDiv>
        ) : (
          <NotCheckedSubtask onClick={handleSubtask} />
        )}
        <p>{subtask.title}</p>
      </Subtask>
    </StyledSubtaskItem>
  );
}

export default SubtaskItem;

const StyledSubtaskItem = styled.div`
  margin-top: 0.8rem;
  padding: 1.3rem 0.8rem 1.6rem 1.2rem;
  background-color: #f4f7fd;
`;

const CheckIconDiv = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-color: #635fc7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Subtask = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const NotCheckedSubtask = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-color: white;
  border: 1px solid gray;
`;
