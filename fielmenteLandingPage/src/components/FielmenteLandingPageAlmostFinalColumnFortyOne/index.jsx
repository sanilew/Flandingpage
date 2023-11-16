import React from "react";

import { Img, Text } from "components";

const FielmenteLandingPageAlmostFinalColumnFortyOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-5 items-center justify-center md:px-10 sm:px-5 px-[94px] w-auto md:w-full">
          <div className="border border-blue_gray-100_04 border-solid flex sm:flex-col flex-row md:gap-10 gap-[773px] items-center justify-center px-10 sm:px-5 py-5 rounded-[10px] w-auto md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
              size="txtGeneralSansMedium24Black900"
            >
              {props?.question1}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_editaddplus_black_900.svg"
              alt="editaddplus_One"
            />
          </div>
          <div className="border border-blue_gray-100_04 border-solid flex sm:flex-col flex-row md:gap-10 gap-[839px] items-center justify-start px-10 sm:px-5 py-5 rounded-[10px] w-auto md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
              size="txtGeneralSansMedium24Black900"
            >
              {props?.question2}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_editaddplus_black_900.svg"
              alt="editaddplus_Two"
            />
          </div>
          <div className="border border-blue_gray-100_04 border-solid flex sm:flex-col flex-row md:gap-10 gap-[732px] items-center justify-start max-w-[1276px] px-10 sm:px-5 py-5 rounded-[10px] w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
              size="txtGeneralSansMedium24Black900"
            >
              {props?.question3}
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_editaddplus_black_900.svg"
              alt="editaddplus_Three"
            />
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnFortyOne.defaultProps = {
  question1: "1. How can i Sign up with Filemente?",
  question2: "2. What are the commissions?",
  question3: "3. Do i get access to my customer data?",
};

export default FielmenteLandingPageAlmostFinalColumnFortyOne;
