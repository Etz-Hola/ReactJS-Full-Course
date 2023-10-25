import {useState} from 'react'
import {BsTrash3} from  'react-icons/bs'


const Content = () => {
  const [items, setItems] = useState([

    {
      id: 1, checked: false, item: 'ReactJs'
    },

    {
      id: 2, checked: false, item: 'Javascript'
    },

    {
      id: 3, checked: false, item: 'NodeJs'
    },

  ])

  const handleCheck = (id) => {

    const listItems = items.map((item) => item.id === id ? 
    {...item, checked: !item.checked} : item);
    setItems(listItems)
  }

  

  return (
    <main>
      <ul>
          {items.map((item) => (
            <li className='item' key={item.id}>
              <input
              type="checkbox"
              onChange={() =>handleCheck(item.id)}
              checked={item.checked} />


              <label style={(item.checked) ? 
                {textDecoration: "line-through"} : null}
                onDoubleClick={() => handleCheck(item.id)}>{item.item}</label>
             

              <BsTrash3 
              role='button' 
              tabIndex="0"/>
            </li>

          ))}
      </ul> 


    </main>
  )
}

export default Content
