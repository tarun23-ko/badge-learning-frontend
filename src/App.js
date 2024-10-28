import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import { BASE_URL } from './constants/contants';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [alldata,setallData] =useState([])
  const [editData,seteditData] =useState({})

  const fetchAllData=async ()=>{
    const allData = await axios.get(`${BASE_URL}/task`)
    console.log(allData.data)
    setallData(allData.data)
  }
  const deleyeDtaa=async (id)=>{
    const allData = await axios.delete(`${BASE_URL}/task/${id}`)
    fetchAllData()

  }
  
  function updateList(){
    fetchAllData()
  }
  useEffect(()=>{
    fetchAllData()
  },[])

  const Edit =(id)=>{
    
    seteditData(alldata[id])
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
        </p>
        <AddTask updateList={updateList} name={editData}/>
        <div>
        <ul>
          {alldata.map((item,idx) => <li key={item.id}>{item.name} <button onClick={()=>deleyeDtaa(item.id)}>Delete</button><button onClick={()=>Edit(idx)}>Edit</button></li>)}
        </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
