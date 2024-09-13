import styled from "styled-components";
import { useBoards } from "../contexts/BoardsContext";
import ReusableButton from "../UI/ReusableButton";

function DeletingTheBoard() {
  const {
    selectedBoard,
    setBoards,
    boards,
    setDeletingTheBoard,
    setSelectedBoardItem,
    setSelectedBoard,
    isDarkMode,
  } = useBoards();

  function handleDeleteBoard(boardToDelete) {
    if (boards.length === 0) {
      alert("There are no boards to delete.");
      return;
    }

    // Filter out the board to be deleted
    const updatedBoards = boards.filter(
      (board) => board.name !== boardToDelete
    );

    // Update the selected board
    setSelectedBoard((prevSelectedBoard) => {
      if (updatedBoards.length === 0) {
        return "none"; // If no boards left, set to "none"
      }

      // Check if the deleted board is the selected one
      if (prevSelectedBoard === boardToDelete) {
        // If deleted board was selected, choose the next available board
        return updatedBoards[0].name;
      } else {
        return prevSelectedBoard; // Keep the selected board unchanged
      }
    });

    // Update the boards state
    setBoards(updatedBoards);

    // Reset the delete confirmation state
    setDeletingTheBoard(false);
  }

  return (
    <Overlay>
      <StyledDeletingTheBoard isDarkMode={isDarkMode}>
        <h1>Delete this board?</h1>
        <p>
          Are you sure you want to delete the ‘{selectedBoard}’ board? This
          action will remove all columns and tasks and cannot be reversed.
        </p>
        <Buttons>
          <ReusableButton
            backgroundColor={"#EA5555"}
            textColor={"white"}
            onClickFunction={() => handleDeleteBoard(selectedBoard)}
          >
            Delete
          </ReusableButton>
          <ReusableButton
            textColor={"#635FC7"}
            backgroundColor={"#635FC71A"}
            onClickFunction={() => setDeletingTheBoard(false)}
          >
            Cancel
          </ReusableButton>
        </Buttons>
      </StyledDeletingTheBoard>
      ;
    </Overlay>
  );
}

export default DeletingTheBoard;

const StyledDeletingTheBoard = styled.div`
  padding: 3.2rem;
  background-color: ${(props) => (props.isDarkMode ? "#2B2C37" : "white")};
  display: flex;
  flex-direction: column;
  width: 34rem;
  & > h1 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.268rem;
    color: #ea5555;
    margin-bottom: 2.4rem;
  }
  & > p {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2.3rem;
    color: #828fa3;
    margin-bottom: 2.4rem;
  }

  @media screen and (min-width: 760px) {
    width: 48rem;
  }
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

const Buttons = styled.div`
  & > button {
    cursor: pointer;
  }

  & > button:first-child {
    margin-bottom: 1.6rem;
  }

  @media screen and (min-width: 760px) {
    & > button {
      width: 20rem;
    }
    & > button:first-child {
      margin-right: 1.6rem;
    }
  }
`;
