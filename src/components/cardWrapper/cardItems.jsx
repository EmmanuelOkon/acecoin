import React from "react";

const CardItems = ({ label, value, icon }) => {
  return (
    <li className="flex items-center justify-between">
      <span className="text-textGrey capitalize">{label}</span>
      <div className="inline-flex">
        {typeof icon !== "string" && (
          <span className=" bg-deepBlue rounded-[50%] px-2   flex items-center">
            {icon && icon()}
          </span>
        )}
        <strong className="ml-2">{value}</strong>
      </div>
    </li>
  );
};

export default CardItems;
