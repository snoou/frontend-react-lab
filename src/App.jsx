import { useState } from 'react'
import FrendsList from './Component/FriendsList/FriendsList'
import { Form } from './Component/Form/Form'



function App() {
  const [open, Setopen] = useState(false)
  const [list, Setlist] = useState([])

  function handleadd (item){
    Setlist(()=>[...list , item])
  }

  return (
    <>
      <FrendsList list={list} />
      {
        open && <Form add = {handleadd} />
      }
      <button onClick={() => Setopen(!open)} className="px-8 py-4 text-blue-950 bg-amber-500 rounded-2xl hover:shadow-2x" >{!open ? 'add frend' : 'close'}</button>
    </>
  )
}

export default App
