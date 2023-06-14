import { useEffect, useState } from "react"
import Button from "../button/Button"
import "./index.css"

const Toolbar = ({
  selectedContent,
  setSelectedcontent,
  todosList
}) => {
  // VARIABLES ------------------------
  const [todosLegth, setTodosLegth] = useState({ all: 0, done: 0, todo: 0 });
  // CONDITIONS -----------------------
  const handleOpenHistory = () => {
    setSelectedcontent("total")
  }
  const handleOpenCompleted = () => {
    setSelectedcontent("done")
  }
  const handleOpenNotCompleted = () => {
    setSelectedcontent("todo")
  }

  useEffect(() => {
    setTodosLegth(
      {
        all: todosList.length,
        done: (todosList.filter((todo) => todo.completed === true)).length,
        todo: (todosList.filter((todo) => todo.completed === false)).length,
      });
  }, [todosList]);


  // RETURN ---------------------------
  return (
    <div className="Toolbar">
      <Button
        icon="fi fi-rr-time-past"
        active={selectedContent === "total" ? true : false}
        onClickCallback={() => { handleOpenHistory() }}
        reverse
        text={"Total: " + todosLegth.all}
        color="#ffc409"
      />
      <Button
        icon="fi fi-rr-checkbox"
        active={selectedContent === "done" ? true : false}
        onClickCallback={() => { handleOpenCompleted() }}
        reverse
        text={"Done: " + todosLegth.done}
        color="#22ffa3"
      />
      <Button
        icon="fi fi-rr-circle-xmark"
        active={selectedContent === "todo" ? true : false}
        onClickCallback={() => { handleOpenNotCompleted() }}
        reverse
        color="#ff566c"
        text={"Todo: " + todosLegth.todo}
      />
    </div>
  )
}

export default Toolbar