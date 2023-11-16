import React from "react";

import { Button, Img, Line, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnsettings = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[250px] items-center justify-center max-w-[1530px] py-5 w-full">
          <div className="flex sm:flex-1 sm:flex-col flex-row gap-2.5 items-start justify-start w-auto sm:w-full">
            <Img
              className="h-[72px] w-[78px]"
              src="images/img_settings.svg"
              alt="settings"
            />
            <div className="flex flex-col gap-2.5 items-start justify-start w-auto sm:w-full">
              <Text
                className="max-w-[293px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-gray-900_01"
                size="txtGeneralSansSemibold32Gray90001"
              >
                {props?.schedulingpubliOne}
              </Text>
              <Text
                className="max-w-[422px] md:max-w-full text-black-900 text-lg"
                size="txtGeneralSansRegular18"
              >
                {props?.descriptionTwo}
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 border border-blue_gray-100 border-solid md:h-[103px] sm:h-[114px] h-[410px] p-[5.54px] relative rotate-[-5deg] rounded-[10px] shadow-bs3 w-[562px] sm:w-full">
            <div className="absolute flex sm:flex-col flex-row gap-[2.77px] h-[73px] md:h-auto items-center justify-between py-[2.77px] right-[1%] top-[1%] w-full">
              <div className="border border-blue_gray-100_01 border-solid flex flex-row gap-[2.77px] h-[38px] md:h-auto items-center justify-center p-[2.77px] rounded-sm w-auto">
                <Text
                  className="text-[10px] text-black-900 text-center w-8"
                  size="txtPoppinsRegular10"
                >
                  {props?.today}
                </Text>
                <Line className="bg-blue_gray-100_01 h-4 w-px" />
                <Text
                  className="text-[10px] text-black-900 text-center w-[25px]"
                  size="txtPoppinsRegular10"
                >
                  {props?.back}
                </Text>
                <Line className="bg-blue_gray-100_01 h-4 w-px" />
                <Text
                  className="text-[10px] text-black-900 text-center w-[22px]"
                  size="txtPoppinsRegular10"
                >
                  {props?.next}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start p-[2.77px] w-auto">
                <Text
                  className="text-[10px] text-black-900 text-center w-auto"
                  size="txtPoppinsRegular10"
                >
                  {props?.p10july202216}
                </Text>
              </div>
              <div className="border border-blue_gray-100_01 border-solid flex flex-row gap-[2.77px] h-[37px] md:h-auto items-center justify-center py-[2.77px] rounded-sm w-auto">
                <Text
                  className="text-[10px] text-black-900 text-center w-[31px]"
                  size="txtPoppinsRegular10"
                >
                  {props?.month}
                </Text>
                <Button
                  className="!text-white-A700 cursor-pointer font-poppins leading-[normal] min-w-[43px] text-[10px] text-center"
                  shape="square"
                  color="blue_A200"
                  size="sm"
                  variant="fill"
                >
                  {props?.week}
                </Button>
                <Text
                  className="text-[10px] text-black-900 text-center w-5"
                  size="txtPoppinsRegular10"
                >
                  {props?.day}
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[0] md:h-[103px] h-[377px] inset-x-[0] mx-auto w-[551px] sm:w-full">
              <div className="absolute bg-white-A700 h-[377px] md:h-[61px] inset-[0] m-auto w-[548px] sm:w-full">
                <div className="absolute h-[298px] md:h-[61px] inset-x-[0] mx-auto top-[0] w-[99%] sm:w-full">
                  <div className="absolute h-[243px] md:h-[61px] inset-x-[0] mx-auto top-[0] w-full">
                    <div className="absolute h-[188px] md:h-[61px] inset-x-[0] mx-auto top-[0] w-full">
                      <div className="absolute h-[133px] md:h-[61px] inset-x-[0] mx-auto top-[0] w-full">
                        <div className="absolute bg-white-A700 md:h-[35px] h-[78px] inset-x-[0] mx-auto top-[0] w-[521px] sm:w-full">
                          <div className="absolute md:h-[35px] h-[71px] left-[0] top-[0] w-[88%] sm:w-full">
                            <div className="absolute md:h-[35px] h-[66px] left-[0] top-[0] w-[86%] sm:w-full">
                              <div className="absolute md:h-[35px] h-[60px] left-[0] top-[0] w-[84%]">
                                <div className="absolute md:h-[35px] h-[54px] left-[0] top-[0] w-[81%]">
                                  <div className="absolute h-12 md:h-[35px] left-[0] top-[0] w-[76%]">
                                    <div className="absolute md:h-[35px] h-[42px] left-[0] top-[0] w-[67%]">
                                      <div className="absolute border border-gray-300 border-solid h-[29px] left-[0] top-[0] w-[51%]"></div>
                                      <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col items-center justify-start px-[2.77px] py-[8.31px] right-[0] w-[67px]">
                                        {props?.duration}
                                      </div>
                                    </div>
                                    <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col items-center justify-start px-[2.77px] py-[8.31px] right-[0] w-[67px]">
                                      {props?.durationOne}
                                    </div>
                                  </div>
                                  <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col items-center justify-start px-[2.77px] py-[8.31px] right-[0] w-[67px]">
                                    {props?.durationTwo}
                                  </div>
                                </div>
                                <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col items-center justify-start px-[2.77px] py-[8.31px] right-[0] w-[67px]">
                                  {props?.durationThree}
                                </div>
                              </div>
                              <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col items-center justify-start px-[2.77px] py-[8.31px] right-[0] w-[67px]">
                                {props?.durationFour}
                              </div>
                            </div>
                            <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col items-center justify-start px-[2.77px] py-[8.31px] right-[0] w-[67px]">
                              {props?.durationFive}
                            </div>
                          </div>
                          <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col items-center justify-start px-[2.77px] py-[8.31px] right-[0] w-[67px]">
                            {props?.durationSix}
                          </div>
                        </div>
                        <div className="absolute bg-white-A700 bottom-[0] h-[103px] md:h-[61px] inset-x-[0] mx-auto w-[523px] sm:w-full">
                          <div className="absolute md:h-[61px] h-[97px] left-[0] top-[0] w-[88%] sm:w-full">
                            <div className="absolute md:h-[61px] h-[91px] left-[0] top-[0] w-[86%] sm:w-full">
                              <div className="absolute md:h-[61px] h-[85px] left-[0] top-[0] w-[84%]">
                                <div className="absolute md:h-[61px] h-[79px] left-[0] top-[0] w-[81%]">
                                  <div className="absolute md:h-[61px] h-[73px] left-[0] top-[0] w-[76%]">
                                    <div className="absolute md:h-[61px] h-[67px] left-[0] top-[0] w-[68%]">
                                      <div className="absolute border border-gray-300 border-solid flex flex-col h-[61px] md:h-auto items-center justify-center left-[0] px-[2.77px] py-[8.31px] top-[0] w-[69px]">
                                        <Text
                                          className="text-[10px] text-black-900 text-center w-[39px]"
                                          size="txtPoppinsRegular10"
                                        >
                                          {props?.time}
                                        </Text>
                                      </div>
                                      <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[52%]"></div>
                                    </div>
                                    <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col h-[61px] md:h-auto items-center justify-center px-[2.77px] py-[8.31px] right-[0] w-[69px]">
                                      <div className="bg-cyan-300 flex flex-col items-center justify-center px-[2.77px] py-[4.43px] w-full">
                                        <Text
                                          className="text-[5px] text-white-A700 w-auto"
                                          size="txtPoppinsRegular5"
                                        >
                                          {props?.timeOne}
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[27%]"></div>
                                </div>
                                <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[21%]"></div>
                              </div>
                              <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col h-[61px] md:h-auto items-center justify-center px-[2.77px] py-[8.31px] right-[0] w-[69px]">
                                <Button
                                  className="!text-white-A700 cursor-pointer font-poppins leading-[normal] text-[5px] text-center w-full"
                                  shape="square"
                                  color="red_900"
                                  size="xs"
                                  variant="fill"
                                >
                                  {props?.p0600am1200pm}
                                </Button>
                              </div>
                            </div>
                            <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col h-[61px] md:h-auto items-center justify-center px-[2.77px] py-[8.31px] right-[0] w-[69px]">
                              <div className="bg-blue-700 flex flex-col items-center justify-center px-[2.77px] py-[4.43px] w-full">
                                <Text
                                  className="text-[5px] text-white-A700 w-auto"
                                  size="txtPoppinsRegular5"
                                >
                                  {props?.timeTwo}
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[14%]"></div>
                        </div>
                      </div>
                      <div className="absolute bg-white-A700 bottom-[0] h-[103px] md:h-[61px] inset-x-[0] mx-auto w-[523px] sm:w-full">
                        <div className="absolute md:h-[61px] h-[97px] left-[0] top-[0] w-[88%] sm:w-full">
                          <div className="absolute md:h-[61px] h-[91px] left-[0] top-[0] w-[86%] sm:w-full">
                            <div className="absolute md:h-[61px] h-[85px] left-[0] top-[0] w-[84%]">
                              <div className="absolute md:h-[61px] h-[79px] left-[0] top-[0] w-[81%]">
                                <div className="absolute md:h-[61px] h-[73px] left-[0] top-[0] w-[76%]">
                                  <div className="absolute md:h-[61px] h-[67px] left-[0] top-[0] w-[68%]">
                                    <div className="absolute border border-gray-300 border-solid flex flex-col h-[61px] md:h-auto items-center justify-center left-[0] px-[2.77px] py-[8.31px] top-[0] w-[69px]">
                                      <Text
                                        className="text-[10px] text-black-900 text-center w-[38px]"
                                        size="txtPoppinsRegular10"
                                      >
                                        {props?.timeThree}
                                      </Text>
                                    </div>
                                    <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[52%]"></div>
                                  </div>
                                  <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[35%]"></div>
                                </div>
                                <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[27%]"></div>
                              </div>
                              <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col h-[61px] md:h-auto items-center justify-center px-[2.77px] py-[8.31px] right-[0] w-[69px]">
                                <div className="bg-purple-A200 flex flex-col items-center justify-center px-[2.77px] py-[4.43px] w-full">
                                  <Text
                                    className="text-[5px] text-white-A700 w-auto"
                                    size="txtPoppinsRegular5"
                                  >
                                    {props?.timeFour}
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[18%]"></div>
                          </div>
                          <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[16%]"></div>
                        </div>
                        <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[14%]"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-[0] h-[103px] md:h-[61px] inset-x-[0] mx-auto w-[523px] sm:w-full">
                      <div className="absolute bg-white-A700 h-[103px] md:h-[61px] inset-[0] m-auto w-[523px] sm:w-full">
                        <div className="absolute md:h-[61px] h-[91px] left-[0] top-[0] w-[76%] sm:w-full">
                          <div className="absolute md:h-[61px] h-[85px] left-[0] top-[0] w-[84%]">
                            <div className="absolute md:h-[61px] h-[79px] left-[0] top-[0] w-[81%]">
                              <div className="absolute md:h-[61px] h-[73px] left-[0] top-[0] w-[76%]">
                                <div className="absolute md:h-[61px] h-[67px] left-[0] top-[0] w-[68%]">
                                  <div className="absolute border border-gray-300 border-solid flex flex-col h-[61px] md:h-auto items-center justify-center left-[0] px-[2.77px] py-[8.31px] top-[0] w-[69px]">
                                    <Text
                                      className="text-[10px] text-black-900 text-center w-[39px]"
                                      size="txtPoppinsRegular10"
                                    >
                                      {props?.timeFive}
                                    </Text>
                                  </div>
                                  <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[52%]"></div>
                                </div>
                                <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[35%]"></div>
                              </div>
                              <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col h-[61px] md:h-auto items-center justify-center px-[2.77px] py-[8.31px] right-[0] w-[69px]">
                                <div className="bg-cyan-300_99 flex flex-col items-center justify-center px-[2.77px] py-[4.43px] w-full">
                                  <Text
                                    className="text-[5px] text-white-A700 w-auto"
                                    size="txtPoppinsRegular5"
                                  >
                                    {props?.timeSix}
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[21%]"></div>
                          </div>
                          <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col h-[61px] md:h-auto items-center justify-center px-[2.77px] py-[8.31px] right-[0] w-[69px]">
                            <div className="bg-teal-A700 flex flex-col items-center justify-center px-[2.77px] py-[4.43px] w-full">
                              <Text
                                className="text-[5px] text-white-A700 w-auto"
                                size="txtPoppinsRegular5"
                              >
                                {props?.timeSeven}
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute border border-gray-300 border-solid bottom-[6%] h-[61px] right-[12%] w-[14%]"></div>
                      </div>
                      <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[14%]"></div>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 bottom-[0] h-[103px] md:h-[61px] inset-x-[0] mx-auto w-[523px] sm:w-full">
                    <div className="absolute md:h-[61px] h-[97px] left-[0] top-[0] w-[88%] sm:w-full">
                      <div className="absolute md:h-[61px] h-[91px] left-[0] top-[0] w-[86%] sm:w-full">
                        <div className="absolute md:h-[61px] h-[85px] left-[0] top-[0] w-[84%]">
                          <div className="absolute md:h-[61px] h-[79px] left-[0] top-[0] w-[81%]">
                            <div className="absolute md:h-[61px] h-[73px] left-[0] top-[0] w-[76%]">
                              <div className="absolute md:h-[61px] h-[67px] left-[0] top-[0] w-[68%]">
                                <div className="absolute border border-gray-300 border-solid flex flex-col h-[61px] md:h-auto items-center justify-center left-[0] px-[2.77px] py-[8.31px] top-[0] w-[69px]">
                                  <Text
                                    className="text-[10px] text-black-900 text-center w-[39px]"
                                    size="txtPoppinsRegular10"
                                  >
                                    {props?.timeEight}
                                  </Text>
                                </div>
                                <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[52%]"></div>
                              </div>
                              <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col h-[61px] md:h-auto items-center justify-center px-[2.77px] py-[8.31px] right-[0] w-[69px]">
                                <div className="bg-purple-A200 flex flex-col items-center justify-center px-[2.77px] py-[4.43px] w-full">
                                  <Text
                                    className="text-[5px] text-white-A700 w-auto"
                                    size="txtPoppinsRegular5"
                                  >
                                    {props?.timeNine}
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[27%]"></div>
                          </div>
                          <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[21%]"></div>
                        </div>
                        <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[18%]"></div>
                      </div>
                      <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col h-[61px] md:h-auto items-center justify-center px-[2.77px] py-[8.31px] right-[0] w-[69px]">
                        <div className="bg-blue-700_01 flex flex-col items-center justify-center px-[2.77px] py-[4.43px] w-full">
                          <Text
                            className="text-[5px] text-white-A700 w-auto"
                            size="txtPoppinsRegular5"
                          >
                            {props?.timeTen}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[14%]"></div>
                  </div>
                </div>
                <div className="absolute bg-white-A700 bottom-[6%] h-[103px] md:h-[61px] inset-x-[0] mx-auto w-[523px] sm:w-full">
                  <div className="absolute md:h-[61px] h-[97px] left-[0] top-[0] w-[88%] sm:w-full">
                    <div className="absolute md:h-[61px] h-[91px] left-[0] top-[0] w-[86%] sm:w-full">
                      <div className="absolute md:h-[61px] h-[85px] left-[0] top-[0] w-[84%]">
                        <div className="absolute md:h-[61px] h-[79px] left-[0] top-[0] w-[81%]">
                          <div className="absolute md:h-[61px] h-[73px] left-[0] top-[0] w-[76%]">
                            <div className="absolute md:h-[61px] h-[67px] left-[0] top-[0] w-[68%]">
                              <div className="absolute border border-gray-300 border-solid flex flex-col h-[61px] md:h-auto items-center justify-center left-[0] px-[2.77px] py-[8.31px] top-[0] w-[69px]">
                                <Text
                                  className="text-[10px] text-black-900 text-center w-[42px]"
                                  size="txtPoppinsRegular10"
                                >
                                  {props?.timeEleven}
                                </Text>
                              </div>
                              <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[52%]"></div>
                            </div>
                            <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col h-[61px] md:h-auto items-center justify-center px-[2.77px] py-[8.31px] right-[0] w-[69px]">
                              <div className="bg-red-900 flex flex-col items-center justify-center px-[2.77px] py-[4.43px] w-full">
                                <Text
                                  className="text-[5px] text-white-A700 w-auto"
                                  size="txtPoppinsRegular5"
                                >
                                  {props?.timeTwelve}
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[27%]"></div>
                        </div>
                        <div className="absolute border border-gray-300 border-solid bottom-[0] flex flex-col h-[61px] md:h-auto items-center justify-center px-[2.77px] py-[8.31px] right-[0] w-[69px]">
                          <div className="bg-red-400 flex flex-col items-center justify-center px-[2.77px] py-[4.43px] w-full">
                            <Text
                              className="text-[5px] text-white-A700 w-auto"
                              size="txtPoppinsRegular5"
                            >
                              {props?.timeThirteen}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[18%]"></div>
                    </div>
                    <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[16%]"></div>
                  </div>
                  <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[0] w-[14%]"></div>
                </div>
              </div>
              <div className="absolute bottom-[0] md:h-[103px] h-[71px] left-[0] w-[523px] sm:w-full">
                <div className="flex md:h-[103px] h-[71px] justify-end m-auto w-full">
                  <div className="h-[103px] mt-auto mx-auto w-full">
                    <div className="h-[103px] m-auto w-full">
                      <div className="h-[103px] m-auto w-full">
                        <div className="h-[103px] m-auto w-full">
                          <div className="h-[103px] m-auto w-full">
                            <div className="h-[103px] m-auto w-full">
                              <div className="absolute bg-white-A700 h-[103px] inset-[0] m-auto w-full"></div>
                              <div className="absolute border border-gray-300 border-solid flex flex-col h-[61px] md:h-auto items-center justify-center left-[0] px-[2.77px] py-[8.31px] top-[0] w-[69px]">
                                <Text
                                  className="text-[10px] text-black-900 text-center w-[39px]"
                                  size="txtPoppinsRegular10"
                                >
                                  {props?.timeFourteen}
                                </Text>
                              </div>
                            </div>
                            <div className="absolute border border-gray-300 border-solid h-[61px] left-[12%] top-[6%] w-[14%]"></div>
                          </div>
                          <div className="absolute border border-gray-300 border-solid h-[61px] left-1/4 top-[12%] w-[14%]"></div>
                        </div>
                        <div className="absolute border border-gray-300 border-solid flex flex-col h-[61px] md:h-auto items-center justify-center left-[37%] px-[2.77px] py-[8.31px] top-[17%] w-[69px]">
                          <div className="bg-orange-A200_01 flex flex-col items-center justify-center px-[2.77px] py-[4.43px] w-full">
                            <Text
                              className="text-[5px] text-white-A700 w-auto"
                              size="txtPoppinsRegular5"
                            >
                              {props?.timeFifteen}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute border border-gray-300 border-solid bottom-[17%] h-[61px] right-[37%] w-[14%]"></div>
                    </div>
                    <div className="absolute border border-gray-300 border-solid bottom-[11%] flex flex-col h-[61px] md:h-auto items-center justify-center px-[2.77px] py-[8.31px] right-1/4 w-[69px]">
                      <div className="bg-cyan-300 flex flex-col items-center justify-center px-[2.77px] py-[4.43px] w-full">
                        <Text
                          className="text-[5px] text-white-A700 w-auto"
                          size="txtPoppinsRegular5"
                        >
                          {props?.timeSixteen}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute border border-gray-300 border-solid bottom-[0] h-[61px] right-[12%] w-[14%]"></div>
                </div>
                <div className="absolute border border-gray-300 border-solid bottom-[0] h-[29px] right-[0] w-[14%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnsettings.defaultProps = {
  schedulingpubliOne: (
    <>
      Scheduling & <br />
      publishing Content
    </>
  ),
  descriptionTwo:
    "Social media content delivery may be streamlined with the help of publishing and scheduling solutions, freeing up your team to concentrate on improving strategy and fostering stronger connections with consumers.",
  today: "Today",
  back: "Back",
  next: "Next",
  p10july202216: "10 July 2022 - 16 July 2022",
  month: "Month",
  week: "Week",
  day: "Day",
  duration: (
    <Text
      className="max-w-[59px] md:max-w-full text-[6.64px] text-black-900 text-center"
      size="txtPoppinsRegular664"
    >
      <span className="text-black-900 font-poppins text-[5.54px] font-normal">
        <>
          Sunday 07/10
          <br />
        </>
      </span>
      <span className="text-black-900 font-poppins text-[3.88px] font-light">
        0 Task(s)
      </span>
    </Text>
  ),
  durationOne: (
    <Text
      className="max-w-[59px] md:max-w-full text-[6.64px] text-black-900 text-center"
      size="txtPoppinsRegular664"
    >
      <span className="text-black-900 font-poppins text-[5.54px] font-normal">
        <>
          Monday 07/11
          <br />
        </>
      </span>
      <span className="text-black-900 font-poppins text-[3.88px] font-light">
        0 Task(s)
      </span>
    </Text>
  ),
  durationTwo: (
    <Text
      className="max-w-[59px] md:max-w-full text-[6.64px] text-black-900 text-center"
      size="txtPoppinsRegular664"
    >
      <span className="text-black-900 font-poppins text-[5.54px] font-normal">
        <>
          Tuesday 07/12
          <br />
        </>
      </span>
      <span className="text-black-900 font-poppins text-[3.88px] font-light">
        0 Task(s)
      </span>
    </Text>
  ),
  durationThree: (
    <Text
      className="max-w-[59px] md:max-w-full text-[6.64px] text-black-900 text-center"
      size="txtPoppinsRegular664"
    >
      <span className="text-black-900 font-poppins text-[5.54px] font-normal">
        <>
          Wednesday 07/13
          <br />
        </>
      </span>
      <span className="text-black-900 font-poppins text-[3.88px] font-light">
        0 Task(s)
      </span>
    </Text>
  ),
  durationFour: (
    <Text
      className="max-w-[59px] md:max-w-full text-[6.64px] text-black-900 text-center"
      size="txtPoppinsRegular664"
    >
      <span className="text-black-900 font-poppins text-[5.54px] font-normal">
        <>
          Thursday 07/14
          <br />
        </>
      </span>
      <span className="text-black-900 font-poppins text-[3.88px] font-light">
        0 Task(s)
      </span>
    </Text>
  ),
  durationFive: (
    <Text
      className="max-w-[59px] md:max-w-full text-[6.64px] text-black-900 text-center"
      size="txtPoppinsRegular664"
    >
      <span className="text-black-900 font-poppins text-[5.54px] font-normal">
        <>
          Friday 07/15
          <br />
        </>
      </span>
      <span className="text-black-900 font-poppins text-[3.88px] font-light">
        0 Task(s)
      </span>
    </Text>
  ),
  durationSix: (
    <Text
      className="max-w-[59px] md:max-w-full text-[6.64px] text-black-900 text-center"
      size="txtPoppinsRegular664"
    >
      <span className="text-black-900 font-poppins text-[5.54px] font-normal">
        <>
          Saturday 07/16
          <br />
        </>
      </span>
      <span className="text-black-900 font-poppins text-[3.88px] font-light">
        0 Task(s)
      </span>
    </Text>
  ),
  time: "6:00 AM",
  timeOne: "06:00 AM - 02:00 PM",
  p0600am1200pm: "06:00 AM - 12:00 PM",
  timeTwo: "06:00 AM - 11:00 AM",
  timeThree: "7:00 AM",
  timeFour: "07:00 AM - 12:00 PM",
  timeFive: "8:00 AM",
  timeSix: "08:00 AM - 02:00 PM",
  timeSeven: "08:00 AM - 04:00 PM",
  timeEight: "9:00 AM",
  timeNine: "09:00 AM - 06:00 PM",
  timeTen: "09:00 AM - 04:00 PM",
  timeEleven: "10:00 AM",
  timeTwelve: "10:00 AM - 03:00 PM",
  timeThirteen: "10:00 AM - 02:00 PM",
  timeFourteen: "11:00 AM",
  timeFifteen: "11:00 AM - 05:00 PM",
  timeSixteen: "11:00 AM - 02:00 PM",
};

export default FielmenteLandingPageAlmostFinalColumnsettings;
