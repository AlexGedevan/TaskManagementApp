import styled from "styled-components";
import { useBoards } from "../contexts/BoardsContext";
import BoardItem from "./BoardItem";
import iconBoard from "../../public/assets/icon-board.svg";

function Boards({ isOpen }) {
  const { boards, setAddingNewBoard, isDarkMode, setIsDarkMode } = useBoards();

  return (
    <StyledBoards>
      <p>ALL BOARDS (3)</p>
      {boards.map((board) => (
        <BoardItem board={board} key={board.name} />
      ))}
      <CreateNewBoard>
        <img src={iconBoard} />
        <p onClick={() => setAddingNewBoard(true)}>+ Create New Board</p>
      </CreateNewBoard>
      <p onClick={() => setIsDarkMode((state) => !state)}>
        {isDarkMode ? "Light ☀" : "Dark 🌑"}
      </p>
    </StyledBoards>
  );
}

export default Boards;

const StyledBoards = styled.div`
  position: relative;
  & > p {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
    letter-spacing: 2.4000000953674316px;
    color: #828fa3;
    /* margin-top: 5.5rem; */
    margin-left: 2.4rem;
    margin-bottom: 1.9rem;
  }

  & > p:last-child {
    position: absolute;
    bottom: -400px;
  }
`;

const CreateNewBoard = styled.div`
  padding: 1.4rem 0rem 1.5rem 2.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  & > img {
    width: 1.6rem;
    height: 1.6rem;
  }

  & > p {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.89rem;
    color: #828fa3;
  }
`;
