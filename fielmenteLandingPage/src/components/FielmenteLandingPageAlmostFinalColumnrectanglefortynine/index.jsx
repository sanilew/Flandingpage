import React from "react";

import { Button, Img, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnrectanglefortynine = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[250px] items-center justify-center max-w-[1530px] py-5 w-full">
          <div className="md:h-[415px] h-[442px] relative rotate-[5deg] w-[38%] md:w-full">
            <div className="absolute bg-white-A700 h-[415px] inset-[0] justify-center m-auto rounded-[16px] shadow-bs2 w-[94%]"></div>
            <div className="absolute border border-dashed border-gray-400 md:h-[194px] h-[442px] inset-[0] justify-center m-auto p-[13px] rounded-[16px] w-full">
              <div className="absolute bg-gray-900 flex flex-row gap-[145px] items-end justify-start left-[3%] p-[15px] rounded-tl-[12px] rounded-tr-[12px] top-[3%] w-[90%]">
                <Img
                  className="h-2.5 mb-1 ml-1.5 mt-[41px]"
                  src="images/img_signal.svg"
                  alt="signal"
                />
                <Text
                  className="mb-1.5 sm:text-[21.86px] md:text-[23.86px] text-[25.86px] text-white-A700"
                  size="txtGreatVibesRegular2586"
                >
                  {props?.octobercounter}
                </Text>
              </div>
              <div className="absolute flex flex-row gap-2.5 items-start justify-center left-[7%] top-[24%] w-[33%]">
                <Button
                  className="!text-gray-400_01 cursor-pointer font-generalsans font-semibold h-[88px] leading-[normal] mt-[7px] rounded-lg text-5xl sm:text-[38px] md:text-[44px] text-center w-[88px]"
                  color="gray_200_01"
                  size="md"
                  variant="fill"
                >
                  {props?.one}
                </Button>
                <Button
                  className="!text-gray-400_01 cursor-pointer font-generalsans font-semibold h-[88px] leading-[normal] mb-[7px] rounded-lg text-5xl sm:text-[38px] md:text-[44px] text-center w-[88px]"
                  color="gray_200_01"
                  size="md"
                  variant="fill"
                >
                  {props?.two}
                </Button>
              </div>
              <div className="absolute bottom-[10%] flex flex-col gap-2.5 justify-start left-[9%] w-[17%]">
                <div className="border border-gray-400_02 border-solid flex flex-col h-[88px] items-center justify-start mr-[7px] p-2 rounded-lg w-[88px]">
                  <div className="flex flex-col justify-start mb-1.5 w-[95%] md:w-full">
                    <div className="flex flex-row items-start justify-evenly w-full">
                      <Button
                        className="flex h-[34px] items-center justify-center mt-0.5 rounded-[50%] w-[34px]"
                        shape="circle"
                        color="blue_A400"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          src="images/img_facebook_white_a700.svg"
                          alt="facebook_One"
                        />
                      </Button>
                      <Button
                        className="flex h-[29px] items-center justify-center mb-[7px] rounded-[14px] w-[29px]"
                        color="light_blue_A200"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          src="images/img_twitter_white_a700.svg"
                          alt="twitter_One"
                        />
                      </Button>
                    </div>
                    <Button
                      className="flex h-[23px] items-center justify-center ml-1.5 md:ml-[0] mr-[38px] mt-[3px] w-[23px]"
                      shape="round"
                      color="red_A700"
                      size="xs"
                      variant="fill"
                    >
                      <Img src="images/img_location.svg" alt="location" />
                    </Button>
                  </div>
                </div>
                <Button
                  className="!text-gray-400_01 cursor-pointer font-generalsans font-semibold h-[88px] leading-[normal] md:ml-[0] ml-[7px] rounded-lg text-5xl sm:text-[38px] md:text-[44px] text-center w-[88px]"
                  color="gray_200_01"
                  size="md"
                  variant="fill"
                >
                  {props?.six}
                </Button>
              </div>
              <div className="absolute bottom-[33%] flex flex-row gap-2.5 items-start justify-center left-[26%] w-[33%]">
                <div className="border border-gray-400_02 border-solid flex flex-col h-[88px] items-end justify-start mt-[7px] p-2 rounded-lg w-[88px]">
                  <div className="flex flex-col items-end justify-start my-0.5 w-[91%] md:w-full">
                    <Button
                      className="flex h-[29px] items-center justify-center mr-[3px] rounded-[14px] w-[29px]"
                      color="light_blue_A200"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        src="images/img_twitter_white_a700.svg"
                        alt="twitter_Two"
                      />
                    </Button>
                    <div className="flex flex-row gap-1.5 items-end justify-between mt-0.5 w-full">
                      <Button
                        className="flex h-[23px] items-center justify-center mb-[3px] mt-2 w-[23px]"
                        shape="round"
                        color="red_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img src="images/img_location.svg" alt="location_One" />
                      </Button>
                      <Button
                        className="flex h-[35px] items-center justify-center rounded-[17px] w-[35px]"
                        size="sm"
                        variant="gradient"
                        color="amber_200_indigo_A200"
                      >
                        <Img
                          className="h-[17px]"
                          src="images/img_camera.svg"
                          alt="camera"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Button
                  className="!text-gray-400_01 cursor-pointer font-generalsans font-semibold h-[88px] leading-[normal] mb-[7px] rounded-lg text-5xl sm:text-[38px] md:text-[44px] text-center w-[88px]"
                  color="gray_200_01"
                  size="md"
                  variant="fill"
                >
                  {props?.five}
                </Button>
              </div>
              <div className="absolute bottom-[11%] flex flex-row gap-2.5 items-start justify-center left-[27%] w-[33%]">
                <Button
                  className="!text-gray-400_01 cursor-pointer font-generalsans font-semibold h-[88px] leading-[normal] mt-[7px] rounded-lg text-5xl sm:text-[38px] md:text-[44px] text-center w-[88px]"
                  color="gray_200_01"
                  size="md"
                  variant="fill"
                >
                  {props?.seven}
                </Button>
                <div className="border border-gray-400_02 border-solid flex flex-col h-[88px] items-center justify-start mb-[7px] p-[7px] rounded-lg w-[88px]">
                  <div className="flex flex-row items-start justify-start mt-[7px] w-[96%] md:w-full">
                    <div className="flex flex-col items-end justify-start mt-0.5 w-[48%]">
                      <Button
                        className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
                        shape="circle"
                        color="blue_A400"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          src="images/img_facebook_white_a700.svg"
                          alt="facebook_Two"
                        />
                      </Button>
                      <Button
                        className="flex h-[23px] items-center justify-center mr-[3px] mt-[3px] w-[23px]"
                        shape="round"
                        color="red_A700"
                        size="xs"
                        variant="fill"
                      >
                        <Img src="images/img_location.svg" alt="location_Two" />
                      </Button>
                    </div>
                    <div className="h-[62px] relative w-1/2">
                      <Button
                        className="flex h-[35px] items-center justify-center mb-[undefinedpx] mt-auto mx-auto rounded-[17px] w-[35px] z-[1]"
                        size="sm"
                        variant="gradient"
                        color="amber_200_indigo_A200"
                      >
                        <Img
                          className="h-[17px]"
                          src="images/img_camera.svg"
                          alt="camera_One"
                        />
                      </Button>
                      <Button
                        className="flex h-[29px] items-center justify-center mb-[-2.26px] mx-auto rounded-[14px] w-[29px] z-[1]"
                        color="light_blue_A200"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          src="images/img_twitter_white_a700.svg"
                          alt="twitter_Three"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute border border-gray-400_02 border-solid flex flex-col h-[88px] inset-x-[0] items-center justify-start mx-auto p-2 rounded-lg top-[22%] w-[88px]">
                <div className="flex flex-row items-center justify-start w-[99%] md:w-full">
                  <div className="flex flex-col items-end justify-start w-[48%]">
                    <Button
                      className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
                      shape="circle"
                      color="blue_A400"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        src="images/img_facebook_white_a700.svg"
                        alt="facebook_Three"
                      />
                    </Button>
                    <Button
                      className="flex h-[23px] items-center justify-center mr-[3px] mt-[3px] w-[23px]"
                      shape="round"
                      color="red_A700"
                      size="xs"
                      variant="fill"
                    >
                      <Img src="images/img_location.svg" alt="location_Three" />
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-1/2">
                    <Button
                      className="flex h-[29px] items-center justify-center rounded-[14px] w-[29px]"
                      color="light_blue_A200"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        src="images/img_twitter_white_a700.svg"
                        alt="twitter_Four"
                      />
                    </Button>
                    <Button
                      className="flex h-[35px] items-center justify-center mt-0.5 rounded-[17px] w-[35px]"
                      size="sm"
                      variant="gradient"
                      color="amber_200_indigo_A200"
                    >
                      <Img
                        className="h-[17px]"
                        src="images/img_camera.svg"
                        alt="camera_Two"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <Button
                className="!text-gray-400_01 absolute cursor-pointer font-generalsans font-semibold h-[88px] leading-[normal] right-[26%] rounded-lg text-5xl sm:text-[38px] md:text-[44px] text-center top-[20%] w-[88px]"
                color="gray_200_01"
                size="md"
                variant="fill"
              >
                {props?.three}
              </Button>
              <div className="absolute bottom-[15%] flex flex-col h-[194px] justify-start right-[6%] w-[194px]">
                <div className="flex flex-row gap-2.5 items-start justify-start mr-[7px] w-[96%] md:w-full">
                  <div className="border border-gray-400_02 border-solid flex flex-col h-[88px] items-center justify-start mt-[7px] p-2 rounded-lg w-[88px]">
                    <div className="flex flex-row items-end justify-start my-0.5 w-[99%] md:w-full">
                      <div className="flex flex-col items-center justify-start mb-[3px] w-[48%]">
                        <Button
                          className="flex h-[34px] items-center justify-center rounded-[50%] w-[34px]"
                          shape="circle"
                          color="blue_A400"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            src="images/img_facebook_white_a700.svg"
                            alt="facebook_Four"
                          />
                        </Button>
                        <Button
                          className="flex h-[23px] items-center justify-center mt-[3px] w-[23px]"
                          shape="round"
                          color="red_A700"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            src="images/img_location.svg"
                            alt="location_Four"
                          />
                        </Button>
                      </div>
                      <Button
                        className="flex h-[35px] items-center justify-center mt-[29px] rounded-[17px] w-[35px]"
                        size="sm"
                        variant="gradient"
                        color="amber_200_indigo_A200"
                      >
                        <Img
                          className="h-[17px]"
                          src="images/img_camera.svg"
                          alt="camera_Three"
                        />
                      </Button>
                    </div>
                  </div>
                  <div className="border border-gray-400_02 border-solid flex flex-col h-[88px] items-center justify-start mb-[7px] p-[7px] rounded-lg w-[88px]">
                    <div className="flex flex-row items-start justify-start mb-1 w-[96%] md:w-full">
                      <Button
                        className="flex h-[34px] items-center justify-center mb-[30px] mt-0.5 rounded-[50%] w-[34px]"
                        shape="circle"
                        color="blue_A400"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          src="images/img_facebook_white_a700.svg"
                          alt="facebook_Five"
                        />
                      </Button>
                      <div className="flex flex-col items-center justify-start w-1/2">
                        <Button
                          className="flex h-[29px] items-center justify-center rounded-[14px] w-[29px]"
                          color="light_blue_A200"
                          size="sm"
                          variant="fill"
                        >
                          <Img
                            src="images/img_twitter_white_a700.svg"
                            alt="twitter_Five"
                          />
                        </Button>
                        <Button
                          className="flex h-[35px] items-center justify-center mt-0.5 rounded-[17px] w-[35px]"
                          size="sm"
                          variant="gradient"
                          color="amber_200_indigo_A200"
                        >
                          <Img
                            className="h-[17px]"
                            src="images/img_camera.svg"
                            alt="camera_Four"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2.5 items-start justify-between md:ml-[0] ml-[7px] mt-0.5 w-[96%] md:w-full">
                  <Button
                    className="!text-gray-400_01 cursor-pointer font-generalsans font-semibold h-[88px] leading-[normal] mt-[7px] rounded-lg text-5xl sm:text-[38px] md:text-[44px] text-center w-[88px]"
                    color="gray_200_01"
                    size="md"
                    variant="fill"
                  >
                    {props?.eight}
                  </Button>
                  <Button
                    className="!text-gray-400_01 cursor-pointer font-generalsans font-semibold h-[88px] leading-[normal] mb-[7px] rounded-lg text-5xl sm:text-[38px] md:text-[44px] text-center w-[88px]"
                    color="gray_200_01"
                    size="md"
                    variant="fill"
                  >
                    {props?.nine}
                  </Button>
                </div>
              </div>
              <Button
                className="!text-gray-400_01 absolute cursor-pointer font-generalsans font-semibold h-[88px] leading-[normal] right-[9%] rounded-lg text-5xl sm:text-[38px] md:text-[44px] text-center top-[19%] w-[88px]"
                color="gray_200_01"
                size="md"
                variant="fill"
              >
                {props?.four}
              </Button>
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
            <Img
              className="h-[78px] w-[85px]"
              src="images/img_question.svg"
              alt="question"
            />
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01 w-auto"
                size="txtGeneralSansSemibold32Gray90001"
              >
                {props?.socialmediacaleOne}
              </Text>
              <Text
                className="max-w-[422px] md:max-w-full text-black-900 text-lg"
                size="txtGeneralSansRegular18"
              >
                {props?.descriptionOne}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnrectanglefortynine.defaultProps = {
  octobercounter: "October 2022",
  one: "1",
  two: "2",
  six: "6",
  five: "5",
  seven: "7",
  three: "3",
  eight: "8",
  nine: "9",
  four: "4",
  socialmediacaleOne: "Social-Media Calender",
  descriptionOne: (
    <>
      Good writing doesn&#39;t just appear out of thin air. We have the
      necessary powerful combination of unrestrained voice and social
      engineering.
      <br />
      Creation of Digital Content for Brand Awareness (Static, Audio, Dynamic,
      Video)
      <br />
      Preparation of monthly content calenders along with proper schedules for
      posting with timelines
    </>
  ),
};

export default FielmenteLandingPageAlmostFinalColumnrectanglefortynine;
