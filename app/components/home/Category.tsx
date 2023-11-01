export const Category = () => {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-[26px] items-start justify-center max-w-[1133px] mx-auto mt-[120px]">
        <div className="row-span-1 col-span-2 relative catImg  ">
        <img  className="hover:opacity-50 bg-black" src="https://i.ibb.co/wBTMPvz/2-4.png" />
        <div className="bg-white text-[#22262A] text-xl py-1 px-6 absolute bottom-[27px] left-[30px] hidden">
            Shirt Fashion
        </div>
        </div>
        <div className="row-span-2 col-span-2 relative catImg  ">
        <img className="hover:opacity-50 bg-black" src="https://i.ibb.co/vwv7fRT/5-3.png" />
        <div className="bg-white text-[#22262A] text-xl py-1 px-6 absolute bottom-[27px] left-[30px] hidden">
            Sweater Fashion
        </div>
        </div>
        <div className="relative catImg  " >
        <img className="hover:opacity-50 bg-black" src="https://i.ibb.co/9vzbc17/3-5.png" />
        <div className="bg-white text-[#22262A] text-xl py-1 px-6 absolute bottom-[27px] left-[30px] hidden">
            Skirt Fashion
        </div>
        </div>
        <div className="relative catImg  ">
        <img  className="hover:opacity-50 bg-black" src="https://i.ibb.co/RBgKmwK/4-2.png" />
        <div className="bg-white text-[#22262A] text-xl py-1 px-6 absolute bottom-[27px] left-[30px] hidden">
            All Women
        </div>
        </div>
        
        
        
      </div>
    </>
  );
};
