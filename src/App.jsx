import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { UndoneTodo } from "./components/UndoneTodo";
import { DoneTodo } from "./components/DoneTodo";

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
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={undoneTodos.length >= 5}
      />

      {undoneTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          {" "}
          登録できるTODOは５個までです！完了または削除をして下さい。
        </p>
      )}

      <UndoneTodo
        undoneTodos={undoneTodos}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />

      <DoneTodo doneTodos={doneTodos} onClickUndone={onClickUndone} />
    </>
  );
};
