import { useRef, useState } from "react";
import styled from "styled-components";
import { useBoards } from "../contexts/BoardsContext";
import ReusableButton from "../UI/ReusableButton";

function AddingNewColumn() {
  const { setAddingNewColumn, boards, setBoards, selectedBoard } = useBoards();
  const [columnName, setColumnName] = useState("");
  const divRef = useRef(null);

  function handleAddColumn() {
    if (!columnName) {
      return alert("Column name required");
    }
    const newColumn = {
      name: columnName,
      tasks: [],
    };
    setBoards((boards) => {
      boards
        .filter((board) => board.name === selectedBoard)
        .at(0)
        .columns.push(newColumn);
      return boards;
    });
    setAddingNewColumn(false);
  }

  const handleClick = (event) => {
    // Check if the click was inside the div
    const clickedInside =
      divRef.current && divRef.current.contains(event.target);

    if (clickedInside) {
      console.log("Div was clicked!");
    } else {
      console.log("Clicked outside the div");
      setAddingNewColumn(false); // Assuming this is where you want to close the task creation
    }
  };
  return (
    <Overlay onSubmit={handleClick}>
      <StyledAddingNewColumn ref={divRef}>
        <Input>
          <p>Enter column name : </p>
          <input
            type="text"
            placeholder="Column name..."
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
          />
        </Input>
        <ReusableButton
          backgroundColor={"#635fc7"}
          textColor={"white"}
          onClickFunction={handleAddColumn}
        >
          Add Column
        </ReusableButton>
      </StyledAddingNewColumn>
    </Overlay>
  );
}

export default AddingNewColumn;

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
const StyledAddingNewColumn = styled.div`
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
