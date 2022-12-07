import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function HRFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-009qz7yvb" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-7kdpsaqux" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-0l7sbtcl1" />
          </mask>
          <mask id="mantine-hjaj1a0jl" fill="#fff">
            <path
              fillRule="evenodd"
              d="M.01 0c0 .692.025 3.082.075 7.169.252 3.074 2.082 4.611 5.488 4.611s5.309-1.534 5.707-4.602c.023-4.119.012-6.511-.034-7.178z"
            />
          </mask>
          <mask id="mantine-rd5jqj7qc" fill="#fff">
            <path
              fillRule="evenodd"
              d="M1.06 4.247c.43-.136.774-.222 1.034-.258s.576-.062.952-.077L2.794.987 1.43.02.193 1.303z"
            />
          </mask>
          <mask id="mantine-fm9unknj3" fill="#fff">
            <path
              fillRule="evenodd"
              d="M.988 4.247c.43-.136.776-.222 1.035-.258s.576-.062.952-.077L2.723.987 1.36.02.193 1.3z"
            />
          </mask>
          <mask id="mantine-39wlahqdg" fill="#fff">
            <path
              fillRule="evenodd"
              d="M1.431 4.401a7.467 7.467 0 011.21-.528 11.3 11.3 0 01.995-.278L2.79.62 1.132 0l-.94 1.548z"
            />
          </mask>
          <path id="mantine-0l7sbtcl1" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-009qz7yvb)">
          <use fill="#f7fcff" xlinkHref="#mantine-0l7sbtcl1" />
          <path fill="#e31d1c" d="M0 0h32v8H0z" mask="url(#mantine-7kdpsaqux)" />
          <path fill="#3d58db" d="M0 16h32v8H0z" mask="url(#mantine-7kdpsaqux)" />
          <g mask="url(#mantine-7kdpsaqux)">
            <path fill="#e31d1c" d="M10.077 6.397h11.4v4h-11.4z" />
            <path
              stroke="#e31d1c"
              strokeWidth="1.125"
              d="M10.654 9.128c4.561.107 7.152.34 8.622.7.69.168 1.102.345 1.327.578.25.257.201.572.202.899v1.426c-.001.823-.005 1.758-.01 2.806-.181 1.348-.674 2.373-1.517 3.052-.867.7-2.082 1.026-3.628 1.026-1.539 0-2.735-.323-3.565-1.02-.809-.68-1.247-1.708-1.361-3.056a1558.72 1558.72 0 01-.07-6.411z"
            />
            <path
              fill="#f50100"
              d="M10.969 9.21v2.142h-2.11V9.21zm-4.219 0v2.142H4.64V9.21zm-4.219 0v2.142H.421V9.21zm2.11-2.142V9.21H2.53V7.068zm4.218 0V9.21H6.75V7.068zM2.531 4.926v2.142H.421V4.926zm4.219 0v2.142H4.64V4.926zm4.219 0v2.142h-2.11V4.926zM4.64 2.784v2.142H2.53V2.784zm4.218 0v2.142H6.75V2.784zM2.531.643v2.141H.421V.643zm4.219 0v2.141H4.64V.643zm4.219 0v2.141h-2.11V.643z"
              mask="url(#mantine-hjaj1a0jl)"
              transform="translate(10.077 8.397)"
            />
            <path
              fill="#56c6f5"
              stroke="#fff"
              strokeWidth=".5"
              d="M10.453 8.163c.435-.233.838-.409 1.209-.528s.703-.213.996-.278l-.828-3.052-1.658-.62-.94 1.548z"
            />
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M10.181 6.49l.19-.091c.197.42.457.55.812.418.363-.135.512-.392.46-.798l.208-.028c.065.505-.138.857-.595 1.027-.464.174-.834-.012-1.075-.527z"
            />
            <path
              fill="#feca00"
              d="M10.632 5.542l-.182.11a.054.054 0 01-.081-.057l.041-.209-.186-.102a.054.054 0 01.008-.1l.202-.068-.005-.213a.054.054 0 01.09-.042l.16.14.183-.11a.054.054 0 01.081.057l-.041.21.186.102a.054.054 0 01-.008.099l-.202.068.005.213a.054.054 0 01-.09.042z"
            />
            <path
              fill="#56c6f5"
              stroke="#fff"
              strokeWidth=".5"
              d="M14.54 7.076c.372-.033.752-.046 1.142-.039.39.008.75.013 1.079.016l.286-3.01-1.253-1.13-1.392 1.157z"
            />
            <path
              fill="#feca00"
              d="M15.75 6.585c.483 0 .529-.521.529-.876-.124-.197-.099-.338-.494-.338s-.44.12-.556.338c0 .355.039.876.521.876zm.543-1.472c.482 0 .529-.521.529-.876-.124-.197-.099-.338-.494-.338s-.44.12-.556.338c0 .355.039.876.521.876zm-1.055 0c.483 0 .529-.521.529-.876-.123-.197-.099-.338-.494-.338s-.44.12-.556.338c0 .355.039.876.521.876z"
            />
            <path
              stroke="#fff"
              strokeWidth=".5"
              d="M12.954 2.734l1.632 1.159.285 3.302c-.483.013-.88.04-1.19.084-.296.041-.708.151-1.236.328l-.98-3.33z"
            />
            <path
              fill="#c51918"
              fillRule="nonzero"
              d="M.883 3.595l-.25-.59c.538-.235 1.447-.38 2.403-.436l.037.641c-.89.053-1.73.184-2.19.385zM.46 2.168l-.25-.59c.538-.236 1.694-.426 2.65-.483l.038.642c-.89.052-1.978.23-2.437.43z"
              mask="url(#mantine-rd5jqj7qc)"
              transform="translate(11.553 3.043)"
            />
            <path
              stroke="#fff"
              strokeWidth=".5"
              d="M17.94 2.73l1.638 1.163.285 3.302c-.483.013-.88.04-1.19.084-.297.041-.71.152-1.242.33l-.9-3.335z"
            />
            <path
              fill="#feca00"
              d="M1.782 3.424c.196-.11.308-.256.337-.44.042-.275.497-.615.27-.575-.228.04-.098.072-.427 0-.33-.072-.756-.12-.756-.322s.212-.363.039-.363-.542-.191-.468-.045c.074.146-.171-.02-.049.285s-.025.61.049.69c.074.081-.049.476-.049.476s.045.147.124-.073c.079-.22.25-.374.165-.187-.086.187-.196.632-.098.554s.195-.294.195-.367.247-.358.247-.143c0 .216-.232.386-.116.386s.181.046.254-.17c.074-.216.251-.358.324-.216.073.143.057.136-.04.323-.066.125-.066.187 0 .187z"
              mask="url(#mantine-fm9unknj3)"
              transform="translate(16.616 3.043)"
            />
            <path
              fill="#c51918"
              fillRule="nonzero"
              d="M1.517 1.555a1.418 1.418 0 01.286.178c.148.103.226.145.274.145v.215c-.11 0-.205-.052-.394-.184l-.018-.013a1.312 1.312 0 00-.23-.143c-.087-.038-.2-.018-.343.07l-.11-.182c.197-.121.377-.153.535-.086z"
              mask="url(#mantine-fm9unknj3)"
              transform="translate(16.616 3.043)"
            />
            <path
              stroke="#fff"
              strokeWidth=".5"
              d="M19.75 3.379l1.971.736.955 3.357c-.346.062-.757.17-1.234.324a7.718 7.718 0 00-1.406.642l-1.399-3.224z"
            />
            <path
              fill="#feca00"
              d="M2.345 1.413l-.172.125a.054.054 0 01-.085-.05l.023-.21-.195-.087a.054.054 0 010-.099l.195-.086-.023-.212a.054.054 0 01.085-.05l.172.126.172-.125a.054.054 0 01.086.05l-.023.211.195.086a.054.054 0 010 .1l-.195.085.023.212a.054.054 0 01-.086.05z"
              mask="url(#mantine-39wlahqdg)"
              transform="rotate(-12 29.226 -86.1)"
            />
            <g fillRule="nonzero">
              <path
                fill="#e31d1c"
                d="M.27 2.802l.213-.829c.94.249 1.921.567 2.64.875l-.327.79c-.68-.291-1.623-.597-2.526-.836z"
                mask="url(#mantine-39wlahqdg)"
                transform="translate(18.725 3.685)"
              />
              <path
                fill="#fff"
                d="M.558 2.037l.05-.208c.902.224 1.86.58 2.557.913l-.09.194a14.127 14.127 0 00-2.517-.9zm-.268.854l.05-.208c.903.224 1.736.528 2.433.86l-.09.194a12.768 12.768 0 00-2.392-.846z"
                mask="url(#mantine-39wlahqdg)"
                transform="translate(18.725 3.685)"
              />
              <path
                fill="#272727"
                d="M.698 2.49l.193-.087c.081.19.182.232.35.15.396-.192 1.38.077 1.38.44 0 .142-.082.227-.208.222a.66.66 0 01-.257-.085 3.774 3.774 0 01-.044-.022 1.321 1.321 0 00-.164-.079l.07-.205c.045.017.052.02.188.09l.042.02A.542.542 0 002.42 3c.003 0-.011.015-.011-.006 0-.16-.8-.379-1.08-.244-.277.135-.504.04-.632-.26z"
                mask="url(#mantine-39wlahqdg)"
                transform="translate(18.725 3.685)"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
