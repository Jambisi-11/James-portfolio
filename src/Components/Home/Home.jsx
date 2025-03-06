
import React, { useEffect, useRef, useState } from 'react';
import not from '../../assets/one (1).png';
import excellent from '../../assets/one (2).png';
import { gsap } from 'gsap';

const Home = () => {
  // Create refs for the text and images
  const nothingRef = useRef(null);
  const NothingImageRef = useRef(null);
  const excellentRef = useRef(null);
  const excellentImageRef = useRef(null);

  // State to toggle between sections
  const [isFirstSectionActive, setIsFirstSectionActive] = useState(true);

  // GSAP animation on component mount and state change
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isFirstSectionActive) {
        // Animate the first section in
        gsap.to([nothingRef.current, NothingImageRef.current], {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 1,
          ease: 'power2.out',
        });

        // Hide the second section
        gsap.to([excellentRef.current, excellentImageRef.current], {
          opacity: 0,
          y: -50,
          duration: 0.5, // Faster hide animation
          ease: 'power2.out',
        });
      } else {
        // Animate the second section in
        gsap.to([excellentRef.current, excellentImageRef.current], {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          duration: 1,
          ease: 'power2.out',
        });

        // Hide the first section
        gsap.to([nothingRef.current, NothingImageRef.current], {
          opacity: 0,
          y: -50,
          duration: 0.5, // Faster hide animation
          ease: 'power2.out',
        });
      }
    });

    // Cleanup animations when the component unmounts
    return () => ctx.revert();
  }, [isFirstSectionActive]);

  // Automatically toggle sections every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstSectionActive((prev) => !prev);
    }, 5000); // Toggle every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className='mt-0 m-auto border-l-1 border-r-1 border-gray-800'>
      <h1 className='text-4xl text-center mt-10'>Welcome to my Portfolio</h1>
      <div className='text-7xl mt-8 font-bold relative'>
        {/* First Section */}
        <div className='flex p-6 absolute top-0 left-0 w-full'>
          <h2 ref={nothingRef} style={{ opacity: 0, transform: 'translateY(-50px)' }}>
            The Best I can be <span className='text-green-500'>WITHOUT JESUS</span> is{' '}
            <span className='text-green-500'>NOTHING!</span>
          </h2>
          <img
            ref={NothingImageRef}
            className='w-100 h-85 rounded-4xl'
            src={not}
            alt='nothing'
            style={{ opacity: 0, transform: 'translateY(-50px)' }}
          />
        </div>

        {/* Second Section */}
        <div className='flex p-6 absolute top-0 left-0 w-full'>
          <h2 ref={excellentRef} style={{ opacity: 0, transform: 'translateY(-50px)' }}>
            The least I can be <span className='text-green-500'>WITH JESUS</span> is{' '}
            <span className='text-green-500'>EXCELLENT!</span>
          </h2>
          <img
            ref={excellentImageRef}
            className='w-100 h-90 rounded-4xl'
            src={excellent}
            alt='excellent'
            style={{ opacity: 0, transform: 'translateY(-50px)' }}
          />
        </div>
        </div>
        <div className='text-2xl font-bold w-[22em] bg-green-600 shadow-2lg mt-[330px] mb-[2em] mx-7 px-4 border-l-3  border-green-100 rounded-tr-4xl rounded-br-4xl'>
            <p>It is undiluted Truth that Jesus died for you <br />Give your life to Him</p>
        </div>
    </div>
  );
};

export default Home;