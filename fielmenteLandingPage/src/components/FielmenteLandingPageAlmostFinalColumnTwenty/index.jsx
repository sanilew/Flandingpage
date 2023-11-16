import React from "react";

import { Text } from "components";

const FielmenteLandingPageAlmostFinalColumnTwenty = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-2.5 items-center justify-start max-w-[1440px] w-full">
          <div className="flex flex-col items-center justify-start pt-[3px]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtGeneralSansSemibold32"
            >
              {props?.paymentmethod}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-center max-w-[1243px] pb-2.5 w-full">
            <Text
              className="text-2xl md:text-[22px] text-gray-500_02 sm:text-xl w-auto"
              size="txtGeneralSansMedium24Gray50002"
            >
              {props?.paymentdescription}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnTwenty.defaultProps = {
  paymentmethod: "Select your easy payment method",
  paymentdescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
};

export default FielmenteLandingPageAlmostFinalColumnTwenty;
