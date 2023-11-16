import React from "react";

import { Button, Img, List, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnarrowleftThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-900 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[243.24px] py-[28.68px] rounded-[10px] w-auto md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end pl-1 py-1 w-full">
            <div className="bg-white-A700 flex flex-col items-start justify-start md:mt-0 my-[5px] p-[11.39px] rounded-sm w-auto">
              <div className="h-[110px] relative w-full">
                <Img
                  className="absolute h-[106px] inset-y-[0] left-[0] my-auto object-cover w-[32%]"
                  src="images/img_badgedigitalm.png"
                  alt="badgedigitalm"
                />
                <Img
                  className="absolute h-[110px] inset-y-[0] my-auto object-cover right-[0] w-[71%]"
                  src="images/img_badgedigitalm_110x181.png"
                  alt="badgedigitalm_One"
                />
              </div>
            </div>
            <Img
              className="md:flex-1 h-[133px] sm:h-auto md:ml-[0] ml-[19px] object-cover rounded w-[27%] md:w-full"
              src="images/img_trustpilot1.png"
              alt="trustpilotOne"
            />
            <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-end md:ml-[0] ml-[99px] w-[28%] md:w-full">
              <Text
                className="mt-[3px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700 w-[83%] sm:w-full"
                size="txtGeneralSansMedium28"
              >
                {props?.languageThree}
              </Text>
              <Button
                className="!text-white-A700 cursor-pointer font-generalsans leading-[normal] min-w-[161px] rounded-[21px] text-base text-center"
                color="white_A700"
                size="md"
                variant="outline"
              >
                {props?.viewMoreOne}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-col flex-row md:gap-10 gap-[998px] items-center justify-between w-auto md:w-full">
          <div className="flex flex-col items-center justify-start pt-[3px]">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
              size="txtGeneralSansMedium32Black900"
            >
              {props?.whatourclients}
            </Text>
          </div>
          <div className="flex flex-row gap-[30px] items-center justify-between w-[7%] sm:w-full">
            <Img
              className="h-8 w-8"
              src="images/img_arrowleft_black_900.svg"
              alt="arrowleft_Three"
            />
            <Img
              className="h-8 w-8"
              src="images/img_arrowright_black_900.svg"
              alt="arrowright_One"
            />
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
          orientation="horizontal"
        >
          <div className="border border-gray-400_04 border-solid flex flex-col items-center justify-end pt-[38px] sm:px-5 px-[38px] w-full">
            <div className="flex flex-col gap-[50px] items-start justify-start mt-0.5 w-auto sm:w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <Img className="h-11" src="images/img_reply.svg" alt="reply" />
                <Text
                  className="text-black-900 text-center text-lg w-full"
                  size="txtGeneralSansRegular18"
                >
                  {props?.description}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center outline outline-gray-300_01 py-10 w-[412px] sm:w-full">
                <div className="flex flex-col items-center justify-start w-[85%] md:w-full">
                  <div className="flex flex-row gap-[19px] items-center justify-between w-full">
                    <Img
                      className="h-[84px] md:h-auto rounded-[50%] w-[84px]"
                      src="images/img_ellipse24.png"
                      alt="ellipseTwentyFour"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-black-900 text-center text-lg"
                        size="txtGeneralSansSemibold18"
                      >
                        {props?.atinderbajwa}
                      </Text>
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtGeneralSansRegular16"
                      >
                        {props?.operationsmanagOne}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-400_04 border-solid flex flex-col items-center justify-end pt-[39px] sm:px-5 px-[39px] w-full">
            <div className="flex flex-col md:gap-10 gap-[169px] items-center justify-start w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start w-[92%] md:w-full">
                <Img className="h-11" src="images/img_reply.svg" alt="reply" />
                <Text
                  className="text-black-900 text-center text-lg w-full"
                  size="txtGeneralSansRegular18"
                >
                  {props?.description1}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center outline outline-gray-300_01 py-10 w-[412px] sm:w-full">
                <div className="flex flex-col items-center justify-start w-[69%] md:w-full">
                  <div className="flex flex-row gap-[19px] items-center justify-between w-full">
                    <Img
                      className="h-[84px] md:h-auto rounded-[50%] w-[84px]"
                      src="images/img_ellipse24_84x84.png"
                      alt="ellipseTwentyFour"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-black-900 text-center text-lg"
                        size="txtGeneralSansSemibold18"
                      >
                        {props?.donaldwingellcfOne}
                      </Text>
                      <Text
                        className="text-base text-black-900 w-full"
                        size="txtGeneralSansRegular16"
                      >
                        {props?.ceoatwingellhosOne}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-400_04 border-solid flex flex-col items-center justify-start p-[26px] sm:px-5 w-full">
            <div className="flex flex-col gap-[23px] items-center justify-start my-3.5 w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                <Img className="h-11" src="images/img_reply.svg" alt="reply" />
                <Text
                  className="text-black-900 text-center text-lg w-full"
                  size="txtGeneralSansRegular18"
                >
                  {props?.description2}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center outline outline-gray-300_01 py-5 w-[412px] sm:w-full">
                <div className="flex flex-row gap-4 items-center justify-center w-[72%] md:w-full">
                  <Img
                    className="h-[84px] md:h-auto rounded-[50%] w-[84px]"
                    src="images/img_ellipse24_1.png"
                    alt="ellipseTwentyFour"
                  />
                  <div className="flex flex-col items-start justify-start w-[194px]">
                    <Text
                      className="text-black-900 text-center text-lg w-auto"
                      size="txtGeneralSansSemibold18"
                    >
                      {props?.sanganaveen}
                    </Text>
                    <Text
                      className="text-base text-black-900 w-auto"
                      size="txtGeneralSansRegular16"
                    >
                      {props?.price}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnarrowleftThree.defaultProps = {
  languageThree: (
    <>
      You can find out <br />
      more reviews here{" "}
    </>
  ),
  viewMoreOne: "View More",
  whatourclients: "What our clients say about us",
  description:
    "We have used Fielmente for all our marketing and advertising needs since December 2021. It has been a very professional and smooth experience. They listen to our needs carefully and then plan accordingly. They also provide guidance and business knowledge to staff. Whether be it SEO, SEM or day to day advertisements, Fielmente provide a professinal service to your needs. Highly recommended.",
  atinderbajwa: "Atinder Bajwa",
  operationsmanagOne: "Operations Manager at Aaoji Restaurant and Cafe",
  description1:
    "Great team to work with. Adaptive as Ottawa is a very unique market and they have learnt very quickly. Great initiative taken to explore and make a big impression in the market.",
  donaldwingellcfOne: "Donald Wingell CFBE",
  ceoatwingellhosOne: "CEO at Wingell Hospitality Group Inc",
  description2:
    "I have been working with FIELMENTE HOSPITALITY for only a few short time ,however not only have they been handling my all social media optimization, SEO for me , my website response has given me great marketing advice which has made a difference in my onlion conversions,they implemented abandoned brand marketing strategies for me which saw an immediate response in additional conversion.i was very happy thus for ,that i felt comfortable to have them redesign my SMM which is a huge improvement",
  sanganaveen: "Sanga Naveen",
  price: "FOUNDER at CHEF BASKIT",
};

export default FielmenteLandingPageAlmostFinalColumnarrowleftThree;
