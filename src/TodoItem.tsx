
import {taskTodo} from './exportType'

type PropsType ={
    task:taskTodo;
    deleteTask(nameDelete:string):void

}
const TodoItem = ({task,deleteTask}:PropsType) => {
  return (
    <div className='mx-28 mt-10 rounded-lg bg-blue-500'>
        <div className='flex justify-around p-3'>
            <p className='bg-white p-2 rounded-xl text-slate-600'>{task.taskName}</p>
            <p className='bg-white p-2 rounded-xl text-slate-600'>{task.taskNumber}</p>
            <button className='bg-red-500 p-2 rounded-xl text-white font-semibold' onClick={()=>deleteTask(task.taskName)}>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem