import React from "react";

const FormInput = ({ placeholder, placeHolderClass, type, onChange, rightIcon, leftIcon, className, required, maxLength, iconClass }) => {

    return (
        <div className="flex relative w-full">
            {leftIcon && (
                <div className="absolute left-0 ml-5 mt-[14px]">
                    {leftIcon}
                </div>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className={className ? className : `bg-[#FAFCFF] ${placeHolderClass} border-2 border-borderWhite rounded-lg focus:outline-0 focus:border-blue ring-0 focus:bg-[#EDF3FF] focus:text-deepBlue font-semibold leading-none py-5 w-full`}
                
                required={required}
                maxLength={maxLength}
                onChange={onChange}
            />
            {rightIcon && (
                <div className={`absolute right-0 mr-5 ${iconClass} cursor-pointer`}>
                    {rightIcon}
                </div>
            )}
        </div>
    );
};

export default FormInput;