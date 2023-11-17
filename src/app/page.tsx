import React from 'react';
import TaskMain from './components/TaskMain';

const Page:React.FC =() => {
    return (
        <>
            <div className=" flex flex-col items-center justify-between pt-24 m-5 ">
                <div className="border-2 border-red-300 rounded-2xl p-4 md:w-[700px] w-full lg:w-[900px]">
                    <TaskMain/>
                </div>
            </div>
        </>
    )
}

export default Page;