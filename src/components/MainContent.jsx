import styled from "styled-components";
import { useBoards } from "../contexts/BoardsContext";
import Tasks from "./Tasks";
import AddNewTask from "./AddNewTask";
import EditTask from "./EditTask";

function MainContent() {
  const { boards, addingNewTask, editingTask } = useBoards();

  return (
    <StyledMainContent>
      {!boards ? (
        <EmptyBoardMessage>
          <h1>This board is empty. Create a new column to get started.</h1>
          <button>+ Add new column</button>
        </EmptyBoardMessage>
      ) : (
        <Tasks />
      )}
      {addingNewTask && <AddNewTask />}
      {editingTask && <EditTask />}
    </StyledMainContent>
  );
}

export default MainContent;

const StyledMainContent = styled.div`
  width: 100%;
  padding: 0 1.6rem;
  overflow-x: scroll;
  min-height: 100vh;

  background-color: #f4f7fd;
`;

const EmptyBoardMessage = styled.div`
  height: 100%;
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
