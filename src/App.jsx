import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";

export const App = () => {
  const [todoText, setTodoText] = useState();
  const [undoneTodos, setUndoneTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...undoneTodos, todoText];
    setUndoneTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...undoneTodos];
    newTodos.splice(index, 1);
    setUndoneTodos(newTodos);
  };

  const onClickDone = (index) => {
    const newUndoneTodos = [...undoneTodos];
    newUndoneTodos.splice(index, 1);

    const newDoneTodos = [...doneTodos, undoneTodos[index]];
    setUndoneTodos(newUndoneTodos);
    setDoneTodos(newDoneTodos);
  };

  const onClickUndone = (index) => {
    const newDoneTodos = [...doneTodos];
    newDoneTodos.splice(index, 1);

    const newUndoneTodos = [...undoneTodos, doneTodos[index]];
    setDoneTodos(newDoneTodos);
    setUndoneTodos(newUndoneTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChage={onChangeTodoText}
        onClick={onClickAdd}
      />
      <div className="done">
        <p className="title">未完了のTODO</p>
        <ul>
          {undoneTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickDone(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="undone">
        <p className="title">完了のTODO</p>
        <ul>
          {doneTodos.map((todo, index) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickUndone(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
