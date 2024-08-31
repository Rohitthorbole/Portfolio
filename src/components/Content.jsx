import React from 'react'
import { Typed } from 'react-typed'

const Content = () => {
    return (
        <>
            <div className=' flex justify-between'>
                {/* content-left */}
                <div>

                    {/* Name */}

                    <div className="flex justify-center font- pt-20 text-[40px] font-bold pl-[50px] max-w-[700px] font-deserta">
                        I'm Rohit. Web Developer and Aspiring Technologist
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
                            <p>I'm currently working with React and enhancing my skills in front-end. I'm also learning and working on back-end technologies. Currently, I am working on different Projects.</p>
                    </div>

                    <div>

                    </div>

                </div>

                {/* Content right */}

                <div>
                    <div className='pt-[100px] pr-[100px]'><img src="./Media/rohit.png" alt="" className='max-h-[320px] max-w-[240px]rounded-lg hover:shadow-lg'/></div>
                </div>

            </div>

        </>
    )
}

export default Content
