/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg {...props} width="48" height="48" data-testid="uniswap-logo" viewBox="0 0 2000 1858.24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="0" x2="2000" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop stopColor="#21bbc0" />
          <stop offset=".34" stopColor="#20b9c0"/>
          <stop offset="1" stopColor="#1387c9" />
        </linearGradient>
      </defs>
      <path d="M135.83,740.32l875.06,551.4a1.67,1.67,0,0,0,1.91,0l892.7-563.89a1.68,1.68,0,0,0,.5-2.42,1.21,1.21,0,0,0-.5-0.5L1021,161.21a1.67,1.67,0,0,0-1.91,0L135.83,737.3a1.81,1.81,0,0,0-.3,2.62A1.39,1.39,0,0,0,135.83,740.32ZM1010.9,1938.24a60.11,60.11,0,0,1-32.75-9.67L41,1325.07a1.84,1.84,0,0,1,0-2.42l39.9-62.07a1.84,1.84,0,0,1,2.42,0l927.16,597.15a1.67,1.67,0,0,0,1.91,0l878.69-564.6a69.81,69.81,0,0,0,32.25-59v-139a1.88,1.88,0,0,0-1.91-1.71,2.37,2.37,0,0,0-.81.2l-887.46,565.2a60.62,60.62,0,0,1-65,0L71.34,1088.27A152,152,0,0,1,0,959.39V764.91a60.31,60.31,0,0,1,17-42.12l3-2.42,17.23-11.79,951.34-620,1-.6a60.5,60.5,0,0,1,62.48,1.51l919.7,585.86a60.68,60.68,0,0,1,0,102.48l-927.56,585.66a61,61,0,0,1-64.49,0L79.91,797a1.79,1.79,0,0,0-2.42.6,1.5,1.5,0,0,0-.2.91V959.29A75.13,75.13,0,0,0,112.15,1023l887.66,564.2a1.67,1.67,0,0,0,1.91,0l905.39-577.6a60.37,60.37,0,0,1,73,6,62.75,62.75,0,0,1,19.45,47.26v170.6a147.19,147.19,0,0,1-67.72,124.35l-888.67,571a61.91,61.91,0,0,1-32.25,9.37h0Z" transform="translate(0-80)" fill="url(#0)"/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
