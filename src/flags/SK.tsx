import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function SKFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-j60ha8rf0" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-nvabv4xcg" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-8c9womigi" />
          </mask>
          <mask id="mantine-r15rvev6t" fill="#fff">
            <path
              fillRule="evenodd"
              d="M9.873 7.04c.18-1.295.09-3.632-.27-7.01H.346C.1 3.652.048 5.99.188 7.04c.21 1.578 1.163 5.042 4.79 6.608 3.461-1.547 4.626-4.664 4.895-6.607z"
            />
          </mask>
          <path id="mantine-8c9womigi" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-j60ha8rf0)">
          <use fill="#3d58db" xlinkHref="#mantine-8c9womigi" />
          <path fill="#f7fcff" d="M0 0h32v8H0z" mask="url(#mantine-nvabv4xcg)" />
          <path fill="#e31d1c" d="M0 16h32v8H0z" mask="url(#mantine-nvabv4xcg)" />
          <g mask="url(#mantine-nvabv4xcg)">
            <path
              stroke="#fff"
              d="M16.053 5.53c.406 3.679.506 6.205.316 7.58-.286 2.058-1.522 5.356-5.187 6.995-4.245-1.658-5.266-5.324-5.49-6.998-.147-1.111-.09-3.636.186-7.577z"
            />
            <path
              fill="#f7fcff"
              d="M4.257.59c.138.21.237.475.299.795s.098.763.108 1.324l-1.958-.24v1.485l2.002-.255-.032 1.41a4.79 4.79 0 01-1.09 0c-.328-.042-.815-.15-1.46-.323v1.7c.655-.21 1.142-.338 1.46-.386a4.12 4.12 0 011.09 0v2.088h.813V6.1c.592-.052 1.065-.05 1.419.006.353.056.697.182 1.033.38v-1.7c-.34.17-.67.275-.99.317-.32.042-.808.044-1.462.005l.032-1.41c.444-.045.79-.051 1.039-.018.248.034.529.125.84.274V2.468c-.304.165-.575.263-.814.293-.238.03-.608.013-1.109-.052.01-.58.04-1.01.09-1.293A2.77 2.77 0 015.863.59z"
              mask="url(#mantine-r15rvev6t)"
              transform="translate(6 6)"
            />
            <path
              fill="#2e42a5"
              d="M.897 10.245c.293-.629.678-1.003 1.155-1.122.477-.12.965.067 1.465.561.305-.998.83-1.496 1.574-1.496s1.247.498 1.508 1.496c.317-.374.704-.561 1.16-.561s.897.374 1.32 1.122c-1.364 2.476-2.727 3.714-4.09 3.714S2.26 12.72.896 10.245z"
              mask="url(#mantine-r15rvev6t)"
              transform="translate(6 6)"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
