import React from 'react'

const About = () => {
    return (
        <>
            <div className='flex justify-between'>
                {/* left side of about page */}
                <div>

                    {/* Education */}

                    <div>
                        <div className='pl-[30px] pt-[40px] flex gap-3'>
                            <img src="./Media/contact.svg" alt="" className='mt-1' />
                            <h1 className='text-[30px] font-semibold font-deserta'>Education</h1>
                        </div>
                        <ul className='pl-[70px] text-[18px]'>
                            <li className="my-2 flex font-semibold">
                                MIT ACSC, Alandi.
                            </li>
                            <li>Bachelor of Computer Applications.</li>
                            <li className="my-2 flex font-semibold">
                                SSMV Jr. College, Pune.
                            </li>
                            <li>HSC and SSC.</li>
                            <li className="my-2 flex font-semibold">
                                Ganesh Vidyalaya, Terkheda.
                            </li>
                            <li>Primary</li>
                        </ul>
                    </div>

                    {/* Technologies */}

                    <div>
                        <div className='pl-[30px] pt-[40px] flex gap-3'>
                            <img src="./Media/contact.svg" alt="" className='mt-1' />
                            <h1 className='text-[30px] font-semibold font-deserta'>Technologies</h1>
                        </div>
                        <ul className='pl-[70px] text-[18px]'>
                            <li className="my-2 flex">
                                <p className=''>React </p>
                                <p> - UI Library</p>
                            </li>
                            <li className="my-2 flex">
                                <p className=''>Next.js </p>
                                <p> - React Framework</p>
                            </li>
                            <li className="my-2 flex">
                                <p className=''>MongooDb </p>
                                <p> - Database</p>
                            </li>
                            <li className="my-2 flex">
                                <p className=''>Tailwind CSS </p>
                                <p> - Styling Library</p>
                            </li>
                            <li className="my-2 flex">
                                <p className=''>Python </p>
                                <p> - Programming Language</p>
                            </li>
                        </ul>
                    </div>

                    {/* Tools */}

                    <div>
                        <div className='pl-[30px] pt-[40px] flex gap-3'>
                            <img src="./Media/contact.svg" alt="" className='mt-1' />
                            <h1 className='text-[30px] font-semibold font-deserta'>Tools</h1>
                        </div>
                        <ul className='pl-[70px] text-[18px]'>
                            <li className="my-2 flex">
                                <p className=''>Visual Studio Code </p>
                                <p> - Text Editor</p>
                            </li>
                            <li className="my-2 flex">
                                <p className=''>Pycharm </p>
                                <p> - Python IDE</p>
                            </li>
                            <li className="my-2 flex">
                                <p className=''>Firefox </p>
                                <p> - Web Browser</p>
                            </li>
                            <li className="my-2 flex">
                                <p className=''>Google Chrome </p>
                                <p> - Web Browser</p>
                            </li>
                            <li className="my-2 flex">
                                <p className=''>Git Bash </p>
                                <p> - Git Terminal</p>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* right side of page */}

                <div className='h-[300px] w-[250px] bg-white mr-[100px] mt-[50px]'>
                    <div className='flex justify-center'><img src="./Media/rohit.png" alt="" className='h-[200px] w-[160px] mt-5' /></div>
                    <div className='flex justify-center border mt-2 w-[200px]'><button>View Resume</button></div>
                </div>

            </div>
        </>
    )
}

export default About
