import React from 'react'

type Props = {
    name: String;
  };
  const cardItem =[
    {
        img: "https://i.ibb.co/YpJ6Qsm/13.png",
        name:"GREEN MUSCLE FIT POLO SHIRT",
        price: "$99.10",
        brand: "IGURE",
        delPrice: "$229.00"
    },
    {
        img: "https://i.ibb.co/Fhhc3ry/11.png",
        name:"GREEN MUSCLE FIT POLO SHIRT",
        price: "$99.10",
        brand: "IGURE",
        delPrice: "$229.00"
    },
    {
        img: "https://i.ibb.co/vmBLCGP/10.png",
        name:"GREEN MUSCLE FIT POLO SHIRT",
        price: "$99.10",
        brand: "IGURE",
        delPrice: "$229.00"
    },
    {
        img: "https://i.ibb.co/Trn2PGD/12.png",
        name:"GREEN MUSCLE FIT POLO SHIRT",
        price: "$99.10",
        brand: "IGURE",
        delPrice: "$229.00"
    },
]

const MensCardSection = ({name}: Props) => {
  return (
    <div className="max-w-[1138px] mx-auto mt-[112px]">
      <p className="text-xl text-center text-[#22262A] font-poppins font-bold">
        MEN’S FASHION
      </p>
      <p className="text-[15px] text-[#22262A] font-poppins text-center mt-4">Shop our new arrivals from established brands</p>
      <div className="flex justify-center items-center gap-[22px] mt-[65px] ">
        {cardItem.map(card => <div className=" hover:-mt-4 duration-300 cursor-pointer">
            <img className="rounded-xl" src={card?.img} alt="" />
            <p className="text-[15px] text-[#22262A] font-poppins font-light mt-[38px]">{card?.brand}</p>
            <p className="text-[15px] text-[#22262A] font-poppins font-semibold">{card?.name}</p>
            
            <div className="flex items-center gap-5">
            <p className="text-[15px] text-[#22262A] font-poppins "><del>{card?.delPrice}</del></p>

                <p className="text-[15px] text-[#CF2929] font-poppins ">{card?.price}</p>
            </div>
        </div>)}
        
      </div>
    </div>
  )
}

export default MensCardSection