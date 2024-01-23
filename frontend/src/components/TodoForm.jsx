import React from 'react';

const TodoForm = () => {
  return (
    <div>
      <input type="text" id="todo" placeholder="Add ToDo" className="input input-bordered input-info w-full max-w-xs"/>
      <button className="btn btn-primary ml-2">Add ToDo</button>
    </div>
  );
}

export default TodoForm