import Banner from "@/component/layouts/home/Banner";
import Collection from "@/component/layouts/home/Collection";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Banner />
      <Collection/>
      {/**
       * name : shoumen 
       * message : home Component ar all component import hobe
      */}
    </>
  );
};

export default Home;
