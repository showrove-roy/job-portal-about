import React from "react";

const About = () => {
  return (
    <div>
      {/* page Title */}
      <section className='bg-[#f5f7fc] pt-[50px] pb-[40px] text-center'>
        <h1 className='text-[#202124] text-3xl font-medium mb-3'>About Us</h1>
        <ul className='text-base mt-[5px] mb-4 p-0 flex text-center justify-center'>
          <li className='cursor-pointer'>
            <a href='/'>Home</a> /&nbsp;
          </li>
          <li className='cursor-pointer'>About Us</li>
        </ul>
      </section>

      {/* About Hero section */}
      <section className='py-[50px]'>
        <div className='grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4'>
          <img
            src='../../assets/about images/about-img-1.jpg'
            alt=''
            className='w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square'
          />
          <img
            alt=''
            className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square'
            src=''
          />
          <img
            alt=''
            className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square'
            src='https://source.unsplash.com/random/200x200/?1'
          />
          <img
            alt=''
            className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square'
            src='https://source.unsplash.com/random/200x200/?2'
          />
          <img
            alt=''
            className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square'
            src='https://source.unsplash.com/random/200x200/?3'
          />
          <img
            alt=''
            className='w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square'
            src='https://source.unsplash.com/random/200x200/?4'
          />
        </div>
      </section>
    </div>
  );
};

export default About;
