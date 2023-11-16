import React from "react";

import { Button, Img, List, Text } from "components";

const FielmenteLandingPageAlmostFinalSection2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-5 items-center justify-start px-3.5 w-auto md:w-full">
          <Button
            className="flex h-8 items-center justify-center rotate-[180deg] w-8"
            shape="circle"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <Img
              className="h-4"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
          </Button>
          <List
            className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 w-[94%] md:w-full"
            orientation="horizontal"
          >
            <div className="hover:cursor-pointer h-[286px] hover:relative relative hover:shadow-bs1 hover:w-full w-full">
              <Img
                className="absolute h-[286px] inset-[0] justify-center m-auto object-cover rounded-[13px] w-full"
                src="images/img_rectangle16.png"
                alt="rectangleSixteen"
              />
              <Text
                className="absolute h-max inset-[0] justify-center m-auto sm:text-[22.15px] md:text-[24.15px] text-[26.15px] text-white-A700 w-max"
                size="txtGeneralSansMedium2615"
              >
                {props?.hotels}
              </Text>
            </div>
            <div className="hover:cursor-pointer h-[286px] hover:relative relative hover:shadow-bs1 hover:w-full w-full">
              <Img
                className="absolute h-[286px] inset-[0] justify-center m-auto object-cover rounded-[13px] w-full"
                src="images/img_rectangle17.png"
                alt="rectangleSeventeen"
              />
              <Text
                className="absolute h-max inset-[0] justify-center m-auto sm:text-[22.15px] md:text-[24.15px] text-[26.15px] text-white-A700 w-max"
                size="txtGeneralSansMedium2615"
              >
                {props?.restaurants}
              </Text>
            </div>
            <div className="hover:cursor-pointer h-[286px] hover:relative relative rounded-[13px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <Img
                className="absolute h-[286px] inset-[0] justify-center m-auto object-cover rounded-[13px] w-full"
                src="images/img_rectangle17_286x216.png"
                alt="rectangleSeventeen"
              />
              <Text
                className="absolute h-max inset-[0] justify-center m-auto sm:text-[22.15px] md:text-[24.15px] text-[26.15px] text-white-A700 w-max"
                size="txtGeneralSansMedium2615"
              >
                {props?.cloudkitchens}
              </Text>
            </div>
            <div className="hover:cursor-pointer h-[286px] hover:relative relative rounded-[13px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <Img
                className="absolute h-[286px] inset-[0] justify-center m-auto object-cover rounded-[13px] w-full"
                src="images/img_rectangle16_286x216.png"
                alt="rectangleSixteen"
              />
              <Text
                className="absolute h-max inset-[0] justify-center m-auto sm:text-[22.15px] md:text-[24.15px] text-[26.15px] text-white-A700 w-max"
                size="txtGeneralSansMedium2615"
              >
                {props?.mealkits}
              </Text>
            </div>
            <div className="hover:cursor-pointer h-[286px] hover:relative relative rounded-[13px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <Img
                className="absolute h-[286px] inset-[0] justify-center m-auto object-cover rounded-[13px] w-full"
                src="images/img_rectangle16_1.png"
                alt="rectangleSixteen"
              />
              <Text
                className="absolute h-max inset-[0] justify-center m-auto sm:text-[22.15px] md:text-[24.15px] text-[26.15px] text-white-A700 w-max"
                size="txtGeneralSansMedium2615"
              >
                {props?.cafebakery}
              </Text>
            </div>
            <div className="hover:cursor-pointer h-[286px] hover:relative relative rounded-[13px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
              <Img
                className="absolute h-[286px] inset-[0] justify-center m-auto object-cover rounded-[13px] w-full"
                src="images/img_rectangle16_2.png"
                alt="rectangleSixteen"
              />
              <Text
                className="absolute h-max inset-[0] justify-center m-auto sm:text-[22.15px] md:text-[24.15px] text-[26.15px] text-white-A700 w-max"
                size="txtGeneralSansMedium2615"
              >
                {props?.hostels}
              </Text>
            </div>
          </List>
          <Button
            className="flex h-8 items-center justify-center w-8"
            shape="circle"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            <Img
              className="h-4"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </Button>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalSection2.defaultProps = {
  hotels: "Hotels",
  restaurants: "Restaurants",
  cloudkitchens: "Cloud kitchens",
  mealkits: "Meal Kits",
  cafebakery: "Cafe & Bakery",
  hostels: "Hostels",
};

export default FielmenteLandingPageAlmostFinalSection2;
