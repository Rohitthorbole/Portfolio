import React from 'react'

const Content = () => {
    return (
        <>
            <div className=' flex justify-between'>
                <div>
                    <div className="flex justify-center font- pt-20 text-[40px] font-bold pl-[50px] max-w-[700px] font-deserta">
                        I'm Rohit. Web Developer and Aspiring Technologist
                    </div>
                    <div className="pl-[50px] max-w-[700px] pt-10 text-[18px]">
                        I am Rohit Thorbole. I am Full Stack Web Developer who is eager to put my skills in development to use for the success. My knowledge on different technologies and programming languages ranges from C,C++, Python, PHP, Java, Javascript to managing databases and Linux environment.
                        <br />
                        <br />
                        I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not.
                    </div>

                    {/* Technologies */}

                    <div className="pl-[50px] max-w-[700px] pt-10">
                        <h1 className="text-[30px] font-semibold font-deserta">Technologies</h1>
                        <ul class="text-[18px]">
                            <li className="my-2 flex">
                                <p className='text-blue-500'>React </p>
                                <p> - UI Library</p> 
                            </li>
                            <li className="my-2 flex">
                                <p className='text-blue-500'>Next.js </p>
                                <p> - React Framework</p> 
                            </li>
                            <li className="my-2 flex">
                                <p className='text-blue-500'>MongooDb </p>
                                <p> - Database</p> 
                            </li>
                            <li className="my-2 flex">
                                <p className='text-blue-500'>Tailwind CSS </p>
                                <p> - Styling Library</p> 
                            </li>
                            <li className="my-2 flex">
                                <p className='text-blue-500'>Python </p>
                                <p> - Programming Language</p> 
                            </li>
                        </ul>
                    </div>

                    {/* Tools */}

                    <div className="pl-[50px] max-w-[700px] pt-10">
                        <h1 className="text-[30px] font-semibold font-deserta">Tools</h1>
                        <ul className="text-[18px]">
                        <li className="my-2 flex">
                                <p className='text-blue-500'>Visual Studio Code </p>
                                <p> - Text Editor</p> 
                            </li>
                            <li className="my-2 flex">
                                <p className='text-blue-500'>Pycharm </p>
                                <p> - Python IDE</p> 
                            </li>
                            <li className="my-2 flex">
                                <p className='text-blue-500'>Firefox </p>
                                <p> - Web Browser</p> 
                            </li>
                            <li className="my-2 flex">
                                <p className='text-blue-500'>Google Chrome </p>
                                <p> - Web Browser</p> 
                            </li>
                            <li className="my-2 flex">
                                <p className='text-blue-500'>Git Bash </p>
                                <p> - Git Terminal</p> 
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='pt-[100px] pr-[100px]'><img src="./Media/rohit.png" alt="" className='max-h-[320px] max-w-[240px] border border-collapse border-blue-300 rounded-lg'/></div>
                </div>

            </div>

        </>
    )
}

export default Content
