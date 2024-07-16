import { NftsIcon, QrCodeIcon } from "./Icons";
import NFTFrameImage from "../assets/images/NFTFrame.png";
import NFTCollectionImage from "../assets/images/NFTCollection.png";
import NFTProgressImage from "../assets/images/NFTProgress.png";
import PigeonNFT from "../assets/images/PigeonNFT.png";
import EagleNFT from "../assets/images/EagleNFT.png";
import { useAnimation, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
const Nfts = () => {
  const controls = useAnimation();
  const [inView, setInView] = useState<Boolean>(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ width: "70%" });
    }
  }, [inView, controls]);

  return (
    <div className=" w-[100%] lg:w-[80%] justify-between mx-auto mt-[80px]">
      <div className=" hidden lg:block">
        <NftsIcon small={false} />
      </div>
      <div className=" lg:hidden flex justify-center">
        <NftsIcon small />
      </div>
      <div className=" flex  flex-col lg:flex-row mt-[50px] ">
        <div className=" w-[70%] mx-auto lg:mx-0 lg:w-[24%] sm:w-[250px]  relative">
          <img src={NFTFrameImage} className=" w-full h-auto" />
          <div className=" absolute inset-0 top-[80px]">
            <img src={PigeonNFT} className=" w-[70%] mx-auto hover:scale-105" />
            <div className=" flex items-end w-[70%] mx-auto justify-between  mt-[20px] ">
              <div>
                <p className=" font-advent-semibold text-[20px] text-white uppercase">
                  body
                </p>
                <p className=" font-advent-semibold text-[24px] text-[#FFFF00] uppercase relative top-[7px]">
                  pigeon
                </p>
              </div>
              <QrCodeIcon />
            </div>
            <div className=" h-[1px] w-[70%] mx-auto bg-gradient-to-r from-[#FFFF00] to-transparent mt-[30px]" />
          </div>
        </div>
        <div className=" w-[80%] lg:w-[49%] flex items-center flex-col  mx-auto gap-[50px] mt-[100px] lg:mt-[-130px]">
          <img
            src={NFTProgressImage}
            className=" w-[50%] lg:w-[25%] h-auto sm:w-[150px]"
          />
          <img
            src={NFTCollectionImage}
            className=" w-[100%] lg:w-[80%] sm:w-[400px] hover:scale-105"
          />
          <div className=" lg:w-[80%] mx-auto ">
            <div
              ref={progressBarRef}
              className="w-full h-[20px] bg-[#F01E31] shadow-md shadow-[#F01E31] rounded-[200px]"
            >
              <motion.div
                className="h-full bg-[#FFFF00] rounded-[200px]"
                initial={{ width: "0%" }}
                animate={controls}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>

            <div className=" mt-[20px] flex flex-col gap-[10px]">
              <p className=" font-paladins-straight text-center text-[22px] lg:text-[28px] text-[#FFFF00]">
                dynamic nfts
              </p>
              <p className=" font-advent-semibold w-[100%] lg:w-[60%] text-center text-white uppercase  text-[20px] lg:text-[25px] mx-auto">
                get perks & mutate your pigeon to an American eagle
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-[40px] lg:mt-0 w-[70%] mx-auto lg:mx-0  lg:w-[24%] sm:w-[250px] relative">
          <img src={NFTFrameImage} className=" w-full h-auto" />
          <div className=" absolute inset-0 top-[80px]">
            <img src={EagleNFT} className=" w-[70%] mx-auto hover:scale-105" />
            <div className=" flex items-end w-[70%] mx-auto justify-between  mt-[20px] ">
              <div>
                <p className=" font-advent-semibold text-[20px] text-white uppercase">
                  body
                </p>
                <p className=" font-advent-semibold text-[24px] text-[#FFFF00] uppercase relative top-[7px]">
                  American Eagle
                </p>
              </div>
              <QrCodeIcon />
            </div>
            <div className=" h-[1px] w-[70%] mx-auto bg-gradient-to-r from-[#FFFF00] to-transparent mt-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nfts;
