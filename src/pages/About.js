import React from "react";
import img1 from "../assets/about images/about-img-1.jpg";
import img2 from "../assets/about images/about-img-2.webp";
import img3 from "../assets/about images/about-img-3.webp";
import img4 from "../assets/about images/about-img-4.webp";
import img5 from "../assets/about images/about-img-5.webp";
import img6 from "../assets/about images/about-img-6.webp";

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
        {/* Image gallery */}
        <div className='grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4'>
          <img src={img1} alt='' className=' rounded shadow-sm' />
          <div className='flex gap-3 flex-col'>
            <img alt='' className='rounded shadow-sm' src={img2} />
            <img alt='' className=' rounded shadow-sm' src={img3} />
          </div>
          <div className='flex gap-3 flex-col'>
            <img alt='' className=' rounded shadow-sm' src={img4} />
            <img alt='' className=' rounded shadow-sm' src={img5} />
          </div>
          <img alt='' className=' rounded shadow-sm' src={img6} />
        </div>

        {/* Fun factor section */}
        <div className='max-w-[900px] mx-auto pb-8 pt-12'>
          <div className='flex justify-around'>
            <div className='mb-[30px]'>
              <div className='mb-[10px] text-[#202124] font-medium text-[50px] text-center'>
                4M
              </div>
              <h4 className='text-[15px] font-normal text-[#696969]'>
                4 million daily active users
              </h4>
            </div>
            <div className='mb-[30px]'>
              <div className='mb-[10px] text-[#202124] font-medium text-[50px] text-center'>
                12K
              </div>
              <h4 className='text-[15px] font-normal text-[#696969]'>
                Over 12k open job positions
              </h4>
            </div>
            <div className='mb-[30px]'>
              <div className='mb-[10px] text-[#202124] font-medium text-[50px] text-center'>
                20M
              </div>
              <h4 className='text-[15px] font-normal text-[#696969]'>
                Over 20 million stories shared
              </h4>
            </div>
          </div>
        </div>

        {/* Text Box */}
        <div className='max-w-[900px] mx-auto'>
          <h4 className='font-medium text-[#202124] text-3xl mb-8'>
            About Superio
          </h4>

          <p className='text-[#696969] text-[15px] mb-[26px]'>
            Far much that one rank beheld bluebird after outside ignobly
            allegedly more when oh arrogantly vehement irresistibly fussy
            penguin insect additionally wow absolutely crud meretriciously
            hastily dalmatian a glowered inset one echidna cassowary some parrot
            and much as goodness some froze the sullen much connected bat
            wonderfully on instantaneously eel valiantly petted this along
            across highhandedly much.
          </p>
          <p className='text-[#696969] text-[15px] mb-[26px]'>
            Repeatedly dreamed alas opossum but dramatically despite
            expeditiously that jeepers loosely yikes that as or eel underneath
            kept and slept compactly far purred sure abidingly up above fitting
            to strident wiped set waywardly far the and pangolin horse approving
            paid chuckled cassowary oh above a much opposite far much
            hypnotically more therefore wasp less that hey apart well like while
            superbly orca and far hence one.Far much that one rank beheld
            bluebird after outside ignobly allegedly more when oh arrogantly
            vehement irresistibly fussy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
