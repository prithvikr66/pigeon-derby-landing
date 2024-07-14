import Heading from "./Heading";
import HowItWorksImage from "../assets/images/HowItWorks.png";
import HowItWorksImage1 from "../assets/images/HowItWorks1.png";
import HowItWorksImage2 from "../assets/images/HowItWorks2.png";
import HowItWorksImage3 from "../assets/images/HowItWorks3.png";
const HowItWorks = () => {
  return (
    <div className="  w-[80%] mx-auto">
      <div className=" hidden lg:block">
        <Heading heading="How it works" small={false} />
      </div>
      <div className=" lg:hidden flex justify-center">
        <Heading heading="How it works" small={true} />
      </div>
      <div className="  h-[5px] lg:h-[8px] mx-auto lg:mx-0 w-[150px] mt-[-5px] lg:mt-0 bg-[#FFFF00] rounded-tr-[8px] rounded-bl-[8px]" />
      <div className=" hidden lg:block mt-[50px]">
        <img src={HowItWorksImage} className=" w-[90%] mx-auto h-auto " />
        <div className=" flex w-full gap-[50px] justify-between">
          <div className=" text-white">
            <h3 className=" font-paladins-straight text-[#FFFF00] text-[25px] 2xl:text-[28px] text-center">
              buy tickets
            </h3>
            <p className=" font-advent-semibold  text-[20px] 2xl:text-[24px] text-white uppercase text-center">
              each round has 100 lottery tickets for sale.{" "}
              <span className=" text-[#F01E31]">($10 / ticket)</span>
            </p>
          </div>

          <div className=" text-white">
            <h3 className=" font-paladins-straight text-[#FFFF00] text-[25px] 2xl:text-[28px] text-center">
              race
            </h3>
            <p className=" font-advent-semibold  text-[20px] 2xl:text-[24px] text-white uppercase text-center">
              the race begins!{" "}
              <span className=" text-[#F01E31]">sit back and watch</span> your
              pigeon flap to the finish line!.
            </p>
          </div>

          <div className=" text-white">
            <h3 className=" font-paladins-straight text-[#FFFF00] text-[25px] 2xl:text-[28px] text-center">
              provably fair
            </h3>
            <p className=" font-advent-semibold  text-[20px] 2xl:text-[24px] text-white uppercase text-center">
              the results are <span className=" text-[#F01E31]">probably</span>{" "}
              fair on the solana blockchain.
            </p>
          </div>
        </div>
      </div>

      {/* --------------------------------------- */}
      <div className=" lg:hidden">
       <div className=" flex flex-col gap-[40px] mt-[40px]">
       <div>
          <img src={HowItWorksImage1} className=" mx-auto w-[250px]" />

          <h3 className=" font-paladins-straight text-[#FFFF00] text-[20px]  text-center">
            buy tickets
          </h3>
          <p className=" font-advent-semibold  text-[16px]  text-white uppercase text-center">
            each round has 100 lottery tickets for sale.{" "}
            <span className=" text-[#F01E31]">($10 / ticket)</span>
          </p>
        </div>
        <div>
          <img src={HowItWorksImage2} className=" mx-auto w-[250px]" />

          <h3 className=" font-paladins-straight text-[#FFFF00] text-[20px] 2xl:text-[28px] text-center">
              race
            </h3>
            <p className=" font-advent-semibold  text-[16px] 2xl:text-[24px] text-white uppercase text-center">
              the race begins!{" "}
              <span className=" text-[#F01E31]">sit back and watch</span> your
              pigeon flap to the finish line!.
            </p>
        </div>
        <div>
          <img src={HowItWorksImage3} className=" mx-auto w-[250px]" />

          <h3 className=" font-paladins-straight text-[#FFFF00] text-[20px] 2xl:text-[28px] text-center">
              provably fair
            </h3>
            <p className=" font-advent-semibold  text-[16px] 2xl:text-[24px] text-white uppercase text-center">
              the results are <span className=" text-[#F01E31]">probably</span>{" "}
              fair on the solana blockchain.
            </p>
        </div>
       </div>
      </div>
    </div>
  );
};

export default HowItWorks;
