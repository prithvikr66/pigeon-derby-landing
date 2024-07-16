import Heading from "./Heading";
import TeamBackdropImage from "../assets/images/TeamBackdrop.svg";
import TeamImage from "../assets/images/Team.png";
const Team = () => {
  return (
    <div className=" w-[80%] mx-auto mt-[100px] lg:mt-0">
      <div className=" lg:hidden flex justify-center">
        <Heading heading="Team" small={true} />
      </div>
      <div className=" relative">
        <img src={TeamBackdropImage} className=" w-full h-auto opacity-70" />
        <div className=" absolute inset-0 top-[8%]">
          <div className=" hidden lg:block w-[90%] mx-auto">
            <Heading heading="Team" small={false} />
          </div>
          <img src={TeamImage} className=" w-[90%] mx-auto h-auto mt-[40px] scale-105" />
          <div className=" mt-[40px]">
            <p className=" font-advent-bold uppercase text-white text-center text-[20px] lg:text-[24px]">
              5 experienced devs + 20 kols + 3 agencies +{" "}
              <span className="text-[#FFFF00]">50 billion birds</span>{" "}
            </p>
            <p className=" font-advent-bold uppercase text-white text-center text-[20px] lg:text-[24px]">
              keep your girl safe, lmao{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
