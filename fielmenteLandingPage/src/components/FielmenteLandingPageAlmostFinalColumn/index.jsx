import React from "react";

import { Button, Img, Text } from "components";

const FielmenteLandingPageAlmostFinalColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[30px] items-center justify-start max-w-[1440px] pb-[50px] pt-[100px] w-full">
          <div className="flex flex-col gap-[15px] items-center justify-start w-auto md:w-full">
            <Img
              className="h-[130px] w-[268px]"
              src="images/img_logo.svg"
              alt="logo"
            />
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-full"
                size="txtGeneralSansSemibold48"
              >
                {props?.price}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start pr-0.5 pt-0.5">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtGeneralSansMedium24"
              >
                {props?.empowered60hote}
              </Text>
            </div>
          </div>
          <Button
            className="!text-white-A700 cursor-pointer font-generalsans font-medium leading-[normal] min-w-[338px] rounded-[31px] text-2xl md:text-[22px] text-center sm:text-xl"
            color="deep_orange_500"
            size="lg"
            variant="fill"
          >
            {props?.getyourquotenow}
          </Button>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumn.defaultProps = {
  price: (
    <>
      INNOVATING HOSPITALITY <br />
      SOLUTIONS DIGITALLY
    </>
  ),
  empowered60hote: <>Empowered 60+ Hotels & restaurants</>,
  getyourquotenow: "Get your quote now",
};

export default FielmenteLandingPageAlmostFinalColumn;
