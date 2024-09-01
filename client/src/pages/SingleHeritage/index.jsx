import React from "react";
import ReactPlayer from "react-player";
import bahoMein from "../../assets/Heritage/bais.mp4";
import { NavLink } from "react-router-dom";
import upMap from "../../assets/Heritage/up.png";

import taj from "../../assets/Heritage/taj.jpeg";

import { MdLocalPolice } from "react-icons/md";
import { IoWoman } from "react-icons/io5";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { FaBriefcaseMedical } from "react-icons/fa";
import { MdFireTruck } from "react-icons/md";

const SingleHeritage = () => {
  return (
    <section className="duration-300 text-primary_text dark:text-dark_primary_text">
      <div
        style={{ backgroundImage: `url(${taj})` }}
        className="relative bg-center bg-cover bg-fixed bg-no-repeat"
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

        <div className="relative z-20 flex flex-col items-center justify-center">
          {/* Digital Art Section */}
          <div className="bg-background1 dark:bg-dark_background1 py-4 px-10 flex flex-col gap-4 items-center justify-center w-full h-full">
            <h1 className="font-bold font-playfair text-5xl tracking-wider">
              Exploring the Taj Mahal in the Digital Realm
            </h1>
            <ReactPlayer
              url={bahoMein}
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

          {/* name */}
          <div className=" flex flex-col gap-20 items-center justify-center  px-10 py-32  h-screen   text-dark_primary_text">
            <p className="text-[7rem] leading-9">TAJ MAHAL</p>
            <p className="text-lg ">
              Introduction Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Suscipit consequatur in ex laborum illo optio, aspernatur,
              dolor delectus minus eligendi, eaque quam quidem impedit
              asperiores. Fugit voluptas consequuntur repudiandae laudantium?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              non assumenda quos dolorem modi dolorum maxime quae
              exercitationem, eligendi eius, aliquid quia eum. Dicta doloribus
              id fugit cupiditate, vel ipsa. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ratione commodi ad labore asperiores
              voluptatem, illum nostrum reprehenderit repudiandae expedita
              ducimus magnam, similique architecto odio, suscipit quibusdam modi
              nobis quae laboriosam.
            </p>
          </div>

          {/* description and animated intro */}
          <div className="bg-background1 dark:bg-dark_background1 py-4 px-10 text-lg flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-col gap-1">
              <h1 className=" font-semibold font-montserrat text-2xl">
                Heading 1
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis eum neque eius sed veritatis libero velit placeat
                perferendis minima accusamus, iure, debitis ducimus est sapiente
                molestias rem omnis enim ad. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ab impedit deleniti unde
                perspiciatis ad nostrum ipsa mollitia sunt architecto
                accusantium enim, fugiat, maiores dolor magni saepe quos id
                neque voluptas? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aspernatur unde aliquid mollitia similique
                voluptatibus voluptatem sequi dolores id dolorum labore a sunt
                hic, blanditiis in velit! Totam quia itaque quam. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus dolorum
                animi veritatis adipisci saepe qui possimus eligendi atque ab
                iste! Facere corporis ipsa quia earum accusantium officiis
                maiores, mollitia excepturi! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Reiciendis eum neque eius sed
                veritatis libero velit placeat perferendis minima accusamus,
                iure, debitis ducimus est sapiente molestias rem omnis enim ad.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                impedit deleniti unde perspiciatis ad nostrum ipsa mollitia sunt
                architecto accusantium enim, fugiat, maiores dolor magni saepe
                quos id neque voluptas? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aspernatur unde aliquid mollitia similique
                voluptatibus voluptatem sequi dolores id dolorum labore a sunt
                hic, blanditiis in velit! Totam quia itaque quam. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus dolorum
              </p>
              <h1 className=" font-semibold font-montserrat text-2xl">
                Heading 2
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis eum neque eius sed veritatis libero velit placeat
                perferendis minima accusamus, iure, debitis ducimus est sapiente
                molestias rem omnis enim ad. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ab impedit deleniti unde
                perspiciatis ad nostrum ipsa mollitia sunt architecto
                accusantium enim, fugiat, maiores dolor magni saepe quos id
                neque voluptas? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aspernatur unde aliquid mollitia similique
                voluptatibus voluptatem sequi dolores id dolorum labore a sunt
                hic, blanditiis in velit! Totam quia itaque quam. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus dolorum
                animi veritatis adipisci saepe qui possimus eligendi atque ab
                iste! Facere corporis ipsa quia earum accusantium officiis
                maiores, mollitia excepturi! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Reiciendis eum neque eius sed
                veritatis libero velit placeat perferendis minima accusamus,
                iure, debitis ducimus est sapiente molestias rem omnis enim ad.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                impedit deleniti unde perspiciatis ad nostrum ipsa mollitia sunt
                architecto accusantium enim, fugiat, maiores dolor magni saepe
                quos id neque voluptas? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aspernatur unde aliquid mollitia similique
                voluptatibus voluptatem sequi dolores id dolorum labore a sunt
                hic, blanditiis in velit! Totam quia itaque quam. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus dolorum
              </p>
            </div>

            <div className="my-4 w-full flex flex-col gap-4 justify-center">
              <h1 className=" font-bold font-montserrat text-2xl tracking-wider ">
                A Journey Through Time: The Taj Mahal Animated
              </h1>
              <ReactPlayer
                url={bahoMein}
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

            <div className="flex flex-col gap-1">
              <h1 className=" font-semibold font-montserrat text-2xl">
                Heading 3
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis eum neque eius sed veritatis libero velit placeat
                perferendis minima accusamus, iure, debitis ducimus est sapiente
                molestias rem omnis enim ad. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ab impedit deleniti unde
                perspiciatis ad nostrum ipsa mollitia sunt architecto
                accusantium enim, fugiat, maiores dolor magni saepe quos id
                neque voluptas? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aspernatur unde aliquid mollitia similique
                voluptatibus voluptatem sequi dolores id dolorum labore a sunt
                hic, blanditiis in velit! Totam quia itaque quam. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus dolorum
                animi veritatis adipisci saepe qui possimus eligendi atque ab
                iste! Facere corporis ipsa quia earum accusantium officiis
                maiores, mollitia excepturi! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Reiciendis eum neque eius sed
                veritatis libero velit placeat perferendis minima accusamus,
                iure, debitis ducimus est sapiente molestias rem omnis enim ad.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                impedit deleniti unde perspiciatis ad nostrum ipsa mollitia sunt
                architecto accusantium enim, fugiat, maiores dolor magni saepe
                quos id neque voluptas? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aspernatur unde aliquid mollitia similique
                voluptatibus voluptatem sequi dolores id dolorum labore a sunt
                hic, blanditiis in velit! Totam quia itaque quam. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus dolorum
              </p>
              <h1 className=" font-semibold font-montserrat text-2xl">
                Heading 4
              </h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis eum neque eius sed veritatis libero velit placeat
                perferendis minima accusamus, iure, debitis ducimus est sapiente
                molestias rem omnis enim ad. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ab impedit deleniti unde
                perspiciatis ad nostrum ipsa mollitia sunt architecto
                accusantium enim, fugiat, maiores dolor magni saepe quos id
                neque voluptas? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aspernatur unde aliquid mollitia similique
                voluptatibus voluptatem sequi dolores id dolorum labore a sunt
                hic, blanditiis in velit! Totam quia itaque quam. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus dolorum
                animi veritatis adipisci saepe qui possimus eligendi atque ab
                iste! Facere corporis ipsa quia earum accusantium officiis
                maiores, mollitia excepturi! Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Reiciendis eum neque eius sed
                veritatis libero velit placeat perferendis minima accusamus,
                iure, debitis ducimus est sapiente molestias rem omnis enim ad.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                impedit deleniti unde perspiciatis ad nostrum ipsa mollitia sunt
                architecto accusantium enim, fugiat, maiores dolor magni saepe
                quos id neque voluptas? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aspernatur unde aliquid mollitia similique
                voluptatibus voluptatem sequi dolores id dolorum labore a sunt
                hic, blanditiis in velit! Totam quia itaque quam. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus dolorum
              </p>
            </div>
          </div>

          {/* vlog */}
          <div className="bg-background1 dark:bg-dark_background1 py-4 px-10 pt-0  flex flex-col gap-4 items-center justify-center w-full h-full">
            <h1 className="font-bold font-playfair text-5xl tracking-wider">
              Sensory Experience of Taj Mahal
            </h1>
            <ReactPlayer
              url={bahoMein}
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

          {/* nearest attractions */}
          <div className="bg-background1 dark:bg-dark_background1 py-4 px-10 pt-0  flex flex-col gap-4 items-center justify-center w-full h-full">
            <h1 className="font-bold font-playfair text-5xl tracking-wider">
              Nearest Attractions
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5">
              <a
                href="/"
                target="blank"
                rel=" noopener"
                className="flex items-center justify-start gap-3 p-3  border-2 rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  duration-500 transition-transform hover:scale-105 transform-cpu"
              >
                <img src={taj} className="w-32 rounded-xl" />
                <div className="flex flex-col items-start">
                  <h1 className=" font-semibold text-2xl tracking-wide">
                    Agra Fort
                  </h1>
                  <div className="flex flex-wrap w-full items-center justify-center gap-5">
                    <p>
                      <b> Distance:</b> 50km
                    </p>
                    <p>
                      <b>Entry Fee:</b> Rs.10
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="/"
                target="blank"
                rel=" noopener"
                className="flex items-center justify-start gap-3 p-3  border-2 rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  duration-500 transition-transform hover:scale-105 transform-cpu"
              >
                <img src={taj} className="w-32 rounded-xl" />
                <div className="flex flex-col items-start">
                  <h1 className=" font-semibold text-2xl tracking-wide">
                    Agra Fort
                  </h1>
                  <div className="flex flex-wrap w-full items-center justify-center gap-5">
                    <p>
                      <b> Distance:</b> 50km
                    </p>
                    <p>
                      <b>Entry Fee:</b> Rs.10
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="/"
                target="blank"
                rel=" noopener"
                className="flex items-center justify-start gap-3 p-3  border-2 rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  duration-500 transition-transform hover:scale-105 transform-cpu"
              >
                <img src={taj} className="w-32 rounded-xl" />
                <div className="flex flex-col items-start">
                  <h1 className=" font-semibold text-2xl tracking-wide">
                    Agra Fort
                  </h1>
                  <div className="flex flex-wrap w-full items-center justify-center gap-5">
                    <p>
                      <b> Distance:</b> 50km
                    </p>
                    <p>
                      <b>Entry Fee:</b> Rs.10
                    </p>
                  </div>
                </div>
              </a>

              <a
                href="/"
                target="blank"
                rel=" noopener"
                className="flex items-center justify-start gap-3 p-3  border-2 rounded-xl shadow-md shadow-primary_text dark:shadow-dark_primary_text  duration-500 transition-transform hover:scale-105 transform-cpu"
              >
                <img src={taj} className="w-32 rounded-xl" />
                <div className="flex flex-col items-start">
                  <h1 className=" font-semibold text-2xl tracking-wide">
                    Agra Fort
                  </h1>
                  <div className="flex flex-wrap w-full items-center justify-center gap-5">
                    <p>
                      <b> Distance:</b> 50km
                    </p>
                    <p>
                      <b>Entry Fee:</b> Rs.10
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* state culture */}
          <div className="bg-background1 dark:bg-dark_background1 py-4 px-10 pt-4  flex flex-col gap-4 items-center justify-center w-full h-full">
            <h1 className="font-bold font-playfair text-5xl tracking-wider">
              A Cultural Odyssey: Exploring Uttar Pradesh
            </h1>
            <a
              href="/"
              target="blank"
              rel=" noopener"
              className="flex items-center justify-center "
            >
              <img
                src={upMap}
                className="w-full h-full duration-500 transition-transform hover:scale-105 transform-cpu  "
              />
            </a>
          </div>

          {/* helplines */}
          <div className="bg-background1 dark:bg-dark_background1 py-4 px-10 pt-4  flex flex-col gap-10 items-center justify-center w-full h-full">
            <h1 className="font-bold font-playfair text-5xl tracking-wider">
              Helpline numbers of Agra Fort
            </h1>
            <div className="grid grid-cols-3  items-center justify-center text-xl gap-5">
              <div className="flex items-center justify-center gap-1 border-2 p-2 rounded-xl">
                <MdLocalPolice className=" text-highlight" />
                <p>
                  {" "}
                  <b className=" text-highlight"> Police Control Room: </b>+91
                  0000000000
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 border-2 p-2 rounded-xl">
                <IoWoman className=" text-highlight_hover" />
                <p>
                  {" "}
                  <b className=" text-highlight_hover"> Women's Helpline: </b>
                  +91 0000000000
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 border-2 p-2 rounded-xl">
                <FaHandsHoldingChild className=" text-highlight" />
                <p>
                  {" "}
                  <b className=" text-highlight"> Child Helpline: </b>+91
                  0000000000
                </p>
              </div>
              <div className="flex items-center justify-center gap-1 border-2 p-2 rounded-xl">
                <FaAmbulance className=" text-highlight_hover" />
                <p>
                  {" "}
                  <b className=" text-highlight_hover"> Ambulance Helpline: </b>
                  +91 0000000000
                </p>
              </div>

              <div className="flex items-center justify-center gap-1 border-2 p-2 rounded-xl">
                <FaBriefcaseMedical className=" text-highlight" />
                <p>
                  {" "}
                  <b className=" text-highlight"> Hospital Helpline: </b>+91
                  0000000000
                </p>
              </div>

              <div className="flex items-center justify-center gap-1 border-2 p-2 rounded-xl">
                <MdFireTruck className=" text-highlight_hover" />
                <p>
                  {" "}
                  <b className=" text-highlight_hover"> Fire Brigade: </b>+91
                  0000000000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleHeritage;
