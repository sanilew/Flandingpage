import React from "react";

import { Button, Img, Line, List, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnreplacemeTwo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[150px] items-center justify-center max-w-[1530px] py-5 w-full">
          <div className="md:h-[377px] h-[539px] relative w-2/5 md:w-full">
            <div className="absolute md:h-[377px] h-[428px] inset-x-[0] mx-auto top-[0] w-[96%] sm:w-full">
              <div className="absolute flex flex-col inset-y-[0] left-[6%] my-auto w-[65%] sm:w-full">
                <div className="flex flex-col items-center justify-start mt-[-NaNpx] mx-auto w-full z-[1]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Line className="bg-gray-200_02 h-px w-full" />
                    <div className="flex flex-row gap-2 items-center justify-start ml-2.5 md:ml-[0] mt-[7px] w-[34%] md:w-full">
                      <div className="border border-solid flex flex-col h-[30px] items-center justify-start orange_A200_02_deep_purple_500_border p-0.5 rounded-[50%] w-[30px]">
                        <div className="bg-white-A700 flex flex-col h-[26px] items-center justify-start rounded-[50%] w-[26px]">
                          <Img
                            className="h-[26px] md:h-auto rounded-[50%] w-[26px]"
                            src="images/img_replaceme.png"
                            alt="replaceme"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[2.02px] items-start justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <Text
                            className="lowercase text-[12.12px] text-black-900 w-auto"
                            size="txtRobotoMedium1212"
                          >
                            {props?.username}
                          </Text>
                        </div>
                        <Text
                          className="text-[10.1px] text-black-900 w-auto"
                          size="txtRobotoRegular101"
                        >
                          {props?.usercountry}
                        </Text>
                      </div>
                    </div>
                    <Line className="bg-gray-200_02 h-px mt-[11px] w-full" />
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat bg-white-A700 flex flex-col h-[378px] sm:h-auto items-center justify-start mt-[-1.01px] mx-auto rounded-[11px] w-[378px] z-[1]"
                  style={{
                    backgroundImage: "url('images/img_instagrampost.png')",
                  }}
                >
                  <Img
                    className="h-[378px] md:h-auto object-cover rounded-[11px] w-[378px] sm:w-full"
                    src="images/img_replaceme_378x378.png"
                    alt="replaceme_Two"
                  />
                </div>
              </div>
              <div className="absolute bg-white-A700_7f bottom-[16%] flex flex-col gap-[10.83px] items-start justify-end p-[21.67px] sm:px-5 right-[0] rounded-[10px] w-auto">
                <Text
                  className="text-[13px] text-black-900 w-auto"
                  size="txtInterBold13"
                >
                  {props?.replacemeThree}
                </Text>
                <List
                  className="flex flex-col gap-2.5 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-row gap-[10.83px] items-start justify-start w-auto">
                    <Button
                      className="!text-white-A700 border border-black-900 border-solid cursor-pointer font-inter leading-[normal] min-w-[75px] rounded-[10px] text-[13px] text-center"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      {props?.hashtagcanada}
                    </Button>
                    <Button
                      className="border border-black-900 border-solid cursor-pointer font-inter leading-[normal] min-w-[61px] rounded-[10px] shadow-bs text-[13px] text-center"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      {props?.hashtagfood}
                    </Button>
                    <Button
                      className="!text-white-A700 border border-black-900 border-solid cursor-pointer font-inter leading-[normal] min-w-[151px] rounded-[10px] text-[13px] text-center"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      {props?.hashtagsoutheastasian}
                    </Button>
                  </div>
                  <div className="flex flex-row gap-[10.83px] items-start justify-start w-auto">
                    <Button
                      className="border border-black-900 border-solid cursor-pointer font-inter leading-[normal] min-w-[74px] rounded-[10px] shadow-bs text-[13px] text-center"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      {props?.hashtagtoronto}
                    </Button>
                    <Button
                      className="!text-white-A700 border border-black-900 border-solid cursor-pointer font-inter leading-[normal] min-w-[123px] rounded-[10px] text-[13px] text-center"
                      shape="round"
                      color="black_900"
                      size="md"
                      variant="fill"
                    >
                      {props?.hashtagmississaugalife}
                    </Button>
                    <Button
                      className="border border-black-900 border-solid cursor-pointer font-inter leading-[normal] min-w-[93px] rounded-[10px] shadow-bs text-[13px] text-center"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      {props?.hashtagtorontolife}
                    </Button>
                  </div>
                </List>
                <div className="flex flex-row gap-[10.83px] items-start justify-start w-auto">
                  <Button
                    className="border border-black-900 border-solid cursor-pointer font-inter leading-[normal] min-w-[158px] rounded-[10px] shadow-bs text-[13px] text-center"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    {props?.hashtagmississaugabloggers}
                  </Button>
                  <Button
                    className="!text-white-A700 border border-black-900 border-solid cursor-pointer font-inter leading-[normal] min-w-[132px] rounded-[10px] text-[13px] text-center"
                    shape="round"
                    color="black_900"
                    size="md"
                    variant="fill"
                  >
                    {props?.hashtagmississaugafood}
                  </Button>
                </div>
              </div>
              <div className="absolute bg-white-A700 flex flex-col items-center justify-end left-[0] p-[16.97px] rounded-[50%] shadow-bs4 top-[26%] w-[74px]">
                <Img
                  className="h-10 w-10"
                  src="images/img_interfacesea.svg"
                  alt="interfacesea"
                />
              </div>
            </div>
            <div className="absolute bg-white-A700_bf bottom-[0] flex flex-col items-center justify-end left-[0] p-[9.73px] rounded-[9px] shadow-bs5 w-auto">
              <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-[95%] md:w-full">
                    <Img
                      className="h-[22px] sm:mt-0 mt-0.5"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                    <Img
                      className="h-[23px] sm:ml-[0] ml-[21px] w-[23px]"
                      src="images/img_search.svg"
                      alt="search"
                    />
                    <Img
                      className="h-5 sm:ml-[0] ml-[21px] sm:mt-0 mt-0.5"
                      src="images/img_send.svg"
                      alt="send"
                    />
                    <Img
                      className="h-[27px] sm:ml-[0] ml-[298px]"
                      src="images/img_bookmark.svg"
                      alt="bookmark"
                    />
                  </div>
                  <Text
                    className="sm:text-[18.07px] md:text-[20.07px] text-[22.07px] text-black-900 w-full"
                    size="txtRobotoRomanRegular2207"
                  >
                    {props?.descriptiontext}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
            <Img
              className="h-[81px] w-[93px]"
              src="images/img_frame226.svg"
              alt="frame226"
            />
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
              <Text
                className="max-w-[453px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
                size="txtGeneralSansSemibold32Gray90001"
              >
                {props?.descriptionfour}
              </Text>
              <Text
                className="max-w-[422px] md:max-w-full text-black-900 text-lg"
                size="txtGeneralSansRegular18"
              >
                {props?.descriptionfive}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnreplacemeTwo.defaultProps = {
  username: "dhruveescanada",
  usercountry: "Dhruvees Canada",
  replacemeThree: "Hashtags:",
  hashtagcanada: "#canada",
  hashtagfood: " #food",
  hashtagsoutheastasian: "#southeastasianfood",
  hashtagtoronto: "#toronto",
  hashtagmississaugalife: "#mississaugalife",
  hashtagtorontolife: "#torontolife",
  hashtagmississaugabloggers: "#mississaugabloggers",
  hashtagmississaugafood: "#mississaugafood",
  descriptiontext: (
    <>
      Dhruvees special offer for this week : you&#39;ll receive one
      complimentary mango lassi with each $22 chicken biryani order.
    </>
  ),
  descriptionfour: (
    <>
      Comprehensive captions and <br />
      Relevant Hashtags and <br />
      research
    </>
  ),
  descriptionfive:
    "Using trending, brand-appropriate hashtags increases interaction, facilitates discovery, and allows you to maintain your credibility.",
};

export default FielmenteLandingPageAlmostFinalColumnreplacemeTwo;
