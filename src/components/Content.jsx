import React from 'react'
import { ReactTyped } from "react-typed";
import rohit from '/Media/rohit.png'
const Content = () => {
    return (
        <>
            <div className=''>

                {/* first part */}

                <div className='flex justify-between xs:flex-col'>

                    {/* Name */}

                    <div>
                        <div className="pt-[50px] text-[40px] font-bold pl-[50px] max-w-[700px] font-deserta xs:text-[30px] xs:w-full xs:pl-[30px] xs:pt-[20px]">
                            <p>I'm </p>
                            <ReactTyped className='z-0'
                                strings={['  Web Developer', '  Programmer', '  Coder']}
                                typeSpeed={30}
                                backSpeed={50}
                                loop
                            />
                            {/* Brief Summary */}

                        </div>

                        <div className="pl-[50px] max-w-[700px] pt-10 text-[18px] xs:pl-[30px] xs:pt-[20px] xs:max-w-[95vw] xs:text-[16px]">
                            I am Rohit Thorbole. I am Full Stack Web Developer who is eager to put my skills in development to use for the success. My knowledge on different technologies and programming languages ranges from C,C++, Python, PHP, Java, Javascript to managing databases and Linux environment.
                            <br />
                            <br />
                            I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not.
                        </div>
                    </div>

                    {/* Image */}

                    <div className='mt-[50px] mr-[50px] h-[330px] w-[240px] xs:w-full xs:pt-[50px] xs:flex xs:justify-center xs:mt-[10px]'>
                        <img src={rohit} alt="" className='max-h-[330px] max-w-[240px] rounded-lg hover:shadow-lg' />
                    </div>

                </div>

                {/* Content right */}

                <div className=''>
                    {/* what i am doing */}

                    <div className='pl-[50px] pt-[40px] max-w-[700px] text-[18px] xs:pl-[30px] xs:max-w-[95vw] xs:text-[16px]'>
                        <h1 className='text-[30px] font-semibold font-deserta'>What I'm Currently Working on?</h1>
                        <p className=''>I'm working with React and enhancing my skills in front-end. I'm also learning back-end technologies.I am also working on different Projects.</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Content
