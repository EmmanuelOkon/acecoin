import React from "react";
import { EditIcon, GridIcon, VerifiedIcon } from "./providerIcon";
import { MasterCard } from "./cardWrapper/ProviderIcons";
import FormInput from "./formCoreComponent/formInput";
import "react-datepicker/dist/react-datepicker.css";

const FormComponent = () => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const maxLength = e.target.maxLength;

    if (inputValue.length > maxLength) {
      e.target.value = inputValue.slice(0, maxLength);
    }
  };
  return (
    <div className="p-4">
      <div className="my-8 flex justify-between items-center">
        <div className="flex flex-col space-y-2">
          <p className="font-bold text-deepBlue">Card Number</p>
          <span className="text-textGrey text-sm">
            Enter 16-digit card number on the card
          </span>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <EditIcon width={20} height={20} />
          <span className="text-blue font-semibold">Edit</span>
        </div>
      </div>
      <div className="">
        <form>
          <div className="w-full space-y-8">
            <div className="flex relative">
              <FormInput
                type="text"
                value={""}
                iconClass="mt-[14px]"
                placeholder="3456  -  5643  -  5643  -  2424"
                required
                className="bg-mainBackground border-2 border-borderWhite rounded-lg focus:outline-0 focus:border-blue focus:bg-lightBlue focus:text-deepBlue font-semibold leading-none py-5 w-full pl-16"
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const sanitizedValue = inputValue.replace(/[^0-9]/g, "");
                  const formattedValue = sanitizedValue.replace(
                    /(\d{4})(?=\d)/g,
                    "$1 - "
                  );
                  const limitedValue = formattedValue.slice(0, 25);
                  e.target.value = limitedValue;
                  const finalValue = limitedValue.replace(/-/g, "");
                  e.target.value = finalValue;
                }}
                rightIcon={<VerifiedIcon width={33} height={33} />}
                leftIcon={<MasterCard width={33} height={33} />}
              />
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center">
              <div className="w-full">
                <p className="font-bold text-deepBlue">CVV Number</p>
                <span className="text-sm text-textGrey">
                  Enter the 3 or 4 digit number on your card
                </span>
              </div>
              <FormInput
                type="password"
                placeHolderClass="placeholder:text-center text-center"
                value={""}
                placeholder="3  2  7"
                required
                maxLength={4}
                onChange={(e) => e.target.value}
                rightIcon={<GridIcon width={24} height={24} />}
                iconClass="mt-5"
              />
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center">
              <div className="w-full">
                <p className="font-bold text-deepBlue">Expiry Date</p>
                <span className="text-sm text-textGrey">
                  Enter the expiration date of the card
                </span>
              </div>
              <div className="flex items-center justify-center w-full gap-3">
                <FormInput
                  type="number"
                  value={""}
                  placeholder="M  M"
                  placeHolderClass="placeholder:text-center text-center"
                  required
                  maxLength={2}
                  onChange={handleInputChange}
                />
                <span className="text-3xl">/</span>
                <FormInput
                  type="number"
                  value={""}
                  placeholder="Y  Y  Y  Y"
                  maxLength={4}
                  placeHolderClass="placeholder:text-center text-center"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between items-center">
              <div className="w-full">
                <p className="font-bold text-deepBlue">Password</p>
                <span className="text-sm text-textGrey">
                  Enter your dynamic password
                </span>
              </div>

              <div className="w-full">
                <FormInput
                  type="password"
                  value={""}
                  placeHolderClass="pl-5 placeholder:text-2xl placeholder:text-deepBlue placeholder:font-bold"
                  placeholder="*  *  *  *  *  *"
                  required
                  maxLength={12}
                  onChange={(e) => e.target.value}
                  rightIcon={<GridIcon width={24} height={24} />}
                  iconClass="mt-5"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <button
              type="submit"
              className="w-full bg-blue hover:bg-royalBlue py-5 rounded-lg text-white"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
