import React from "react";

import { Button, Img, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnrectanglefortytwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-black-900 flex md:flex-col flex-row md:gap-10 items-start justify-between md:pl-10 sm:pl-5 pl-[122px] rounded-[10px] w-4/5 md:w-full">
          <div className="flex flex-col gap-5 items-start justify-start md:mt-0 mt-[110px] w-auto sm:w-full">
            <Img
              className="h-10 w-10"
              src="images/img_airplane.svg"
              alt="airplane"
            />
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 w-full"
                size="txtGeneralSansMedium48"
              >
                {props?.usertext}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-2xl md:text-[22px] text-gray-500 sm:text-xl w-full"
                size="txtGeneralSansRegular24"
              >
                {props?.usertext2}
              </Text>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-generalsans leading-[normal] min-w-[175px] rounded-[26px] text-2xl md:text-[22px] text-center sm:text-xl"
              color="white_A700"
              size="md"
              variant="outline"
            >
              {props?.userbutton}
            </Button>
          </div>
          <Img
            className="h-[591px] md:h-auto object-cover"
            src="images/img_rectangle42.png"
            alt="rectangleFortyTwo"
          />
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnrectanglefortytwo.defaultProps = {
  usertext: (
    <>
      Make online presence
      <br />
      With more impectful <br />
      creatives.
    </>
  ),
  usertext2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  userbutton: "Buy Now",
};

export default FielmenteLandingPageAlmostFinalColumnrectanglefortytwo;
