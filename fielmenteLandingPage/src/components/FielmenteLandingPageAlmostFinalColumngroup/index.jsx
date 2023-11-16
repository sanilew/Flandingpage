import React from "react";

import { Button, Img, Text } from "components";

const FielmenteLandingPageAlmostFinalColumngroup = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[150px] items-center justify-start max-w-[1440px] py-10 w-full">
          <div className="flex md:h-[469px] h-[498px] sm:h-[682px] justify-end pt-7 relative w-1/2 md:w-full">
            <div className="h-[469px] mt-auto mx-auto w-full">
              <div className="h-[469px] m-auto w-full">
                <div className="h-[469px] m-auto w-full">
                  <Img
                    className="absolute h-[469px] inset-[0] justify-center m-auto"
                    src="images/img_group.svg"
                    alt="group"
                  />
                  <div className="absolute flex flex-col gap-[50px] h-max inset-y-[0] justify-start my-auto right-[36%] w-[17%]">
                    <Img
                      className="h-[124px] ml-1.5 md:ml-[0]"
                      src="images/img_vector12.svg"
                      alt="vectorTwelve"
                    />
                    <Img
                      className="h-[121px] w-[120px]"
                      src="images/img_vector8.svg"
                      alt="vectorEight"
                    />
                  </div>
                </div>
                <Img
                  className="absolute h-[60px] right-[17%] top-[32%]"
                  src="images/img_vector7.svg"
                  alt="vectorSeven"
                />
                <Img
                  className="absolute bottom-[24%] h-[120px] left-[28%]"
                  src="images/img_vector9.svg"
                  alt="vectorNine"
                />
              </div>
              <div className="absolute bottom-[29%] md:h-[120px] h-[158px] right-[12%] shadow-bs8 w-[52%]">
                <Img
                  className="absolute bottom-[0] h-[120px] right-[0]"
                  src="images/img_vector13.svg"
                  alt="vectorThirteen"
                />
                <div className="absolute bg-gray-900_01 flex flex-col h-[120px] items-center justify-start left-[0] outline outline-[4px] outline-white-A700 p-[21px] sm:px-5 rounded-[50%] top-[0] w-[120px]">
                  <Img
                    className="h-[75px] md:h-auto object-cover w-[56%]"
                    src="images/img_croppedlogos0.png"
                    alt="croppedlogosZero"
                  />
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col gap-11 h-max inset-[0] justify-center m-auto w-4/5">
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[116px] items-center justify-start sm:mt-0 mt-[116px] w-[116px]"
                  style={{ backgroundImage: "url('images/img_group53.svg')" }}
                >
                  <div className="flex flex-col h-[116px] items-center justify-start w-[116px]">
                    <Img
                      className="h-[116px] md:h-auto rounded-[50%] w-[116px]"
                      src="images/img_ellipse4.png"
                      alt="ellipseFour"
                    />
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-28 items-center justify-start sm:ml-[0] ml-[9px] sm:mt-0 mt-2 w-28"
                  style={{ backgroundImage: "url('images/img_group53.svg')" }}
                >
                  <div className="flex flex-col h-28 items-center justify-start w-28">
                    <Img
                      className="h-28 md:h-auto rounded-[50%] w-28"
                      src="images/img_ellipse4_112x112.png"
                      alt="ellipseFour_One"
                    />
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[114px] items-center justify-start sm:ml-[0] ml-[63px] w-[114px]"
                  style={{ backgroundImage: "url('images/img_group53.svg')" }}
                >
                  <div className="flex flex-col h-[114px] items-center justify-start w-[114px]">
                    <Img
                      className="h-[114px] md:h-auto rounded-[50%] w-[114px]"
                      src="images/img_ellipse4_114x114.png"
                      alt="ellipseFour_Two"
                    />
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[115px] items-center justify-start ml-9 sm:ml-[0] sm:mt-0 mt-[75px] w-[115px]"
                  style={{ backgroundImage: "url('images/img_group53.svg')" }}
                >
                  <div className="flex flex-col h-[115px] items-center justify-start w-[115px]">
                    <Img
                      className="h-[115px] md:h-auto rounded-[50%] w-[115px]"
                      src="images/img_ellipse4_115x115.png"
                      alt="ellipseFour_Three"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-between md:ml-[0] ml-[72px] w-[64%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[113px] items-center justify-start mb-2 w-[113px]"
                  style={{ backgroundImage: "url('images/img_group53.svg')" }}
                >
                  <div className="flex flex-col h-[113px] items-center justify-start w-[113px]">
                    <Img
                      className="h-[113px] md:h-auto rounded-[50%] w-[113px]"
                      src="images/img_ellipse4_113x113.png"
                      alt="ellipseFour_Four"
                    />
                  </div>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[104px] items-center justify-start mt-[17px] w-[104px]"
                  style={{ backgroundImage: "url('images/img_group53.svg')" }}
                >
                  <div className="flex flex-col h-[104px] items-center justify-start w-[104px]">
                    <Img
                      className="h-[104px] md:h-auto rounded-[50%] w-[104px]"
                      src="images/img_ellipse4_104x104.png"
                      alt="ellipseFour_Five"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col gap-5 items-start justify-start w-[506px] sm:w-full">
            <div className="flex flex-col gap-[9px] items-start justify-start pb-[9px] w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[6.00px] uppercase"
                  size="txtGeneralSansMedium24Black900"
                >
                  {props?.fielmentemakingOne}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
                  size="txtGeneralSansMedium32Black900"
                >
                  {props?.languageOne}
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
              <div className="flex flex-col items-center justify-start pb-1.5">
                <Text
                  className="text-base text-black-900 tracking-[3.84px] uppercase"
                  size="txtGeneralSansMedium16"
                >
                  {props?.countriescovereOne}
                </Text>
              </div>
              <div className="flex flex-col gap-2.5 h-[117px] md:h-auto items-start justify-center w-[365px]">
                <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[119px] rounded-[26px]"
                    leftIcon={
                      <Img
                        className="h-8 mr-2.5"
                        src="images/img_united_states.svg"
                        alt="united states"
                      />
                    }
                    color="gray_400_03"
                    size="md"
                    variant="outline"
                  >
                    <div className="!text-black-900 font-inter leading-[normal] text-left text-lg">
                      {props?.usa}
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[105px] rounded-[26px]"
                    leftIcon={
                      <Img
                        className="h-8 mr-2.5"
                        src="images/img_united_kingdom.svg"
                        alt="united kingdom"
                      />
                    }
                    color="gray_400_03"
                    size="md"
                    variant="outline"
                  >
                    <div className="!text-black-900 font-inter leading-[normal] text-base text-left">
                      {props?.uk}
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[120px] rounded-[26px]"
                    leftIcon={
                      <div className="h-8 mr-2.5 w-8 bg-gray-200_03 rounded-[50%] py-px">
                        <Img src="images/img_close.svg" alt="close" />
                      </div>
                    }
                    color="gray_400_03"
                    size="md"
                    variant="outline"
                  >
                    <div className="!text-black-900 font-inter leading-[normal] text-base text-left">
                      {props?.canada}
                    </div>
                  </Button>
                </div>
                <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[99px] rounded-[26px]"
                    leftIcon={
                      <Img
                        className="h-8 mr-2.5"
                        src="images/img_close_gray_200_03.svg"
                        alt="close"
                      />
                    }
                    color="gray_400_03"
                    size="md"
                    variant="outline"
                  >
                    <div className="!text-black-900 font-inter leading-[normal] text-base text-left">
                      {props?.india}
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[107px] rounded-[26px]"
                    leftIcon={
                      <Img
                        className="h-8 mr-2.5"
                        src="images/img_oman.svg"
                        alt="oman"
                      />
                    }
                    color="gray_400_03"
                    size="md"
                    variant="outline"
                  >
                    <div className="!text-black-900 font-inter leading-[normal] text-base text-left">
                      {props?.oman}
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[106px] rounded-[26px]"
                    leftIcon={
                      <Img
                        className="h-8 mr-2.5"
                        src="images/img_nepal.svg"
                        alt="nepal"
                      />
                    }
                    color="gray_400_03"
                    size="md"
                    variant="outline"
                  >
                    <div className="!text-black-900 font-inter leading-[normal] text-base text-left">
                      {props?.nepal}
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <Button
              className="!text-white-A700 cursor-pointer font-generalsans leading-[normal] min-w-[157px] rounded-[21px] text-base text-center"
              color="gray_900_01"
              size="md"
              variant="fill"
            >
              {props?.viewMore}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumngroup.defaultProps = {
  fielmentemakingOne: <>Fielmente Making Global</>,
  languageOne: (
    <>
      Empowered 60+ Clients Globally
      <br />
      Now it&#39;s your turn{" "}
    </>
  ),
  countriescovereOne: "Countries Covered",
  usa: "USA",
  uk: "UK",
  canada: "Canada",
  india: "India",
  oman: "Oman",
  nepal: "Nepal",
  viewMore: "View More",
};

export default FielmenteLandingPageAlmostFinalColumngroup;
