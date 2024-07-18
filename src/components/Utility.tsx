import Utility1Image from "../assets/images/Utility1.png";
import Utility2Image from "../assets/images/Utility2.gif";
import Utility3Image from "../assets/images/Utility3.gif";
import Utility4Image from "../assets/images/Utility4.gif";
import AppImage from "../assets/images/App.png";
import {
  BurnIcon,
  LoveShackIcon,
  MobileGameIcon,
  RaceIcon,
  UtilityHeadingIcon,
  UtilityHeadingIconSmall,
} from "./Icons";
import MikeImage from "../assets/images/MikeImage.png";
import GooglePlayImage from "../assets/images/GooglePlay.png";
import AppstoreImage from "../assets/images/AppStore.png";

const Utility = () => {
  return (
    <div className=" mt-[50px] bg-black pb-[50px]">
      <div>
        <div className=" w-[85%] mx-auto hidden lg:block">
          <UtilityHeadingIcon />
        </div>
        <div className=" w-[85%] mx-auto lg:hidden flex justify-center ">
          <UtilityHeadingIconSmall />
        </div>

        <div className=" mt-[30px] lg:mt-[50px] w-[80%] mx-auto  flex flex-col lg:flex-row justify-between gap-[40px] lg:gap-0">
          <div className=" font-advent-regular text-[30px] lg:text-[54px] text-white w-[80%] mx-auto lg:mx-0 lg:w-[25%] text-center lg:text-left ">
            what do they call a token with utility?
            <p className=" text-[#F01E31]  text-center lg:text-left ">
              Kocher!
            </p>
            <img src={Utility1Image} className="  hidden lg:block" />
          </div>

          <div className=" w-[80%] mx-auto lg:mx-0 lg:w-[18%]">
            <div className=" relative lg:bottom-[70px]">
              <div className="  bg-[#00F0FF] h-[280px] ml-[-5px] relative top-[55px] w-[99%] -z-0" />
              <img
                src={Utility2Image}
                className=" absolute inset-0 sm:mx-auto lg:mx-0    hover:scale-110 h-[330px] w-[300px] z-50"
              />
            </div>
            <div className=" mt-[70px] lg:mt-0 flex items-center gap-2 uppercase text-[#FFFF00] font-advent-bold text-[24px] sm:text-center lg:text-left ">
              race <RaceIcon />
            </div>
            <p className=" font-advent-semibold uppercase text-white text-[20px] sm:text-center lg:text-left">
              a unique lottery game where{" "}
              <span className=" text-[#F01E31]">
                50% of the players win a 2x
              </span>{" "}
              compared to justa 1 person taking the whOle pot!
            </p>
          </div>
          <div className=" w-[80%] mx-auto lg:mx-0 lg:w-[18%] ">
            <div className=" relative lg:bottom-[70px]">
              <div className=" lg:hidden bg-[#00F0FF] h-[280px] ml-[-5px] relative top-[55px] w-[99%] -z-0" />
              <img
                src={Utility3Image}
                className=" absolute inset-0 sm:mx-auto lg:mx-0 lg:hidden  hover:scale-110 h-[330px] w-[300px] z-50"
              />
            </div>

            <div className="mt-[70px] lg:mt-0 flex items-center gap-2 uppercase text-[#FFFF00] font-advent-bold text-[24px] sm:text-center lg:text-left ">
              Love shack <LoveShackIcon />
            </div>
            <p className=" font-advent-semibold uppercase text-white text-[20px] sm:text-center lg:text-left">
              <span className=" text-[#F01E31]">Stake $Race</span> and be
              eligible for passive income. we make revenue by taking a 1% fee on
              every lottery ticket sold..
            </p>
            <div className=" relative">
              <div className=" hidden lg:block bg-[#00F0FF] h-[280px] ml-[-5px] relative top-[55px] w-[99%] -z-0" />

              <img
                src={Utility3Image}
                className=" absolute inset-0 sm:mx-auto lg:mx-0  hidden lg:block hover:scale-110 h-[330px] w-[300px] z-50"
              />
            </div>
          </div>

          <div className=" w-[80%] mx-auto lg:mx-0 lg:w-[18%]">
            <div className=" relative lg:bottom-[70px]">
              <div className="  bg-[#00F0FF] h-[280px] ml-[-5px] relative top-[55px] w-[99%] -z-0" />

              <img
                src={Utility4Image}
                className=" absolute inset-0 sm:mx-auto lg:mx-0  hover:scale-110 h-[330px] w-[300px] z-50"
              />
            </div>
            <div className="mt-[70px] lg:mt-0 flex items-center gap-2 uppercase text-[#FFFF00] font-advent-bold text-[24px]  sm:text-center lg:text-left">
              Burn <BurnIcon />
            </div>
            <p className=" font-advent-semibold uppercase text-white text-[20px] sm:text-center lg:text-left">
              With each lottery ticket you buy, a small portion of{" "}
              <span className="  text-[#F01E31]">$RACE is burnt!</span>{" "}
              deflationary, you know...
            </p>
          </div>
        </div>

        <div className=" w-[80%] mx-auto flex flex-col lg:flex-row justify-between ">
          <img
            src={AppImage}
            className=" w-[380px] h-[410px] hover:scale-105"
          />
          <div className=" lg:mt-[50px] lg:w-[30%]  ">
            <div className=" flex items-center gap-2 uppercase text-[#FFFF00] font-advent-bold text-[24px] lg:text-[24px]  sm:text-center lg:text-left">
              mobile game <MobileGameIcon />
            </div>
            <p className=" font-advent-semibold uppercase text-white text-[20px] lg:text-[24px] sm:text-center lg:text-left">
              a unique{" "}
              <span className="  text-[#F01E31]">
                ar game to catch pigeons irl
              </span>{" "}
              and get rewards for doing so.. similar TO pokemon go
            </p>
            <div className=" flex flex-col  gap-[20px] mt-[30px]">
              <a href="" target="_blank">
                <img src={GooglePlayImage} className=" w-[60%] h-auto" />
              </a>
              <a href="" target="_blank">
                {" "}
                <img src={AppstoreImage} className=" w-[60%] h-auto" />
              </a>
            </div>
          </div>
          <img src={MikeImage} className=" w-[30%] h-auto hidden lg:block " />
        </div>
      </div>
    </div>
  );
};

export default Utility;
