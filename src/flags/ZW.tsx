import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function ZWFlag({ radius, sx, ...others }: FlagProps) {
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 24">
        <mask
          id="mantine-6xznx6mf1"
          style={{ maskType: 'alpha' }}
          width="32"
          height="24"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0h32v24H0z" />
        </mask>
        <g mask="url(#mantine-6xznx6mf1)">
          <path fill="#F7FCFF" fillRule="evenodd" d="M0 0v24h32V0H0z" clipRule="evenodd" />
          <mask
            id="mantine-19dv1mdvz"
            style={{ maskType: 'alpha' }}
            width="32"
            height="24"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path fill="#fff" fillRule="evenodd" d="M0 0v24h32V0H0z" clipRule="evenodd" />
          </mask>
          <g mask="url(#mantine-19dv1mdvz)">
            <path fill="#FECA00" fillRule="evenodd" d="M0 2v20h32V2H0z" clipRule="evenodd" />
            <path
              fill="#272727"
              stroke="#E31D1C"
              strokeWidth="3.5"
              d="M0 8.25h-1.75v7.5h35.5v-7.5H0z"
            />
            <path
              fill="#5EAA22"
              fillRule="evenodd"
              d="M0 4V0h32v4H0zm0 20v-4h32v4H0z"
              clipRule="evenodd"
            />
          </g>
          <path
            fill="#F7FCFF"
            stroke="#272727"
            strokeWidth="2"
            d="M.597-.802L-1-1.991V25.96l1.587-1.15L16.918 12.96l1.102-.799-1.092-.812L.597-.802z"
          />
          <mask
            id="mantine-07v0c26om"
            style={{ maskType: 'alpha' }}
            width="22"
            height="32"
            x="-2"
            y="-4"
            maskUnits="userSpaceOnUse"
          >
            <path
              fill="#fff"
              stroke="#fff"
              strokeWidth="2"
              d="M.597-.802L-1-1.991V25.96l1.587-1.15L16.918 12.96l1.102-.799-1.092-.812L.597-.802z"
            />
          </mask>
          <g mask="url(#mantine-07v0c26om)">
            <path
              fill="#E31D1C"
              fillRule="evenodd"
              d="M7.478 14.278L3.7 17.328l1.733-4.076-2.979-2.868H5.97l1.443-3.459 1.532 3.459h3.51l-3.136 2.868 1.57 4.077-3.41-3.05z"
              clipRule="evenodd"
            />
            <path
              fill="#FECA00"
              fillRule="evenodd"
              d="M5.018 8.422s-.055-.133.269-.25c.323-.117.422-.364.676-.182.254.182.413-.184.485.342.073.525.274 1.355.274 1.355l3.288 2.47h-.618s-.962 1.413-.803 2.653c0 0-.664-.1-1.563-.1-.9 0-1.489.215-1.489.215l-.52-1.924s.189-.323.27-.583c.08-.26.415-.309.415-.516 0-.207-.33-.38-.165-.917s.165-2.14.165-2.14-.522-.23-.415-.23c.106 0 .348-.193.174-.193h-.443z"
              clipRule="evenodd"
            />
            <path
              stroke="#0A0A0A"
              strokeWidth=".25"
              d="M6.722 9.687l-.121.029.01.044.036.027 2.988 2.245h-.309l-.037.055.103.07-.103-.07h0l-.001.001-.003.004-.008.013a5.17 5.17 0 00-.14.23 6.29 6.29 0 00-.32.634c-.206.473-.401 1.093-.367 1.697a12.662 12.662 0 00-1.424-.082c-.46 0-.84.056-1.107.11a4.123 4.123 0 00-.295.073l-.472-1.749.006-.011c.02-.035.046-.085.075-.143.058-.116.13-.269.173-.41.027-.085.095-.14.194-.214l.003-.002c.044-.034.098-.074.14-.123a.32.32 0 00.084-.213.459.459 0 00-.063-.214 2.524 2.524 0 00-.036-.064 1.333 1.333 0 01-.056-.109c-.051-.111-.088-.257-.015-.493.045-.147.077-.358.1-.585.023-.23.04-.483.05-.718a22.485 22.485 0 00.02-.804v-.07h0v0h-.125.125v-.083l-.074-.032h0l-.002-.001-.004-.002-.016-.007-.057-.026a7.24 7.24 0 01-.135-.063.48.48 0 00.075-.079.181.181 0 00.033-.101.149.149 0 00-.08-.131.223.223 0 00-.106-.023h-.008 0-.002 0-.002 0-.002 0-.002 0H5.432h0-.002 0-.002 0H5.42h0-.002 0-.01 0-.002 0-.008 0H5.388h0-.008 0-.002 0-.007 0-.007 0-.008 0-.008 0-.007 0-.007 0-.007 0-.007 0-.007 0-.002 0a1.189 1.189 0 00.248-.122l.07-.046c.03-.02.055-.036.082-.05.04-.023.064-.03.082-.029.017 0 .047.006.096.041a.463.463 0 00.387.066c.012.02.031.072.048.192.037.268.106.61.165.884a24.83 24.83 0 00.102.446l.006.027.002.008v.001h0v.001h0l.122-.03z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
