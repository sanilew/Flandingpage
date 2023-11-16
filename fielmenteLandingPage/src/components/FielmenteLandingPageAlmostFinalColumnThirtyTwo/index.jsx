import React from "react";

import { Button, Img } from "components";

const FielmenteLandingPageAlmostFinalColumnThirtyTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-[1440px] py-10 w-full">
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-center max-w-[1043px] w-full">
            <Button
              className="flex h-8 items-center justify-center w-8"
              shape="circle"
              color="gray_900_01"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-[19px]"
                src="images/img_arrowleft_white_a700.svg"
                alt="arrowleft_One"
              />
            </Button>
            <div className="bg-white-A700 flex flex-col h-[97px] md:h-auto items-center justify-center px-2.5 rounded-[15px] shadow-bs9 w-auto">
              <Img
                className="h-[71px] md:h-auto object-cover rounded-md w-[139px] sm:w-full"
                src="images/img_rectangle39.png"
                alt="rectangleThirtyNine"
              />
            </div>
            <div className="bg-white-A700 flex flex-col h-24 md:h-auto items-center justify-center px-2.5 rounded-[15px] shadow-bs9 w-auto">
              <Img
                className="h-[71px] md:h-auto object-cover rounded-md w-[139px] sm:w-full"
                src="images/img_rectangle39_71x139.png"
                alt="rectangleThirtyNine_One"
              />
            </div>
            <div className="bg-white-A700 flex flex-col h-24 md:h-auto items-center justify-center px-2.5 rounded-[15px] shadow-bs9 w-auto">
              <Img
                className="h-[94px] md:h-auto object-cover rounded-md w-[140px] sm:w-full"
                src="images/img_rectangle39_94x140.png"
                alt="rectangleThirtyNine_Two"
              />
            </div>
            <div className="h-24 px-2.5 relative w-[159px]">
              <div className="absolute bg-white-A700 h-[95px] inset-[0] m-auto rounded-[15px] shadow-bs9 w-full"></div>
              <Img
                className="absolute h-24 inset-[0] justify-center m-auto object-cover rounded-md w-[139px] sm:w-full"
                src="images/img_rectangle39_96x139.png"
                alt="rectangleThirtyNine_Three"
              />
            </div>
            <div className="bg-white-A700 flex flex-col h-24 md:h-auto items-start justify-start px-2.5 rounded-[15px] shadow-bs9 w-auto">
              <Img
                className="h-24 md:h-auto object-cover rounded-md w-[140px] sm:w-full"
                src="images/img_rectangle39_96x140.png"
                alt="rectangleThirtyNine_Four"
              />
            </div>
            <Button
              className="flex h-8 items-center justify-center rotate-[180deg] w-8"
              shape="circle"
              color="gray_900_01"
              size="sm"
              variant="fill"
            >
              <Img className="h-[19px]" src="images/img_info.svg" alt="info" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnThirtyTwo.defaultProps = {};

export default FielmenteLandingPageAlmostFinalColumnThirtyTwo;
