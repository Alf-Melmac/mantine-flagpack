import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function TVFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-ewzbjr6sf" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-jcs3sb7g7" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ror185dis" />
          </mask>
          <mask id="mantine-h6p2vwtk7" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-jj5ymvo8q" />
          </mask>
          <path id="mantine-ror185dis" d="M0 0h32v24H0z" />
          <path id="mantine-jj5ymvo8q" d="M0 0h18v14H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-ewzbjr6sf)">
          <use fill="#00b4ff" xlinkHref="#mantine-ror185dis" />
          <g mask="url(#mantine-jcs3sb7g7)">
            <use fill="#2b409a" xlinkHref="#mantine-jj5ymvo8q" />
            <g mask="url(#mantine-h6p2vwtk7)">
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
          <g fill="#ffd018" mask="url(#mantine-jcs3sb7g7)">
            <path d="M16.107 19.348l1.124.682.89-.534-.356 1.162 1.031.862-1.332.04-.607 1.125-.34-1.277-1.308-.163 1.007-.605zm-3.157-.207l.612 1.164H14.6l-.904.813.44 1.27-1.162-.652-1.1.652.366-1.27-1.037-.813h1.175zm7.157-1.793l1.124.682.89-.534-.356 1.162 1.031.862-1.332.04-.607 1.125-.34-1.277-1.308-.163 1.007-.605zm-4-2l1.124.682.89-.534-.356 1.162 1.031.862-1.332.04-.607 1.125-.34-1.277-1.308-.163 1.007-.605zm8 0l1.124.682.89-.534-.356 1.162 1.031.862-1.332.04-.607 1.125-.34-1.277-1.308-.163 1.007-.605zm2-2l1.124.682.89-.534-.356 1.162 1.031.862-1.332.04-.607 1.125-.34-1.277-1.308-.163 1.007-.605zm-6-2l1.124.682.89-.534-.356 1.162 1.031.862-1.332.04-.607 1.125-.34-1.277-1.308-.163 1.007-.605zm2-2l1.124.682.89-.534-.356 1.162 1.031.862-1.332.04-.607 1.125-.34-1.277-1.308-.163 1.007-.605zm4-2l1.124.682.89-.534-.356 1.162 1.031.862-1.332.04-.607 1.125-.34-1.277-1.308-.163 1.007-.605z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
