"use client";
//Imports containing important files such as framer motion,icons as well as link for nextjs routing
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsTwitterX, BsGithub, BsLinkedin } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import Link from "next/link";

const HeroPage = () => {
  // State variables for managing random x and y translations
  const [xTranslation, setXTranslation] = useState(0);
  const [yTranslation, setYTranslation] = useState(0);
  useEffect(() => {
    //Update translation state with random values at regular intervals
    const interval = setInterval(() => {
      const randomX = Math.random() * 150 - 100;
      const randomY = Math.random() * 150 - 100;
      setXTranslation(randomX);
      setYTranslation(randomY);
    }, 1000);

    return () => clearInterval(interval);
  }, []// Empty dependency array to run only once on mount
);

  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="h-[calc(100vh-64px-86px)] py-24 my-auto flex justify-center items-center">
        <main className="w-screen">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center pt-1 rounded-full w-11 h-11 bg-primaryCream">
              <Image
                src="https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963277/face_j6s0m0.webp"
                alt="Face"
                width={100}
                height={100}
              />
            </div>
            <div className="p-2 pl-4 border rounded-full border-primaryBorder lg:py-4">
              <h1 className="text-base text-primaryCream sm:text-xl">
                Hello, I'm Aniket
                <div className="relative">
                  <motion.div
                    animate={{
                      x: xTranslation,
                      y: yTranslation,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-20 sm:w-28"
                  >
                    <Image
                      src="https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963276/cursor3_b1gqyu.png"
                      alt="product"
                      width={100}
                      height={100}
                    />
                  </motion.div>
                </div>
              </h1>
            </div>
          </div>
          <div className="text-primaryCream flex text-[10px] items-center justify-center gap-2 pr-6 sm:ml-10">
             {/* Flex container for introduction text */}
            <div className="relative">
               {/* Container for animated image */}
              <motion.div
                animate={{
                  x: Math.random() * 150 - 100,
                  y: Math.random() * 150 - 100,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-14 sm:w-20"
              >
                <Image
                  src="https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963338/cursor1_ooctst.svg"
                  alt="product"
                  width={100}
                  height={100}
                />
              </motion.div>
            </div>
            <h1 className="sm:text-xs lg:text-base">
              // I am
              <br />
              Full-Stack Developer
            </h1>
            <h1 className="text-5xl font-semibold text-primaryPurple md:text-6xl lg:text-8xl">
              DIGITAL
            </h1>
            <h1 className="sm:text-xs lg:text-base">
              // Based in
              <br />
              Kanpur, India
            </h1>
          </div>
          <div className="text-primaryCream flex items-center justify-center gap-4">
            <h1 className="text-5xl font-semibold text-primaryOrange md:text-6xl lg:text-8xl">
              EXPERIENCE
            </h1>
          </div>
          <div className="text-primaryCream flex items-center justify-center gap-1">
            <h1 className="text-5xl font-semibold text-primaryCream md:text-6xl lg:text-8xl">
              DESIGNER
            </h1>
            <div>
              <div>
                
              </div>
              <div className="relative">
                <motion.div
                  animate={{
                    x: Math.random() * 150 - 100,
                    y: Math.random() * 150 - 100,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-14 sm:w-20"
                >
                  <Image
                    src="https://res.cloudinary.com/dvau3pvl9/image/upload/v1722963338/cursor2_oyvgbp.svg"
                    alt="product"
                    width={100}
                    height={100}
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 sm:mr-24">
            <h1 className="text-5xl font-semibold text-primaryCyan md:text-6xl lg:text-8xl">
              <span className="text-primaryCream">& </span>DEVELOPER.
            </h1>
          </div>
          <div className="pt-2">
            <h1 className="pt-2 font-medium leading-5 text-center text-primaryCream sm:pt-4 md:text-2xl lg:text-3xl sm:text-xl">
              I create a digital experience that borders on
              <br />
              <span className="text-primaryPurple">efficency</span>,
              <span className="text-primaryOrange"> aesthetics</span> and
              <span className="text-primaryCyan"> functionality</span>
            </h1>
          </div>
          <div className="flex items-center justify-center ">
            
         </div>
        </main>
       
      </div>

      <div className="h-[86px] w-full">
        <div className="h-1 border-t border-primaryBorder"> </div>
        <main className="px-2 py-2 m-auto max-w-13xl  sm:mx-2 md:mx-3 lg:mx-4 flex items-center justify-between">
          <div className="flex items-center justify-between">
            <h1 className="sm:text-xs lg:text-base gap-2 p-2">
              // Design, Code
              <br />
              Engage
            </h1>
          </div>
          <div className="flex gap-2 justify-center items-center p-2 border border-primaryBorder rounded-[40px]">
            <Link
              href="https://x.com/07ITAniket60376"
              target="_blank"
              className="bg-primaryCream text-primaryBlack p-3 rounded-full"
            >
              <BsTwitterX className="text-xl" />
            </Link>
            <Link
              href="https://github.com/aryan216"
              target="_blank"
              className="bg-primaryCream text-primaryBlack p-3 rounded-full"
            >
              <BsGithub className="text-xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aniket-yadav-3060b81a6/"
              target="_blank"
              className="bg-primaryCream text-primaryBlack p-3 rounded-full"
            >
              <BsLinkedin className="text-xl" />
            </Link>
          </div>
          <div className="flex gap-2 justify-center items-center p-2 border border-primaryBorder rounded-full">
            <Link
              href="mailto:muditagarwalna@gmail.com"
              target="_blank"
              className="bg-primaryCream text-primaryBlack p-3 rounded-full"
            >
              <CiMail className="text-xl" />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeroPage;
