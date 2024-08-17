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
  min-width: 260px;
  padding: 3.2rem 2rem 0 0;
  display: none;
  height: 100%;

  @media screen and (min-width: 760px) {
    display: block;
  }
`;
