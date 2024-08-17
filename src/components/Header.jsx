import styled from "styled-components";
import arrowDown from "../../public/arrowDown.svg";
import plusSign from "../../public/plus.svg";
import HeaderLogo from "../UI/HeaderLogo";
import SidebarHeader from "../UI/SidebarHeader";
import { useBoards } from "../contexts/BoardsContext";
function Header() {
  const { isOpenSidebar, setAddingNewTask } = useBoards();
  return (
    <StyledHeader>
      <HeaderLeftSide>
        <HeaderLogo />
        <SidebarHeader />
        <p>Platform Launch</p>
        <img src={arrowDown} alt="Arrow down" />
      </HeaderLeftSide>
      <HeaderRightSide>
        <AddNewTask
          isOpenSidebar={isOpenSidebar}
          onClick={() => setAddingNewTask(true)}
        >
          <img src={plusSign} />
          <p>+ Add New Task</p>
        </AddNewTask>
        <SettingsDots>
          <div></div>
          <div></div>
          <div></div>
        </SettingsDots>
      </HeaderRightSide>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem;
`;

const AddNewTask = styled.div`
  padding: 1.5rem 2.5rem 1.4rem 2.4rem;
  margin-left: 7.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 4.8rem;
  height: 3.2rem; */
  border-radius: 5000px;
  background-color: rgb(98, 95, 199);
  & > p {
    display: none;
  }

  @media screen and (min-width: 760px) {
    & > img {
      display: none;
    }
    & > p {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.89rem;
      color: white;
    }
  }
`;

const SettingsDots = styled.div`
  margin-left: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.46px;
  & > div {
    width: 3.69px;
    height: 3.69px;
    border-radius: 100000px;
    background-color: #828fa3;
  }
`;

const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  & > p {
    margin-left: 16px;

    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.268rem;
  }
  & > img {
    height: 9px;
    width: 9px;
    margin-left: 8px;
  }

  @media screen and (min-width: 760px) {
    & > div:first-child,
    & > img {
      display: none;
    }
  }
`;
const HeaderRightSide = styled.div`
  display: flex;
  align-items: center;
`;
