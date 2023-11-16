import React from 'react';
import TaskMain from './components/TaskMain';

const Page:React.FC =() => {
  
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className=" rounded-lg  bg-[#002b59] p-10 text-xl text-white">Planner</div>
        <TaskMain/>
      </div>
    </>
  )
}

export default Page;