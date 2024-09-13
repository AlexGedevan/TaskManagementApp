import styled from "styled-components";
import HeaderLogo from "../UI/HeaderLogo";
import Boards from "./Boards";
import { useState } from "react";
import { useBoards } from "../contexts/BoardsContext";
import SidebarHeader from "../UI/SidebarHeader";

function Sidebar() {
  const { isDarkMode } = useBoards();
  return (
    <StyledSidebar isDarkMode={isDarkMode}>
      {/* <SidebarHeader /> */}
      <Boards />
    </StyledSidebar>
  );
}

export default Sidebar;

const StyledSidebar = styled.div`
  position: absolute;
  top: 70px;
  background-color: ${(props) => (props.isDarkMode ? "#2B2C37" : "white")};
  padding: 1rem;
  display: block;
  height: 95%;

  @media screen and (min-width: 760px) {
    position: ${(props) => !props.isDarkMode && "static"};
    display: block;
    background-color: none;
    padding: 3.2rem 2rem 0 0;
    min-width: 26rem;
    /* min-height: 100vh; */
  }
`;
