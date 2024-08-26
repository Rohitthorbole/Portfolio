import React from 'react'

const Content = () => {
    return (
        <>
            <div className='bg-gray-100'>
                <div className="flex justify-center pt-20 text-[40px] font-bold pl-[50px] max-w-[700px]">
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
                    <h1 className="text-[30px] font-semibold">Technologies</h1>
                    <ul class="text-[18px]">
                        <li className="my-2">React - UI Library</li>
                        <li className="my-2">Next.js- React Framework</li>
                        <li className="my-2">MongooDb - Database</li>
                        <li className="my-2">Tailwind CSS - Styling Library</li>
                        <li className="my-2">Python - Programming Language</li>
                    </ul>
                </div>

                {/* Tools */}

                <div className="pl-[50px] max-w-[700px] pt-10">
                    <h1 className="text-[30px] font-semibold">Tools</h1>
                    <ul className="text-[18px]">
                        <li className="my-2">Visual Studio Code - Text Editor</li>
                        <li className="my-2">Pycharm - Python IDE</li>
                        <li className="my-2">Firefox - Web Browser</li>
                        <li className="my-2">Google Chrome - Web Browser</li>
                        <li className="mt-2">Git Bash - Git Terminal</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Content
