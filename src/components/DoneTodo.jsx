import React from "react";

export const DoneTodo = (props) => {
  const { doneTodos, onClickUndone } = props;
  return (
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
  );
};
