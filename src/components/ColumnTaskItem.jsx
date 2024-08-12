import styled from "styled-components";

function ColumnTaskItem({ task }) {
  return (
    <StyledColumnTaskItem>
      <h1>{task.title}</h1>
      <p>0 of 3 substasks</p>
    </StyledColumnTaskItem>
  );
}

export default ColumnTaskItem;

const StyledColumnTaskItem = styled.div`
  padding: 2.3rem 1.6rem 2.3rem 1.6rem;
  background-color: white;
  border-radius: 10px;
  width: 28rem;

  & > h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.89rem;
  }

  & > p {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
  }
`;
