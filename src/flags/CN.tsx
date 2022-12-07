import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function CNFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-l9fjcwqmn" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-l9fjcwqmn)">
          <path fill="#e31d1c" d="M0 0h32v24H0z" />
          <path
            fill="#feca00"
            d="M15.016 4.548l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19zM7.018 9.607l-2.881 1.551.657-3.026-2.4-2.265 3.25-.123 1.374-2.826 1.374 2.826h3.243L9.24 8.132l.72 3.026zm9.998-1.059l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19zm-1 4l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19zm-3 3l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19z"
          />
        </g>
      </svg>
    </Box>
  );
}
