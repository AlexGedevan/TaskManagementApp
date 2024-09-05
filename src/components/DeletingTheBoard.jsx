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
  } = useBoards();

  function handleDeleteBoard() {
    setSelectedBoard((state) => {
      if (boards.length > 1) {
        return boards[1].name;
      } else if (boards.length === 1) {
        return "none";
      } else if (boards.length === 0) {
        return alert("there is no boards to delete");
      }
    });
    setBoards((boards) => {
      setDeletingTheBoard(false);
      return boards.filter((board) => board.name !== selectedBoard);
    });
  }
  return (
    <Overlay>
      <StyledDeletingTheBoard>
        <h1>Delete this board?</h1>
        <p>
          Are you sure you want to delete the ‘{selectedBoard}’ board? This
          action will remove all columns and tasks and cannot be reversed.
        </p>
        <Buttons>
          <ReusableButton
            backgroundColor={"#EA5555"}
            textColor={"white"}
            onClickFunction={handleDeleteBoard}
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
  background-color: white;
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
