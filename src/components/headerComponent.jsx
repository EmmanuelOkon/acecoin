import { Colon, Logo } from "./providerIcon";

const HeaderComponent = () => {
  return (
    <div className="flex justify-between items-center px-3">
      <div className="flex items-center gap-2">
        <span className="bg-blue rounded-full p-2 ">
          <Logo width={30} height={20} />
        </span>
        <span className="text-base sm:text-xl">
          <strong>AceCoin</strong>
          <span>Pay</span>
        </span>
      </div>
      <div className="flex items-center font-semibold">
        <div className="text-white text-[10px] md:text-base space-x-1">
          <span className="bg-deepBlue p-2 rounded">0</span>
          <span className="bg-deepBlue p-2 rounded">1</span>
        </div>
        <Colon width={20} height={20} />
        <div className="text-white space-x-1 text-[10px] md:text-base">
          <span className="bg-deepBlue p-2 rounded">1</span>
          <span className="bg-deepBlue p-2 rounded">9</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
