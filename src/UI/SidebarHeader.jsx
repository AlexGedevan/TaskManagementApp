import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";
import { useBoards } from "../contexts/BoardsContext";

function SidebarHeader() {
  const { isOpenSidebar, setIsOpenSidebar, isDarkMode } = useBoards();
  return (
    <StyledSidebarHeader
      onClick={() => setIsOpenSidebar(!isOpenSidebar)}
      isDarkMode={isDarkMode}
    >
      <HeaderLogo />
      <h1>Kanban</h1>
    </StyledSidebarHeader>
  );
}
const StyledSidebarHeader = styled.div`
  display: none;
  align-items: center;
  gap: 1.5rem;
  margin-left: 0.8rem;

  @media screen and (min-width: 760px) {
    display: flex;
  }
  & > h1 {
    color: ${(props) => props.isDarkMode && "white"};
  }
`;

export default SidebarHeader;
