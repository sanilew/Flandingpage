module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_7f: "#ffffff7f", A700_bf: "#ffffffbf", A700: "#ffffff" },
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_0c": "#0000000c",
          "900_19": "#00000019",
        },
        cyan: { 300: "#5dc5e6", "300_99": "#5dc5e699" },
        blue: {
          700: "#3776d4",
          A400: "#337fff",
          A200: "#348af7",
          "700_01": "#3675d4",
        },
        red: {
          400: "#e65d5d",
          600: "#ec3333",
          900: "#9e1111",
          A700: "#ff0000",
          "400_01": "#c74c4d",
        },
        light_green: { A700: "#6dd61a" },
        deep_purple: { 400: "#893bd1", 500: "#7024c4" },
        green: { A700: "#0dbe5e" },
        yellow: { 800: "#f6af24" },
        pink: {
          400: "#e2576f",
          A700: "#c21975",
          "400_02": "#f75274",
          "400_01": "#d53692",
        },
        gray: {
          50: "#fafafa",
          100: "#f7f7f7",
          200: "#eaeaea",
          300: "#dedede",
          400: "#bdbdbd",
          500: "#a5a5a5",
          700: "#686363",
          900: "#110d3c",
          "200_01": "#e8e8e8",
          "200_02": "#ebebeb",
          "800_7f": "#4040407f",
          "200_03": "#f0f0f0",
          "400_05": "#c1c1c1",
          "400_01": "#c4c4c4",
          "400_02": "#c3c3c3",
          "100_01": "#f4f4f4",
          "400_03": "#c6c6c6",
          "400_04": "#cacaca",
          "500_01": "#9a9a9a",
          "500_03": "#adadad",
          "500_02": "#a0a0a0",
          "900_01": "#14103d",
          "300_02": "#dddddd",
          "300_01": "#e0e0e0",
        },
        deep_orange: { 500: "#ff5812" },
        purple: { 400: "#8f39ce", A200: "#d35de6" },
        teal: { A700: "#00bf86" },
        orange: {
          300: "#fcbb45",
          A200: "#f6a936",
          A200_01: "#f29d38",
          A200_02: "#e09b3d",
        },
        blue_gray: {
          100: "#d7d7d7",
          "100_01": "#d9d9d9",
          "100_02": "#d3d3d3",
          "100_03": "#cecece",
          "100_04": "#d6d6d6",
        },
        light_blue: { A200: "#33ccff" },
        indigo: { A200: "#5b4fe9" },
        amber: { 200: "#fbe18a", 600: "#fdb201" },
      },
      boxShadow: {
        bs9: "0px 4px  4px 0px #0000000c",
        bs4: "0px 4px  15px 0px #0000007f",
        bs5: "0px 4px  16px 0px #00000019",
        bs3: "0px 1.73px  8px 0px #00000019",
        bs8: "0px 6.49px  21px 0px #4040407f",
        bs2: "0px 3.23px  16px 0px #00000019",
        bs1: "0px 3.27px  13px 0px #00000019",
        bs: "0px 4.33px  32px 0px #00000019",
        bs6: "0px 6.17px  33px 0px #00000019",
        bs7: "0px 8.08px  50px 0px #00000019",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(315deg ,#fbe18a,#fcbb45,#f75274,#d53692,#8f39ce,#5b4fe9)",
        gradient1: "linear-gradient(180deg ,#e2576f,#893bd1)",
      },
      fontFamily: {
        generalsans: "General Sans",
        poppins: "Poppins",
        roboto: "Roboto",
        greatvibes: "Great Vibes",
        inter: "Inter",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
