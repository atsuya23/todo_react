import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [undoneTodos, setUndoneTodos] = useState(["あああ", "いいい"]);
  const [doneTodos, setDoneTodos] = useState(["ううう"]);

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

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="done">
        <p className="title">未完了のTODO</p>
        <ul>
          {undoneTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="undone">
        <p className="title">完了のTODO</p>
        <ul>
          {doneTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>うううう</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
