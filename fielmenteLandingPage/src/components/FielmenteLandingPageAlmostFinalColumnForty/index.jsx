import React from "react";

import { Button, Img, Input, Text, TextArea } from "components";

const FielmenteLandingPageAlmostFinalColumnForty = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-[1440px] py-10 w-full">
          <div className="bg-gray-50 flex md:flex-col flex-row md:gap-10 gap-[70px] items-center justify-center max-w-[1329px] p-[36.05px] sm:px-5 rounded-[20px] w-full">
            <div className="h-[540px] relative w-[46%] md:w-full">
              <div className="h-[540px] m-auto w-full">
                <Img
                  className="absolute h-[540px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_rectangle41.png"
                  alt="rectangleFortyOne"
                />
                <Text
                  className="absolute inset-x-[0] mx-auto rotate-[-1deg] sm:text-[23.35px] md:text-[25.35px] text-[27.35px] text-black-900 top-[19%] w-[46%] sm:w-full"
                  size="txtGeneralSansMedium2735"
                >
                  {props?.only36clients}
                </Text>
              </div>
              <Text
                className="absolute h-max inset-[0] justify-center m-auto rotate-[-1deg] sm:text-[23.35px] md:text-[25.35px] text-[27.35px] text-black-900 w-[48%] sm:w-full"
                size="txtGeneralSansMedium2735"
              >
                {props?.offervalidtill}
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[23px] items-start justify-start w-[41%] md:w-full">
              <div className="flex flex-col items-center justify-start pt-1">
                <Text
                  className="sm:text-[34.45px] md:text-[36.45px] text-[38.45px] text-black-900"
                  size="txtGeneralSansSemibold3845"
                >
                  {props?.gotquestions}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-3 items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                    <Text
                      className="border border-blue_gray-100_03 border-solid pl-6 pr-[35px] sm:px-5 py-[11px] rounded-[12px] text-[19.23px] text-gray-500_03 w-[247px]"
                      size="txtGeneralSansRegular1923"
                    >
                      {props?.firstname}
                    </Text>
                    <Text
                      className="border border-blue_gray-100_03 border-solid pl-6 pr-[35px] sm:px-5 py-[11px] rounded-[12px] text-[19.23px] text-gray-500_03 w-[246px]"
                      size="txtGeneralSansRegular1923"
                    >
                      {props?.lastname}
                    </Text>
                  </div>
                  <Input
                    name="frame193"
                    placeholder="Enter your Email"
                    className="!placeholder:text-gray-500_03 !text-gray-500_03 font-generalsans leading-[normal] p-0 text-[19.23px] text-left w-full"
                    wrapClassName="w-full"
                    shape="round"
                    color="blue_gray_100_03"
                    size="xs"
                    variant="outline"
                  ></Input>
                  <Input
                    name="frame194"
                    placeholder="Phone number"
                    className="!placeholder:text-gray-500_03 !text-gray-500_03 font-generalsans leading-[normal] p-0 text-[19.23px] text-left w-full"
                    wrapClassName="w-full"
                    shape="round"
                    color="blue_gray_100_03"
                    size="xs"
                    variant="outline"
                  ></Input>
                  <TextArea
                    className="bg-transparent border border-blue_gray-100_03 border-solid font-generalsans gap-[12.02px] h-[180px] leading-[normal] sm:px-5 px-[24.03px] py-[12.02px] rounded-[12px] text-[19.23px] placeholder:text-gray-500_03 text-gray-500_03 text-left w-[509px]"
                    name="frame195"
                    placeholder="Enter your Message"
                  ></TextArea>
                  <Button
                    className="!text-white-A700 cursor-pointer font-generalsans font-semibold leading-[normal] rounded-[25px] text-[19.23px] text-center w-[509px]"
                    color="gray_900_01"
                    size="md"
                    variant="fill"
                  >
                    {props?.submit}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnForty.defaultProps = {
  only36clients: "Only 36 Clients are Left to be onboard!",
  offervalidtill: "Offer valid till 31st September",
  gotquestions: "Got Questions?",
  firstname: "First name",
  lastname: "Last Name",
  submit: "Submit",
};

export default FielmenteLandingPageAlmostFinalColumnForty;
