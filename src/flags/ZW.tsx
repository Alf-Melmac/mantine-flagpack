import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function ZWFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
        <defs>
          <mask id="mantine-x8j0n86c2" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-84v9e9mxr" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-caujn08o3" />
          </mask>
          <mask id="mantine-0jj3prw39" fill="#fff">
            <path fillRule="evenodd" d="M0 0v24l16.331-11.848z" />
          </mask>
          <path id="mantine-caujn08o3" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-x8j0n86c2)">
          <use fill="#f7fcff" xlinkHref="#mantine-caujn08o3" />
          <path fill="#feca00" d="M0 2h32v20H0z" mask="url(#mantine-84v9e9mxr)" />
          <path
            fill="#272727"
            stroke="#e31d1c"
            strokeWidth="3.5"
            d="M-1.75 8.25h35.5v7.5h-35.5z"
            mask="url(#mantine-84v9e9mxr)"
          />
          <path fill="#5eaa22" d="M32 20v4H0v-4zm0-20v4H0V0z" mask="url(#mantine-84v9e9mxr)" />
          <path stroke="#272727" strokeWidth="2" d="M-1-1.99l19.02 14.152L-1 25.961z" />
          <g mask="url(#mantine-0jj3prw39)">
            <path
              fill="#e31d1c"
              d="M7.478 14.278L3.7 17.328l1.733-4.076-2.979-2.868H5.97l1.443-3.459 1.532 3.459h3.51l-3.136 2.868 1.57 4.077z"
            />
            <path
              fill="#feca00"
              d="M5.018 8.421c-.037-.088.053-.17.269-.249.323-.117.422-.364.676-.182.254.182.413-.184.486.342.048.35.14.802.273 1.355l3.288 2.47h-.618c-.641.942-.909 1.827-.803 2.653a10.54 10.54 0 00-1.563-.1c-.6 0-1.096.071-1.489.215l-.52-1.924c.126-.215.216-.41.27-.583.08-.26.415-.309.415-.516s-.33-.38-.165-.917c.11-.358.165-1.071.165-2.141-.348-.153-.486-.23-.415-.23.106 0 .348-.193.174-.193h-.443z"
            />
            <path
              stroke="#0a0a0a"
              strokeWidth=".25"
              d="M5.82 8.097c.252.095.34.076.415.065.015-.002.03-.007.042-.006a.517.517 0 01.048.193c.05.363.145.833.286 1.41l3.024 2.273h-.309c-.647.932-.936 1.81-.877 2.633a11.09 11.09 0 00-1.423-.08c-.553 0-1.02.06-1.403.18l-.471-1.746c.117-.207.202-.395.254-.564.032-.103.119-.159.191-.213.135-.101.23-.2.23-.34a.574.574 0 00-.095-.272c-.074-.131-.17-.3-.075-.608.112-.364.17-1.09.17-2.178V8.83c-.043-.362-.047-.603-.007-.733z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
