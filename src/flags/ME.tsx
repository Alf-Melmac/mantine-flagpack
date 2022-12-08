import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function MEFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-zwhkpqdxf" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-6k1g6dhfo" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-tpkv7yxyk" />
          </mask>
          <mask id="mantine-gqkoxiolo" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-2gqdnjwcg" />
          </mask>
          <path id="mantine-tpkv7yxyk" d="M4 4h24v16H4z" />
          <path
            id="mantine-2gqdnjwcg"
            d="M.185.284C.943.14 1.528.069 1.938.069c.37 0 .954.072 1.754.215 0 1.36.383 2.192 0 3.121-.382.93-1.318.483-1.741 1.372-.541-.843-1.272-.38-1.766-1.58-.495-1.2.3-1.754 0-2.913z"
          />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-zwhkpqdxf)">
          <path fill="#e8aa00" d="M0 0h32v22a2 2 0 01-2 2H2a2 2 0 01-2-2z" />
          <use fill="#c51918" xlinkHref="#mantine-tpkv7yxyk" />
          <g mask="url(#mantine-6k1g6dhfo)">
            <g transform="translate(9.8 4.4)">
              <circle cx="10.431" cy="10.595" r="1" fill="#1e5e91" />
              <g fill="#f6c540">
                <path d="M10.278 1.773c1.851 2.605 2.13 4.658.84 6.159-1.292 1.5-2.412 2.025-3.36 1.572l.793.713-.224.194h.661l-.243.163.18.078.189.084c-.341.25-.341.375 0 .375.169 0 .36-.01.55-.01.053 0-.236-.581-.183-.579.099.004.37.424.507.515.027.018.108-.001.202-.031l.194-.066c.093-.032.172-.056.195-.044.149.075.063.248.04.384-.01.051.64-.418.666-.384.054.069.197.161-.521.715 0 .424.063.52-.127.52-.231 0-.79.407-1.156 0-.245-.272-.555-.612-.93-1.02v.3l-.666-.675-.128.375-.897-1.03-.242.136c.55 1.518.973 2.283 1.267 2.293.442.016-1.354.862-1.767 1.431-.057.08-.106.018-.145-.185-.04.203-.089.265-.146.185-.413-.569-2.209-1.415-1.767-1.43.294-.011.716-.776 1.267-2.294l-.243-.135-.896 1.03-.128-.376-.667.676v-.3c-.375.407-.684.747-.929 1.018-.366.408-.925 0-1.156 0-.23 0-.308-.322 0-.718.308-.396 1.012-.3 1.523-.3.34 0 .34-.126 0-.376l.19-.084.179-.078-.244-.163h.662l-.225-.194.795-.713c-.949.453-2.069-.071-3.36-1.572-1.292-1.501-1.012-3.554.839-6.159.277 1.556.927 2.857 1.951 3.904 0 .19-.418.532-.553.777s.328.386.553.386.226.726.442.403c.144-.216.072-.56-.216-1.034l.683-.721.232-.466h-.232v-.48l-.162.133c-.118-.286-.292-.43-.521-.43s-.38-.065-.45-.195h.45c.225 0-.036-.3-.226-.455s-.597.156-.597-.134c0-.29.372-.164.597-.326.225-.161.57 0 .91 0h.556c.134 0 .026.109-.325.326l.325.29.485.495-.242.144.5.484c-.114.184-.114.276 0 .276.063 0 .111.035.145.106.034-.07.083-.106.146-.106.113 0 .113-.092 0-.276l.5-.484-.242-.144.484-.495.326-.29c-.351-.217-.46-.326-.326-.326h.557c.34 0 .685-.161.91 0 .224.162.597.037.597.326 0 .29-.408-.022-.597.134-.19.156-.452.455-.226.455h.45c-.07.13-.22.196-.45.196s-.403.143-.522.429l-.162-.133v.48h-.23l.23.466.684.72c-.288.474-.36.82-.216 1.035.216.323.217-.403.442-.403s.688-.14.553-.386c-.135-.245-.553-.588-.553-.777C9.35 4.63 10 3.329 10.278 1.773z" />
                <path d="M2.633 12.63l-.875-1.534C.995 9.337.614 8.351.614 8.138c0-.32-.46-1.269-.46-.994v.994l1.93 4.349v.342h.26z" />
                <path fillRule="nonzero" d="M9.642 10.565l.133-.442 1.626.49-.133.442z" />
                <path
                  fillRule="nonzero"
                  d="M10.508 9.76l.44.144-.43 1.378-.44-.144zM6.134.822c.12.037.23.078.328.124L6.464.91c.772.07 1.172.394 1.13.962-.036.47-.274.716-.67.71v.351c-.432.166-.755.248-.97.248-.216 0-.539-.082-.97-.248v-.357c-.327-.04-.521-.282-.553-.704-.043-.568.357-.891 1.13-.962l.002.039c.099-.047.21-.089.331-.126l.047.165h.145zm.783.466l.054.076c.16.263.146.59-.054.971l.018-.036c.244.004.359-.137.382-.448.02-.268-.105-.455-.4-.563zm-1.806-.002l-.012.005c-.29.109-.412.294-.392.56.02.267.107.408.285.44l.085-.026-.025-.055c-.157-.364-.134-.676.06-.924zm1.02-.167v.991c.165.02.37.064.618.133L6.673 2.2c.287-.546.103-.89-.617-1.106zm-.277.014l.118-.038c-.716.215-.901.556-.621 1.097a3.25 3.25 0 01.503-.09z"
                />
              </g>
              <circle cx="5.954" cy=".804" r="1" fill="#3d58db" />
              <g transform="translate(3.97 5.676)">
                <use fill="#1e5e91" xlinkHref="#mantine-2gqdnjwcg" />
                <path
                  fill="#5eaa22"
                  d="M.185 3.122h3.507v1.702H.185z"
                  mask="url(#mantine-gqkoxiolo)"
                />
                <path
                  fill="#f6c540"
                  fillRule="nonzero"
                  d="M1.926.636c.12.212.12.469 0 .77-.18.453.302.228.752.228s.39-.08.81.565c.113.171.108.284.04.351.006.174-.184.318-.534.41l-.046-.182c.186-.05.3-.097.352-.149-.264.017-.622-.113-.622-.28 0-.08-.089-.13-.225-.158l-.002.04a.072.072 0 00.025-.03l-.001.002.002-.005V2.2l-.002.004.003.014a.667.667 0 00.006.03l.023.092c.024.1.036.177.036.263 0 .238-.203.379-.57.433l-.027-.187c.288-.043.413-.129.413-.246a.886.886 0 00-.031-.217c-.001-.005-.02-.076-.023-.095a.416.416 0 01-.013-.093l.005-.03a5.856 5.856 0 00-.805.006c-.05.447-.28.733-.685.841L.76 2.832c.317-.085.498-.295.547-.646-.123.007-.223.013-.286.013-.183 0-.166-.14-.077-.323l.037.002C.607 1.878.51 1.496.647.805l.181.038c-.117.588-.051.846.153.846v.114c.069-.127.161-.268.24-.396.217-.352.135-.168 0-.453-.089-.19.146-.296.705-.318zM3.233.91l-.028.187c-.406-.065-.578-.017-.578.094 0 .122.181.199.59.195h.015l.014.004c.314.098.314.298.003.41l-.06-.178a.77.77 0 00.066-.028.697.697 0 00-.05-.018c-.493.001-.763-.116-.763-.385 0-.284.284-.361.79-.281z"
                  mask="url(#mantine-gqkoxiolo)"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
