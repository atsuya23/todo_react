import React from "react";

export const UndoneTodo = (props) => {
  const { undoneTodos, onClickDone, onClickDelete } = props;
  return (
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
  );
};
