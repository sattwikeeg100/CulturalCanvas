import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_ALL_HERITAGES_QUERY } from "../../graphql/HeritageQuery";
import { Link } from "react-scroll";
import listed_pic from "../../assets/Heritage/ZListed(avif).avif";
import unlisted_pic from "../../assets/Heritage/ZUnlisted(avif).avif";
import local_pic from "../../assets/Heritage/ZLocal(avif).avif";

import commonImg from "../../assets/Heritage/a.png";

import { FaAnglesRight } from "react-icons/fa6";

const Heritage = () => {
  const [heritages, setHeritages] = useState([]);

  const { loading, error, data } = useQuery(GET_ALL_HERITAGES_QUERY);
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.getHeritages) {
      setHeritages(data.getHeritages);
    }
  }, [data]);
  console.log(heritages);

  // Group heritages by their categories: unesco_listed, unesco_unlisted, and local
  const groupedHeritages = heritages.reduce(
    (acc, heritage) => {
      const { type_of_heritage } = heritage;

      if (type_of_heritage === "unesco_listed") {
        acc.unesco_listed.push(heritage);
      } else if (type_of_heritage === "unesco_unlisted") {
        acc.unesco_unlisted.push(heritage);
      } else {
        acc.local.push(heritage);
      }
      return acc;
    },
    { unesco_listed: [], unesco_unlisted: [], local: [] } // Initialize grouped categories
  );

  const openSingleHeritage = (slug) => {
    navigate(`${slug}`);
  };

  const renderHeritageGroup = (group, groupName, categoryImg) => (
    <div
      id={groupName}
      className="text-primary_text dark:text-dark_primary_text flex flex-col py-10 pb-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <img
            src={categoryImg}
            alt="unesco"
            className="rounded-full w-14 h-14"
          />
          <h1 className="text-5xl leading-7 font-medium font-open_sans">
            {groupName.replace("_", " ")}
          </h1>
          <FaAnglesRight className="w-8 h-8" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-16">
          {group.map((content, index) => {
            let shadowClass;
            let hoverClass;
            if (index % 3 === 0) {
              shadowClass = "shadow-custom-orange ";
              hoverClass = "hover:bg-highlight dark:hover:bg-highlight";
            } else if (index % 3 === 1) {
              shadowClass = "shadow-custom-blue";
              hoverClass =
                "hover:bg-secondary_text dark:hover:bg-secondary_text";
            } else {
              shadowClass = "shadow-custom-green";
              hoverClass =
                "hover:bg-highlight_hover dark:hover:bg-highlight_hover";
            }

            return (
              <div
                key={index}
                className={`backdrop-blur-lg bg-opacity-80 py-4 px-10 rounded-lg flex flex-col items-center ${shadowClass} gap-2`}>
                <div className="flex flex-col">
                  <img
                    src={content.image.url}
                    alt={content.name}
                    className="w-full h-full rounded-md"
                  />
                </div>
                <h2 className="text-3xl tracking-wider font-bold text-center font-montserrat">
                  {content.name}
                </h2>
                <p className="mb-12">{content.introduction}</p>
                <div className="absolute bottom-0">
                  <button
                    className={` ${shadowClass} bg-background1 dark:bg-dark_background1  hover:text-dark_primary_text duration-300 font-bold font-ubuntu p-12 relative flex items-center justify-center rounded-full -bottom-10 ${hoverClass}`}
                    onClick={() => openSingleHeritage(content.slug)}>
                    <p className="absolute text-xl">
                      Know <br /> More
                    </p>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  if (loading) return <p>Loading..</p>;
  if(error) return <p>Error fetching Heritages!</p>
  return (
    <section className="bg-background1 dark:bg-dark_background1 py-4 px-16 duration-300">
      <div>
        <img src={commonImg} alt="Common" />
      </div>

      <div className="flex items-center justify-center py-4 text-7xl gap-12 font-bold font-playfair uppercase text-primary_text dark:text-dark_primary_text">
        <p className="tracking-wider">World</p>
        <p className="tracking-wider">Heritage</p>
        <p className="tracking-wider">Sites</p>
        <p className="tracking-wider">in</p>
        <p className="tracking-wider">India</p>
      </div>

      <div className="flex items-center justify-center gap-10">
        <Link
          to="Local_Heritage"
          smooth={true}
          className="uppercase bg-highlight hover:bg-highlight_hover text-primary_text hover:text-white px-2 py-1 rounded font-ubuntu duration-300 transition-transform hover:scale-105 transform-cpu cursor-pointer">
          Local Heritage
        </Link>
        <Link
          to="Unesco_listed"
          smooth={true}
          className="uppercase bg-highlight hover:bg-highlight_hover text-primary_text hover:text-white px-2 py-1 rounded font-ubuntu duration-300 transition-transform hover:scale-105 transform-cpu cursor-pointer">
          UNESCO Listed
        </Link>
        <Link
          to="Unesco_unlisted"
          smooth={true}
          className="uppercase bg-highlight hover:bg-highlight_hover text-primary_text hover:text-white px-2 py-1 rounded font-ubuntu duration-300 transition-transform hover:scale-105 transform-cpu cursor-pointer">
          UNESCO Unlisted
        </Link>
      </div>

      {/* Render each heritage group */}
      {renderHeritageGroup(
        groupedHeritages.unesco_listed,
        "Unesco_listed",
        listed_pic
      )}
      {renderHeritageGroup(
        groupedHeritages.unesco_unlisted,
        "Unesco_unlisted",
        unlisted_pic
      )}
      {renderHeritageGroup(groupedHeritages.local, "Local_Heritage", local_pic)}
    </section>
  );
};

export default Heritage;
