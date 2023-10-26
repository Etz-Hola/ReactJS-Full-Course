import React from 'react'
import { FaPlus} from 'react-icons/fa'


function AddItem() {
  return (
    <form className='addForm'>
        <label htmlFor="addItem">Add Item</label>
        <input id="addItem"
            type='text'
            placeholder='add item'
            required
        />
        <button type='submit' aria-label='Add Item'> <FaPlus/></button>
      
    </form>
  )
}

export default AddItem
