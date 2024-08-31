import React from 'react'
import { ReactTyped } from "react-typed";
const Content = () => {
    return (
        <>
            <div className=' flex justify-between'>
                {/* content-left */}
                <div>

                    {/* Name */}

                    <div className="font- pt-20 text-[40px] font-bold pl-[50px] max-w-[700px] font-deserta">
                        I'm Rohit. 
                    <ReactTyped
                        strings={['Web Developer', 'Programmer','Coder']}
                        typeSpeed={30}
                        backSpeed={50}
                        loop
                    />
                    </div>

                    {/* Brief Summary */}

                    <div className="pl-[50px] max-w-[700px] pt-10 text-[18px]">
                        I am Rohit Thorbole. I am Full Stack Web Developer who is eager to put my skills in development to use for the success. My knowledge on different technologies and programming languages ranges from C,C++, Python, PHP, Java, Javascript to managing databases and Linux environment.
                        <br />
                        <br />
                        I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not.
                    </div>

                    {/* what i am doing */}

                    <div className='pl-[50px] pt-[40px] max-w-[700px] text-[18px]'>
                        <h1 className='text-[30px] font-semibold font-deserta'>What I'm Currently Working on?</h1>
                        <p>I'm working with React and enhancing my skills in front-end. I'm also learning back-end technologies.I am also working on different Projects.</p>
                    </div>

                </div>

                {/* Content right */}

                <div className=''>
                    <div className='sticky top-0 pt-[100px] mr-[100px] h-[320px] w-[240px]'>
                        <img src="./Media/rohit.png" alt="" className='max-h-[320px] max-w-[240px] rounded-lg hover:shadow-lg' />
                    </div>
                </div>

            </div>

        </>
    )
}

export default Content
