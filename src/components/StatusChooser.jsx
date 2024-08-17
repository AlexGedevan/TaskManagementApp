import styled from "styled-components";

function StatusChooser() {
  return (
    <StyledStatusChooser>
      <Status>
        <p>Todo</p>
      </Status>
      <Status>
        <p>Doing</p>
      </Status>
      <Status>
        <p>Done</p>
      </Status>
    </StyledStatusChooser>
  );
}

export default StatusChooser;

const StyledStatusChooser = styled.div``;

const Status = styled.div`
  border: 1px solid black;
  padding: 0.9rem 1.6rem 0.9rem 1.6rem;
`;
