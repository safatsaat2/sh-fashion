
export const Banner = () => {
  return (
    <div className="h-screen bgImg">
        <div className="max-w-[1133px] mx-auto relative">
        <div className="absolute right-0 mt-[426px] ">
            <p className="text-[18px] text-[#22262A] font-medium">NEW TREND</p>
            <h1 className="text-[80px] text-[#22262A] font-bold -mt-2">COLLUSION</h1>
            <p className="text-[18px] text-[#22262A] font-medium">An exclusive selection of this season's trends.</p>
            <div className="flex items-center gap-x-[34px] mt-[27px]">
                <button className="text-[18px] font-medium px-[28px] py-1 bg-[#22262A] text-white">DISCOVER</button>
                <button className="text-[18px] font-medium px-[28px] py-1 bg-[#22262A] text-white">SHOP NOW</button>
            </div>
        </div>
        </div>
        
    </div>
  )
}
