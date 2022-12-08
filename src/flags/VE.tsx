import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function VEFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-lm6rtnrv7" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-p0xjsf4jl" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-gb44hpt6i" />
          </mask>
          <path id="mantine-gb44hpt6i" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-lm6rtnrv7)">
          <use fill="#2e42a5" xlinkHref="#mantine-gb44hpt6i" />
          <path fill="#feca00" d="M0 0h32v8H0z" mask="url(#mantine-p0xjsf4jl)" />
          <path fill="#e31d1c" d="M0 16h32v8H0z" mask="url(#mantine-p0xjsf4jl)" />
          <g fill="#f7fcff" mask="url(#mantine-p0xjsf4jl)">
            <path d="M13.718 8.822l.484 1.072h1.048l-.824.832.396 1.133-1.103-.557-.982.557.28-1.133-.01-.01-.819.828.396 1.133-1.102-.557-.983.557.012-.051-.471.477.396 1.133-1.103-.557-.225.127h.054l-.824.832.396 1.134-1.103-.558-.982.558.28-1.134-.94-.832h1.229l.412-1.072.484 1.072h.343l.174-.703-.941-.833h1.23l.412-1.072.483 1.072h.784l.18-.726-.94-.832h1.229l.412-1.073.484 1.073L13 10.71l-.924-.817h1.23zm4.524-.044l-.484 1.072H16.71l.824.833-.396 1.133 1.102-.558.983.558-.28-1.133.013-.013.82.83-.396 1.133 1.103-.557.983.557-.013-.051.472.477-.396 1.133 1.102-.557.225.127h-.053l.823.833-.396 1.133 1.103-.558.983.558-.28-1.133.94-.833h-1.229l-.412-1.072-.484 1.072h-.344l-.174-.703.942-.832h-1.23l-.412-1.073-.484 1.073-.784-.001-.18-.726.941-.832h-1.23l-.412-1.073-.483 1.073-1.042-.001.925-.817h-1.23z" />
            <path d="M15.833 10.535l-.983.557.28-1.133-.94-.832h1.23l.411-1.073.484 1.073h1.048l-.823.832.396 1.133z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
