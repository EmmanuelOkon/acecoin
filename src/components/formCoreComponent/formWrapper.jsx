import React from "react";

const Wrapper = (props) => {
  return (
    <div className="bg-windowsImgLg lg:bg-windowsImgXl lg:bg-left bg-no-repeat p-4 sm:p-8 absolute top-0 left-0 right-0 bottom-0 flex items-center md:h-full h-screen overflow-auto">
      <div className="w-full max-w-6xl m-auto p-6 bg-mainBackground h-fit relative ">
        {props.children}
      </div>
    </div>
  );
};

export default Wrapper;
