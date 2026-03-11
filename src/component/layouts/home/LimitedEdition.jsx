import Container from "@/component/common/Container";
import Product from "@/component/common/Product";
import React, { useRef } from "react";
import producttwo from "@/assets/images/productstwo.png";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";


const LimitedEdition = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <section className="mt-22.75">
        <Container>
          <div className="text-center">
            <h2 className="head_35_regular text-head">
              LIMITED <span className="head_35_bold text-head">EDITION</span>
            </h2>
          </div>
          <div className="mt-8.25 flex flex-row gap-7.5 relative">
            <MdKeyboardArrowRight onClick={() => swiperRef.current?.slideNext()} size={50} className="text-[#767676] absolute top-1/2 -right-12.5 -translate-y-1/2 cursor-pointer " />
            <MdKeyboardArrowLeft onClick={() => swiperRef.current?.slidePrev()} dArrowRight size={50} className="text-[#767676] absolute top-1/2 -left-12.5 -translate-y-1/2 cursor-pointer " />
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}

            >
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hub Accent Mirror"}
                  itemPrice={"29"}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hosking Blue Area Rug"}
                  itemPrice={"62"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hanneman Pouf"}
                  itemPrice={"17"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Cushion Futon Slipcover"}
                  itemPrice={"129"}
                  discountPrice={"99"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hanneman Pouf"}
                  itemPrice={"17"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hub Accent Mirror"}
                  itemPrice={"29"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Hosking Blue Area Rug"}
                  itemPrice={"62"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Product
                  imgSrc={producttwo}
                  imgAlt={producttwo}
                  catagory={"Dresses"}
                  itemName={"Cushion Futon Slipcover"}
                  itemPrice={"129"}
                  discountPrice={"99"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </Container>
      </section>
    </>
  );
};

export default LimitedEdition; /*  */
