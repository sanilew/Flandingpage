import React from "react";

import { Img, List, Text } from "components";

const FielmenteLandingPageAlmostFinalListblue = (props) => {
  return (
    <>
      <List className={props.className} orientation="horizontal">
        <div className="flex flex-col gap-[25.43px] items-center justify-center w-auto">
          <div className="h-[673px] relative w-full">
            <Img
              className="absolute h-[673px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_blue.png"
              alt="blue"
            />
            <Img
              className="absolute h-[642px] inset-[0] justify-center m-auto object-cover w-[90%]"
              src="images/img_mockup.png"
              alt="mockup"
            />
          </div>
          <Text
            className="sm:text-[16.34px] md:text-[18.34px] text-[20.34px] text-black-900 w-auto"
            size="txtGeneralSansSemibold2034"
          >
            {props?.thehakkaclubargOne}
          </Text>
        </div>
        <div className="flex flex-col gap-[25.43px] items-center justify-center w-auto">
          <div className="h-[673px] relative w-full">
            <Img
              className="absolute h-[673px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_blue.png"
              alt="blue"
            />
            <Img
              className="absolute h-[642px] inset-[0] justify-center m-auto object-cover w-[90%]"
              src="images/img_mockup_642x296.png"
              alt="mockup"
            />
          </div>
          <Text
            className="sm:text-[16.34px] md:text-[18.34px] text-[20.34px] text-black-900 w-auto"
            size="txtGeneralSansSemibold2034"
          >
            {props?.mahabirpalace}
          </Text>
        </div>
        <div className="flex flex-col gap-[25.43px] items-center justify-center w-auto">
          <div className="h-[673px] relative w-full">
            <Img
              className="absolute h-[673px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_blue.png"
              alt="blue"
            />
            <Img
              className="absolute h-[642px] inset-[0] justify-center m-auto object-cover w-[90%]"
              src="images/img_mockup_1.png"
              alt="mockup"
            />
          </div>
          <Text
            className="sm:text-[16.34px] md:text-[18.34px] text-[20.34px] text-black-900 w-auto"
            size="txtGeneralSansSemibold2034"
          >
            {props?.oakclimbingresoOne}
          </Text>
        </div>
        <div className="flex flex-col gap-[25.43px] items-center justify-center w-auto">
          <div className="h-[673px] relative w-full">
            <Img
              className="absolute h-[673px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_blue.png"
              alt="blue"
            />
            <Img
              className="absolute h-[642px] inset-[0] justify-center m-auto object-cover w-[90%]"
              src="images/img_mockup_2.png"
              alt="mockup"
            />
          </div>
          <Text
            className="sm:text-[16.34px] md:text-[18.34px] text-[20.34px] text-black-900 w-auto"
            size="txtGeneralSansSemibold2034"
          >
            {props?.donergyros}
          </Text>
        </div>
      </List>
    </>
  );
};

FielmenteLandingPageAlmostFinalListblue.defaultProps = {
  thehakkaclubargOne: "The hakkaclub_argentia",
  mahabirpalace: "Mahabir Palace",
  oakclimbingresoOne: "Oak climbing resort",
  donergyros: "Doner & Gyros",
};

export default FielmenteLandingPageAlmostFinalListblue;
