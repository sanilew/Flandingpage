import React from "react";

import { Button } from "components";

const FielmenteLandingPageAlmostFinalColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-[1435px] w-full">
          <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start w-auto md:w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-generalsans leading-[normal] min-w-[79px] rounded-[21px] text-base text-center"
              color="gray_900_01"
              size="md"
              variant="fill"
            >
              {props?.all}
            </Button>
            <Button
              className="!text-gray-900_01 cursor-pointer font-generalsans leading-[normal] min-w-[122px] rounded-[21px] text-base text-center"
              color="gray_100"
              size="md"
              variant="fill"
            >
              {props?.services}
            </Button>
            <Button
              className="!text-gray-900_01 cursor-pointer font-generalsans leading-[normal] min-w-[185px] rounded-[21px] text-base text-center"
              color="gray_100"
              size="md"
              variant="fill"
            >
              {props?.paymentmethod}
            </Button>
            <Button
              className="!text-black-900 cursor-pointer font-generalsans leading-[normal] min-w-[182px] rounded-[21px] text-base text-center"
              color="gray_100"
              size="md"
              variant="fill"
            >
              {props?.paymentmodule}
            </Button>
            <Button
              className="!text-black-900 cursor-pointer font-generalsans leading-[normal] min-w-[143px] rounded-[21px] text-base text-center"
              color="gray_100"
              size="md"
              variant="fill"
            >
              {props?.ourclients}
            </Button>
            <Button
              className="!text-black-900 cursor-pointer font-generalsans leading-[normal] min-w-[161px] rounded-[21px] text-base text-center"
              color="gray_100"
              size="md"
              variant="fill"
            >
              {props?.pressrelease}
            </Button>
            <Button
              className="!text-gray-900_01 cursor-pointer font-generalsans leading-[normal] min-w-[189px] rounded-[21px] text-base text-center"
              color="gray_100"
              size="md"
              variant="fill"
            >
              {props?.accountmanager}
            </Button>
            <Button
              className="!text-black-900 cursor-pointer font-generalsans leading-[normal] min-w-[140px] rounded-[21px] text-base text-center"
              color="gray_100"
              size="md"
              variant="fill"
            >
              {props?.readfaqs}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumnOne.defaultProps = {
  all: "All",
  services: "Services",
  paymentmethod: "Payment Method",
  paymentmodule: "Payment Module",
  ourclients: "Our Clients",
  pressrelease: "Press Release",
  accountmanager: "Account Manager ",
  readfaqs: "Read FAQs",
};

export default FielmenteLandingPageAlmostFinalColumnOne;
