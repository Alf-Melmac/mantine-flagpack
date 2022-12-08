import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function CCFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-okus46v5n" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-okus46v5n)">
          <path fill="#5eaa22" d="M0 0h32v24H0z" />
          <g fill="#feca00">
            <path d="M24 7l-1 .732.134-1.232L22 6l1.134-.5L23 4.268 24 5l1-.732-.134 1.232L26 6l-1.134.5L25 7.732zm-1.037 6.679l-1 .732.134-1.232-1.134-.5 1.134-.5-.134-1.232 1 .732 1-.732-.134 1.232 1.134.5-1.134.5.134 1.232zM26 19l-1 .732.134-1.232L24 18l1.134-.5L25 16.268 26 17l1-.732-.134 1.232L28 18l-1.134.5.134 1.232zm1-9.5l-.5.366.067-.616L26 9l.567-.25-.067-.616.5.366.5-.366-.067.616L28 9l-.567.25.067.616z" />
            <circle cx="5" cy="5" r="5" transform="translate(2 4)" />
            <path d="M16.794 9c1.598 0 2.873.56 3.458 2.082-.463-.459-1.18-.774-2.252-.734-1.657 0-2.735 1.29-2.735 2.395S16.343 15.35 18 15.35c.834-.012 1.45-.165 1.9-.405-.66 1.13-1.706 1.643-3.106 1.643a3.794 3.794 0 110-7.587z" />
          </g>
          <path
            fill="#915e2b"
            fillRule="nonzero"
            d="M7.582 8.694c-.651 2.387-1.112 3.694-1.38 3.92-.12.052.42.052 1.618 0-.45-.197-.595-.426-.437-.688.238-.392.548-2.916.437-3.776-.074-.574-.153-.392-.238.544z"
          />
          <path
            fill="#5eaa22"
            d="M7.79 8.827c.7.21 1.049.493 1.049.85 0 .536.872 1.289.872.576s-.163-1.426-.518-1.426c-.354 0 .174-.48.477-.082.303.399 1.366-.037 1.15-.316S9.838 7.8 9.71 7.8s.873-.68 0-.68c-.871 0-.371.58-.962-.036s.252.3.252-.736-.24-1.46-1.029-.878-.638.213-.919-.006-.528.803-.218 1.012c.309.208.652.726.342.726s-.527-.299-.527-.513c0-.213-.841-.591-1.64-.591-.799 0-.282.591 0 .591s1.544.43.913.43.049-.318-.747-.318-1.72-.362-1.72.318c0 .681.795.983 1.043.681.248-.301.536-.81.536-.302 0 .507-.633.3-1.58.615-.945.315-.674 1.145.455.942 1.128-.203 1.006-.192 1.46-.507.452-.314 1.013-.227.553.278-.46.504-.92 1.426-.46 1.426s.757.125.757-.362.267-1.436.267-.835.348 1.053.657.835c.31-.219-.072-.902.28-.902.236 0 .358-.054.367-.162z"
          />
        </g>
      </svg>
    </Box>
  );
}
