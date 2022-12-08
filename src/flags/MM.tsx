import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function MMFlag({ radius, sx, ...others }: FlagProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          display: 'inline-block',
          overflow: 'hidden',
          lineHeight: 1,
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
        <mask id="mantine-8em4s0v20" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-8em4s0v20)">
          <path fill="#e31d1c" d="M0 16h32v8H0z" />
          <path fill="#5eaa22" d="M0 8h32v8H0z" />
          <path fill="#ffd018" d="M0 0h32v8H0z" />
          <path
            fill="#f7fcff"
            d="M16.062 15.975l-5.15 3.275 1.727-5.733-3.674-3.745 5.065-.11 2.241-5.66 2.042 5.734 5.053.088-3.797 3.814 1.773 5.454z"
          />
        </g>
      </svg>
    </Box>
  );
}
