import Utility1Image from "../assets/images/Utility1.png";
import Utility2Image from "../assets/images/Utility2.png"
import Utility3Image from "../assets/images/Utility3.png"
const Utility = () => {
  return (
    <div>
      <div>
        <h3 className=" font-paladins-straight  text-[40px] text-[#F01E31]">
          Utility
        </h3>

        <div className=" w-[80%] mx-auto border border-white">
          <div className=" font-advent-regular text-[48px] lg:text-[54px] text-white w-[25%]">
            what do they call a token with utility?
            <p className=" text-[#F01E31] mt-[-20px]">Kocher!</p>
            <img src={Utility1Image} />
          </div>

          <div>
            <img src={}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utility;
