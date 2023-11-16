import React from "react";

import { Img, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnThirtyFour = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-[1440px] py-10 w-full">
          <div className="bg-gray-900 flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start max-w-[1440px] rounded-[15px] w-full">
            <Img
              className="md:flex-1 h-[439px] sm:h-auto object-cover rounded-bl-[15px] rounded-tl-[15px] w-[826px] md:w-full"
              src="images/img_rectangle40.png"
              alt="rectangleForty"
            />
            <div className="flex sm:flex-1 flex-col items-start justify-center w-auto sm:w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-[73%] sm:w-full"
                  size="txtGeneralSansSemibold32WhiteA700"
                >
                  {props?.language}
                </Text>
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-full"
                  size="txtGeneralSansRegular24WhiteA700"
                >
                  {props?.description}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnThirtyFour.defaultProps = {
  language: (
    <>
      Get your Personal <br />
      Account Manager{" "}
    </>
  ),
  description:
    "Fielmente Offers you your Own Social Account Manager They make sure that you get the Support & expertise in every manner to grow your business online.",
};

export default FielmenteLandingPageAlmostFinalColumnThirtyFour;
