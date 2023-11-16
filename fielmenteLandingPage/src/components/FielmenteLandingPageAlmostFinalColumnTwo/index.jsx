import React from "react";

import { Img, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[86px] py-2.5 w-auto md:w-full">
          <div className="flex md:flex-col flex-row gap-10 items-center justify-center max-w-[1298px] w-full">
            <div className="flex flex-col items-center justify-start w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 uppercase w-auto"
                size="txtGeneralSansSemibold32Gray90001"
              >
                {props?.whatweoffer}
              </Text>
            </div>
            <Img
              className="h-px w-[956px]"
              src="images/img_frame427318704.svg"
              alt="frame427318704"
            />
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnTwo.defaultProps = {
  whatweoffer: "What we offer",
};

export default FielmenteLandingPageAlmostFinalColumnTwo;
