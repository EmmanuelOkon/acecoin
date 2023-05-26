import React from "react";
import Wrapper from "../components/formCoreComponent/formWrapper";
import Header from "../components/headerComponent";
import Form from "../components/formComponent";
import Card from "../components/cardWrapper/card";
import { AppleLogo } from "./Icon";
import CloseButton from "../components/closeButton";

const Index = () => {
  const items = [
    { label: "Company", value: "Apple", icon: AppleLogo },
    { label: "Order number", value: "1266201", icon: "" },
    { label: "Product", value: "MacBook Air", icon: "" },
    { label: "VAT (20%)", value: "$100.00", icon: "" },
  ];
  return (
    <Wrapper>
      <CloseButton />
      <div className="flex md:flex-row flex-col items-center justify-around md:space-x-10 space-y-10 mt-10">
        <div>
          <Header />
          <Form />
        </div>
        <Card items={items} />
      </div>
    </Wrapper>
  );
};

export default Index;
