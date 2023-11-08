import React from 'react'
import { BsTrash3 } from 'react-icons/bs'

function LineItem({ item, handleCheck, handleDelete }) {
    return (
        <li className='item'>
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked} />


            <label style={(item.checked) ?
                { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>


            <BsTrash3
                onClick={() => handleDelete(item.id)}
                role='button'
                tabIndex="0" />
        </li>
    )
}

export default LineItem
