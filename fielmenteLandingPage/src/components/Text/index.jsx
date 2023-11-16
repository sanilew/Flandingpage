import React from "react";

const sizeClasses = {
  txtGeneralSansMedium32: "font-generalsans font-medium",
  txtGeneralSansMedium1834: "font-generalsans font-medium",
  txtGeneralSansMedium16WhiteA700: "font-generalsans font-medium",
  txtGeneralSansMedium24Gray50002: "font-generalsans font-medium",
  txtGeneralSansMedium3634: "font-generalsans font-medium",
  txtGeneralSansRegular18: "font-generalsans font-normal",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtPoppinsRegular664: "font-normal font-poppins",
  txtGeneralSansRegular24WhiteA700: "font-generalsans font-normal",
  txtGeneralSansMedium24Black900: "font-generalsans font-medium",
  txtRobotoRomanRegular2207: "font-normal font-roboto",
  txtGeneralSansSemibold2034: "font-generalsans font-semibold",
  txtGeneralSansMedium28: "font-generalsans font-medium",
  txtGeneralSansMedium48: "font-generalsans font-medium",
  txtGeneralSansMedium24: "font-generalsans font-medium",
  txtGeneralSansSemibold18: "font-generalsans font-semibold",
  txtGeneralSansRegular16: "font-generalsans font-normal",
  txtGeneralSansSemibold32Gray90001: "font-generalsans font-semibold",
  txtGeneralSansSemibold48Black900: "font-generalsans font-semibold",
  txtGeneralSansSemibold3845: "font-generalsans font-semibold",
  txtGeneralSansMedium2615: "font-generalsans font-medium",
  txtGreatVibesRegular2586: "font-greatvibes font-normal",
  txtGeneralSansSemibold32: "font-generalsans font-semibold",
  txtGeneralSansRegular1923: "font-generalsans font-normal",
  txtGeneralSansMedium1223: "font-generalsans font-medium",
  txtGeneralSansMedium1223GreenA700: "font-generalsans font-medium",
  txtGeneralSansMedium2735: "font-generalsans font-medium",
  txtRobotoMedium1212: "font-medium font-roboto",
  txtInterBold13: "font-bold font-inter",
  txtGeneralSansMedium32Black900: "font-generalsans font-medium",
  txtGeneralSansSemibold32WhiteA700: "font-generalsans font-semibold",
  txtRobotoRegular101: "font-normal font-roboto",
  txtPoppinsRegular5: "font-normal font-poppins",
  txtGeneralSansMedium18: "font-generalsans font-medium",
  txtGeneralSansSemibold24: "font-generalsans font-semibold",
  txtGeneralSansSemibold48: "font-generalsans font-semibold",
  txtGeneralSansMedium16: "font-generalsans font-medium",
  txtGeneralSansRegular24: "font-generalsans font-normal",
  txtGeneralSansRegular24Black900: "font-generalsans font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
