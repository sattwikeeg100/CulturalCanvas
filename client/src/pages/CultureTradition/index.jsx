import React from "react";
import commonImg from "../../assets/Heritage/a.png";
import AllCultures from "./AllCultures";
import StateCultures from "./StateCultures";

const CultureTradition = () => {
  return (
    <section className="bg-background1 dark:bg-dark_background1 text-primary_text dark:text-dark_primary_text py-4 px-16 duration-300">
      <div>
        <img src={commonImg} alt="Common" />
      </div>

      <div className="flex items-center tracking-wide justify-center py-4 text-7xl gap-12 font-bold font-playfair uppercase [word-spacing:25px]">
        Cultural Richness of India
      </div>

      <AllCultures />

      <div className="flex items-center tracking-wide justify-center py-4 text-6xl gap-12 font-bold font-playfair uppercase [word-spacing:20px]">
        India's Cultural Odyssey: State-Wise
      </div>

      <StateCultures />
    </section>
  );
};

export default CultureTradition;
