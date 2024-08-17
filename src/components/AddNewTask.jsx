import styled from "styled-components";
import SubtaskToAdd from "./SubtaskToAdd";
import arrowDown from "../../public/assets/icon-chevron-down.svg";
import ReusableButton from "../UI/ReusableButton";
import StatusChooser from "./StatusChooser";
import { useState } from "react";
function AddNewTask() {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  return (
    <Overlay>
      <StyledAddNewTask>
        <h1>Add New Task</h1>
        <Title>
          <p>Title</p>
          <input type="text" placeholder="e.g. Take coffee break" />
        </Title>
        <Description>
          <p>Description</p>
          <textarea
            type="text"
            placeholder="e.g. It’s always good to take a break to recharge the batteries (total BS)"
          />
        </Description>
        <Subtasks>
          <p>Subtasks</p>
          <SubtaskToAdd placeholder="make a coffee" />
          <SubtaskToAdd placeholder="Buy a ticket to a football match" />
          <ReusableButton backgroundColor="#635fc71a" textColor="#635fc7">
            + Add New Subtask
          </ReusableButton>
        </Subtasks>
        <Status>
          <p>Status</p>
          <ChosenStatus onClick={() => setIsOpenStatus(!isOpenStatus)}>
            <p>Todo</p>
            <img src={arrowDown} />
          </ChosenStatus>
          {isOpenStatus && <StatusChooser />}
        </Status>
        <ReusableButton backgroundColor="#635FC7" textColor={"white"}>
          Create Task
        </ReusableButton>
      </StyledAddNewTask>
      ;
    </Overlay>
  );
}

export default AddNewTask;

const StyledAddNewTask = styled.div`
  padding: 2.4rem;
  border-radius: 10px;
  background-color: white;
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

const Title = styled.div`
  & > p {
    margin-top: 2.4rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
    color: #828fa3;
  }
  & > input {
    padding: 0.9rem 1.5rem 0.9rem 1.6rem;
    width: 26.4rem;
  }
`;

const Description = styled.div`
  & > p {
    margin-top: 2.4rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
    color: #828fa3;
    margin-bottom: 0.8rem;
  }
  & > textarea {
    padding: 0.9rem 1.5rem 3.3rem 1.6rem;
    width: 26.4rem;
  }
`;

const Subtasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  & > button {
    background-color: #635fc71a;
    width: 29.5rem;
    padding: 0.8rem 0 0.9rem 0;
    border-radius: 10000px;
    border: none;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 2.3rem;
    color: #635fc7;
  }
  & > p {
    margin-top: 2.4rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
    color: #828fa3;
  }
`;

const Status = styled.div`
  position: relative;
  & > p {
    margin-top: 2.4rem;
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
    color: #828fa3;
    margin-bottom: 0.8rem;
  }
  margin-bottom: 2.4rem;
`;

const ChosenStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  padding: 0.9rem 1.6rem 0.9rem 1.6rem;
`;
