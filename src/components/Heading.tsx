import HeadingImage from "../assets/images/HeadingComponent.svg";
interface HeadingProps {
  heading: string;
  small: boolean;
}
const Heading: React.FC<HeadingProps> = ({ heading, small }) => {
  return (
    <div className=" relative ">
      <img src={HeadingImage} className=" hidden lg:block"/>
      <img src={HeadingImage} className=" lg:hidden  w-[300px] h-auto  ml-[-30px]"/>
      <h3
        className={`font-paladins-straight ${
          small
            ? "text-[20px]  text-[#F01E31] absolute inset-0  top-[25px] left-[50px] "
            : "text-[40px] text-[#F01E31] absolute inset-0 top-[32px] left-[120px] "
        }`}
      >
        {heading}
      </h3>
    </div>
  );
};

export default Heading;
