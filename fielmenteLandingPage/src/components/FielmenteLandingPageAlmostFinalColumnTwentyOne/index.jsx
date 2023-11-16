import React from "react";

import { Button, CheckBox, List, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnTwentyOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[200px] py-10 w-auto md:w-full">
          <List
            className="sm:flex-col flex-row gap-[50px] grid md:grid-cols-1 grid-cols-2 justify-start w-auto md:w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 border border-blue_gray-100_02 border-solid flex flex-col gap-5 h-[443px] md:h-auto items-center justify-center px-10 sm:px-5 py-5 rounded-[15px] w-auto sm:w-full">
              <div className="flex flex-col items-center justify-center w-auto">
                <div className="flex flex-col gap-2.5 items-center justify-center w-[308px]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[51px] items-center justify-start p-[9px]"
                    style={{ backgroundImage: "url('images/img_group70.png')" }}
                  >
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtGeneralSansSemibold24"
                    >
                      {props?.offer}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border-b border-blue_gray-100_02 border-solid flex flex-col items-start justify-start py-2.5 w-auto">
                      {props?.p3600072600}
                    </div>
                    <Text
                      className="mt-2.5 md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01 w-auto"
                      size="txtGeneralSansMedium32"
                    >
                      {props?.duration}
                    </Text>
                    <Button
                      className="!text-black-900 cursor-pointer font-generalsans font-medium leading-[normal] mt-2 text-2xl md:text-[22px] text-center sm:text-xl w-[308px]"
                      shape="square"
                      color="blue_gray_100_02"
                      size="lg"
                      variant="outline"
                    >
                      {props?.creatives15creatives}
                    </Button>
                  </div>
                </div>
              </div>
              <Button
                className="!text-white-A700 cursor-pointer font-generalsans font-medium leading-[normal] rounded-[30px] text-center text-lg w-[308px]"
                color="gray_900"
                size="xl"
                variant="fill"
              >
                {props?.tapToKnowMore}
              </Button>
            </div>
            <div className="bg-white-A700 border border-blue_gray-100_02 border-solid flex flex-col gap-5 h-[443px] md:h-auto items-center justify-center px-10 sm:px-5 py-5 rounded-[15px] w-auto sm:w-full">
              <div className="flex flex-col items-center justify-center w-auto">
                <div className="flex flex-col gap-2.5 items-center justify-center w-[308px]">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[51px] items-center justify-start p-[9px]"
                    style={{ backgroundImage: "url('images/img_group70.png')" }}
                  >
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtGeneralSansSemibold24"
                    >
                      {props?.offer1}
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="border-b border-blue_gray-100_02 border-solid flex flex-col items-center justify-center py-2.5 w-auto">
                      {props?.p60000120000}
                    </div>
                    <Text
                      className="mt-2.5 md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900_01 w-auto"
                      size="txtGeneralSansMedium32"
                    >
                      {props?.duration1}
                    </Text>
                    <Button
                      className="!text-black-900 cursor-pointer font-generalsans font-medium leading-[normal] mt-2 text-2xl md:text-[22px] text-center sm:text-xl w-[308px]"
                      shape="square"
                      color="blue_gray_100_02"
                      size="lg"
                      variant="outline"
                    >
                      {props?.creatives15creatives1}
                    </Button>
                  </div>
                </div>
              </div>
              <Button
                className="!text-white-A700 cursor-pointer font-generalsans font-medium leading-[normal] rounded-[30px] text-center text-lg w-[308px]"
                color="gray_900"
                size="xl"
                variant="fill"
              >
                {props?.taptoknowmore1}
              </Button>
            </div>
          </List>
          <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start w-auto md:w-full">
            <CheckBox
              className="font-generalsans font-medium leading-[normal] text-green-A700 text-left text-lg"
              inputClassName="mr-[5px]"
              name="servicesweoffer_One"
              id="servicesweoffer_One"
              label="Services we offer"
              shape="square"
              size="xs"
            ></CheckBox>
            <CheckBox
              className="font-generalsans font-medium leading-[normal] text-green-A700 text-left text-lg"
              inputClassName="mr-[5px]"
              name="cancelanytime"
              id="cancelanytime"
              label="Cancel Anytime"
              shape="square"
              size="xs"
            ></CheckBox>
            <CheckBox
              className="font-generalsans font-medium leading-[normal] text-green-A700 text-left text-lg"
              inputClassName="mr-[5px]"
              name="easyemioptions"
              id="easyemioptions"
              label="Easy EMI Options Available"
              shape="square"
              size="xs"
            ></CheckBox>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnTwentyOne.defaultProps = {
  offer: "50% OFF",
  p3600072600: (
    <Text
      className="max-w-[308px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
      size="txtGeneralSansSemibold48Black900"
    >
      <span className="text-black-900 font-generalsans font-semibold">
        36000/-{" "}
      </span>
      <span className="md:text-3xl sm:text-[28px] text-gray-700 font-generalsans text-[32px] font-medium line-through">
        72,600/-
      </span>
    </Text>
  ),
  duration: "6 Month",
  creatives15creatives: "Creatives: 15 Creatives",
  tapToKnowMore: "Tap to know more",
  offer1: "50% OFF",
  p60000120000: (
    <Text
      className="max-w-[308px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
      size="txtGeneralSansSemibold48Black900"
    >
      <span className="text-black-900 font-generalsans font-semibold">
        <>
          60,000/-
          <br />
        </>
      </span>
      <span className="md:text-3xl sm:text-[28px] text-gray-700 font-generalsans text-[32px] font-medium line-through">
        1,20,000/-
      </span>
    </Text>
  ),
  duration1: "12 Month",
  creatives15creatives1: "Creatives: 15 Creatives",
  taptoknowmore1: "Tap to know more",
};

export default FielmenteLandingPageAlmostFinalColumnTwentyOne;
