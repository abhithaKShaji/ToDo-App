import './App.css'
import {useState} from 'react'
function App() {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const date = new Date()
  const day = dayNames[date.getDay()]

  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop,, it's {day}...🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(), text: toDo, status:false}])} className="fas fa-plus"></i>
      </div>
    
    <div className="container active">
      <div className="mainHeading"> 
        <h2>Active Task</h2>

      <div className="todos">
        { toDos.map((obj)=>{
           return ( <div className="todo"> 
           <div className="left">
             <input onChange={(e)=>{
               console.log(e.target.checked)
               console.log(obj);
               setToDos(toDos.filter(obj2=>{
                 if(obj2.id===obj.id){
                   obj2.status=e.target.checked
                 }
                 return obj2
               }))
             }} value={obj.status} type="checkbox" name="done" id="" />
             <p>{obj.text}</p>
           </div>
           <div className="right">
             <i onClick={(e)=>{
               
               setToDos(toDos.filter(obj2=>{
                 let temp;
                 if(obj2.id !== obj.id){
                   temp=obj2
                 }
                 return temp;
               }))
             }}value={obj.statusDrop} className="fas fa-times"></i>
           </div>
         </div> )
        })
       
        }
        <div className="mainHeading">
          <h2>Completed Task</h2>
        {toDos.map((obj)=>{
          if(obj.status){
            return(
            <h1 className='textCross'>{obj.text}</h1>)
          }
          return null
        })}
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
