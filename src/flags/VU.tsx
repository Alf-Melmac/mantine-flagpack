import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function VUFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-5fnqm96bz" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-5fnqm96bz)">
          <path fill="#f7fcff" d="M0 0h32v24H0z" />
          <path fill="#c51918" d="M0 0h32v8H0z" />
          <path fill="#5eaa22" d="M0 16h32v8H0z" />
          <path fill="#272727" d="M0-2l16.67 14L0 26z" />
          <g fill="#ffd018">
            <path
              stroke="#272727"
              strokeWidth="2"
              d="M-1-5.382L17.746 8.999 33 9v6H17.502L-1 28.804v-6.97l13.323-9.84L-1 2.035z"
            />
            <g fillRule="nonzero">
              <path d="M4.874 16.768l.002-1.58c1.408-.311 2.341-.715 2.795-1.201C8.79 12.609 8.046 9.38 5.75 9.4c-1.139 0-2.316.542-2.316 1.819 0 1.585.327 2.263 1.443 2.263 1.109 0 1.515.06 2.246-.936l.793.245c-.783 1.067-1.838 1.91-3.041 1.91-1.982 0-3.06-1.495-3.06-3.223 0-2.133 1.731-3.627 3.82-3.627 1.557 0 4.021 1.909 4.021 3.627s0 2.508-1.35 3.709c-.545.483-1.893 1.347-3.431 1.58z" />
              <path d="M4.991 9.88c.077.02.122.098.102.174l-.11.42.276.362.137-.306a.143.143 0 11.26.118l-.201.447.144.192.083-.185a.143.143 0 01.26.118l-.148.33c.12.165.225.312.315.441l.144-.318a.143.143 0 01.26.118l-.21.466-.007.011c.157.244.232.397.232.47a.143.143 0 01-.285 0c0-.03-.063-.137-.183-.317l-.291.155a.143.143 0 01-.136-.251l.263-.14c-.082-.117-.177-.25-.287-.4l-.412.22a.143.143 0 11-.135-.252l.377-.2-.09-.121-.122-.162-.316.164a.143.143 0 11-.135-.252l.275-.146a83.05 83.05 0 00-.25-.329l-.146.134a.143.143 0 01-.194-.21l.166-.15-.1-.129a.143.143 0 11.227-.174l.007.01.056-.207a.143.143 0 01.174-.101z" />
              <path d="M5.952 9.88a.143.143 0 00-.101.174l.11.42-.276.362-.138-.306a.143.143 0 10-.26.118l.202.447-.144.192-.083-.185a.143.143 0 00-.26.118l.148.33c-.12.165-.226.312-.316.441l-.144-.318a.143.143 0 00-.26.118l.211.466.007.011c-.157.244-.233.397-.233.47a.143.143 0 00.286 0c0-.03.062-.137.183-.317l.291.155a.143.143 0 00.135-.251l-.263-.14c.082-.117.178-.25.287-.4l.412.22a.143.143 0 10.136-.252l-.377-.2.09-.121.121-.162.316.164a.143.143 0 10.135-.252l-.274-.146.25-.329.146.134a.143.143 0 00.193-.21l-.165-.15.099-.129a.143.143 0 10-.226-.174l-.008.01-.055-.207a.143.143 0 00-.175-.101z" />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
