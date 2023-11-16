import React from 'react';
import TaskMain from './components/TaskMain';

const Page:React.FC =() => {
  
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="Title ">Planner</h1>
        <TaskMain/>
      </main>
    </>
  )
}

export default Page;