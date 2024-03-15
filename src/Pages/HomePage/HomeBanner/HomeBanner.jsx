import React from "react";
import Banner from "./Banner";
import Highlight from "./Highlight";

export default function HomeBanner() {
  return (
    <div className="container">
      <div className="flex justify-between space-x-20">
        <div className="w-8/12 overflow-hidden">
          <Banner />
        </div>
        <div className="4/12">
          <Highlight />
        </div>
      </div>
    </div>
  );
}
