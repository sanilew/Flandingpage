import React from "react";

import { Button, Img, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnmusic = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[250px] items-center justify-center max-w-[1530px] py-5 w-full">
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
            <Img
              className="h-[81px] w-[70px]"
              src="images/img_music.svg"
              alt="music"
            />
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 w-auto"
                size="txtGeneralSansSemibold32Gray90001"
              >
                {props?.socialmediatext}
              </Text>
              <Text
                className="max-w-[451px] md:max-w-full text-black-900 text-lg"
                size="txtGeneralSansRegular18"
              >
                {props?.socialmediadescription}
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col items-start justify-start p-[29.56px] sm:px-5 w-auto sm:w-full">
            <div className="md:h-[335px] h-[415px] relative w-full">
              <div className="absolute bottom-[6%] md:h-[335px] h-[338px] inset-x-[0] mx-auto w-[338px]">
                <Img
                  className="absolute h-[285px] inset-[0] justify-center m-auto object-cover w-[285px]"
                  src="images/img_group61.png"
                  alt="groupSixtyOne"
                />
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto outline-[1px] outline-dashed outline-gray-400 p-[5px] rounded-[50%] w-[338px]">
                  <div className="flex flex-col justify-start mt-[91px] w-[92%] md:w-full">
                    <Img
                      className="h-[138px] md:h-auto md:ml-[0] ml-[73px] object-cover w-[138px]"
                      src="images/img_editaddplus.png"
                      alt="editaddplus"
                    />
                    <div className="flex flex-row items-start justify-between w-full">
                      <Button
                        className="flex h-[62px] items-center justify-center mb-[26px] mt-[7px] rounded-[50%] w-[62px]"
                        shape="circle"
                        color="light_blue_A200"
                        size="lg"
                        variant="fill"
                      >
                        <Img src="images/img_twitter.svg" alt="twitter" />
                      </Button>
                      <Img
                        className="h-24 md:h-auto object-cover w-24"
                        src="images/img_socialmediainstagram.png"
                        alt="socialmediainst"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-blue-A400 flex flex-col h-[108px] items-center justify-end left-[0] p-[26px] sm:px-5 rounded-[50%] top-[28%] w-[108px]">
                <Img
                  className="h-[54px]"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
              </div>
              <div className="absolute bg-gradient1  h-[29px] right-[0] rounded-[14px] top-[28%] w-[29px]"></div>
              <div className="absolute bg-gradient1  bottom-[0] h-[29px] right-[42%] rounded-[14px] w-[29px]"></div>
              <div className="absolute bg-gradient1  h-[35px] left-[27%] rotate-[14deg] rounded-[17px] top-[0] w-[35px]"></div>
              <div className="absolute bg-gradient1  bottom-1/4 h-[41px] left-[1%] rotate-[-126deg] rounded-[20px] w-[41px]"></div>
              <div className="absolute bg-green-A700 flex flex-col h-[118px] items-center justify-start p-[21px] sm:px-5 right-[8%] rounded-[50%] top-[8%] w-[118px]">
                <Img
                  className="h-[61px] my-1.5"
                  src="images/img_group62.svg"
                  alt="groupSixtyTwo"
                />
              </div>
              <Button
                className="absolute flex h-[65px] inset-y-[0] items-center justify-center my-auto right-[3%] rounded-[32px] w-[65px]"
                color="red_A700"
                size="lg"
                variant="fill"
              >
                <Img src="images/img_map.svg" alt="map" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnmusic.defaultProps = {
  socialmediatext: "Social Media Management",
  socialmediadescription:
    "Building brand value through online presence by increasing brand reach through creating captivating social media accounts and building social media strategies in the form of content calendars, digital media planning and buying in the form of google ads, and SEO to draw the attention of your target audience.",
};

export default FielmenteLandingPageAlmostFinalColumnmusic;
