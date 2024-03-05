import React, { useState } from 'react'
import axios from 'axios'
import {MdOutlineDeleteOutline, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'

const Table = ({ todos, setTodos, isLoading }) => {
  //Function to edit the state of Todo
  const [editText, setEditText] = useState({
    'body': ''
  })



  //function to delete data based on id
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/todo/${id}/`)

      const newList = todos.filter(todo => todo.id !==id)
      setTodos(newList)
    } catch (error) {
      console.log(error);
    }//end catch
  }//end handleDelete function

  //Function to implement the ability to edit
  const handleEdit = async(id, value) =>{
    try{
      const response = await axios.patch(`http://127.0.0.1:8000/api/todo/${id}/`, value)
      const newTodos = todos.map(todo => todo.id === id ? response.data : todo)
      setTodos(newTodos)
    }catch(error) {
      console.log(error);
    }

  }//end handleEdit function

  const handleCheckbox = (id, value) => {
    handleEdit(id, {
      'completed': !value
    })
  }

  const handleChange = (e) => {
    setEditText(prev => ({
      ...prev,
      'body': e.target.value
    }))
    console.log(editText)
  }

  const handleClick = () => {
    handleEdit(editText.id, editText)
    setEditText({
      'body': ''
    })
  }



  return (
    <div className='py-2'>
      <table className='w-11/12 max-w-4x1'>
        <thead className='border-b-2 border-black'>
          <tr>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Checkbox</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>To Do</th>
            <th className='p-3 text-sm font-semibold tracking-wide'>Status</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date Created</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? <div>Is Loading</div> :
          <>
          {todos.map( (todoItem, index) => {
            return (
              <tr key={todoItem.id} className='border-b border-black'>
            <td className='p-3' title={todoItem.id}>
            <span onClick={() => handleCheckbox(todoItem.id, todoItem.completed)} 
            className='inline-block cursor-pointer'>{todoItem.completed ? <MdOutlineCheckBox /> :
            <MdOutlineCheckBoxOutlineBlank />} </span>
            </td>
            <td className='p-3 text-sm'>{todoItem.body}</td>
            <td className='p-3 text-sm text-center'>
            <span className={`p-1.5 text-xs font-medium tracking-wider rounded-md ${todoItem.completed ? 'bg-green-300' : 'bg-red-300'}`}>
            {todoItem.completed ? 'Complete' : 'Incomplete' }
            </span>
            </td>
            <td className='p-3 text-sm'>{ new Date(todoItem.created).toLocaleString()}</td>
            <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
              <span className='text-xl cursor-pointer'>
              <label htmlFor="my_modal_6" className="btn"><MdEditNote  onClick={() => setEditText(todoItem)}/></label>
                </span>
              <span className='text-xl cursor-pointer'><MdOutlineDeleteOutline onClick={ () => handleDelete(todoItem.id)} /></span>
            </td>
          </tr>
            )          
          })
          }</>}
        </tbody>
      </table>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Todo</h3>
          <input type="text" value={editText.body} onChange={handleChange} className="input input-bordered w-full mt-8" />
          <div className="modal-action">
            <label htmlFor="my_modal_6" onClick={handleClick} className="btn btn-primary">Edit</label>
            <label htmlFor="my_modal_6" className="btn">Close</label>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Table