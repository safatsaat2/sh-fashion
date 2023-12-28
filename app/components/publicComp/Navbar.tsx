export const Navbar = () => {
  const logo = "https://i.ibb.co/G2njPJX/Frame-1-1.png";
  return (
    <>
      <div className="max-w-[1128px] mx-auto">
        <div className="flex justify-between items-center">
          <img src={logo} alt="" />
          <div className="flex justify-center items-center text-[#22262A] text-[18px] gap-x-[16px]">
            <p className="cursor-pointer">HOME</p>
            <p className="cursor-pointer">SHOP</p>
            <p className="cursor-pointer">LOOKBOOK</p>
            <p className="cursor-pointer">Gallery</p>
            <p className="cursor-pointer">FEATURES</p>
            <p className="cursor-pointer">PAGES</p>
            <p className="cursor-pointer">BLOG</p>
          </div>
          <div className="flex justify-center items-center text-[#22262A] text-[18px] gap-x-[42px]">
          <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 32 32"><path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"/></svg>
          <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"/></svg>
          <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607L1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"/></svg>
          </div>
        </div>
      </div>
    </>
  );
};
