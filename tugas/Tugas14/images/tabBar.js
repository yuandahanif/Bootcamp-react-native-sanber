import * as React from 'react';

function SvgComponent(props) {
  return (
    <svg width={414} height={67} viewBox="0 0 414 67" fill="none" {...props}>
      <g filter="url(#prefix__filter0_d)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M207 53c23.196 0 42-18.804 42-42h137c15.464 0 28 12.536 28 28v28H0V39c0-15.464 12.536-28 28-28h137c0 23.196 18.804 42 42 42z"
          fill="#fff"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={-10}
          y={0}
          width={434}
          height={76}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={-1} />
          <feGaussianBlur stdDeviation={5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgComponent;
