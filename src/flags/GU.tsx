import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function GUFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-uv3y11dmk" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <mask id="mantine-4krme5my2" fill="#fff">
          <path fillRule="evenodd" d="M4 4h24v16H4z" />
        </mask>
        <mask id="mantine-k2w3yoedj" fill="#fff">
          <path
            fillRule="evenodd"
            d="M4 .037C6.667 1.47 8 3.38 8 5.767s-1.333 4.438-4 6.15c-2.667-1.78-4-3.83-4-6.15 0-2.32 1.333-4.23 4-5.73z"
          />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-uv3y11dmk)">
          <path fill="#c51918" d="M0 0h32v22a2 2 0 01-2 2H2a2 2 0 01-2-2z" />
          <path stroke="#cbdaff" strokeOpacity=".3" strokeWidth="2" d="M27 5v14H5V5z" />
          <g mask="url(#mantine-4krme5my2)">
            <path
              fill="#cce0e5"
              stroke="#c1c9f1"
              strokeOpacity=".748"
              strokeWidth="2.9"
              d="M16.383 4.407c.232.108.467.225.704.353 1.564.84 2.721 1.836 3.502 2.955.838 1.2 1.261 2.551 1.261 4.053 0 2.822-1.47 5.317-4.666 7.37-.27.173-.536.333-.801.48a16.31 16.31 0 01-.788-.494c-3.19-2.13-4.645-4.621-4.645-7.356 0-1.464.42-2.798 1.261-4.003.775-1.11 1.925-2.118 3.478-2.992a14.6 14.6 0 01.694-.366z"
            />
            <path
              stroke="#c51918"
              strokeWidth="2"
              d="M16.389 4.908c.16.078.322.16.484.248 1.493.802 2.602 1.749 3.347 2.816.785 1.125 1.18 2.39 1.18 3.796 0 2.687-1.428 5.044-4.46 6.991a13.88 13.88 0 01-.551.338c-.18-.11-.362-.226-.544-.348-3.027-2.02-4.445-4.375-4.445-6.981 0-1.37.393-2.618 1.18-3.745.741-1.063 1.845-2.022 3.33-2.858.16-.09.32-.176.479-.257z"
            />
            <path
              fill="#91cbcb"
              d="M.533 8H8v1.5H.533z"
              mask="url(#mantine-k2w3yoedj)"
              transform="translate(12.4 6)"
            />
            <path
              fill="#fdf9a1"
              d="M1.202 9.198c3.53.001 5.456-.06 5.78-.18.487-.184-.913 3.507-2.702 3.507-1.193 0-2.219-1.11-3.078-3.327z"
              mask="url(#mantine-k2w3yoedj)"
              transform="translate(12.4 6)"
            />
            <path
              fill="#a68861"
              fillRule="nonzero"
              d="M6.194 8.755l-.951.732c-1.5-1.948-2.128-3.963-1.86-6.02l1.19.156c-.225 1.722.307 3.424 1.62 5.132z"
              mask="url(#mantine-k2w3yoedj)"
              transform="translate(12.4 6)"
            />
            <path
              fill="#239e46"
              d="M3.994 3.637L3.086 4.7A.05.05 0 013 4.656l.312-1.326h-1.42a.05.05 0 01-.02-.095l1.213-.532-.86-1.135a.05.05 0 01.057-.077l1.354.528.309-1.244a.05.05 0 01.097 0l.307 1.244 1.342-.523a.05.05 0 01.057.079l-.93 1.128 1.283.531a.05.05 0 01-.019.096H4.818l.193 1.357a.05.05 0 01-.088.039zM3.2 7H8v1.05H3.2z"
              mask="url(#mantine-k2w3yoedj)"
              transform="translate(12.4 6)"
            />
            <path
              fill="#c51918"
              d="M2.472 6.393h-.005c-.014.051-.048.094-.101.128s-.124.051-.21.051c-.067 0-.13-.012-.187-.037s-.106-.06-.147-.109-.072-.107-.095-.178-.034-.152-.034-.244.011-.173.033-.244.055-.13.096-.178.092-.084.15-.11.125-.037.196-.037c.1 0 .184.022.251.066s.12.103.155.175l-.11.066c-.026-.059-.064-.105-.114-.138s-.112-.05-.182-.05a.306.306 0 00-.307.213.432.432 0 00-.024.147v.178c0 .054.008.104.024.149s.038.082.068.114.065.056.108.073.09.026.144.026c.038 0 .075-.005.11-.015s.064-.025.09-.045a.214.214 0 00.085-.18v-.11h-.247v-.116h.378v.565h-.125zm.835-.94v.681a.4.4 0 00.06.239c.039.054.108.081.207.081.1 0 .169-.027.208-.081a.402.402 0 00.06-.239v-.68h.134v.649c0 .08-.007.149-.022.208s-.037.107-.07.146-.073.068-.125.087-.115.028-.19.028-.137-.01-.187-.028-.092-.048-.123-.087-.053-.087-.066-.146-.02-.128-.02-.208v-.65zm1.957 1.1l-.112-.324h-.451l-.112.324h-.136l.39-1.1h.171l.39 1.1zm-.334-.976h-.008l-.19.535h.386zm1.85.05h-.007l-.095.184-.267.48-.267-.48-.094-.184h-.008v.926H5.91v-1.1h.18l.32.593h.008l.321-.592h.173v1.1h-.131z"
              mask="url(#mantine-k2w3yoedj)"
              transform="translate(12.4 6)"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
