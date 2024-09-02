import React from 'react'
import rohit from '/Media/rohit.png'

const Resume = () => {
  return (
    <>
      <div className='h-[2000px] max-w-[70vw] mt-[30px] bg-white mx-auto dark:text-black xs:max-w-[90vw] xs:h-[2400px]'>

        {/* start */}

        <div className='start flex justify-between mx-10 mt-10 xs:mx-5 xs:mt-5'>
          <div className='text-[18px] xs:text-[16px]'>
            <p className='text-[20px] text-blue-500 mt-12'>Rohit Vinod Thorbole</p>
            <p>B.C.A. - Science</p>
            <p className=''>rohitthorbole4@gmail.com</p>
            <p className='' >Ph : +919172198021</p>
            <p>Address: Alandi, Pune, Maharashtra.</p>
          </div>
          <img src={rohit} alt="" className='h-[180px] w-[140px] mt-10 xs:h-[160px] xs:w-[120px]' />
        </div>

        {/* Brief Summary */}

        <div className='h-8 bg-blue-400 mx-2 my-6 flex items-center'>
          <p className='text-white pl-6'>Brief Summary</p>
        </div>

        <div className='summary h-[130px] mx-2 px-6 pt-2  bg-gray-100 xs:h-[280px]'>
          I am Rohit Thorbole. I am Full Stack Web Developer who is eager to put my skills in development to use for the success. My knowledge on different technologies and programming languages ranges from C,C++, Python, PHP, Java, Javascript to managing databases and Linux environment.
          I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not.
        </div>

        {/* KEY EXPERTISE */}

        <div className='h-8 bg-blue-400 mx-2 my-6 flex items-center'>
          <p className='text-white pl-6'> KEY EXPERTISE</p>
        </div>

        <div className='summary h-[40px] mx-2 px-6  bg-gray-100 flex items-center justify-center xs:h-[80px]'>
          React, Next.js, MongooDb, TailwindCSS, Python, MySQL, C++, Operating System, Cloud Computing
        </div>

        {/* Education */}

        <div className='h-8 bg-blue-400 mx-2 my-6 flex items-center'>
          <p className='text-white pl-6'>EDUCATION</p>
        </div>

        <div className='summary h-[120px] mx-2 px-6 pt-2  bg-gray-100 xs:h-[140px]'>
          <p className='font-semibold'>MAEER's MIT Arts Commerce & Science College</p>
          <p>B.C.A. - Science | CGPA: 9.42 / 10</p>
          <p>12th | Percentage: 70.17 / 100</p>
          <p> 10th | Percentage: 91 / 100</p>
        </div>

        {/* Internship */}

        <div className='h-8 bg-blue-400 mx-2 my-6 flex items-center'>
          <p className='text-white pl-6'>INTERNSHIPS</p>
        </div>

        <div className='summary h-[120px] mx-2 px-6 pt-2  bg-gray-100 xs:h-[180px]'>
          <p className='font-semibold'>The Sparkx Foundation  | IT / Computers - Software</p>
          <p> Web Developer Trainee</p>
          <p> Key Skills: HTML CSS Javascript PHP MySQL</p>
          <p> During Internship, I worked on different dynamic web pages</p>
        </div>

        {/* PROJECTS */}

        <div className='h-8 bg-blue-400 mx-2 my-6 flex items-center'>
          <p className='text-white pl-6'>PROJECTS</p>
        </div>

        <div className='summary h-[120px] mx-2 px-6 pt-2  bg-gray-100 xs:h-[150px]'>
          <p className='font-semibold'>Portfolio</p>
          <p>React.js, Tailwind CSS</p>
          <p> This is my personal portfolio.</p>
          <p>Link : <a href="https://github.com/Rohitthorbole/Portfolio" className='text-blue-400'>https://github.com/Rohitthorbole/Portfolio</a></p>
        </div>

        <div className='summary h-[120px] mx-2 px-6 pt-2 mt-2  bg-gray-100 xs:h-[160px]'>
          <p className='font-semibold'>QR Generator</p>
          <p>Node.js, HTML, CSS</p>
          <p> This tool helps you generate your own QR codes easily and quickly.</p>
          <p>Link : <a href="https://github.com/Rohitthorbole/QRGenerator" className='text-blue-400'>github.com/Rohitthorbole/QRGenerator</a></p>
        </div>

        <div className='summary h-[120px] mx-2 px-6 pt-2 mt-2  bg-gray-100 xs:h-[180px]'>
          <p className='font-semibold'>Body Balance</p>
          <p>Javascript, Tailwind CSS, HTML</p>
          <p>This tool help to calculate your Body Mass Index(BMI).</p>
          <p>Link : <a href="https://github.com/Rohitthorbole/Bodybalance" className='text-blue-400'>github.com/Rohitthorbole/Bodybalance</a></p>
        </div>

        {/* ASSESSMENTS / CERTIFICATIONS */}

        <div className='h-8 bg-blue-400 mx-2 my-6 flex items-center'>
          <p className='text-white pl-6'>ASSESSMENTS / CERTIFICATIONS</p>
        </div>

        <div className='summary h-[160px] mx-2 px-6 pt-2  bg-gray-100 xs:h-[280px]'>
          <p className='font-semibold'> Fundamentals of Full Stack Developement</p>
          <p> It is a training Program on Fundamentals of Full Stack Developement held by Excelr.</p>

          <p className='font-semibold'> SQL</p>
          <p>  This is certificate for successfully cleared the assessment test for skill SQL.</p>

          <p className='font-semibold'> ExpressJS</p>
          <p>  I had completed the the certificatation course in ExpressJS.</p>
        </div>

        {/* PERSONAL INTERESTS */}
        <div className='h-8 bg-blue-400 mx-2 my-6 flex items-center'>
          <p className='text-white pl-6'>PERSONAL INTERESTS</p>
        </div>

        <div className='summary h-[40px] mx-2 px-6 pt-2  bg-gray-100'>
          <p>Singing, Reading, Cricket</p>
        </div>

      </div>
    </>
  )
}

export default Resume
