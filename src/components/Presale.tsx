import PresaleMainImage from "../assets/images/PresaleMain.png";
import {
  PresaleDiamonIcon,
  ProgressIcon1,
  ProgressIcon2,
  ProgressIcon3,
  ProgressIcon4,
  ProgressIcon5,
  TargetIcon,
} from "./Icons";
import SolAmountSVG from "../assets/images/SolAmount.svg";
import SolanaIcon from "../assets/images/SolanaIcon.svg";
import MikeMoneyImage from "../assets/images/MikeMoney.png";
import { useEffect, useState } from "react";
import CashImage from "../assets/images/CashImage.png";
import { Link } from "react-router-dom";
import LandingImage from "../assets/images/LandingImage.png";
import BackdropImage from "../assets/images/BlackBackdrop.png";
import RaiseInfoImage from "../assets/images/RaiseInfo.svg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {
  PublicKey,
  Transaction,
  LAMPORTS_PER_SOL,
  SystemProgram,
} from "@solana/web3.js";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const TREASURY_WALLET_ADDRESS = "";
const Presale = () => {
  const [selectedSolAmount, setSelectedSolAmount] = useState<
    number | string | undefined
  >(0);

  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      if (connection && TREASURY_WALLET_ADDRESS) {
        const walletPublicKey = new PublicKey(TREASURY_WALLET_ADDRESS);
        const balance = await connection.getBalance(walletPublicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    };
    fetchBalance();
  }, [connection]);

  const handleTransaction = async () => {
    if (!publicKey) {
      alert("Please connect your wallet!");
      return;
    }
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(TREASURY_WALLET_ADDRESS),
        lamports: Number(selectedSolAmount) * LAMPORTS_PER_SOL,
      })
    );
    await sendTransaction(transaction, connection);
  };

  return (
    <div className=" bg-black min-h-screen">
      <Navbar />
      <div className=" hidden lg:block relative w-[90%] xl:w-[85%] mx-auto">
        <img src={PresaleMainImage} className=" w-full h-auto " />
        <div className=" absolute inset-0  top-[8%] left-[7%] mt-[30px]">
          <div className=" flex justify-between">
            <div className=" uppercase w-[20%]   ">
              <TargetIcon />
              <p className=" text-[#FFFF00] text-[24px] font-advent-bold mt-[10px]">
                Raise info
              </p>
              <div className=" flex flex-col gap-[10px] xl:gap-[15px] 2xl:gap-[25px] mt-[30px]">
                <div className=" w-full justify-between flex items-center font-advent-regular text-white text-[20px]">
                  <div className=" flex gap-2 items-center">
                    <ProgressIcon1 />
                    public sale
                  </div>
                  <p className=" font-advent-semibold text-[#FFFF00] text-[24px]">
                    100%
                  </p>
                </div>
                <div className=" w-full h-[1px] bg-gradient-to-r from-[#FFFF00] to-black" />
                <div className=" w-full justify-between flex items-center font-advent-regular text-white text-[20px]">
                  <div className=" flex gap-2 items-center">
                    <ProgressIcon2 />
                    lp
                  </div>
                  <p className=" font-advent-semibold text-[#FFFF00] text-[24px]">
                    30%
                  </p>
                </div>
                <div className=" w-full h-[1px] bg-gradient-to-r from-[#FFFF00] to-black" />
                <div className=" w-full justify-between flex items-center font-advent-regular text-white text-[20px]">
                  <div className=" flex gap-2 items-center">
                    <ProgressIcon3 />
                    marketing
                  </div>
                  <p className=" font-advent-semibold text-[#FFFF00] text-[24px]">
                    10%
                  </p>
                </div>
                <div className=" w-full h-[1px] bg-gradient-to-r from-[#FFFF00] to-black" />
                <div className=" w-full justify-between flex items-center font-advent-regular text-white text-[20px]">
                  <div className=" flex gap-2 items-center">
                    <ProgressIcon4 />
                    utility/build
                  </div>
                  <p className=" font-advent-semibold text-[#FFFF00] text-[24px]">
                    5%
                  </p>
                </div>
                <div className=" w-full h-[1px] bg-gradient-to-r from-[#FFFF00] to-black" />
                <div className=" w-full justify-between flex items-center font-advent-regular text-white text-[20px]">
                  <div className=" flex gap-2 items-center">
                    <ProgressIcon5 />
                    cex (tier 1)
                  </div>
                  <p className=" font-advent-semibold text-[#FFFF00] text-[24px]">
                    5%
                  </p>
                </div>
              </div>
            </div>

            <div className=" w-[77%] uppercase  mt-[-50px]">
              <div className=" mx-auto w-[80%] flex justify-between relative top-[10%] ">
                <img
                  src={CashImage}
                  className=" w-[100px] h-auto xl:w-[130px] 2xl:w-[140px]"
                />
                <div className=" uppercase text-white text-[20px] font-advent-bold flex items-center gap-2">
                  <img src={SolanaIcon} />
                  23 sol
                </div>
              </div>
              <div className="w-[80%] mx-auto h-[20px] bg-[#ffffff] shadow-lg shadow-[#02AFBA] rounded-[200px]">
                <div className="h-full bg-[#FFFF00] rounded-[200px] w-[30%]" />
              </div>
              <div className="  mx-auto w-[80%]   flex items-center font-advent-bold  text-[20px] uppercase text-[#FFFF00]">
                <div className=" w-[30%]   text-right">50%</div>
              </div>
              <div className=" w-[80%]  mx-auto flex items-center">
                <div className=" w-[80%] flex flex-col gap-[10px]  ">
                  <p className=" text-white font-advent-bold text-[24px] ">
                    participate
                  </p>
                  <div className="   ">
                    <div className=" w-full flex items-center">
                      <div className="  flex items-center ">
                        <div className="w-[60%] relative">
                          <img
                            src={SolAmountSVG}
                            className="w-full h-auto"
                            alt="Sol Amount Background"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <img
                              src={SolanaIcon}
                              alt="Solana Icon"
                              className="absolute left-[10%]"
                            />
                            <input
                              type="text"
                              value={selectedSolAmount}
                              onChange={(e) =>
                                setSelectedSolAmount(e.target.value)
                              }
                              placeholder="sol amount"
                              className="uppercase text-[#B7B70A] text-[16px] font-advent-bold bg-transparent border-none outline-none pl-[2.5rem] w-full"
                              style={{ paddingLeft: "calc(10% + 2rem)" }}
                            />
                          </div>
                        </div>

                        <div className=" w-[36%]  bg-[#FFFF00] text-[#3D3D3D] uppercase text-[16px]  xl:text-[18px] text-center font-advent-bold rounded-tl-[8px] rounded-br-[8px] p-[10px] xl:p-[10px] cursor-pointer">
                          connect wallet
                        </div>
                      </div>
                    </div>
                    <div className=" ">
                      <div className=" w-[90%] xl:w-[65%] ml-[15px] mt-[10px] xl:mt-[20px] 2xl:mt-[30px] flex items-center justify-between">
                        <div
                          onClick={() => setSelectedSolAmount(1)}
                          className={` cursor-pointer ${
                            selectedSolAmount === 1
                              ? "bg-[#ffff00] text-[#000000]"
                              : "bg-none text-[#ffff00]"
                          } p-[5px] flex items-center justify-center  w-[22%] border border-[#F01E31] rounded-tr-[8px] rounded-bl-[4px] font-advent-bold  text-[20px] `}
                        >
                          <img src={SolanaIcon} className=" gray-image" /> 1
                        </div>
                        <div
                          onClick={() => setSelectedSolAmount(5)}
                          className={` cursor-pointer ${
                            selectedSolAmount === 5
                              ? "bg-[#ffff00] text-[#000000]"
                              : "bg-none text-[#ffff00]"
                          } p-[5px] flex items-center justify-center  w-[22%] border border-[#F01E31] rounded-tr-[8px] rounded-bl-[4px] font-advent-bold  text-[20px] `}
                        >
                          <img src={SolanaIcon} className=" gray-image" /> 5
                        </div>
                        <div
                          onClick={() => setSelectedSolAmount(10)}
                          className={` cursor-pointer ${
                            selectedSolAmount === 10
                              ? "bg-[#ffff00] text-[#000000]"
                              : "bg-none text-[#ffff00]"
                          } p-[5px] flex items-center justify-center  w-[22%] border border-[#F01E31] rounded-tr-[8px] rounded-bl-[4px] font-advent-bold  text-[20px] `}
                        >
                          <img src={SolanaIcon} className=" gray-image" /> 10
                        </div>
                        <div
                          onClick={() => setSelectedSolAmount(20)}
                          className={` cursor-pointer ${
                            selectedSolAmount === 20
                              ? "bg-[#ffff00] text-[#000000]"
                              : "bg-none text-[#ffff00]"
                          } p-[5px] flex items-center justify-center  w-[22%] border border-[#F01E31] rounded-tr-[8px] rounded-bl-[4px] font-advent-bold  text-[20px] `}
                        >
                          <img src={SolanaIcon} className=" gray-image" /> 20
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ------------------- */}
                  <div className=" mt-[10px] xl:mt-[30px] 2xl:mt-[40px]   ">
                    <div className="  border border-white rounded-[20px] p-[15px] flex flex-row justify-between    gap-[10px] ">
                      <div className=" uppercase font-advent-regular text-white flex items-center text-[12px] 2xl:text-[16px] xl:text-[14px] ">
                        <p>minimum</p>
                        <img src={SolanaIcon} />
                        <p className=" font-advent-bold text-[#ffff00]">
                          1 sol
                        </p>
                      </div>
                      <div className=" uppercase font-advent-regular text-white flex items-center text-[12px] 2xl:text-[16px] xl:text-[14px]">
                        <p>maximum</p>
                        <img src={SolanaIcon} />
                        <p className=" font-advent-bold text-[#ffff00]">
                          20 sol
                        </p>
                      </div>
                      <div className=" flex justify-center">
                        <div className=" uppercase font-advent-regular text-white flex items-center text-[12px] 2xl:text-[16px] xl:text-[14px]">
                          <p>your amount</p>
                          <img src={SolanaIcon} />
                          <p className=" font-advent-bold text-[#ffff00]">
                            {selectedSolAmount} sol
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" w-[30%]  ">
                  <img src={MikeMoneyImage} className=" w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-white font-advent-semibold uppercase text-[20px] flex flex-col gap-[10px]  w-[95%] mx-auto mt-[30px] mb-[30px]">
          <div className=" flex gap-4 font-advent-semibold text-white">
            <PresaleDiamonIcon />
            <p className=" text-[#ffffff]">
              Diamond hands only! prefer people with a{" "}
              <span className=" text-[#F01E31]">long- term vision</span>
            </p>
          </div>
          <div className=" flex gap-4 font-advent-semibold text-white">
            <PresaleDiamonIcon />
            <p className=" text-[#ffffff]">
              instant token unlock at tge - straight to your wallet
            </p>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block">
        <Footer />
      </div>

      {/* --------------------------------------------------------- */}
      <div className=" lg:hidden w-full">
        <div className=" ">
          <img src={LandingImage} className=" w-full h-auto" />
        </div>
        <div className=" lg:hidden profile  w-[90%] mx-auto uppercase mt-[30px]"></div>
        <div className=" flex justify-center gap-[30px] uppercase w-[90%] mx-auto mt-[30px]">
          <Link to={"/"}>
            <p
              className={`${
                location.pathname === "/" ? "text-[#FFFF00]" : "text-white"
              } font-advent-bold text-[20px]`}
            >
              home
            </p>
          </Link>
          <Link to={"/presale"}>
            <p
              className={`${
                location.pathname === "/presale"
                  ? "text-[#FFFF00]"
                  : "text-white"
              } font-advent-bold text-[20px]`}
            >
              presale
            </p>
          </Link>
        </div>

        <div className=" mx-auto w-[90%] flex  items-center justify-between relative top-[30px] ">
          <img src={CashImage} className=" w-[100px] h-auto" />
          <div className=" uppercase text-white text-[20px] font-advent-bold flex items-center gap-2">
            <img src={SolanaIcon} />
            23 sol
          </div>
        </div>
        <div className="w-[90%] sm:w-[80%] mx-auto h-[20px] bg-[#ffffff] shadow-lg shadow-[#02AFBA] rounded-[200px]">
          <div className="h-full bg-[#FFFF00] rounded-[200px] w-[30%]" />
        </div>

        <div className=" w-[90%] sm:w-[80%] mx-auto font-advent-bold uppercase text-white mt-[30px]">
          <p>participate</p>
          <div className="w-[100%] relative mt-[20px]">
            <img src={SolAmountSVG} className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center ">
              <img
                src={SolanaIcon}
                alt="Solana Icon"
                className="absolute left-[10%]"
              />
              <input
                type="text"
                value={selectedSolAmount}
                onChange={(e) => setSelectedSolAmount(e.target.value)}
                placeholder="sol amount"
                className="uppercase text-[#B7B70A] text-[16px] font-advent-bold bg-transparent border-none outline-none pl-[2.5rem] w-full"
                style={{ paddingLeft: "calc(10% + 2rem)" }}
              />
            </div>
          </div>
          <div className=" w-[100%]  flex items-center justify-between mt-[30px]">
            <div
              onClick={() => setSelectedSolAmount(1)}
              className={` cursor-pointer ${
                selectedSolAmount === 1
                  ? "bg-[#ffff00] text-[#000000]"
                  : "bg-none text-[#ffff00]"
              } p-[2px]  flex items-center justify-center  w-[22%] border border-[#F01E31] rounded-tr-[8px] rounded-bl-[4px] font-advent-bold  text-[16px] `}
            >
              <img src={SolanaIcon} className=" gray-image" /> 1
            </div>
            <div
              onClick={() => setSelectedSolAmount(5)}
              className={` cursor-pointer ${
                selectedSolAmount === 5
                  ? "bg-[#ffff00] text-[#000000]"
                  : "bg-none text-[#ffff00]"
              } p-[2px] flex items-center justify-center  w-[22%] border border-[#F01E31] rounded-tr-[8px] rounded-bl-[4px] font-advent-bold  text-[16px] `}
            >
              <img src={SolanaIcon} className=" gray-image" /> 5
            </div>
            <div
              onClick={() => setSelectedSolAmount(10)}
              className={` cursor-pointer ${
                selectedSolAmount === 10
                  ? "bg-[#ffff00] text-[#000000]"
                  : "bg-none text-[#ffff00]"
              } p-[2px] flex items-center justify-center  w-[22%] border border-[#F01E31] rounded-tr-[8px] rounded-bl-[4px] font-advent-bold  text-[16px] `}
            >
              <img src={SolanaIcon} className=" gray-image" /> 10
            </div>
            <div
              onClick={() => setSelectedSolAmount(20)}
              className={` cursor-pointer ${
                selectedSolAmount === 20
                  ? "bg-[#ffff00] text-[#000000]"
                  : "bg-none text-[#ffff00]"
              } p-[2px] flex items-center justify-center  w-[22%] border border-[#F01E31] rounded-tr-[8px] rounded-bl-[4px] font-advent-bold  text-[16px] `}
            >
              <img src={SolanaIcon} className=" gray-image" /> 20
            </div>
          </div>
          <div className=" mt-[30px] w-[100%]  bg-[#FFFF00] text-[#3D3D3D] uppercase text-[20px] text-center font-advent-bold rounded-tl-[8px] rounded-br-[8px] p-[10px]">
            connect wallet
          </div>

          <div className="  mt-[30px] border border-white rounded-[16px] p-[10px]">
            <div className=" w-[90%] sm:w-[80%] mx-auto flex justify-between  uppercase text-white  text-[15px] font-advent-bold">
              <div className=" flex items-center ">
                <p className=" font-advent-regular">Minimum </p>
                <img src={SolanaIcon} />{" "}
                <p className=" text-[#ffff00]">1 Sol</p>
              </div>
              <div className=" flex items-center ">
                <p className=" font-advent-regular">maximum </p>
                <img src={SolanaIcon} />{" "}
                <p className=" text-[#ffff00]">20 Sol</p>
              </div>
            </div>
            <div className=" flex justify-center mt-[10px]">
              <div className=" flex items-center ">
                <p className=" font-advent-regular">your amount </p>
                <img src={SolanaIcon} />{" "}
                <p className=" text-[#ffff00]">{selectedSolAmount} Sol</p>
              </div>
            </div>
          </div>

          <div className=" mt-[30px]">
            <div className=" flex gap-[10px] items-center text-white uppercase font-advent-semibold text-[18px]">
              <div className=" w-[60px] ">
                <PresaleDiamonIcon />
              </div>
              <p>
                Diamond hands only! prefer people with a{" "}
                <span className=" text-[#F01E31]">long- term vision</span>
              </p>
            </div>
            <div className=" mt-[10px] flex gap-[10px] items-center text-white uppercase font-advent-semibold text-[18px]">
              <div className=" w-[50px] ">
                <PresaleDiamonIcon />
              </div>
              <p>instant token unlock at tge - straight to your wallet</p>
            </div>
          </div>
          <img src={BackdropImage} className=" w-full mt-[10px]" />
          <img src={RaiseInfoImage} className=" mx-auto" />
        </div>
        <div className=" mt-[-100px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Presale;
