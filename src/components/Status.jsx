import styled from "styled-components";
import arrowDown from "../../public/assets/icon-chevron-down.svg";
function Status({ columnName }) {
  return (
    <StyledStatus>
      <p>{columnName}</p>
      <img src={arrowDown} />
    </StyledStatus>
  );
}

export default Status;

const StyledStatus = styled.div`
  margin-top: 0.8rem;
  padding: 1.6rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
