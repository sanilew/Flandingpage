import React from "react";

import { Button, Img, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnFortyTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-900 flex flex-col gap-5 items-center justify-center max-w-[1440px] py-10 w-full">
          <Img
            className="h-[94px] w-[489px]"
            src="images/img_logo_gray_900_01.svg"
            alt="logo_One"
          />
          <Button
            className="cursor-pointer font-generalsans font-medium leading-[normal] min-w-[190px] rounded-[21px] text-base text-center uppercase"
            color="white_A700"
            size="md"
            variant="fill"
          >
            {props?.visitOurWebsite}
          </Button>
          <div className="border-gray-400_05 border-solid border-y flex sm:flex-col flex-row gap-[30px] items-center justify-center py-5 w-[542px] sm:w-full">
            <Button
              className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-[22px]"
                src="images/img_iconfacebook.svg"
                alt="iconfacebook"
              />
            </Button>
            <Button
              className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-[22px]"
                src="images/img_icontwitter.svg"
                alt="icontwitter"
              />
            </Button>
            <Button
              className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-[22px]"
                src="images/img_iconlinkedin.svg"
                alt="iconlinkedin"
              />
            </Button>
            <div className="bg-white-A700 flex flex-col items-start justify-start p-[9.55px] rounded-[50%] w-[42px]">
              <div className="flex flex-col items-start justify-start w-[22px]">
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_iconyoutube.svg"
                  alt="iconyoutube"
                />
              </div>
            </div>
            <Img
              className="rounded-[50%] w-[42px]"
              src="images/img_frame170.svg"
              alt="frame170"
            />
            <Button
              className="flex h-[43px] items-center justify-center rounded-[21px] w-[43px]"
              shape="circle"
              color="white_A700"
              size="md"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_iconwhatsapp.svg"
                alt="iconwhatsapp"
              />
            </Button>
          </div>
          <div className="flex sm:flex-col flex-row gap-[39px] items-center justify-center pr-[5px] w-[27%] md:w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
              <Img className="h-6 w-6" src="images/img_call.svg" alt="call" />
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtGeneralSansMedium16WhiteA700"
              >
                {props?.mobileno}
              </Text>
            </div>
            <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
              <Img className="h-6 w-6" src="images/img_mail.svg" alt="mail" />
              <Text
                className="text-base text-white-A700 w-auto"
                size="txtGeneralSansMedium16WhiteA700"
              >
                {props?.email}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-[8.21px] items-start justify-start w-auto">
            <div className="bg-white-A700 flex flex-col items-start justify-start p-[3.45px] rounded-[1px] w-auto">
              <div className="flex flex-row items-center justify-start w-full">
                <Img
                  className="h-8 md:h-auto object-cover w-[32%]"
                  src="images/img_badgedigitalm.png"
                  alt="badgedigitalm_Two"
                />
                <Img
                  className="h-[33px] md:h-auto object-cover w-[72%]"
                  src="images/img_badgedigitalm_110x181.png"
                  alt="badgedigitalm_Three"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[33%]">
              <Img
                className="h-10 md:h-auto object-cover rounded-bl-[1px] rounded-br-[1px] w-full"
                src="images/img_trustpilot1_40x84.png"
                alt="trustpilotOne_One"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[28%]">
              <Img
                className="h-10 md:h-auto object-cover rounded-bl rounded-br w-full"
                src="images/img_startupindiac.png"
                alt="startupindiac"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnFortyTwo.defaultProps = {
  visitOurWebsite: "Visit our website ",
  mobileno: "+91 9501868775",
  email: "info@fielmente.com",
};

export default FielmenteLandingPageAlmostFinalColumnFortyTwo;
