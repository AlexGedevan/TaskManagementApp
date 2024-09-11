import styled from "styled-components";
import HeaderLogo from "../UI/HeaderLogo";
import Boards from "./Boards";
import { useState } from "react";
import { useBoards } from "../contexts/BoardsContext";
import SidebarHeader from "../UI/SidebarHeader";

function Sidebar() {
  return (
    <StyledSidebar>
      {/* <SidebarHeader /> */}
      <Boards />
    </StyledSidebar>
  );
}

export default Sidebar;

const StyledSidebar = styled.div`
  position: absolute;
  top: 70px;
  background-color: white;
  padding: 1rem;
  display: block;
  height: 100%;

  @media screen and (min-width: 760px) {
    position: static;
    display: block;
    background-color: none;
    padding: 3.2rem 2rem 0 0;
    min-width: 26rem;
    height: 100%;
  }
`;
