import React, {useState} from 'react';
import axios from 'axios'

const TodoForm = ({ setTodos, fetchData }) => {

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

  const postTodo = async () => {
    try{
      await axios.post('http://127.0.0.1:8000/api/todo/', newTodo)
      //Empty Textbox when data is entered
      setNewTodo( {'body': ''})
      fetchData()
    } catch(error) {
      console.log(error);
    }
  }
  return (
    <div>
      <input type="text" id="todo" placeholder="Add ToDo" className="input input-bordered input-info w-full max-w-xs"
      onChange={handleChange} value={newTodo.body}
      //Code to allow user to press enter to enter data instead of clicking AddToDo Button
      onKeyDown={ (e) => {
        if (e.key === 'Enter') {
          postTodo()

        }//end if

      }}
      />
      <button className="btn btn-primary ml-2" onClick={postTodo}>Add ToDo</button>
    </div>
  );
}

export default TodoForm