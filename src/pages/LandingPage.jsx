import styled from "styled-components";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import { useBoards } from "../contexts/BoardsContext";
import { useEffect, useRef } from "react";

function LandingPage() {
  const { isOpenSidebar } = useBoards();
  return (
    <StyledLandingPage>
      {isOpenSidebar && <Sidebar />}
      <HeaderAndMain>
        <Header />
        <MainContent />
      </HeaderAndMain>
    </StyledLandingPage>
  );
}

export default LandingPage;

const StyledLandingPage = styled.div`
  display: flex;
  align-items: start;
`;

const HeaderAndMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
