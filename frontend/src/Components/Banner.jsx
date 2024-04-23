import React from "react";

function Banner() {
  return (
    <>
      <div className="bg-white min-h-[100px] rounded m-4 ">
        <div className="grid gap-4  sm:grid-cols-12 ">
          <div className="bg-black sm:min-h-[400px] min-h-[200px] rounded shadow-xl  sm:col-span-8 ">
            
          </div>
          <div className="bg-black sm:min-h-[400px] min-h-[200px] rounded shadow-xl sm:col-span-4">
            
          </div>
        </div>
      </div>
      <div className="grid gap-4 m-4 sm:grid-cols-12 ">
        <div className="bg-black min-h-[100px] rounded shadow-xl sm:col-span-6"></div>
        <div className="bg-black min-h-[100px] rounded shadow-xl sm:col-span-6"></div>
      </div>
    </>
  );
}

export default Banner;
