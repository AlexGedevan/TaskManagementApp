import styled from "styled-components";
import { useBoards } from "../contexts/BoardsContext";

function StatusChooser({ setChosenStatus, setIsOpenStatus }) {
  function handleChooseStatus(column) {
    setChosenStatus(column.name);
    setIsOpenStatus(false);
  }
  const { selectedBoard, boards } = useBoards();
  const columns = boards
    .filter((board) => board.name === selectedBoard)
    .at(0).columns;
  // console.log(columns);

  return (
    <StyledStatusChooser>
      {columns.map((column) => (
        <Status key={column.name} onClick={() => handleChooseStatus(column)}>
          <p>{column.name}</p>
        </Status>
      ))}
    </StyledStatusChooser>
  );
}

export default StatusChooser;

const StyledStatusChooser = styled.div``;

const Status = styled.div`
  border: 1px solid black;
  padding: 0.9rem 1.6rem 0.9rem 1.6rem;
`;
