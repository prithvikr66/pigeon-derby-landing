import Utility1Image from "../assets/images/Utility1.png";
import Utility2Image from "../assets/images/Utility2.png";
import Utility3Image from "../assets/images/Utility3.png";
import Utility4Image from "../assets/images/Utility4.png";
import { UtilityHeadingIcon, UtilityHeadingIconSmall } from "./Icons";
const Utility = () => {
  return (
    <div className=" mt-[50px]">
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
            <img src={Utility2Image} className="sm:mx-auto lg:mx-0 " />
            <p className=" uppercase text-[#FFFF00] font-advent-bold text-[24px] sm:text-center lg:text-left ">
              race
            </p>
            <p className=" font-advent-semibold uppercase text-white text-[20px] sm:text-center lg:text-left">
              a unique lottery game where{" "}
              <span className=" text-[#F01E31]">
                50% of the players win a 2x
              </span>{" "}
              compared to justa 1 person taking the whOle pot!
            </p>
          </div>
          <div className=" w-[80%] mx-auto lg:mx-0 lg:w-[18%] ">
            <img
              src={Utility3Image}
              className="sm:mx-auto lg:mx-0 lg:hidden "
            />

            <p className=" uppercase text-[#FFFF00] font-advent-bold text-[24px] sm:text-center lg:text-left ">
              Love shack
            </p>
            <p className=" font-advent-semibold uppercase text-white text-[20px] sm:text-center lg:text-left">
              <span className=" text-[#F01E31]">Stake $Race</span> and be
              eligible for passive income. we make revenue by taking a 1% fee on
              every lottery ticket sold..
            </p>
            <img
              src={Utility3Image}
              className="sm:mx-auto lg:mx-0  hidden lg:block"
            />
          </div>

          <div className=" w-[80%] mx-auto lg:mx-0 lg:w-[18%]">
            <img src={Utility4Image} className="sm:mx-auto lg:mx-0 " />
            <p className=" uppercase text-[#FFFF00] font-advent-bold text-[24px]  sm:text-center lg:text-left">
              Burn
            </p>
            <p className=" font-advent-semibold uppercase text-white text-[20px] sm:text-center lg:text-left">
              With each lottery ticket you buy, a small portion of{" "}
              <span className="  text-[#F01E31]">$RACE is burnt!</span>{" "}
              deflationary, you know...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utility;
