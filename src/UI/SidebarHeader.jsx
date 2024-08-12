import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";
import { useBoards } from "../contexts/BoardsContext";

function SidebarHeader() {
  const { isOpenSidebar, setIsOpenSidebar } = useBoards();
  return (
    <StyledSidebarHeader onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
      <HeaderLogo />
      <h1>Kanban</h1>
    </StyledSidebarHeader>
  );
}
const StyledSidebarHeader = styled.div`
  display: none;
  align-items: center;
  gap: 1.5rem;
  margin-left: 2.6rem;

  @media screen and (min-width: 760px) {
    display: flex;
  }
`;

export default SidebarHeader;
