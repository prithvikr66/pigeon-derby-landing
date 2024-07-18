import BackgroundImageMain from "../assets/images/MainBG.png";
import WebsiteLogo from "../assets/images/Logo.png";
import {
  GetPresaleIcon,
  GetPresaleIconSmall,
  PlayNowButtonIcon,
  PlayNowButtonIconSmall,
} from "./Icons";
import MikeTysonImage from "../assets/images/MikeTysonImage.png";
import { motion } from "framer-motion";
import Utility from "./Utility";
import HowItWorks from "./HowItWorks";
import Nfts from "./Nfts";
import Team from "./Team";
import Footer from "./Footer";
import EagleGIF from "../assets/images/Eagle.gif";
import SniperGIF from "../assets/images/Snipe.gif";
import RocketGIF from "../assets/images/Cannon.gif";
import ScoreboardGIF from "../assets/images/Score.gif";
import Backdrop from "../assets/images/BlackBackdrop.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Main = () => {
  const clickAnimation = {
    scale: 0.9,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
  };

  const slides = [
    { image: EagleGIF, title: "AMERICAN EAGLE" },
    { image: SniperGIF, title: "SNIPERS" },
    { image: RocketGIF, title: "ROCKET" },
    { image: ScoreboardGIF, title: "SCOREBOARD" },
  ];

  return (
    <div className=" min-h-screen bg-[#111111]">
      <div className=" relative">
        <img
          src={BackgroundImageMain}
          className=" w-full h-auto lg:h-screen object-cover"
        />
        {/* ------------------- */}
        <div className=" w-[80%] mx-auto  absolute inset-0 flex flex-col mt-[60px] justify-end items-center lg:items-start lg:justify-normal ">
          <img src={WebsiteLogo} className=" w-[100px] h-auto" />
          <div className=" text-[36px] lg:text-[96px] font-paladins-condensed lg:mt-[-20px]">
            <h2 className=" text-[#F01E31] ">pigeon</h2>
            <h2 className=" text-white mt-[-20px] lg:mt-[-60px] ">derby</h2>
          </div>

          <div className=" lg:flex  items-center  gap-[80px] hidden   ">
            <motion.button className=" cursor-pointer mt-[-10px] hover:scale-110 ">
              <PlayNowButtonIcon />
            </motion.button>

            <Link to={"/presale"}>
              <motion.button className=" cursor-pointer mt-[0px]">
                <GetPresaleIcon />
              </motion.button>
            </Link>
          </div>

          <div className=" lg:flex items-center  w-[70%] mt-[50px] hidden">
            <div>
              <img src={MikeTysonImage} />
            </div>
            <div>
              <p className=" font-advent-bold uppercase text-white text-[28px]">
                “I was fat and ugly. Kids teased me all the time. The only joy I
                had was pigeons”
              </p>
              <p className=" font-advent-bold uppercase text-[#FFFF00] text-[28px]">
                - mike tyson
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden mt-[20px] flex flex-col items-center">
        <motion.button
          className=" cursor-pointer  hidden sm:block 
        "
          whileTap={clickAnimation}
        >
          <PlayNowButtonIcon />
        </motion.button>
        <motion.button
          className=" cursor-pointer  sm:hidden "
          whileTap={clickAnimation}
        >
          <PlayNowButtonIconSmall />
        </motion.button>
        <Link to={"/presale"}>
          <motion.button
            onClick={() => console.log("clicked")}
            className=" cursor-pointer mt-[0px] hidden sm:block"
            // whileTap={clickAnimation}
          >
            <div onClick={() => console.log("div clicked")}>
              <GetPresaleIcon />
            </div>
          </motion.button>
        </Link>
        <Link to={"/presale"}>
          <motion.button
            className=" cursor-pointer mt-[10px] sm:hidden"
            whileTap={clickAnimation}
          >
            <GetPresaleIconSmall />
          </motion.button>
        </Link>

        <div>
          <img src={MikeTysonImage} />
        </div>
        <div>
          <p className=" font-advent-bold uppercase text-white text-[20px] text-center">
            “I was fat and ugly. Kids teased me all the time. The only joy I had
            was pigeons”
          </p>
          <p className=" font-advent-bold uppercase text-[#FFFF00] text-center text-[20px]">
            - mike tyson
          </p>
        </div>
      </div>
      {/* --------------------------- */}
      <img
        className=" w-full h-[50px] lg:h-[100px] xl:h-[150px]  2xl:h-[200px] "
        src={Backdrop}
      />
      {/* --------------------------- */}

      <div className=" hidden lg:block w-full">
        <div className=" flex justify-between w-full">
          <div className=" rounded-tl-[96px] w-[25%] h-[400px] xl:h-[500px] 2xl:h-[550px]  overflow-hidden relative ">
            <img
              className=" w-full h-full object-cover object-center "
              src={EagleGIF}
            />
            <div className=" absolute inset-0 top-[85%] w-full bg-black h-[15%] uppercase text-white font-advent-bold text-[30px] flex items-center justify-center bg-opacity-70">
              AMERICAN EAGLE
            </div>
          </div>
          <div className="relative rounded-tl-[96px] w-[25%] h-[400px] xl:h-[500px] 2xl:h-[550px]  mt-[-100px] z-10 overflow-hidden">
            <img
              className=" w-full h-full object-cover object-center "
              src={SniperGIF}
            />
            <div className=" absolute inset-0 top-[85%] w-full bg-black h-[15%] uppercase text-white font-advent-bold text-[30px] flex items-center justify-center bg-opacity-90">
              SNIPERS
            </div>
          </div>
          <div className=" relative w-[25%] h-[300px] xl:h-[400px] 2xl:h-[450px] mt-[100px]  overflow-hidden ">
            {" "}
            <img
              className=" w-full h-full object-cover object-center "
              src={RocketGIF}
            />
            <div className=" absolute inset-0 top-[85%] w-full bg-black h-[15%] uppercase text-white font-advent-bold text-[30px] flex items-center justify-center bg-opacity-50">
              ROCKET
            </div>
          </div>
          <div className="relative rounded-tl-[96px] w-[25%] h-[400px] xl:h-[500px] 2xl:h-[550px]   mt-[-100px] z-10 overflow-hidden">
            <img
              className=" w-full h-full object-cover object-center "
              src={ScoreboardGIF}
            />
            <div className=" absolute inset-0 top-[85%] w-full bg-black h-[15%] uppercase text-white font-advent-bold text-[30px] flex items-center justify-center bg-opacity-50">
              SCOREBOARD
            </div>
          </div>
        </div>
      </div>

      <div className="  lg:hidden w-full">
        <Slider {...settings} className="w-full ">
          {slides.map((slide, index) => (
            <div key={index} className="slider-card sm:w-[300px]">
              <div className="relative h-[400px]">
                <img
                  className="w-full h-full object-cover object-center"
                  src={slide.image}
                />
                <div className="absolute inset-x-0 bottom-0 h-[15%] bg-black bg-opacity-90 uppercase text-white font-advent-bold text-[30px] flex items-center justify-center">
                  {slide.title}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* ------------------- */}
      <div className=" flex flex-col gap-[50px]">
        <Utility />
        <HowItWorks />
        <Nfts />
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
