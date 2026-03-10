import React from "react";
import Images from "./Images";
import product from "@/assets/images/product.png";
import { FaRegHeart } from "react-icons/fa";

const Product = ({imgSrc,imgAlt,catagory,itemName,itemPrice}) => {
  return (
    <>
      <div className="w-82.5">
        <Images className={""} imgSrc={imgSrc} imgAlt={imgAlt} />
        <div className="mt-3.5">
         <div className="flex justify-between">
           <p className="texts_14_regular text-[#767676]">{catagory}</p>
           <FaRegHeart  className="text-[#767676] cursor-pointer" size={14} />
         </div>
         <p className="texts_16_regular text-head pt-0.5">{itemName}</p>
         <p className="texts_16_regular text-head">{itemPrice}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
