import styled from "styled-components";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import { useBoards } from "../contexts/BoardsContext";

function LandingPage() {
  const { isOpenSidebar } = useBoards();
  return (
    <>
      <StyledLandingPageMobile>
        {isOpenSidebar && <Sidebar />}
        <HeaderAndMain>
          <Header />
          <MainContent />
        </HeaderAndMain>
      </StyledLandingPageMobile>
      <StyledLandingPageTablet>
        <Header />
        <div>
          {isOpenSidebar && <Sidebar />}
          <MainContent />
        </div>
      </StyledLandingPageTablet>
    </>
  );
}

export default LandingPage;

const StyledLandingPageMobile = styled.div`
  display: flex;
  align-items: start;
  @media screen and (min-width: 760px) {
    display: none;
  }
`;

const HeaderAndMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledLandingPageTablet = styled.div`
  display: none;
  @media screen and (min-width: 760px) {
    display: block;
    & > div {
      display: flex;
    }
  }
`;
