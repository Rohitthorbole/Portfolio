import React from 'react'

const Resume = () => {
  return (
    <>
      <div>
        <div>
          <div className='pl-[10px] pt-[40px] flex gap-3'>
            <img src="./Media/study.svg" alt="" className='mt-1' />
            <h1 className='text-[30px] font-semibold'>Education</h1>
          </div>
          <ul className='pl-[50px] text-[18px]'>
            <li>
              Bachelor of Computer Applications(2025) | MIT ACSC, Alandi.
            </li>
            <li>
              HSC(2022) | SSMV Junior College.
            </li>
            <li>
              SSC(2020) | SSMV School.
            </li>
          </ul>
        </div>
        <div>
          <div className='pl-[10px] pt-[40px] flex gap-3'>
            <img src="./Media/education.svg" alt="" className='mt-1' />
            <h1 className='text-[30px] font-semibold'>Experience</h1>
          </div>
          <ul className='pl-[50px] text-[18px]'>
            <li>
              The Sparks Foundation - Web Developer Intern
            </li>
            <li>
              Building Dynamic Webpages.
            </li>
            <li>
              Skills : PHP, Javascript, Databases
            </li>
          </ul>
        </div>
        <div>
          <div className='pl-[10px] pt-[40px] flex gap-3'>
            <img src="./Media/projects.svg" alt="" className='mt-1' />
            <h1 className='text-[30px] font-semibold'>Projects</h1>
          </div>
          <ul className='pl-[50px] text-[18px]'>
            <li>
              Portfolio
            </li>
            <li>
              QR Generator
            </li>
            <li>
              Banking System
            </li>
            <li>
              Finance Tracker
            </li>
            <li>
              Body Balance
            </li>
          </ul>
        </div>
        <div>
          <div className='pl-[10px] pt-[40px] flex gap-3'>
            <img src="./Media/skills.svg" alt="" className='mt-1' />
            <h1 className='text-[30px] font-semibold'>Skills</h1>
          </div>
          <ul className='pl-[50px] text-[18px]'>
            <li>
              Frontend-Development
            </li>
            <li>
              Backend-Development
            </li>
            <li>
              Databases
            </li>
            <li>
              Linux
            </li>
            <li>
              Cloud Computing
            </li>
          </ul>
        </div>

      </div>
    </>
  )
}

export default Resume
