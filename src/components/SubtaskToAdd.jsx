import styled from "styled-components";
import cross from "../../public/assets/icon-cross.svg";
import { useState } from "react";
function SubtaskToAdd({
  placeholder,
  setNumberOfSubtasks,
  numberOfSubtasks,
  setSubtasks,
  index,
  selectedTask,
}) {
  function handleChange(e) {
    setSubtask((state) => {
      return { ...state, title: e.target.value };
    });
  }
  function handleBlur() {
    setSubtasks((state) => {
      const updatedList = state;
      updatedList[index] = subtask;
      return updatedList;
    });
  }

  function handleRemoveSubtask() {
    setNumberOfSubtasks((state) => {
      const arr = [...state.slice(0, -1)];
      return arr;
    });
    setSubtasks((state) => {
      return [...state.slice(0, -1)];
    });
  }
  const [subtask, setSubtask] = useState({ isCompleted: false, title: "" });
  return (
    <StyledSubtaskToAdd index={index} numberOfSubtasks={numberOfSubtasks}>
      <input
        type="text"
        value={subtask.title}
        placeholder={`e.g. ${placeholder}`}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <img src={cross} onClick={handleRemoveSubtask} />
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
  & > img {
    cursor: pointer;
    display: ${(props) =>
      props.index === props.numberOfSubtasks.length - 1 ? "block" : "none"};
  }
`;
