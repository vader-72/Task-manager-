import React from 'react';
import AcceptedTask from './AcceptedTask';
import CompletedTask from './CompletedTask';
import NewTask from './NewTask';
import Failedtask from './failedtask';

const TaskList = ({data}) => {
  return (
    <div className = 'h-[500px] w-full flex gap-5 bg-zinc-100 border-3 border-gray-300 mt-10 rounded-xl overflow-x-auto p-5 flex  flex-col items-start justify-between'>
        <div className ='flex items-center justiy-start '><h1 className ='text-5xl font-semibold text-indigo-700 hover:scale-105 duration-500 p-5 border-b-2 '>All of your Tasks</h1></div>
        <div className ='flex flex-row items-center justify-start gap-x-10 w-full '>
            {data.tasks.map((elem ,idx ) => {

            if(elem.active){
                return <AcceptedTask  key={idx} data={elem}/>
            }
            if(elem.completed){
                return <CompletedTask  key={idx} data={elem}/>
            }
            if(elem.newTask){
                return <NewTask  key={idx} data={elem}/>
            }
            if(elem.failed){
                return <Failedtask  key={idx} data={elem}/>
            }
        })}
        </div>
    </div>
  );
};

export default TaskList;