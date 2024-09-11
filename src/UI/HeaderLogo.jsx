import styled from "styled-components";
import { useBoards } from "../contexts/BoardsContext";

function HeaderLogo() {
  const { setIsOpenSidebar } = useBoards();
  return (
    <StyledHeaderLogo onClick={() => setIsOpenSidebar((state) => !state)}>
      <div></div>
      <div></div>
      <div></div>
    </StyledHeaderLogo>
  );
}

export default HeaderLogo;

const StyledHeaderLogo = styled.div`
  display: flex;

  gap: 3px;
  & > div {
    width: 6px;
    height: 2.5rem;
    background-color: #635fc7;
    border-radius: 2px;
  }

  & > div:nth-child(2) {
    opacity: 0.75;
  }
  & > div:nth-child(3) {
    opacity: 0.5;
  }
`;
