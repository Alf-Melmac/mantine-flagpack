import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function LAFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-cee7ycswv" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-cee7ycswv)">
          <path fill="#e31d1c" d="M0 16h32v6a2 2 0 01-2 2H2a2 2 0 01-2-2z" />
          <path fill="#2e42a5" d="M0 8h32v8H0z" />
          <path fill="#e31d1c" d="M2 0h28a2 2 0 012 2v6H0V2a2 2 0 012-2z" />
          <circle cx="16" cy="11.99" r="3.75" fill="#f7fcff" />
        </g>
      </svg>
    </Box>
  );
}
