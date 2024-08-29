import { createContext, useContext, useState } from "react";
import data from "../../data.json";

const BoardsContext = createContext();

function BoardsContextProvider({ children }) {
  const [boards, setBoards] = useState(data.boards);
  const [render, setRender] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const [selectedBoard, setSelectedBoard] = useState("Platform Launch");
  const [addingNewTask, setAddingNewTask] = useState(false);
  const [editingTask, setEditingTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});

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
