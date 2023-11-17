import React from 'react';
import TaskMain from './components/TaskMain';

const Page:React.FC =() => {
    return (
        <>
            <div className=" flex flex-col items-center justify-between pt-24">
                <div className="border-2 border-red-300 p-4">

                    <TaskMain/>
                </div>
            </div>
        </>
    )
}

export default Page;