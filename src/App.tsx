import React,{ChangeEvent, FC, useState} from 'react';

import {taskTodo} from './exportType'
import TodoItem from './TodoItem';

const App:FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todolist, setTodolist] = useState<taskTodo[]>([])
  console.log(todolist);
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'task'){
      setTask(event.target.value)

    }
    else{
      setDeadline(Number(event.target.value))
    }
  }
  
  const handleSubmit = ():void =>{
    const taskList = {taskName:task,taskNumber:deadline};
    setTodolist([...todolist,taskList]);
    setTask('');
    setDeadline(0);
  }

  const deleteTask = (nameDelete:string):void =>{
    setTodolist(todolist.filter((task)=>{
      return task.taskName !== nameDelete;
    }))
  } 
  
  
  return (
  <div>
    <div className='flex flex-col mx-[22rem] mt-10'>
      <input 
      className='p-2 rounded-xl border-solid border-2 border-red-600 mb-3'
      type="text"
      value={task} 
      name='task'
      placeholder='Task Enter' 
      onChange={handleChange}
      
      />
      
      <input 
      className='p-2 rounded-xl border-solid border-2 border-green-600 mb-3'
      type="number"
      value={deadline} 
      name='deadline'
      placeholder='Deadline Enter' 
      onChange={handleChange}
      />
      <button className='rounded-3xl p-2 border-none text-white font-bold bg-slate-500 hover:bg-sky-700 active:bg-green-600' onClick={handleSubmit}>Submit</button>
      
    </div>
    <div>
      {todolist.map((task:taskTodo,index:number)=>{
        return <TodoItem key={index} task={task} deleteTask={deleteTask}/>
      })}
    </div>
      
    </div>
  );
}

export default App;
