import styled from "styled-components";
import cross from "../../public/assets/icon-cross.svg";
function SubtaskToAdd({ placeholder }) {
  return (
    <StyledSubtaskToAdd>
      <input type="text" placeholder={`e.g. ${placeholder}`} />
      <img src={cross} />
    </StyledSubtaskToAdd>
  );
}

export default SubtaskToAdd;

const StyledSubtaskToAdd = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  & > input {
    padding: 0.9rem 0rem 0.9rem 1.6rem;
    width: 26.4rem;
  }
  & > p {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2.3rem;
    opacity: 0.5;
  }
`;
