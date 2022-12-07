import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function USFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-jfp5m0i74" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-jfp5m0i74)">
          <path fill="#f7fcff" d="M0 0h32v24H0z" />
          <path
            fill="#e31d1c"
            d="M0 14.667h32v2H0zm0 3.666h32v2H0zm0-11h32v2H0zM0 22h32v2H0zm0-11h32v2H0zM0 0h32v2H0zm0 3.667h32v2H0z"
          />
          <path fill="#2e42a5" d="M0 0h20v13H0z" />
          <path
            fill="#f7fcff"
            d="M1.721 9.229l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm-14-2l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm-6-2l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm-12 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm12 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm-14-2l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm-14-2l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842zm4 0l.331.739h.718l-.564.574.218.906-.702-.51-.726.51.245-.906-.644-.574h.842z"
          />
        </g>
      </svg>
    </Box>
  );
}
