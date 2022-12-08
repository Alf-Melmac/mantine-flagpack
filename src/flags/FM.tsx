import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function FMFlag({ radius, sx, ...others }: FlagProps) {
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
        <defs>
          <mask id="mantine-mkch3xqg5" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-ser4c27ja" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-u7apaiv26" />
          </mask>
          <path id="mantine-u7apaiv26" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-mkch3xqg5)">
          <use fill="#63b3e1" xlinkHref="#mantine-u7apaiv26" />
          <g fill="#f7fcff" mask="url(#mantine-ser4c27ja)">
            <path d="M16 7.3l-1.763.927.336-1.963-1.426-1.391 1.971-.287L16 2.8l.882 1.786 1.971.287-1.426 1.39.336 1.964zm0 12l-1.763.927.336-1.963-1.426-1.391 1.971-.287L16 14.8l.882 1.786 1.971.287-1.426 1.39.336 1.964zm-6.2-5.8l-1.763.927.336-1.963-1.426-1.391 1.971-.287L9.8 9l.882 1.786 1.971.287-1.426 1.39.336 1.964zm12.2 0l-1.763.927.336-1.963-1.426-1.391 1.971-.287L22 9l.882 1.786 1.971.287-1.426 1.39.336 1.964z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
