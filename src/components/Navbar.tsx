import { Link } from "react-router-dom";
import MainLogoImage from "../assets/images/Logo.png";
const Navbar = () => {
  return (
    <div className=" hidden lg:block pt-[60px]">
      <div className=" w-[88%] xl:w-[83%] mx-auto flex justify-between">
        <div className=" flex items-center gap-3">
          <img src={MainLogoImage} className=" w-[100px] h-auto" />
          <div className=" text-[36px] lg:text-[40px] font-paladins-condensed">
            <h2 className=" text-[#F01E31] ">pigeon</h2>
            <h2 className=" text-white mt-[-20px] ">derby</h2>
          </div>
        </div>
        <div className=" uppercase  font-advent-bold text-[24px] flex items-center gap-[30px] ">
          <Link to={"/"}>
            <p className="text-[#3D3D3D] ">Home</p>
          </Link>
          <p className="text-[#ffff00] cursor-pointer ">Presale</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
