import React from "react";
import college from "../../../assets/college.png";
import logo from "../../../assets/logo.png";

function About() {
  return (
    <>
      {/* Mobile View (up to md breakpoint) and Desktop Heading */}
      <div className="mt-10 md:mt-8">
        <p
          className="text-3xl sm:text-5xl md:text-7xl text-sky-500 font-semibold text-center"
          data-aos="fade-down"
        >
          About Us
        </p>

        {/* Mobile View for KSRCT */}
        <div className="flex flex-col md:hidden mx-4 sm:mx-8 md:mx-16 lg:mx-28 mt-6 sm:mt-12 md:mt-16 justify-center items-center gap-4 sm:gap-8 md:gap-12">
          <div
            className="w-full border-2 border-sky-900 p-2 sm:p-3 md:p-4 h-full"
            data-aos="fade-right"
          >
            <img
              className="w-full md:w-1/2 max-w-[500px] border-2 border-sky-900 p-2 sm:p-3 md:p-4"
              src={college}
              alt="KSRCT Campus"
              data-aos="fade-left"
            />
            <div className="h-auto bg-sky-900 bg-opacity-50 p-3 sm:p-6 md:p-8 relative">
              <p className="absolute px-3 sm:px-6 md:px-8 py-1 sm:py-3 top-0 left-0 text-base sm:text-xl md:text-2xl font-poppins text-white bg-sky-500 bg-opacity-70">
                K.S.Rangasamy College of Technology
              </p>
              <p className="text-sky-400 font-poppins leading-5 sm:leading-7 mt-10 sm:mt-14 md:mt-16 text-justify text-xs sm:text-base md:text-lg">
                K.S.Rangasamy College of Technology (KSRCT) was started in 1994.
                Located near Tiruchengode, Tamil Nadu, it offers quality
                technical education with 14 U.G., 11 P.G. and 12 Ph.D. programs.
                Approved by AICTE and affiliated with Anna University, Chennai,
                KSRCT has Autonomous status from UGC. It ranked 99th in NIRF
                2017 and 51-100 band in NIRF Innovation Ranking 2023 for
                Engineering. Accredited with NAAC A++ grade and NBA Tier 1
                departments, it features modern infrastructure including
                AICTE-IDEA Lab, ATAL Community Innovation Centre, and MSME
                incubation centre. With NTTM funding of 6.5 crore rupees, it
                fosters cutting-edge research and collaborates with DST, DBT,
                DAE, CSIR, DRDO, and ISRO.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop View for KSRCT */}
        <div className="hidden md:flex mx-28 mt-16 justify-center items-center gap-12">
          <div
            className="w-3/5 border-2 border-sky-900 p-3 h-full"
            data-aos="fade-right"
          >
            <div
              className="h-auto w-full bg-sky-900 bg-opacity-50 p-8 relative clip-bottom-right"
              data-aos="fade-right"
            >
              <p className="absolute px-8 pr-12 py-3 top-0 left-0 text-2xl clip-path-slant-right font-poppins text-white bg-sky-500 bg-opacity-70">
                K.S.Rangasamy College of Technology
              </p>
              <p className="text-sky-400 font-poppins leading-6 mt-16 text-justify">
                {/* Your paragraph content */}
                K.S.Rangasamy College of Technology (KSRCT) was started in 1994.
                Located near Tiruchengode, Tamil Nadu, it offers quality
                technical education with 14 U.G., 11 P.G. and 12 Ph.D. programs.
                Approved by AICTE and affiliated with Anna University, Chennai,
                KSRCT has Autonomous status from UGC. It ranked 99th in NIRF
                2017 and 51-100 band in NIRF Innovation Ranking 2023 for
                Engineering. Accredited with NAAC A++ grade and NBA Tier 1
                departments, it features modern infrastructure including
                AICTE-IDEA Lab, ATAL Community Innovation Centre, and MSME
                incubation centre. With NTTM funding of 6.5 crore rupees, it
                fosters cutting-edge research and collaborates with DST, DBT,
                DAE, CSIR, DRDO, and ISRO.
              </p>
            </div>
          </div>
          <img
            className="w-2/5 border-2 border-sky-900 p-3"
            src={college}
            alt="KSRCT Campus"
            data-aos="fade-left"
          />
        </div>
      </div>

      {/* Mobile View for Dakshaa T25 */}
      <div className="my-10 sm:my-20 md:my-28">
        <div className="flex flex-col md:hidden mx-4 sm:mx-8 md:mx-16 lg:mx-28 mt-6 sm:mt-12 md:mt-16 justify-center items-center gap-4 sm:gap-8 md:gap-12">
          <div
            className="w-full border-2 border-sky-900 p-2 sm:p-3 md:p-4 h-full"
            data-aos="fade-right"
          >
            <img
              className="w-full md:w-1/2 max-w-[500px]"
              src={logo}
              alt="Dakshaa T25 Logo"
              data-aos="fade-left"
            />
            <div className="h-auto bg-sky-900 bg-opacity-50 p-3 sm:p-6 md:p-8 relative">
              <p className="absolute px-3 sm:px-6 md:px-8 py-1 sm:py-3 top-0 left-0 text-base sm:text-xl md:text-2xl font-poppins text-white bg-sky-500 bg-opacity-70">
                Dakshaa T25
              </p>
              <p className="text-sky-400 font-poppins leading-5 sm:leading-7 mt-10 sm:mt-14 md:mt-16 text-justify text-xs sm:text-base md:text-lg pb-4 sm:pb-8 md:pb-10">
                DaKshaa T25 is a premier National Level Techno-Cultural Fest
                that brings together innovation, creativity, and talent under
                one grand stage. Designed to foster technical excellence and
                artistic expression, this fest serves as a vibrant platform for
                students and professionals across the country to showcase their
                skills, exchange ideas, and compete at the highest level. With a
                perfect blend of technology, culture, and entertainment, DaKshaa
                T25 features an array of events, including technical challenges,
                hackathons, workshops, cultural performances, and interactive
                sessions with industry experts. Whether you're a tech enthusiast
                eager to dive into the latest advancements or an artist looking
                to mesmerize the audience, DaKshaa T25 has something for
                everyone. Join us as we celebrate innovation, embrace
                creativity, and redefine excellence at one of the most awaited
                techno-cultural festivals in the country!
              </p>
            </div>
          </div>
        </div>

        {/* Desktop View for Dakshaa T25 */}
        <div className="hidden md:flex flex-row-reverse mx-28 mt-16 justify-center items-center gap-12">
          <div
            className="w-3/5 border-2 border-sky-900 p-3 h-full"
            data-aos="fade-right"
          >
            <div className="h-auto w-full bg-sky-900 bg-opacity-50 p-8 relative clip-bottom-left">
              <p className="absolute px-8 pr-12 py-3 top-0 left-0 text-2xl clip-path-slant-right font-poppins text-white bg-sky-500 bg-opacity-70">
                Dakshaa T25
              </p>
              <p className="text-sky-400 font-poppins leading-6 mt-16 text-justify pb-6">
                DaKshaa T25 is a premier National Level Techno-Cultural Fest
                that brings together innovation, creativity, and talent under
                one grand stage. Designed to foster technical excellence and
                artistic expression, this fest serves as a vibrant platform for
                students and professionals across the country to showcase their
                skills, exchange ideas, and compete at the highest level. With a
                perfect blend of technology, culture, and entertainment, DaKshaa
                T25 features an array of events, including technical challenges,
                hackathons, workshops, cultural performances, and interactive
                sessions with industry experts. Whether you're a tech enthusiast
                eager to dive into the latest advancements or an artist looking
                to mesmerize the audience, DaKshaa T25 has something for
                everyone. Join us as we celebrate innovation, embrace
                creativity, and redefine excellence at one of the most awaited
                techno-cultural festivals in the country!
              </p>
            </div>
          </div>
          <img
            className="w-2/5"
            src={logo}
            alt="Dakshaa T25 Logo"
            data-aos="fade-left"
          />
        </div>
      </div>
    </>
  );
}

export default About;
