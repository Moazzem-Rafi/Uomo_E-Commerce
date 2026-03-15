import React from "react";
import Container from "@/component/common/Container";
import about from '../assets/images/about/about.png'
import about2 from '../assets/images/about/about2.png'
import delivery from '../assets/images/about/delivery.png'
import mango from '../assets/images/about/mango.png'

const About = () => {
  return (
    <>
      <section>
        <Container>
          <div className="mt-[90px] mb-[77px]">
            {/* Page Title */}
            <div className=" ml-[242px] mb-8 ">
              <h1 className="head_35_bold ">
                ABOUT UOMO
              </h1>
            </div>

            {/* Hero Image */}
            <div className="w-full  bg-[#d0d0d0] flex items-center justify-center overflow-hidden">
              <img
                src={about}
                alt="About hero"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main Content */}
            <div className="max-w-[929px] mx-auto ">
              {/* Our Story */}
              <div className="mt-[50px] mb-[29px]">
                <h2 className="head_26_medium mb-[15px]">
                  OUR STORY
                </h2>
                <p className="texts_16_medium leading-7.5 mb-[20px] tracking-[0%] ">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="texts_14_regular mb-[33px]">
                  Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.
                </p>

                {/* Mission & Vision */}
                <div className="grid grid-cols-2 gap-[40px] my-[30px]  mb-[29 px]">
                  <div>
                    <h3 className="texts_16_medium leading-[100%] mb-4">
                      Our Mission
                    </h3>
                    <p className="texts_14_regular">
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </p>
                  </div>
                  <div>
                    <h3 className="texts_16_medium leading-[100%] mb-4">
                      Our Vision
                    </h3>
                    <p className="texts_14_regular">
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mid Section - Image + Company Text */}
            <div className="w-[1170px] mx-auto ">
              <div className="grid grid-cols-2 gap-[45px] items-center  mb-25">
                {/* Mid Image */}
                <div className="w-full  bg-[#d0d0d0] flex items-center justify-center overflow-hidden relative">
                  <img
                    src={about2}
                    alt="Fashion"
                    className="w-full h-full object-cover"
                  />
                  {/* Decorative triangle */}
                  <div className="absolute top-[60px] left-[calc(50%-100px)] w-0 h-0 border-l-[100px] border-r-[100px] border-b-[170px] border-l-transparent border-r-transparent border-b-[rgba(180,180,180,0.7)]" />
                  {/* Decorative circle */}
                  <div className="absolute w-[160px] h-[160px] rounded-full bg-[rgba(160,160,160,0.6)] top-[90px] left-[calc(50%-50px)]" />
                </div>

                {/* Company Text */}
                <div>
                  <h3 className="text-[16px] font-mrdium tracking-[0%] text-[#767676] mb-[16px]">
                    THE COMPANY
                  </h3>
                  <p className="texts_14_regular mb-[40px] leading-7.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor lectus ornare quis mi vel.
                  </p>
                  <p className="texts_14_regular  leading-7.5">
                    Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem gravida lacus, justo placerat.
                  </p>

                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-[144px]  justify-between items-center  mb-25 ">

                {/* Fast and Free Delivery */}
                <div className="flex items-start gap-[18px] w-[301px] ">
                  <div className="w-[45px] h-[45px] shrink-0 flex items-center justify-center">
                    <img src={delivery} alt="" />
                    
                  </div>
                  <div className="w-[238px]">
                    <p className="text-[16px] text-[#141F46] font-medium tracking-[0%] block mb-[4px]">
                      FAST AND FREE DELIVERY
                    </p>
                    <span className="text-[15px] text-[#767676] font-normal tracking-[0%] ">Free delivery for all orders over $140</span>
                  </div>
                </div>
                <div className="flex items-start gap-[18px] w-[301px] ">
                  <div className="w-[45px] h-[45px] shrink-0 flex items-center justify-center">
                    <img src={delivery} alt="" />
                    
                  </div>
                  <div className="w-[238px]">
                    <p className="text-[16px] text-[#141F46] font-medium tracking-[0%] block mb-[4px]">
                      FAST AND FREE DELIVERY
                    </p>
                    <span className="text-[15px] text-[#767676] font-normal tracking-[0%] ">Free delivery for all orders over $140</span>
                  </div>
                </div>
                <div className="flex items-start gap-[18px] w-[301px] ">
                  <div className="w-[45px] h-[45px] shrink-0 flex items-center justify-center">
                    <img src={delivery} alt="" />
                    
                  </div>
                  <div className="w-[238px]">
                    <p className="text-[16px] text-[#141F46] font-medium tracking-[0%] block mb-[4px]">
                      FAST AND FREE DELIVERY
                    </p>
                    <span className="text-[15px] text-[#767676] font-normal tracking-[0%] ">Free delivery for all orders over $140</span>
                  </div>
                </div>
                
                

               

              </div>





            </div>
            {/* Brand Logos */}
            <div className=" flex items-center gap-[108px] justify-between">
             <img src={mango} alt="" />
             <img src={mango} alt="" />
             <img src={mango} alt="" />
             <img src={mango} alt="" />
             <img src={mango} alt="" />
             <img src={mango} alt="" />
             <img src={mango} alt="" />
            </div>

          </div>
        </Container>
      </section>
    </>
  );
};

export default About;