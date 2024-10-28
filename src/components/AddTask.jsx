import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/contants'
function AddTask({updateList,updatedata}) {
    const [task,setTask] = useState(updatedata?.name)

    async function AddTask(){
      const data = await axios.post(`${BASE_URL}/task`,{name:task})
      updateList()
      setTask("")
    }
  return (
   <>
   <input type="text" value={updatedata?.name||task} onChange={(e)=>setTask(e.target.value)}/><br/>
   <button onClick={AddTask}>AddTask</button>
   </>
  )
}

export default AddTask