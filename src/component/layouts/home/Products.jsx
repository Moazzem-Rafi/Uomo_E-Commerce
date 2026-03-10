import Product from "@/component/common/Product";
import React from "react";
import { Link } from "react-router-dom";
import product from "@/assets/images/product.png";

const Products = () => {
  return (
    <>
      <section className="mt-23.5">
        <div className="container">
          <div className="heading text-center">
            <h2 className="head_35_regular text-head">
              OUR TRENDY{" "}
              <span className="head_35_bold text-head">PRODUCTS</span>
            </h2>
            <div className="flex justify-center items-center gap-10 mt-7.75">
              <Link>
                <p className="texts_16_medium text-[#767676] hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]">
                  ALL
                </p>
              </Link>
              <Link>
                <p className="texts_16_medium text-[#767676] hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]">
                  NEWARRIVALS
                </p>
              </Link>
              <Link>
                <p className="texts_16_medium text-[#767676] hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]">
                  BEST SELLER
                </p>
              </Link>
              <Link>
                <p className="texts_16_medium text-[#767676] hover:text-head duration-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0  after:w-0 after:h-0.5 after:bg-head after:transition-all after:duration-400 hover:after:w-[60%]">
                  TOP RATING
                </p>
              </Link>
            </div>
          </div>
          <div className="mt-5.5 grid grid-cols-4 gap-7.5">
            <Product
              imgSrc={product}
              imgAlt={product}
              catagory={"Dresses"}
              itemName={"Cropped Faux Leather Jacket"}
              itemPrice={"$29"}
            />
            <Product
              imgSrc={product}
              imgAlt={product}
              catagory={"Dresses"}
              itemName={"Cropped Faux Leather Jacket"}
              itemPrice={"$29"}
            />
            <Product
              imgSrc={product}
              imgAlt={product}
              catagory={"Dresses"}
              itemName={"Cropped Faux Leather Jacket"}
              itemPrice={"$29"}
            />
            <Product
              imgSrc={product}
              imgAlt={product}
              catagory={"Dresses"}
              itemName={"Cropped Faux Leather Jacket"}
              itemPrice={"$29"}
            />
            <Product
              imgSrc={product}
              imgAlt={product}
              catagory={"Dresses"}
              itemName={"Cropped Faux Leather Jacket"}
              itemPrice={"$29"}
            />
            <Product
              imgSrc={product}
              imgAlt={product}
              catagory={"Dresses"}
              itemName={"Cropped Faux Leather Jacket"}
              itemPrice={"$29"}
            />
            <Product
              imgSrc={product}
              imgAlt={product}
              catagory={"Dresses"}
              itemName={"Cropped Faux Leather Jacket"}
              itemPrice={"$29"}
            />
            <Product
              imgSrc={product}
              imgAlt={product}
              catagory={"Dresses"}
              itemName={"Cropped Faux Leather Jacket"}
              itemPrice={"$29"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
