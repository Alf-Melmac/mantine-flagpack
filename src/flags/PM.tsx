import React from 'react';
import { createFlag } from '../create-flag';

export const PMFlag = createFlag(
  'PM',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-zahqf0tky" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-zahqf0tky)">
      <path fill="#c51918" d="M22 0h10v24H22z" />
      <path fill="#2e42a5" d="M0 0h12v24H0z" />
      <path fill="#f7fcff" d="M10 0h12v24H10z" />
    </g>
  </svg>
);