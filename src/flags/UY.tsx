import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function UYFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-sbi4ie5en" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-stfvsonm3" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-pqts8ynvl" />
          </mask>
          <path id="mantine-pqts8ynvl" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-sbi4ie5en)">
          <use fill="#f7fcff" xlinkHref="#mantine-pqts8ynvl" />
          <path
            fill="#2e42a5"
            d="M0 2h32v3H0zm0 6h32v3H0zm0 6h32v3H0zm0 5h32v3H0z"
            mask="url(#mantine-stfvsonm3)"
          />
          <path fill="#f7fcff" d="M0 0h14v14H0z" mask="url(#mantine-stfvsonm3)" />
          <g mask="url(#mantine-stfvsonm3)">
            <g fill="#ffc125" stroke="#984111" strokeWidth=".15" transform="translate(2 2)">
              <path d="M9.416 3.03c.07.019.114.091.096.163s-.089.114-.16.096c-.289-.075-.64.861-1.236 1.005-.677.133-1.15.243-1.376.458-.053.05-.168-.263-.218-.316s-.231-.504-.178-.554c.264-.253 1.033-.217 1.4-.24.176-.01.327-.008.512-.14a29.876 29.876 0 00.222-.157c.2-.135.583-.406.938-.314zm-7.318.342c.63.28 1.082.461 1.39.414.072-.01-.013.312-.003.384.01.073-.1.546-.172.557-.36.055-.97-.415-1.284-.608-.15-.092-.272-.18-.5-.179l-.126.002h-.146c-.241-.004-.71-.002-.949-.28a.134.134 0 01.015-.188.13.13 0 01.186.013c.194.226 1.018-.34 1.589-.115zM6.83.682a.13.13 0 01-.051.179c-.263.143.12 1.066-.219 1.578-.405.56-.676.963-.694 1.274-.004.073-.302-.078-.375-.083-.073-.005-.513-.21-.509-.284.021-.364.608-.863.862-1.13.121-.127.232-.229.278-.451a29.877 29.877 0 00.055-.267c.055-.235.15-.694.472-.87a.134.134 0 01.18.054zm-4.048-.1a.13.13 0 01.123.14c-.023.298.96.481 1.205 1.043.248.645.439 1.092.69 1.277.059.043-.23.21-.274.269-.044.058-.456.315-.515.272-.294-.216-.393-.98-.478-1.338-.041-.171-.066-.32-.227-.48a29.878 29.878 0 00-.194-.19c-.168-.174-.5-.505-.472-.87a.134.134 0 01.142-.123zM9.39 6.797c.07-.018.113-.09.095-.162s-.089-.114-.16-.096c-.289.074-.64-.862-1.236-1.006-.677-.132-1.15-.242-1.376-.458-.053-.05-.168.263-.218.317s-.23.504-.178.554c.264.252 1.033.217 1.4.239.176.01.327.009.512.14a29.877 29.877 0 01.222.158c.2.135.584.405.938.314zm-7.32-.341c.63-.28 1.082-.462 1.39-.415.073.012-.013-.311-.003-.384s-.1-.545-.172-.556c-.36-.055-.97.415-1.284.607-.15.093-.272.18-.5.18l-.126-.002H1.23c-.24.004-.71.002-.948.28a.134.134 0 00.014.188.13.13 0 00.186-.013c.194-.227 1.018.339 1.59.115zm4.732 2.69a.13.13 0 00-.051-.18c-.263-.142.12-1.065-.218-1.578-.406-.558-.677-.962-.695-1.274-.004-.072-.302.079-.375.084-.073.005-.508.156-.508.283 0 .345.607.863.86 1.13.122.127.234.23.28.452a29.877 29.877 0 01.054.266c.055.235.15.695.472.87a.134.134 0 00.18-.053zm-4.047.1a.13.13 0 00.122-.141c-.023-.298.96-.48 1.205-1.043.248-.644.439-1.091.69-1.276.059-.043-.23-.21-.274-.27-.044-.058-.456-.314-.515-.271-.294.216-.393.98-.478 1.337-.04.172-.066.32-.227.48a29.878 29.878 0 01-.194.191c-.167.174-.5.505-.472.87.005.072.07.127.143.122z" />
              <path d="M5.667 6.783L5.253 9.72a.256.256 0 01-.506 0l-.414-2.938zm1.065-.994l1.785 2.37a.256.256 0 01-.358.358L5.79 6.732zm-3.464 0l.943.943-2.37 1.785a.256.256 0 01-.358-.358zm3.515-1.456l2.938.414a.256.256 0 010 .506l-2.938.414zm-3.566 0v1.334L.28 5.253a.256.256 0 010-.506zm5.277-2.827c.09.09.1.233.023.335L6.732 4.21l-.943-.943 2.37-1.785a.256.256 0 01.335.023zM1.84 1.483l2.37 1.785-.943.943-1.785-2.37a.256.256 0 01.358-.358zM5 .059c.127 0 .235.094.253.22l.414 2.938H4.333L4.747.28A.256.256 0 015 .06z" />
              <ellipse cx="5" cy="4.934" rx="1.933" ry="1.908" />
            </g>
            <path
              fill="#984111"
              fillRule="nonzero"
              d="M6.813 6.436c-.02-.012-.104-.068-.125-.08a.806.806 0 00-.186-.094.275.275 0 00-.08-.014c-.119 0-.285.073-.495.223l-.078-.107c.23-.164.42-.248.572-.248.04 0 .08.007.122.02a.924.924 0 01.217.108l.124.081.048.027c.16 0 .169.57.056.744a.498.498 0 01-.116.124l-.087.064c-.04.03-.052.048-.052.07 0 .003.048.015.155.01l.073-.005c.076-.006.086-.006.11-.006v.131c-.019 0-.029 0-.1.006a2.577 2.577 0 01-.077.005c-.187.009-.294-.017-.294-.142 0-.071.035-.12.103-.173.011-.009.07-.05.086-.063a.37.37 0 00.087-.092c.034-.053.056-.192.053-.34a.919.919 0 00-.026-.205.325.325 0 01-.09-.044z"
            />
            <path
              fill="#984111"
              fillRule="nonzero"
              d="M7.193 6.474a.053.053 0 01.001-.003zm.087-.038c.02-.012.105-.068.126-.08a.806.806 0 01.185-.094.275.275 0 01.082-.014c.117 0 .284.073.494.223l.078-.107c-.231-.164-.42-.248-.572-.248a.41.41 0 00-.122.02.924.924 0 00-.217.108l-.125.081c-.029.018-.048.027-.047.027-.16 0-.17.57-.057.744.03.047.068.085.117.124l.087.064c.039.03.051.048.051.07 0 .003-.047.015-.154.01a2.458 2.458 0 01-.073-.005 1.286 1.286 0 00-.11-.006v.131c.019 0 .029 0 .1.006l.076.005c.188.009.295-.017.295-.142 0-.071-.035-.12-.103-.173-.011-.009-.07-.05-.086-.063a.37.37 0 01-.087-.092c-.035-.053-.056-.192-.053-.34a.919.919 0 01.026-.205.325.325 0 00.09-.044z"
            />
            <path
              stroke="#984111"
              strokeWidth=".15"
              d="M7.016 7.974c.105 0 .2-.06.287-.186a.546.546 0 00-.287-.074.7.7 0 00-.317.076c.106.124.212.184.317.184zm-.453-.26a.848.848 0 01.453-.131c.161 0 .302.045.419.136l.046.035-.03.05c-.118.198-.264.301-.435.301-.17 0-.326-.1-.471-.296l-.043-.057zm1.104-1.24c.184 0 .333.071.333.16s-.15.16-.333.16c-.184 0-.334-.072-.334-.16s.15-.16.334-.16zm-1.334 0c.184 0 .334.071.334.16s-.15.16-.334.16S6 6.722 6 6.634s.15-.16.333-.16z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
