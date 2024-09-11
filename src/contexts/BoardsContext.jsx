import { createContext, useContext, useState } from "react";
import data from "../../data.json";

const BoardsContext = createContext();

function BoardsContextProvider({ children }) {
  const [boards, setBoards] = useState(data.boards);
  const [render, setRender] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(
    boards.length > 0 ? boards[0].name : "none"
  );
  const [addingNewTask, setAddingNewTask] = useState(false);
  const [editingTask, setEditingTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const [subtasks, setSubtasks] = useState([{ title: "", isCompleted: false }]);
  const [addingNewColumn, setAddingNewColumn] = useState(false);
  const [addingNewBoard, setAddingNewBoard] = useState(false);
  const [deletingTheBoard, setDeletingTheBoard] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <BoardsContext.Provider
      value={{
        boards,
        setBoards,
        isOpenSidebar,
        setIsOpenSidebar,
        selectedBoard,
        setSelectedBoard,
        render,
        setRender,
        addingNewTask,
        setAddingNewTask,
        editingTask,
        setEditingTask,
        selectedTask,
        setSelectedTask,
        subtasks,
        setSubtasks,
        addingNewColumn,
        setAddingNewColumn,
        addingNewBoard,
        setAddingNewBoard,
        deletingTheBoard,
        setDeletingTheBoard,
        isDarkMode,
        setIsDarkMode,
      }}
    >
      {children}
    </BoardsContext.Provider>
  );
}

function useBoards() {
  const context = useContext(BoardsContext);
  if (!context) throw new Error("Context was used outside the box");
  return context;
}

export { BoardsContextProvider, useBoards };
