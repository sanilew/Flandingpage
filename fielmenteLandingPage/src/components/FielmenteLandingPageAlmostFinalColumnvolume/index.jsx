import React from "react";

import { Button, Img, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnvolume = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[300px] items-center justify-center max-w-[1530px] py-5 w-full">
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
            <Img
              className="h-[88px] w-24"
              src="images/img_volume.svg"
              alt="volume"
            />
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 w-auto"
                size="txtGeneralSansSemibold32Gray90001"
              >
                {props?.linktreeaccountOne}
              </Text>
              <Text
                className="max-w-[381px] md:max-w-full text-black-900 text-lg"
                size="txtGeneralSansRegular18"
              >
                {props?.onetapinonego}
              </Text>
            </div>
          </div>
          <div className="h-[412px] md:pr-10 sm:pr-5 pr-[47px] relative w-[32%] md:w-full">
            <Img
              className="absolute h-[412px] inset-[0] justify-center m-auto object-cover w-[64%]"
              src="images/img_spacegray2.png"
              alt="spacegrayTwo"
            />
            <div className="absolute bg-green-A700 flex flex-col h-[127px] md:h-auto items-center justify-center left-[0] p-[33.98px] sm:px-5 rounded-[63px] top-[16%] w-auto">
              <Img
                className="h-[52px] w-[62px]"
                src="images/img_group63.svg"
                alt="groupSixtyThree"
              />
            </div>
            <div className="absolute bg-blue-A400 flex flex-col h-[74px] items-center justify-end p-5 right-[11%] rotate-[-14deg] rounded-[50%] top-[26%] w-[74px]">
              <Img
                className="h-[33px]"
                src="images/img_airplane_white_a700.svg"
                alt="airplane_One"
              />
            </div>
            <Img
              className="absolute bottom-[12%] h-[79px] left-[7%] object-cover w-[79px]"
              src="images/img_socialmediainstagram_white_a700.png"
              alt="socialmediainst_One"
            />
            <Button
              className="absolute bottom-[21%] flex h-[68px] items-center justify-center right-[10%] rotate-[-22deg] rounded-[28px] w-[68px]"
              color="light_blue_A200"
              size="xl"
              variant="fill"
            >
              <Img
                src="images/img_twitter_white_a700_68x68.svg"
                alt="twitter_Six"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnvolume.defaultProps = {
  linktreeaccountOne: "Linktree Account Setup",
  onetapinonego:
    "One Tap in One Go, Share numerous links at once on social media with the help of Linktree.",
};

export default FielmenteLandingPageAlmostFinalColumnvolume;
