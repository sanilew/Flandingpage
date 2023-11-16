import React from "react";

import { Button, Img, Input, List, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnmusicOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[150px] items-center justify-center max-w-[1530px] pb-[60px] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[27%] md:w-full">
            <List
              className="sm:flex-col flex-row gap-1.5 grid sm:grid-cols-1 grid-cols-2 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-row gap-[15.28px] items-center justify-start sm:ml-[0] p-[11.46px] rounded-[5px] w-auto">
                <Button
                  className="flex h-12 items-center justify-center rounded-[50%] w-12"
                  shape="circle"
                  color="blue_A400"
                  size="md"
                  variant="fill"
                >
                  <Img src="images/img_facebook.svg" alt="facebook" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[66%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-[12.23px] text-black-900"
                      size="txtGeneralSansMedium1223"
                    >
                      {props?.facebookadsclicOne}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start pt-0.5">
                    <Text
                      className="text-[18.34px] text-black-900"
                      size="txtGeneralSansMedium1834"
                    >
                      {props?.p3753}
                    </Text>
                    <Text
                      className="text-[12.23px] text-green-A700"
                      size="txtGeneralSansMedium1223GreenA700"
                    >
                      {props?.seventyeight}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-row gap-2.5 items-center justify-start sm:ml-[0] p-[11.46px] rounded-[5px] w-auto">
                <Img
                  className="h-12 md:h-auto object-cover w-12"
                  src="images/img_socialmediainstagram_white_a700_48x48.png"
                  alt="socialmediainst"
                />
                <div className="flex flex-col items-start justify-start w-[68%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-[12.23px] text-black-900"
                      size="txtGeneralSansMedium1223"
                    >
                      {props?.instagramadscliOne}
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0.5">
                    <Text
                      className="text-[18.34px] text-black-900"
                      size="txtGeneralSansMedium1834"
                    >
                      {props?.p15000}
                    </Text>
                    <Text
                      className="text-[12.23px] text-green-A700"
                      size="txtGeneralSansMedium1223GreenA700"
                    >
                      {props?.twohundredseventyeight}
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="bg-white-A700 flex flex-col gap-2.5 items-start justify-start mt-4 p-5 rounded-[10px] shadow-bs6 w-auto sm:w-full">
              <Text
                className="text-gray-500_01 text-lg w-auto"
                size="txtGeneralSansMedium18"
              >
                {props?.overview}
              </Text>
              <Input
                name="frame427318680"
                placeholder="10k+ Engagement"
                className="font-generalsans font-medium leading-[normal] md:text-[22px] p-0 placeholder:text-green-A700 sm:text-xl text-2xl text-green-A700 text-left w-full"
                wrapClassName="flex w-[74%]"
                prefix={
                  <Img
                    className="h-12 mr-5"
                    src="images/img_cursor.svg"
                    alt="cursor"
                  />
                }
              ></Input>
              <Img
                className="h-[187px] w-[362px]"
                src="images/img_.svg"
                alt="Ten"
              />
            </div>
            <div className="bg-white-A700 flex flex-row gap-[20.19px] items-center justify-center mt-[15px] p-[20.19px] sm:px-5 rounded-[10px] shadow-bs7 w-[398px] sm:w-full">
              <Img
                className="h-12 w-12"
                src="images/img_cursor.svg"
                alt="cursor_One"
              />
              <Text
                className="sm:text-[32.34px] md:text-[34.34px] text-[36.34px] text-green-A700 w-auto"
                size="txtGeneralSansMedium3634"
              >
                {props?.p50followers}
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
            <Img
              className="h-[82px] w-[90px]"
              src="images/img_music_gray_200.svg"
              alt="music_One"
            />
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
              <Text
                className="max-w-[425px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
                size="txtGeneralSansSemibold32Gray90001"
              >
                {props?.socialmediaplatOne}
              </Text>
              <Text
                className="max-w-[381px] md:max-w-full text-black-900 text-lg"
                size="txtGeneralSansRegular18"
              >
                {props?.descriptionSix}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnmusicOne.defaultProps = {
  facebookadsclicOne: "Facebook Ads Clicks",
  p3753: "3,753",
  seventyeight: "+0.78%",
  instagramadscliOne: "Instagram Ads Clicks",
  p15000: "15,000",
  twohundredseventyeight: "+2.78%",
  overview: "Overview",
  p50followers: "50+ Followers",
  socialmediaplatOne: (
    <>
      Social Media Platform Audit
      <br />& Remedial Action
    </>
  ),
  descriptionSix:
    "Tracking data added to links makes it easier to the identification of social traffic in Google Analytics, as well as the tracking of campaigns, referral traffic, and conversions from social postings.",
};

export default FielmenteLandingPageAlmostFinalColumnmusicOne;
