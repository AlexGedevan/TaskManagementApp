import styled from "styled-components";
import SubtaskToAdd from "./SubtaskToAdd";
import arrowDown from "../../public/assets/icon-chevron-down.svg";
import arrowUp from "../../public/assets/icon-chevron-up.svg";
import ReusableButton from "../UI/ReusableButton";
import StatusChooser from "./StatusChooser";
import { useEffect, useRef, useState } from "react";
import { useBoards } from "../contexts/BoardsContext";
function AddNewTask() {
  const {
    selectedBoard,
    boards,
    setBoards,
    setRender,
    setAddingNewTask,
    subtasks,
    setSubtasks,
  } = useBoards();
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [chosenStatus, setChosenStatus] = useState(
    boards.filter((board) => board.name === selectedBoard).at(0).columns[0].name
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const divRef = useRef(null);

  function handleAddTask() {
    if (!title || !description || subtasks.length === 0) {
      return alert("Missing mandatory fields");
    }
    if (subtasks.find((subtask) => subtask.title === "")) {
      return alert("cannot create a subtask with no title");
    }
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
  }

  function handleAddSubtask() {
    console.log(subtasks);
    setSubtasks((state) => {
      return [...state, { title: "", isCompleted: false }]; // Create a new array with the existing subtasks plus the new subtask
    });
  }

  const handleClick = (event) => {
    // Check if the click was inside the div
    const clickedInside =
      divRef.current && divRef.current.contains(event.target);

    if (clickedInside) {
      console.log("Div was clicked!");
    } else {
      console.log("Clicked outside the div");
      setSubtasks([{ title: "", isCompleted: false }]);

      setAddingNewTask(false); // Assuming this is where you want to close the task creation
    }
  };
  // useEffect(() => {
  //   const handleClick = (event) => {
  //     // Check if the click was inside the div
  //     const clickedInside =
  //       divRef.current && divRef.current.contains(event.target);

  //     if (clickedInside) {
  //       console.log("Div was clicked!");
  //     } else {
  //       console.log("Clicked outside the div");
  //       setAddingNewTask(false); // Assuming this is where you want to close the task creation
  //     }
  //   };

  //   // Attach the event listener
  //   document.addEventListener("mousedown", handleClick);

  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener("mousedown", handleClick);
  //   };
  // }, [setAddingNewTask]);
  return (
    <Overlay onClick={handleClick}>
      <StyledAddNewTask ref={divRef}>
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
          {subtasks.map((item, index) => (
            <SubtaskToAdd
              placeholder=""
              key={index}
              index={index}
              // setNumberOfSubtasks={setNumberOfSubtasks}
              // numberOfSubtasks={numberOfSubtasks}
              setSubtasks={setSubtasks}
              subtasks={subtasks}
              item={item}
              setRender={setRender}
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
