import React from 'react';
import AcceptedTask from './AcceptedTask';
import CompletedTask from './CompletedTask';
import NewTask from './NewTask';
import Failedtask from './failedtask';

const TaskList = ({data}) => {
  return (
    <div className = 'h-[500px] w-full flex gap-5 overflow-x-auto p-5 flex items-center justify between'>
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
  );
};

export default TaskList;