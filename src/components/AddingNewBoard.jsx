import { useRef, useState } from "react";
import styled from "styled-components";
import ReusableButton from "../UI/ReusableButton";
import { useBoards } from "../contexts/BoardsContext";

function AddingNewBoard() {
  const [boardName, setBoardName] = useState("");
  const { boards, setBoards, setAddingNewBoard, setSelectedBoard } =
    useBoards();

  const divRef = useRef(null);

  const handleClick = (event) => {
    // Check if the click was inside the div
    const clickedInside =
      divRef.current && divRef.current.contains(event.target);

    if (clickedInside) {
      console.log("Div was clicked!");
    } else {
      console.log("Clicked outside the div");
      setAddingNewBoard(false); // Assuming this is where you want to close the task creation
    }
  };

  function handleAddBoard() {
    if (!boardName) {
      return alert("Board name required");
    }
    const newBoard = {
      name: boardName,
      columns: [],
    };
    setBoards((boards) => {
      boards.push(newBoard);
      return boards;
    });
    setAddingNewBoard(false);
    setSelectedBoard(boardName);
  }

  return (
    <Overlay onSubmit={handleClick}>
      <StyledAddingNewBoard ref={divRef}>
        <Input>
          <p>Enter column name : </p>
          <input
            type="text"
            placeholder="Board name..."
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
          />
        </Input>
        <ReusableButton
          backgroundColor={"#635fc7"}
          textColor={"white"}
          onClickFunction={handleAddBoard}
        >
          Add Board
        </ReusableButton>
      </StyledAddingNewBoard>
    </Overlay>
  );
}

export default AddingNewBoard;

const Overlay = styled.form`
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

const StyledAddingNewBoard = styled.div`
  border-radius: 1rem;
  background-color: white;
  padding: 3rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  & > p {
    font-size: 2rem;
  }
  & > input {
    font-size: 2rem;
    border: none;
  }
`;
