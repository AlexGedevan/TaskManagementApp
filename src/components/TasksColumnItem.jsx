import styled from "styled-components";
import ColumnTaskItem from "./ColumnTaskItem";

function TasksColumnItem({ column }) {
  return (
    <StyledTasksColumnItem>
      <ColumnHeader>
        <Circle column={column.name} />
        <h1>
          {column.name} ({column.tasks.length})
        </h1>
      </ColumnHeader>
      <ColumnTasks>
        {column.tasks.map((task, index) => (
          <ColumnTaskItem
            task={task}
            key={task.title}
            columnName={column.name}
          />
        ))}
      </ColumnTasks>
    </StyledTasksColumnItem>
  );
}

export default TasksColumnItem;

const StyledTasksColumnItem = styled.div`
  width: 28rem;
`;

const Circle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1000000px;
  background-color: ${(props) => props.column === "Todo" && "#49C4E5"};
  background-color: ${(props) => props.column === "Doing" && "#8471F2"};
  background-color: ${(props) => props.column === "Done" && "#67E2AE"};
`;

const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  & > h1 {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
    letter-spacing: 2.4000000953674316px;
    color: #828fa3;
    width: 28rem;
  }
  margin-bottom: 2.4rem;
`;

const ColumnTasks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
