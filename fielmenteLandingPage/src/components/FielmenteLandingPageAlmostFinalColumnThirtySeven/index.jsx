import React from "react";

import { Button, Img, List } from "components";

const FielmenteLandingPageAlmostFinalColumnThirtySeven = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-[1529px] py-10 w-full">
          <div className="flex md:flex-col flex-row gap-[50px] items-center justify-center max-w-[1500px] w-full">
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
                alt="arrowleft_Two"
              />
            </Button>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[49px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[52%] md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-300_02 border-solid flex flex-col h-[143px] md:h-auto items-center justify-center px-2.5 rounded-[15px] w-[227px]">
                <Img
                  className="h-[103px] md:h-auto object-cover rounded-md w-[201px] sm:w-full"
                  src="images/img_rectangle39_103x201.png"
                  alt="rectangleThirtyNine"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300_02 border-solid flex flex-col h-[143px] md:h-auto items-center justify-center px-2.5 rounded-[15px] w-[227px]">
                <Img
                  className="h-[103px] md:h-auto object-cover rounded-md w-[201px] sm:w-full"
                  src="images/img_rectangle39_1.png"
                  alt="rectangleThirtyNine"
                />
              </div>
              <div className="bg-white-A700 border border-gray-300_02 border-solid flex flex-col h-[143px] md:h-auto items-center justify-center px-2.5 rounded-[15px] w-[227px]">
                <Img
                  className="h-[103px] md:h-auto object-cover rounded-md w-[201px] sm:w-full"
                  src="images/img_rectangle39_2.png"
                  alt="rectangleThirtyNine"
                />
              </div>
            </List>
            <div className="bg-white-A700 border border-gray-300_02 border-solid flex flex-col h-[143px] md:h-auto items-center justify-center px-2.5 rounded-[15px] w-[227px]">
              <Img
                className="h-[84px] md:h-auto object-cover rounded-[5px] w-[165px] sm:w-full"
                src="images/img_rectangle39_84x165.png"
                alt="rectangleThirtyNine_Five"
              />
            </div>
            <div className="bg-white-A700 border border-gray-300_02 border-solid flex flex-col h-[143px] md:h-auto items-center justify-center px-2.5 rounded-[15px] w-[227px]">
              <Img
                className="h-[91px] md:h-auto object-cover rounded-md w-[177px] sm:w-full"
                src="images/img_rectangle39_91x177.png"
                alt="rectangleThirtyNine_Six"
              />
            </div>
            <Button
              className="flex h-8 items-center justify-center rotate-[180deg] w-8"
              shape="circle"
              color="gray_900_01"
              size="sm"
              variant="fill"
            >
              <Img
                className="h-[19px]"
                src="images/img_info.svg"
                alt="info_One"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnThirtySeven.defaultProps = {};

export default FielmenteLandingPageAlmostFinalColumnThirtySeven;
