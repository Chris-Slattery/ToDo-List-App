import React, {useState} from 'react';

const TodoForm = () => {

  const [newTodo, setNewTodo] = useState({
    'body': ''
  })

  const handleChange = (e) => {
    setNewTodo(prev => ({
      ...prev,
      'body': e.target.value
    }))
    console.log(newTodo);
  }
  return (
    <div>
      <input type="text" id="todo" placeholder="Add ToDo" className="input input-bordered input-info w-full max-w-xs"
      onChange={handleChange} value={newTodo.body}/>
      <button className="btn btn-primary ml-2">Add ToDo</button>
    </div>
  );
}

export default TodoForm