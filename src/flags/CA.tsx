import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function CAFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-aygotajge" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-aygotajge)">
          <path fill="#f7fcff" d="M8 0h16v24H8z" />
          <path
            fill="#e31d1c"
            d="M15.976 7L16 19h-.6l.368-2.97c-2.69.484-3.924.604-3.701.36.222-.244.397-.59.525-1.038L9 12.955c.378-.004.72-.098 1.028-.281.307-.183.153-.816-.461-1.9l1.813.264.687-.746 1.368 1.432h.615l-.615-3.28 1.103.615zm0 0l1.486 2.06 1.103-.617-.615 3.281h.615l1.368-1.432.687.746 1.813-.264c-.614 1.084-.768 1.717-.46 1.9.307.183.65.277 1.027.281l-3.592 2.397c.128.448.303.794.525 1.038.223.244-1.011.124-3.701-.36L16.6 19H16zM24 0h8v24h-8zM0 0h8v24H0z"
          />
        </g>
      </svg>
    </Box>
  );
}
