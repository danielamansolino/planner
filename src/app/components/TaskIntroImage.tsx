"use client"; 

import React from 'react'
import Image from "next/image"

const TaskIntroImage:React.FC = () => {
    return (
        <Image
            src="/graphics/arrows.svg"
            alt="Intro image"
            width={326}
            height={291}
            />
    )
}

export default TaskIntroImage;