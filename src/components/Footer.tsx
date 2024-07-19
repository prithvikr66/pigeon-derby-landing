import FooterImage from "../assets/images/FooterImage1.svg";
import JupyterIcon from "../assets/images/JupyterIcon.svg";
import MobileFooterImage from "../assets/images/MobileFooter.svg";
import {
  DextoolsIcon,
  SolanaIconNav,
  TelegramIcon,
  TwitterIcon,
} from "./Icons";
const Footer = () => {
  const DEXTOOLS_URL = "";
  const SOLSCAN_URL = "";
  const JUPITER_URL = "";
  const TWITTER_URL = "https://x.com/Pigeonderby ";
  const TELEGRAM_URL = "t.me/PigeonDerby ";

  return (
    <div>
      <div className="hidden md:block w-full relative">
        <img src={FooterImage} className=" w-full h-auto" />
        <div className=" absolute inset-0 font-advent-semibold uppercase left-[38%] top-[20%] lg:top-[30%] flex  gap-[100px] ">
          <div className=" flex flex-col gap-[15px]">
            <p className=" text-[#9FF517] text-[16px] lg:text-[20px]">
              markets
            </p>
            <a href={DEXTOOLS_URL} target="_blank">
              <div className=" flex items-center gap-2 mt-[5px]">
                <DextoolsIcon />
                <p className=" text-white text-[16px] lg:text-[20px]">
                  dextools
                </p>
              </div>
            </a>
            <a href={SOLSCAN_URL} target="_blank">
              <div className=" flex items-center gap-2">
                <SolanaIconNav />
                <p className=" text-white text-[16px] lg:text-[20px]">
                  SOLSCAN
                </p>
              </div>
            </a>
            <a href={JUPITER_URL} target="_blank">
              <div className=" flex items-center gap-2">
                <img src={JupyterIcon} />
                <p className=" text-white text-[16px] lg:text-[20px]">
                  jUPITER
                </p>
              </div>
            </a>
          </div>
          <div className=" flex flex-col gap-[15px]">
            <p className=" text-[#9FF517] text-[16px] lg:text-[20px]">
              socials
            </p>
            <a href={TWITTER_URL} target="_blank">
              <div className=" flex items-center gap-2 mt-[5px]">
                <TwitterIcon />
                <p className=" text-white text-[16px] lg:text-[20px]">
                  twitter
                </p>
              </div>
            </a>
            <a href={TELEGRAM_URL} target="_blank">
              <div className=" flex items-center gap-2">
                <TelegramIcon />
                <p className=" text-white text-[16px] lg:text-[20px]">
                  telegram
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* --------------------------------- */}
      <div>
        <div className="  md:hidden w-full mt-[200px] relative">
          <img src={MobileFooterImage} className=" w-full h-auto" />
          <div className=" absolute inset-0 font-advent-semibold uppercase  justify-center top-[45%] flex  gap-[40px] ">
            <div className=" flex flex-col gap-[15px]">
              <p className=" text-[#9FF517] text-[20px]">markets</p>
              <a href={DEXTOOLS_URL} target="_blank">
                <div className=" flex items-center gap-2 mt-[5px]">
                  <DextoolsIcon />
                  <p className=" text-white text-[20px]">dextools</p>
                </div>
              </a>
              <a href={SOLSCAN_URL} target="_blank">
                <div className=" flex items-center gap-2">
                  <SolanaIconNav />
                  <p className=" text-white text-[20px]">SOLSCAN</p>
                </div>
              </a>
              <a href={JUPITER_URL} target="_blank">
                <div className=" flex items-center gap-2">
                  <img src={JupyterIcon} />
                  <p className=" text-white text-[20px]">jUPITER</p>
                </div>
              </a>
            </div>
            <div className=" flex flex-col gap-[15px]">
              <p className=" text-[#9FF517] text-[20px]">socials</p>
              <a href={TWITTER_URL} target="_blank">
                <div className=" flex items-center gap-2 mt-[5px]">
                  <TwitterIcon />
                  <p className=" text-white text-[20px]">twitter</p>
                </div>
              </a>
              <a href={TELEGRAM_URL} target="_blank">
                <div className=" flex items-center gap-2">
                  <TelegramIcon />
                  <p className=" text-white text-[20px]">telegram</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
