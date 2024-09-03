import React, { useState, useRef } from "react";
import bengaliImg from "../../assets/courses/bengali.png";
import pratikImg from "../../assets/courses/pratik.jpg";
import MailImg from "../../assets/courses/mail.avif";
import LinkedInImg from "../../assets/courses/linkedin.jpeg";

import ReactPlayer from "react-player";
import bahoMein from "../../assets/Heritage/bais.mp4";
import bbVideo from "../../assets/Heritage/baho.mp4";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const SingleCourse = () => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startPosition = useRef(0);
  const scrollLeftValue = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startPosition.current = e.clientX;
    scrollLeftValue.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const distance = e.clientX - startPosition.current;
    scrollRef.current.scrollLeft = scrollLeftValue.current - distance;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  // State to track the currently playing video
  const [currentVideo, setCurrentVideo] = useState("");

  const handleVideoClick = (videoUrl) => {
    setCurrentVideo(videoUrl);
  };

  return (
    <section className=" text-primary_text dark:text-dark_primary_text  duration-300">
      <div
        style={{ backgroundImage: `url(${bengaliImg})` }}
        className="relative bg-center bg-contain bg-fixed bg-no-repeat"
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-background1 dark:bg-dark_background1 opacity-80 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center">
          {/* heading */}
          <div className="flex items-center justify-center py-4 text-5xl gap-8 font-bold font-playfair uppercase ">
            <p className="tracking-wider">Expand</p>
            <p className="tracking-wider">Your</p>
            <p className="tracking-wider">Knowledge</p>
            <p className="tracking-wider">in</p>
            <p className="tracking-wider">Bengali</p>
          </div>

          {/* description */}

          <div className="py-4 px-16">
            <div className="  text-lg flex flex-col items-start justify-center gap-3 w-full h-full">
              <div className="flex flex-col gap-3">
                <h1 className=" font-semibold font-montserrat text-2xl">
                  Brief History of Bengali
                </h1>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis eum neque eius sed veritatis libero velit placeat
                  perferendis minima accusamus, iure, debitis ducimus est
                  sapiente molestias rem omnis enim ad. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ab impedit deleniti unde
                  perspiciatis ad nostrum ipsa mollitia sunt architecto
                  accusantium enim, fugiat, maiores dolor magni saepe quos id
                  neque voluptas? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aspernatur unde aliquid mollitia similique
                  voluptatibus voluptatem sequi dolores id dolorum labore a sunt
                  hic, blanditiis in velit! Totam quia itaque quam. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Temporibus
                  dolorum animi veritatis adipisci saepe qui possimus eligendi
                  atque ab iste! Facere corporis ipsa quia earum accusantium
                  officiis maiores, mollitia excepturi! Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Reiciendis eum neque eius
                  sed veritatis libero velit placeat perferendis minima
                  accusamus, iure, debitis ducimus est sapiente molestias rem
                  omnis enim ad. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ab impedit deleniti unde perspiciatis ad
                  nostrum ipsa mollitia sunt architecto accusantium enim,
                  fugiat, maiores dolor magni saepe quos id neque voluptas?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur unde aliquid mollitia similique voluptatibus
                  voluptatem sequi dolores id dolorum labore a sunt hic,
                  blanditiis in velit! Totam quia itaque quam. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Temporibus
                  dolorum
                </p>
                <h1 className=" font-semibold font-montserrat text-2xl">
                  Course Introduction
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis eum neque eius sed veritatis libero velit placeat
                  perferendis minima accusamus, iure, debitis ducimus est
                  sapiente molestias rem omnis enim ad. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ab impedit deleniti unde
                  perspiciatis ad nostrum ipsa mollitia sunt architecto
                  accusantium enim, fugiat, maiores dolor magni saepe quos id
                  neque voluptas? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aspernatur unde aliquid mollitia similique
                  voluptatibus voluptatem sequi dolores id dolorum labore a sunt
                  hic, blanditiis in velit! Totam quia itaque quam. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Temporibus
                  dolorum animi veritatis adipisci saepe qui possimus eligendi
                  atque ab iste! Facere corporis ipsa quia earum accusantium
                  officiis maiores, mollitia excepturi! Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Reiciendis eum neque eius
                  sed veritatis libero velit placeat perferendis minima
                  accusamus, iure, debitis ducimus est sapiente molestias rem
                  omnis enim ad. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ab impedit deleniti unde perspiciatis ad
                  nostrum ipsa mollitia sunt architecto accusantium enim,
                  fugiat, maiores dolor magni saepe quos id neque voluptas?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur unde aliquid mollitia similique voluptatibus
                  voluptatem sequi dolores id dolorum labore a sunt hic,
                  blanditiis in velit! Totam quia itaque quam. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Temporibus
                  dolorum
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className=" font-semibold font-montserrat text-2xl">
                  Teacher's Introduction
                </h1>
                <div className="flex items-center gap-3 ">
                  <img
                    src={pratikImg}
                    alt="teacher"
                    className=" rounded-full w-32 h-32"
                  />

                  <div className="flex flex-col justify-center gap-3">
                    <div className=" flex items-center gap-3">
                      <p className="text-4xl leading-7 font-bold font-playfair">
                        Dr. Pratik Biswas
                      </p>
                      <p className=" text-xl font-lato pt-1">
                        {" "}
                        - Professor of Jadavpur University
                      </p>
                    </div>
                    <div className="flex items-center justify-start gap-4">
                      <a
                        href="mailto:messi10.pratikbiswas@gmail.com"
                        target="blank"
                        rel="noopener"
                        className="flex items-center justify-center gap-2 font-medium duration-500 transition-transform hover:scale-105 transform-cpu"
                      >
                        <img
                          src={MailImg}
                          alt="Mail"
                          className=" rounded-full w-8 h-8"
                        />
                        <p>messi10.pratikbiswas@gmail.com</p>
                      </a>

                      <a
                        href="/"
                        target="blank"
                        rel="noopener"
                        className="flex items-center justify-center gap-2 font-medium duration-500 transition-transform hover:scale-105 transform-cpu"
                      >
                        <img
                          src={LinkedInImg}
                          alt="Linkedin"
                          className=" rounded-full w-8 h-8"
                        />
                        <p>Pratik Biswas</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* videos */}

            <div className="bg-background1 dark:bg-dark_background1 ">
              <div className="py-4 flex flex-col gap-4 items-center justify-center w-full h-full">
                <h1 className="font-bold font-playfair text-5xl tracking-wider">
                  1. Introduction
                </h1>
                <ReactPlayer
                  url={currentVideo}
                  width="100%"
                  height="100%"
                  className="max-w-full max-h-full m-auto"
                  playing
                  controls
                  config={{
                    file: {
                      attributes: { controlsList: "nodownload" },
                    },
                  }}
                />
              </div>
              <div className="relative w-full">
                <button
                  onClick={scrollLeft}
                  className={`absolute -left-11 top-1/2 transform -translate-y-1/2 bg-background1 dark:bg-dark_background1 text-highlight_hover hover:bg-highlight_hover hover:text-dark_primary_text border border-highlight_hover p-2 duration-300 rounded-full z-10`}
                >
                  <FaLongArrowAltLeft className="w-5 h-5" />
                </button>

                <div
                  ref={scrollRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  className="flex gap-7 overflow-x-hidden w-full outline-none"
                  style={{ scrollSnapType: "x mandatory" }}
                >
                  <div
                    className={`flex flex-col items-center justify-start gap-3 border-2 border-highlight_hover rounded-xl p-4 min-w-[32%] `}
                  >
                    <img
                      src={bengaliImg}
                      className="rounded-xl"
                      alt="bengali"
                    />
                    <h1 className="font-montserrat text-xl text-center">
                      1. Introduction
                    </h1>
                    <p className="text-center">
                      Introduction to Bengali Language
                    </p>
                    <div
                      className={`bg-background1 dark:bg-dark_background1 text-highlight_hover hover:bg-highlight_hover hover:text-dark_primary_text border-2 border-highlight_hover p-2 duration-300 rounded-xl font-bold cursor-pointer `}
                      onClick={() => handleVideoClick(bahoMein)}
                    >
                      Start Learning
                    </div>
                  </div>

                  <div
                    className={`flex flex-col items-center justify-start gap-3 border-2 border-highlight_hover rounded-xl p-4 min-w-[32%] cursor-pointer`}
                    onClick={() => handleVideoClick(bbVideo)}
                  >
                    <img
                      src={bengaliImg}
                      className="rounded-xl"
                      alt="bengali"
                    />
                    <h1 className="font-montserrat text-xl text-center">
                      2. Numerals
                    </h1>
                    <p>Cardinal Numbers, Ordinal Numbers</p>
                    <a
                      className={`bg-background1 dark:bg-dark_background1 text-highlight_hover hover:bg-highlight_hover hover:text-dark_primary_text border-2 border-highlight_hover p-2 duration-300 rounded-xl font-bold `}
                    >
                      Start Learning
                    </a>
                  </div>

                  <div
                    className={`flex flex-col items-center justify-start gap-3 border-2 border-highlight_hover rounded-xl p-4 min-w-[32%] cursor-pointer`}
                    onClick={() => handleVideoClick(bahoMein)}
                  >
                    <img
                      src={bengaliImg}
                      className="rounded-xl"
                      alt="bengali"
                    />
                    <h1>3. Countings</h1>
                    <p>
                      Counting Singular and Plural Objects with Articles,
                      Adjective of Numbers with Illustrations
                    </p>
                    <a
                      className={`bg-background1 dark:bg-dark_background1 text-highlight_hover hover:bg-highlight_hover hover:text-dark_primary_text border-2 border-highlight_hover p-2 duration-300 rounded-xl font-bold `}
                    >
                      Go to the course
                    </a>
                  </div>

                  <div
                    className={`flex flex-col items-center justify-start gap-3 border-2 border-highlight_hover rounded-xl p-4 min-w-[32%] cursor-pointer`}
                    onClick={() => handleVideoClick(bbVideo)}
                  >
                    <img
                      src={bengaliImg}
                      className="rounded-xl"
                      alt="bengali"
                    />
                    <h1>3. Countings</h1>
                    <p>
                      Counting Singular and Plural Objects with Articles,
                      Adjective of Numbers with Illustrations
                    </p>
                    <a
                      className={`bg-background1 dark:bg-dark_background1 text-highlight_hover hover:bg-highlight_hover hover:text-dark_primary_text border-2 border-highlight_hover p-2 duration-300 rounded-xl font-bold `}
                    >
                      Go to the course
                    </a>
                  </div>
                </div>

                <button
                  onClick={scrollRight}
                  className={`absolute -right-11 top-1/2 transform -translate-y-1/2 bg-background1 dark:bg-dark_background1 text-highlight_hover hover:bg-highlight_hover hover:text-dark_primary_text border border-highlight_hover p-2 duration-300 rounded-full z-10`}
                >
                  <FaLongArrowAltRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    </section>
  );
};

export default SingleCourse;
