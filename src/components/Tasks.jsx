import styled from "styled-components";
import { useBoards } from "../contexts/BoardsContext";
import TasksColumnItem from "./TasksColumnItem";

function Tasks() {
  const { boards, selectedBoard } = useBoards();
  const selectedTasksToView = boards
    .filter((board) => board.name === selectedBoard)
    .at(0);
  //   console.log(selectedTasksToView);
  return (
    <StyledTasks>
      {selectedTasksToView.columns.map((column) => (
        <TasksColumnItem column={column} key={column.name} />
      ))}
    </StyledTasks>
  );
}

export default Tasks;

const StyledTasks = styled.div`
  /* width: 400px; */
  padding: 2.3rem 2.4rem 2.1rem 2.4rem;
  display: flex;
  gap: 2.4rem;
  justify-content: space-between;
`;
