import React from 'react'
import axios from 'axios'
import {MdOutlineDeleteOutline, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'

const Table = ({ todos, setTodos, isLoading }) => {
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
            <span className='inline-block cursor-pointer'>{todoItem.completed ? <MdOutlineCheckBox /> :
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
              <span className='text-xl cursor-pointer'><MdEditNote /></span>
              <span className='text-xl cursor-pointer'><MdOutlineDeleteOutline onClick={ () => handleDelete(todoItem.id)} /></span>
            </td>
          </tr>
            )          
          })
          }</>}
        </tbody>
      </table>
    </div>
  )
}

export default Table