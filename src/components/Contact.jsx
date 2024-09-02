import React from 'react'

const Contact = () => {
  return (
    <>
      <div>
        <div>
          <div className='pl-[30px] pt-[40px] flex gap-3'>
            <img src="./Media/personal.svg" alt="" className='mt-1' />
            <h1 className='text-[30px] font-semibold font-deserta'>Personal Details</h1>
          </div>
          <ul className='pl-[70px] text-[18px] xs:text-[16px]'>
            <li>
              Name : Rohit Vinod Thorbole
            </li>
            <li>
              DOB : 05 Oct, 2004
            </li>
            <li>
              Gender: Male
            </li>
            <li>
              Current Address: Chakan Road , Alandi, Pune, Maharashtra,
              India - 412105
            </li>
            <li>
              Known Languages: Marathi , English, Hindi
            </li>
          </ul>
        </div>
        <div>
          <div className='pl-[30px] pt-[40px] flex gap-3'>
            <img src="./Media/contact.svg" alt="" className='mt-1' />
            <h1 className='text-[30px] font-semibold font-deserta'>Contact Details</h1>
          </div>
          <ul className='pl-[70px] text-[18px] xs:text-[16px]'>
            <li>
              Phone No : 9172198021
            </li>
            <li>
              Email : rohitthorbole4@gmail.com
            </li>
            <li>
              Github :
            </li>
            <li>
              Linkedin :
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Contact
