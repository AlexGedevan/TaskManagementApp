import { useState } from "react";
import styled from "styled-components";
import { useBoards } from "../contexts/BoardsContext";

function BoardSettings({ setSettingsOpen }) {
  const { setDeletingTheBoard, deletingTheBoard } = useBoards();
  return (
    <>
      <StyledBoardSettings>
        <p
          onClick={() => {
            setDeletingTheBoard(true);
            setSettingsOpen(false);
          }}
        >
          Delete Board
        </p>
      </StyledBoardSettings>
    </>
  );
}

export default BoardSettings;

const StyledBoardSettings = styled.div`
  cursor: pointer;
  font-size: 1.4rem;
  /* background-color: white; */
  padding: 2rem;
  position: absolute;
  top: 50px;
  right: 0;
`;
