import styled from "styled-components";
import { useBoards } from "../contexts/BoardsContext";
import Tasks from "./Tasks";
import AddNewTask from "./AddNewTask";
import EditTask from "./EditTask";
import AddingNewColumn from "./AddingNewColumn";
import AddingNewBoard from "./AddingNewBoard";
import DeletingTheBoard from "./DeletingTheBoard";

function MainContent() {
  const {
    boards,
    addingNewTask,
    editingTask,
    addingNewColumn,
    setAddingNewColumn,
    addingNewBoard,
    deletingTheBoard,
    setAddingNewBoard,
  } = useBoards();

  return (
    <StyledMainContent boards={boards}>
      {boards.length === 0 ? (
        <EmptyBoardMessage>
          <h1>There are no boards. Create a new one to get started</h1>
          <button onClick={() => setAddingNewBoard(true)}>
            + Add new Board
          </button>
        </EmptyBoardMessage>
      ) : (
        <Tasks />
      )}
      {addingNewTask && <AddNewTask />}
      {editingTask && <EditTask />}
      {boards.length > 0 && (
        <NewColumn>
          <p onClick={() => setAddingNewColumn(true)}>+ New Column</p>
        </NewColumn>
      )}
      {addingNewColumn && <AddingNewColumn />}
      {addingNewBoard && <AddingNewBoard />}
      {deletingTheBoard && <DeletingTheBoard />}
    </StyledMainContent>
  );
}

export default MainContent;

const NewColumn = styled.div`
  display: block;
  @media screen and (min-width: 1140px) {
    display: flex;
  }
  align-items: center;
  border-radius: 10px;
  padding: 1rem;
  justify-content: center;
  min-width: 28rem;
  margin-top: 65px;
  background: linear-gradient(
    180deg,
    #e9effa 0%,
    rgba(233, 239, 250, 0.5) 100%
  );
  & > p {
    font-family: Plus Jakarta Sans;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.024rem;
    color: #828fa3;
  }
`;

const StyledMainContent = styled.div`
  width: 100%;
  padding: 0 1.6rem;
  overflow-x: scroll;
  min-height: 100vh;
  display: ${(props) => (props.boards.length > 0 ? "flex" : "block")};
  background-color: #f4f7fd;
  @media screen and (min-width: 1140px) {
    padding: 2.4rem;
  }
`;

const EmptyBoardMessage = styled.div`
  height: 100vh;
  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.268rem;
  }

  & > button {
    background-color: #635fc7;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.89rem;
    border-radius: 10000px;
    padding: 1.5rem 1.8rem 1.4rem 1.7rem;
    color: white;
    border: none;
    outline: none;
  }
`;
