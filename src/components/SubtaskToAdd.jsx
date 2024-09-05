import styled from "styled-components";
import cross from "../../public/assets/icon-cross.svg";
import { useState } from "react";
function SubtaskToAdd({
  // placeholder,
  // setNumberOfSubtasks,
  // numberOfSubtasks,
  subtasks,
  setSubtasks,
  index,
  selectedTask,
  setRender,
  item,
}) {
  function handleChange(e) {
    const newSubtasks = subtasks.map((subtask, i) =>
      i === index ? { ...subtask, title: e.target.value } : subtask
    );
    setSubtasks(newSubtasks);
  }
  // function handleBlur() {
  //   setSubtasks((state) => {
  //     const updatedList = state;
  //     updatedList[index] = subtask;
  //     return updatedList;
  //   });
  // }
  function handleRemoveSubtask() {
    setSubtasks((state) => {
      const updatedSubtasks = [...state]; // Create a copy of the current state
      updatedSubtasks.splice(index, 1); // Remove the item at the specified index
      return updatedSubtasks; // Return the updated array
    });
  }

  // const [subtask, setSubtask] = useState({ isCompleted: false, title: "" });
  return (
    <StyledSubtaskToAdd index={index}>
      <input
        type="text"
        value={subtasks[index].title}
        // placeholder={`e.g. ${placeholder}`
        onChange={handleChange}
        // onBlur={handleBlur}
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
`;
