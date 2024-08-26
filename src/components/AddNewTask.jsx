import styled from "styled-components";
import SubtaskToAdd from "./SubtaskToAdd";
import arrowDown from "../../public/assets/icon-chevron-down.svg";
import arrowUp from "../../public/assets/icon-chevron-up.svg";
import ReusableButton from "../UI/ReusableButton";
import StatusChooser from "./StatusChooser";
import { useEffect, useRef, useState } from "react";
import { useBoards } from "../contexts/BoardsContext";
function AddNewTask() {
  const { selectedBoard, boards, setBoards, setRender, setAddingNewTask } =
    useBoards();
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [chosenStatus, setChosenStatus] = useState("Todo");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtasks, setSubtasks] = useState([]);
  const [numberOfSubtasks, setNumberOfSubtasks] = useState([1]);

  const divRef = useRef(null);

  console.log(
    boards
      .filter((board) => board.name === selectedBoard)
      .at(0)
      .columns.filter((column) => column.name === chosenStatus)
      .at(0).tasks
  );

  function handleAddTask() {
    const newTask = {
      title,
      description,
      status: chosenStatus,
      subtasks: subtasks,
    };

    const whereToAddTask = boards
      .filter((board) => board.name === selectedBoard)
      .at(0)
      .columns.filter((column) => column.name === chosenStatus)
      .at(0).tasks;
    whereToAddTask.push(newTask);
    setBoards(boards);
    setRender((state) => !state);
    setAddingNewTask(false);
    console.log(whereToAddTask);
  }

  function handleAddSubtask() {
    setNumberOfSubtasks((state) => {
      return [...state, 1];
    });
  }

  // useEffect(() => {
  //   const handleClick = (event) => {
  //     if (divRef.current && divRef.current.contains(event.target)) {
  //       console.log("Div was clicked!");
  //       // Add your custom logic here
  //     } else {
  //       setAddingNewTask(false);
  //     }
  //   };

  // Attach event listener
  // document.addEventListener("mousedown", handleClick);

  // Cleanup the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, [setAddingNewTask]);
  return (
    <Overlay>
      <StyledAddNewTask>
        <h1>Add New Task</h1>
        <Title>
          <p>Title</p>
          <input
            type="text"
            placeholder="e.g. Take coffee break"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Title>
        <Description>
          <p>Description</p>
          <textarea
            type="text"
            placeholder="e.g. It’s always good to take a break to recharge the batteries (total BS)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Description>
        <Subtasks>
          <p>Subtasks</p>
          {numberOfSubtasks.map((item, index) => (
            <SubtaskToAdd
              placeholder=""
              key={index}
              index={index}
              setNumberOfSubtasks={setNumberOfSubtasks}
              numberOfSubtasks={numberOfSubtasks}
              setSubtasks={setSubtasks}
            />
          ))}
          {/* <SubtaskToAdd placeholder="make a coffee" />
          <SubtaskToAdd placeholder="Buy a ticket to a football match" /> */}
        </Subtasks>
        <ReusableButton
          backgroundColor="#635fc71a"
          textColor="#635fc7"
          onClickFunction={handleAddSubtask}
        >
          + Add New Subtask
        </ReusableButton>
        <Status>
          <p>Status</p>
          <ChosenStatusDiv onClick={() => setIsOpenStatus(!isOpenStatus)}>
            <p>{chosenStatus}</p>
            {isOpenStatus ? <img src={arrowUp} /> : <img src={arrowDown} />}
          </ChosenStatusDiv>
          {isOpenStatus && (
            <StatusChooser
              setChosenStatus={setChosenStatus}
              setIsOpenStatus={setIsOpenStatus}
            />
          )}
        </Status>
        <ReusableButton
          backgroundColor="#635FC7"
          textColor={"white"}
          onClickFunction={handleAddTask}
        >
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
    margin-bottom: 0.8rem;
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
  margin-bottom: 1.2rem;
  pointer-events: none;
  div:last-child {
    pointer-events: all;
  }
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

const ChosenStatusDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  padding: 0.9rem 1.6rem 0.9rem 1.6rem;
`;
