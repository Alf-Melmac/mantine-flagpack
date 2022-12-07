import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function HMFlag({ size = 40, radius, sx, ...others }: FlagProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          display: 'inline-block',
          overflow: 'hidden',
          lineHeight: 1,
          width: size,
          borderRadius: theme.fn.radius(radius),

          '& svg': {
            display: 'block',
          },
        }),
        ...packSx(sx),
      ]}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-3j26vy83a" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-zld9esm0p" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-slx0o4cz3" />
          </mask>
          <mask id="mantine-8vb3ih0f5" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-3nhh2wmca" />
          </mask>
          <path id="mantine-slx0o4cz3" d="M0 0h32v24H0z" />
          <path id="mantine-3nhh2wmca" d="M0 0h18v14H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-3j26vy83a)">
          <use fill="#2e42a5" xlinkHref="#mantine-slx0o4cz3" />
          <g mask="url(#mantine-zld9esm0p)">
            <use fill="#2b409a" xlinkHref="#mantine-3nhh2wmca" />
            <g mask="url(#mantine-8vb3ih0f5)">
              <g fillRule="nonzero">
                <path
                  fill="#f7fcff"
                  d="M-2.004 13l3.96 1.737L18.09 1.889l2.09-2.582-4.236-.58-6.58 5.536-5.297 3.73z"
                />
                <path fill="#f50100" d="M-1.462 14.217l2.018 1.008L19.429-.933h-2.833z" />
                <path
                  fill="#f7fcff"
                  d="M20.004 13l-3.96 1.737L-.09 1.889-2.18-.693l4.236-.58 6.58 5.536 5.297 3.73z"
                />
                <path
                  fill="#f50100"
                  d="M19.87 13.873l-2.019 1.008-8.036-6.917-2.383-.773L-2.38-.684H.453l9.807 7.688 2.605.926z"
                />
              </g>
              <path
                fill="#f50100"
                stroke="#f7fcff"
                strokeWidth="1.5"
                d="M10.735-.75v6h8.015v3.5h-8.016v6h-3.5v-6H-.75v-3.5h7.984v-6z"
              />
            </g>
          </g>
          <g fill="#f7fcff" fillRule="nonzero" mask="url(#mantine-zld9esm0p)">
            <path d="M9 20.5l-1.302 1.203.13-1.768-1.753-.267 1.463-1.002-.883-1.536 1.694.519L9 16l.65 1.649 1.695-.52-.883 1.537 1.463 1.002-1.752.267.129 1.768zM22 13l-.868.802.086-1.179-1.168-.178.975-.668-.589-1.024 1.13.346L22 10l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179zm2-8l-.868.802.086-1.179-1.168-.178.975-.668-.589-1.024 1.13.346L24 2l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179zm5 4l-.868.802.086-1.179-1.168-.178.975-.668-.589-1.024 1.13.346L29 6l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179zm-4 13l-.868.802.086-1.179-1.168-.178.975-.668-.589-1.024 1.13.346L25 19l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179zm3.5-7.75l-.882.464.169-.982-.714-.696.986-.143L28.5 12l.44.893.987.143-.714.696.169.982z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
