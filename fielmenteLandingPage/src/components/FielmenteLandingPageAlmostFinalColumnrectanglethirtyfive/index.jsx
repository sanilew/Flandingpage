import React from "react";

import { Button, Img, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnrectanglethirtyfive = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[150px] items-center justify-between py-10 w-auto md:w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-[506px] sm:w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[6.00px] uppercase"
                  size="txtGeneralSansMedium24Black900"
                >
                  {props?.easyemioptionsOne}
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                    size="txtGeneralSansSemibold32"
                  >
                    {props?.language}
                  </Text>
                </div>
                <Text
                  className="max-w-[506px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                  size="txtGeneralSansRegular24Black900"
                >
                  {props?.ouruspbuildyourOne}
                </Text>
              </div>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-generalsans leading-[normal] min-w-[275px] rounded-[21px] text-base text-center"
              color="gray_900_01"
              size="md"
              variant="fill"
            >
              {props?.learnmoreabouteasyemi}
            </Button>
          </div>
          <Img
            className="h-[535px] sm:h-auto object-cover w-[510px] md:w-full"
            src="images/img_rectangle35.png"
            alt="rectangleThirtyFive"
          />
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnrectanglethirtyfive.defaultProps = {
  easyemioptionsOne: "Easy EMI OPTIONS",
  language: "Include Every Payment Method like here ",
  ouruspbuildyourOne:
    "Our USP: Build your brand with the help of convenient EMI Options because one time payment is not a compulsion",
  learnmoreabouteasyemi: "Learn More about Easy EMI",
};

export default FielmenteLandingPageAlmostFinalColumnrectanglethirtyfive;
