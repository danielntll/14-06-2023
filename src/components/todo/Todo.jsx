import { useState } from "react"
import Button from "../button/Button"
import "./index.css"

const Todo = (
  {
    data,
    handleCompleteTodo,
    handleUndoTodo,
    handleDeleteTodo,
    ...props
  }) => {
  // VARIABLES ------------------------
  // CONDITIONS -----------------------

  // RETURN ---------------------------
  return (
    <div className={data?.completed ? "" : "Todo"}>
      <div className="Todo__content">
        <p className="Todo__content__header">
          {data?.date}
        </p>
        <div className="Todo__content__body">
          <p style={{ textDecoration: data?.completed ? "line-through" : "none" }}>
            {data?.todo}
          </p>
          <div className="Todo__actions">
            {data?.completed ?

              <>
                <Button
                  onClickCallback={() => handleUndoTodo(data?.id)}
                  icon="fi fi-rr-undo"
                  color="#ffc409"
                />
                <Button
                  onClickCallback={() => handleDeleteTodo(data?.id)}
                  icon="fi fi-rr-trash"
                  color="#ff566c"
                />
              </>
              :
              <Button
                onClickCallback={() => handleCompleteTodo(data?.id)}
                icon="fi fi-rr-check"
                color="#22ffa3"
              />

            }

          </div>
        </div>
      </div>

    </div>
  )
}

export default Todo