import React from 'react'
import {MdOutlineDeleteOutline, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank} from 'react-icons/md'

const Table = () => {
  return (
    <div className='py-32'>
      <table className='w-11/12 max-w-4x1'>
        <thead className='border-b-2 border-black'>
          <tr>
            <th className='p-3 text-sm font-semibold tracking-wide'>Checkbox</th>
            <th className='p-3 text-sm font-semibold tracking-wide'>To Do</th>
            <th className='p-3 text-sm font-semibold tracking-wide'>Status</th>
            <th className='p-3 text-sm font-semibold tracking-wide'>Data Created</th>
            <th className='p-3 text-sm font-semibold tracking-wide'>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='p-3'>
            <span className='inline-block cursor-pointer'><MdOutlineCheckBox /></span>
            </td>
            <td className='p-3 text-sm'>Lorem ipsum dolor sit</td>
            <td className='p-3 text-sm text-center'>
            <span className='p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300'>Done</span>
            </td>
            <td className='p-3 text-sm'>16-01-2024</td>
            <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
              <span className='text-xl cursor-pointer'><MdEditNote /></span>
              <span className='text-xl cursor-pointer'><MdOutlineDeleteOutline /></span>
            </td>
          </tr>
          <tr>
            <td className='p-3'>
            <span className='inline-block cursor-pointer'><MdOutlineCheckBox /></span>
            </td>
            <td className='p-3 text-sm'>Lorem ipsum dolor sit</td>
            <td className='p-3 text-sm text-center'>
            <span className='p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300'>Done</span>
            </td>
            <td className='p-3 text-sm'>16-01-2024</td>
            <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
              <span className='text-xl cursor-pointer'><MdEditNote /></span>
              <span className='text-xl cursor-pointer'><MdOutlineDeleteOutline /></span>
            </td>
          </tr>
          <tr>
            <td className='p-3'>
            <span className='inline-block cursor-pointer'><MdOutlineCheckBox /></span>
            </td>
            <td className='p-3 text-sm'>Lorem ipsum dolor sit</td>
            <td className='p-3 text-sm text-center'>
            <span className='p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300'>Done</span>
            </td>
            <td className='p-3 text-sm'>16-01-2024</td>
            <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
              <span className='text-xl cursor-pointer'><MdEditNote /></span>
              <span className='text-xl cursor-pointer'><MdOutlineDeleteOutline /></span>
            </td>
          </tr>
          <tr>
            <td className='p-3'>
            <span className='inline-block cursor-pointer'><MdOutlineCheckBox /></span>
            </td>
            <td className='p-3 text-sm'>Lorem ipsum dolor sit</td>
            <td className='p-3 text-sm text-center'>
            <span className='p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300'>Done</span>
            </td>
            <td className='p-3 text-sm'>16-01-2024</td>
            <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
              <span className='text-xl cursor-pointer'><MdEditNote /></span>
              <span className='text-xl cursor-pointer'><MdOutlineDeleteOutline /></span>
            </td>
          </tr>
          <tr>
            <td className='p-3'>
            <span className='inline-block cursor-pointer'><MdOutlineCheckBox /></span>
            </td>
            <td className='p-3 text-sm'>Lorem ipsum dolor sit</td>
            <td className='p-3 text-sm text-center'>
            <span className='p-1.5 text-xs font-medium tracking-wider rounded-md bg-green-300'>Done</span>
            </td>
            <td className='p-3 text-sm'>16-01-2024</td>
            <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
              <span className='text-xl cursor-pointer'><MdEditNote /></span>
              <span className='text-xl cursor-pointer'><MdOutlineDeleteOutline /></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table