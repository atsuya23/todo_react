import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [undoneTodos, setUndoneTodos] = useState(["あああ", "いいい"]);
  const [doneTodos, setDoneTodos] = useState(["ううう"]);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="done">
        <p className="title">未完了のTODO</p>
        <ul>
          {undoneTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
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
