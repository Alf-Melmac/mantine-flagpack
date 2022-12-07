import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function SNFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-zobrsi44j" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-zobrsi44j)">
          <path fill="#fbcd17" d="M10 0h12v24H10z" />
          <path
            fill="#006923"
            d="M16.075 14.49l-3.485 2.418 1.114-4.14-2.56-2.646 3.466-.143 1.465-4.095 1.466 4.095h3.46l-2.554 2.788 1.279 3.897z"
          />
          <path fill="#e11c1b" d="M22 0h10v24H22z" />
          <path fill="#006923" d="M0 0h10v24H0z" />
        </g>
      </svg>
    </Box>
  );
}
