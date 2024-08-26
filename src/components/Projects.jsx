import React from 'react'

const Projects = () => {
  return (
    <>
      <div className='bg-gray-100'>
        <h1 className='text-[30px] font-semibold pl-[50px] pt-[100px]'>Projects</h1>
        <p className='pl-[50px] pt-4 text-[18px]'>
          I've worked on many of little projects over the years but these are the ones that I'm most proud of.  Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas on how it can be improved.
        </p>
        <div className='flex justify-between mx-[50px] mt-10'>
          <div className='border border-collapse rounded-md w-[380px] h-[200px] bg-white flex justify-center items-center p-3 gap-3'>
            <div><img src="./Media/QRGenerator.png" alt="" className='max-w-[150px] h-[150px]' /></div>
            <div className='flex flex-col'>
              <div className='font-semibold'>QR Generator</div>
              <div className=''>This tool helps you generate your own QR codes easily and quickly.</div>
            </div>
          </div>
          <div className='border border-collapse rounded-md w-[380px] h-[200px] bg-white flex justify-center items-center p-3 gap-3'>
            <div><img src="./Media/Portfolio.png" alt="" className='max-w-[150px] h-[150px]' /></div>
            <div className='flex flex-col'>
              <div className='font-semibold'>Portfolio</div>
              <div className=''>This is my personal Portfolio built using React and Tailwind CSS.</div>
            </div>
          </div>
          <div className='border border-collapse rounded-md w-[380px] h-[200px] bg-white flex justify-center items-center p-3 gap-3'>
            <div><img src="./Media/bank.png" alt="" className='max-w-[150px] h-[150px]' /></div>
            <div className='flex flex-col'>
              <div className='font-semibold'>Banking System</div>
              <div className=''>Basic Banking System using HTML , CSS , JavaScript , PHP and MySQL .</div>
            </div>
          </div>
        </div>
        <div className='flex justify-between mx-[50px] mt-4'>
        <div className='border border-collapse rounded-md w-[380px] h-[200px] bg-white flex justify-center items-center p-3 gap-3'>
            <div><img src="./Media/BodyBalance.png" alt="" className='max-w-[150px] h-[150px]' /></div>
            <div className='flex flex-col'>
              <div className='font-semibold'>Body Balance</div>
              <div className=''>By using this calculator, you can easily compute your Body Mass Index (BMI) to understand better your health and fitness status. </div>
            </div>
          </div>
          <div className='border border-collapse rounded-md w-[380px] h-[200px] bg-white flex justify-center items-center p-3 gap-3'>
            <div><img src="./Media/weather.png" alt="" className='max-w-[150px] h-[150px]' /></div>
            <div className='flex flex-col'>
              <div className='font-semibold'>Weather</div>
              <div className=''>This weather app is all about learning web APIs. It leverages the Open Weather API to deliver real-time weather data.</div>
            </div>
          </div>
          <div className='border border-collapse rounded-md w-[380px] h-[200px] bg-white flex justify-center items-center p-3 gap-3'>   
            <div><img src="./Media/Netflix.png" alt="" className='max-w-[150px] h-[150px]' /></div>
            <div className='flex flex-col'>
              <div className='font-semibold'>Netflix Clone</div>
              <div className=''>This tool helps you generate your own QR codes easily and quickly.</div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Projects
