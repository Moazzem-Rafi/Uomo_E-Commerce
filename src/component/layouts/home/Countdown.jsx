import Button from "@/component/common/Button";
import Container from "@/component/common/Container";
import React from "react";
import { Link } from "react-router-dom";
import ReactCountdown, { zeroPad } from "react-countdown";

const Countdown = () => {
  return (
    <>
      <section className="mt-25">
        <div className="bg-[url('./assets/images/countdownBg.png')] pt-52.25 pb-9 mx-15 bg-no-repeat bg-cover bg-center">
          <Container>
            <div className="mb-30">
              <div className="flex items-center gap-3.25">
                <div className="w-10 h-0.5 bg-second-red"></div>
                <p className="texts_14_medium text-second-red">
                  DEAL OF THE WEEK
                </p>
              </div>
              <h2 className="head_70_regular text-head pt-[9px] pb-[11px]">
                <span className="head_70_bold text-head">Spring</span>{" "}
                Collection
              </h2>
              <Link to={"/shop"}>
                <Button className={"hover:after:w-12.5"} btnText={"SHOP NOW"} />
              </Link>
            </div>

            {/* Countdown Part Start */}
            <ReactCountdown
              date={new Date("2027-03-30T00:00:00")}
              renderer={({ days, hours, minutes, seconds }) => (
                <div className="flex gap-5">
                  <div>
                    <p className="font-jost font-normal text-[30px] text-head leading-7.5">
                      {zeroPad(days)}
                    </p>
                    <span className="font-jost font-bold text-base text-[#767676] leading-7.5">
                      DAYS
                    </span>
                  </div>
                  <div>
                    <span className="font-jost font-normal text-[30px] text-head leading-7.5">
                      :
                    </span>
                  </div>
                  <div>
                    <p className="font-jost font-normal text-[30px] text-head leading-7.5">
                      {zeroPad(hours)}
                    </p>
                    <span className="font-jost font-bold text-base text-[#767676] leading-7.5">
                      HOURS
                    </span>
                  </div>
                  <div>
                    <span className="font-jost font-normal text-[30px] text-head leading-7.5">
                      :
                    </span>
                  </div>
                  <div>
                    <p className="font-jost font-normal text-[30px] text-head leading-7.5">
                      {zeroPad(minutes)}
                    </p>
                    <span className="font-jost font-bold text-base text-[#767676] leading-7.5">
                      MINS
                    </span>
                  </div>
                  <div>
                    <span className="font-jost font-normal text-[30px] text-head leading-7.5">
                      :
                    </span>
                  </div>
                  <div>
                    <p className="font-jost font-normal text-[30px] text-head leading-7.5">
                      {zeroPad(seconds)}
                    </p>
                    <span className="font-jost font-bold text-base text-[#767676] leading-7.5">
                      SEC
                    </span>
                  </div>
                </div>
              )}
            />
            {/* Countdown Part End */}
          </Container>
        </div>
      </section>
    </>
  );
};

export default Countdown;
