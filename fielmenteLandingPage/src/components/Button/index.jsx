import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  round: "rounded-[11px]",
  circle: "rounded-[50%]",
};
const variants = {
  fill: {
    deep_orange_500: "bg-deep_orange-500",
    blue_A200: "bg-blue-A200",
    red_900: "bg-red-900",
    gray_900: "bg-gray-900",
    black_900: "bg-black-900 shadow-bs",
    white_A700: "bg-white-A700 text-black-900",
    red_A700: "bg-red-A700",
    blue_A400: "bg-blue-A400",
    gray_100: "bg-gray-100",
    light_blue_A200: "bg-light_blue-A200",
    gray_900_01: "bg-gray-900_01",
    gray_200_01: "bg-gray-200_01",
  },
  outline: {
    white_A700: "border border-solid border-white-A700",
    blue_gray_100_02: "border-blue_gray-100_02 border-solid border-y",
    gray_400_03: "border border-gray-400_03 border-solid",
  },
  gradient: { amber_200_indigo_A200: "bg-gradient " },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-2",
  md: "p-[11px]",
  lg: "p-3.5",
  xl: "p-[17px]",
  "2xl": "p-5",
  "3xl": "p-[27px] sm:px-5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round", "circle"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["fill", "outline", "gradient"]),
  color: PropTypes.oneOf([
    "deep_orange_500",
    "blue_A200",
    "red_900",
    "gray_900",
    "black_900",
    "white_A700",
    "red_A700",
    "blue_A400",
    "gray_100",
    "light_blue_A200",
    "gray_900_01",
    "gray_200_01",
    "blue_gray_100_02",
    "gray_400_03",
    "amber_200_indigo_A200",
  ]),
};

export { Button };
