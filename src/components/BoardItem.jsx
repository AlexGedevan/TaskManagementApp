import styled from "styled-components";
import iconBoard from "../../public/assets/icon-board.svg";
import { useBoards } from "../contexts/BoardsContext";
function BoardItem({ board }) {
  const { selectedBoard, setSelectedBoard, isDarkMode } = useBoards();
  return (
    <StyledBoardItem
      boardname={board.name}
      selectedBoard={selectedBoard}
      isDarkMode={isDarkMode}
      onClick={() => {
        setSelectedBoard(board.name);
      }}
    >
      <img src={iconBoard} />
      <p>{board.name}</p>
    </StyledBoardItem>
  );
}

export default BoardItem;

const StyledBoardItem = styled.div`
  padding: 1.4rem 0 1.5rem 2.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  background-color: ${(props) =>
    props.boardname === props.selectedBoard
      ? "#635FC7"
      : props.isDarkMode
      ? "#2B2C37"
      : "white"};
  border-top-right-radius: ${(props) =>
    props.boardname === props.selectedBoard ? "2000px" : "0"};
  border-bottom-right-radius: ${(props) =>
    props.boardname === props.selectedBoard ? "2000px" : "0"};

  & > img {
    width: 1.6rem;
    height: 1.6rem;
  }

  & > p {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.89rem;
    color: ${(props) =>
      props.boardname === props.selectedBoard ? "white" : "#828fa3"};
  }
`;
