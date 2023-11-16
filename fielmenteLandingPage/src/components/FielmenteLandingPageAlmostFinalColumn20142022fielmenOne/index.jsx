import React from "react";

import { Text } from "components";

const FielmenteLandingPageAlmostFinalColumn20142022fielmenOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[707px] items-start justify-between py-2.5 w-auto md:w-full">
          <Text
            className="text-base text-white-A700 uppercase w-auto"
            size="txtGeneralSansMedium16WhiteA700"
          >
            {props?.copyrighttext}
          </Text>
          <div className="flex flex-row gap-[25px] items-center justify-between w-1/4 md:w-full">
            <Text
              className="text-base text-white-A700 uppercase"
              size="txtGeneralSansMedium16WhiteA700"
            >
              {props?.termsandconditionstext}
            </Text>
            <Text
              className="text-base text-white-A700 uppercase"
              size="txtGeneralSansMedium16WhiteA700"
            >
              {props?.privacypolicytext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

FielmenteLandingPageAlmostFinalColumn20142022fielmenOne.defaultProps = {
  copyrighttext: <>© 2014-2022 Fielmente® All Rights Reserved</>,
  termsandconditionstext: "Terms and Conditions",
  privacypolicytext: "Privacy Policy",
};

export default FielmenteLandingPageAlmostFinalColumn20142022fielmenOne;
