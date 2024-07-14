import BackgroundImageMain from "../assets/images/MainBG.png";
import WebsiteLogo from "../assets/images/Logo.png";
import { GetPresaleIcon, PlayNowButtonIcon } from "./Icons";
import MikeTysonImage from "../assets/images/MikeTysonImage.png";
// import Landing1Image from "../assets/images/Landing1.png";
// import Landing2Image from "../assets/images/Landing2.png";
// import Landing3Image from "../assets/images/Landing3.png";
// import Landing4Image from "../assets/images/Landing4.png";
import { motion } from "framer-motion";
import Utility from "./Utility";
import HowItWorks from "./HowItWorks";
import Nfts from "./Nfts";
import Team from "./Team";
const Main = () => {
  const clickAnimation = {
    scale: 0.9,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

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
            <h2 className=" text-[#F01E31]">pigeon</h2>
            <h2 className=" text-white mt-[-20px] lg:mt-[-60px] ">derby</h2>
          </div>

          <div className=" lg:flex  items-center  gap-[80px] hidden   ">
            <motion.button
              className=" cursor-pointer mt-[-10px]"
              whileTap={clickAnimation}
            >
              <PlayNowButtonIcon />
            </motion.button>

            <motion.button
              className=" cursor-pointer mt-[0px]"
              whileTap={clickAnimation}
            >
              <GetPresaleIcon />
            </motion.button>
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
        <motion.button className=" cursor-pointer" whileTap={clickAnimation}>
          <PlayNowButtonIcon />
        </motion.button>

        <motion.button
          className=" cursor-pointer mt-[0px]"
          whileTap={clickAnimation}
        >
          <GetPresaleIcon />
        </motion.button>

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

      {/* --------------------------------------------- */}
      {/* <div className=" flex w-full">
        <img src={Landing1Image} className=" w-full h-auto hover:scale-110" />
        <img src={Landing2Image}  className=" w-full h-auto hover:scale-110"/>
        <img src={Landing3Image}  className=" w-full h-auto hover:scale-110"/>
        <img src={Landing4Image}  className=" w-full h-auto hover:scale-110"/>
      </div> */}

      {/* ------------------- */}
      <Utility />
      <HowItWorks />
      <Nfts />
      <Team />
    </div>
  );
};

export default Main;
{
  (" ");
}
