import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function LKFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-m17mnaz7c" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-m17mnaz7c)">
          <path fill="#feca00" d="M0 0h32v22a2 2 0 01-2 2H2a2 2 0 01-2-2z" />
          <path fill="#1f8a6e" d="M2 2h6v20H2z" />
          <path fill="#f56800" d="M8 2h6v20H8z" />
          <path fill="#b01d00" d="M14 2h16v20H14z" />
          <path fill="#e8aa00" d="M12 2h2v20h-2z" />
          <path
            fill="#feca00"
            d="M17.1 6.173c-.054.334-.134.752-.24 1.255-.106.503-.165 1.907-.178 4.212.366.138.549.3.549.485s-.071.333-.212.443l.888.973c-.114-.103-.068-.504.138-1.202.309-1.048 1.157-1.022 1.505-1.362.348-.34-.176.102-.465.102s0-.123-.188-.26a.151.151 0 01-.054-.058l-.003-.016-.026.015a.885.885 0 01-.06.026l-.09.032c-.42.139-.1-.139-.185-.285s-.27.146-.572.285c-.302.139.013-.139.138-.285.124-.147-.125 0-.41 0-.286 0 0-.504.1-.789.102-.285-.1-.089-.1-.5s.574 0 .41-.129c-.164-.128-.41-.727-.41-.938 0-.21.22-.44.41-.44.126 0 .271.099.434.297.21 0 .451-.018.723-.053.409-.053.348-.245.348-.553s.22 0 .567 0c.23 0 .451.051.66.154 0-.234.084-.35.251-.35.167 0 .298.116.393.35l.376-.35c.393.233.661.35.803.35s.289-.117.44-.35v.504c.317-.404.927-.658 1.832-.763 1.358-.157 2.659 1.348 3.14 1.522.322.115.382.115.179 0-.119-.171-.074-.257.134-.257s.361.086.46.257c.024.348-.174.555-.594.62-.42.066-.852-.177-1.296-.727.214.313.214.408 0 .284-.214-.123-.392-.182-.534-.177.04-.363.005-.399-.106-.107-.111.29-.352.447-.724.47a3.5 3.5 0 00.296-.62c.047-.137-.103-.224-.253-.295l-.04-.02.014.066a.818.818 0 010 .244l-.017.088c-.067.257-.287.374-.659.351 0 0-.145-.132.084-.495.153-.241-.04-.44-.582-.595 0 0 .026.177 0 .399-.018.148-.134.165-.35.053 0 0-.284-.269-.51 0-.15.179-.104.392.137.638.037-.118.162-.213.373-.284.211-.072.38-.036.505.107a7.878 7.878 0 00-.31.362c-.142.174-.108.303.1.386.267-.327.4-.402.4-.226 0 .266.153.226.703.387.366.107.964.053 1.794-.16.836.057 1.253.352 1.253.884 0 .797-.561 1.189-.561 1.189s.417.808.417 1.514-.312 1.23-.417 2.117c-.106.886.226.823.417 1.045.19.223-.191.485-.417.734-.226.25-.021.358.105.616.126.257.197.552 0 .552-.131 0-.292-.055-.482-.163-.078.108-.183.163-.315.163s-.24-.055-.32-.163c-.004.108-.083.163-.235.163s-.253-.055-.3-.163c-.302.108-.527.163-.674.163-.147 0-.235-.055-.265-.163 0 .108-.082.163-.249.163s-.267-.055-.301-.163a.46.46 0 01-.343.163.365.365 0 01-.31-.163c.003.108-.062.163-.195.163-.2 0-.216-.126-.216-.414 0-.192.354-.324 1.064-.396.217-.609.167-1.047-.152-1.314-.479-.4-.528-1.361-.696-1.361-.168 0-.844.148-1.25.295-.272.098-.723.3-1.353.605a.962.962 0 00-.393.628c-.043.255.143.386.558.392-.11.373-.38.59-.808.652.194.156-.008.852-.274.913-.178.04-.307-.002-.387-.126-.122.084-.238.126-.347.126s-.24-.055-.396-.163c-.043.108-.14.163-.29.163s-.212-.055-.187-.163c-.037.047-.148.101-.334.163-.278.092-.121-.365-.084-.552.037-.187.528-.325.83-.258s.558-.174.625-.607c.044-.29-.084-.644-.384-1.064l-.615-.345c-.285.324-.527.486-.726.486s-.525-.202-.978-.607c-.087.08-.158.12-.212.12-.082 0-.233-.158-.16-.51a.666.666 0 00-.177-.622l.006.008.05.067c.127.196.065.359-.06.392l-.05.007c-.174 0-.135.111-.208.295-.048.122.005.324.16.605.255 0 .382.063.382.19 0 .19-.202.204-.28.271-.078.068-.035.127 0 .167.024.027.136.105.337.233h-.599l-.29.556-.303-.556h-.607c0-.038.083-.098.249-.178.165-.08.205-.138.119-.175-.15-.043-.225-.149-.225-.318 0-.253.225-.19.225-.19s.239-.175.239-.605 0-.295-.24-.295c-.238 0 0-.474.24-.474s0-1.105-.24-1.105c-.238 0-.367-.33-.367-.706 0-.252.203-.413.607-.485V8.388c0-1.479.424-2.217 1.273-2.215zm9.021 9.233c-.28.274-.33.442-.153.502.267.09.724.049.495.272-.228.223-.422.525-.422.8 0 .274.007.506.08.39.074-.116.564-.242.789-.39.225-.15.182-.312.182-.649 0-.225-.323-.533-.97-.925zm-3.154-6.554c-.004.64-.039.986-.104 1.038-.098.077-.151.21-.076.303.076.094.11.336 0 .336s-.28.135-.14.341.136.31.396.31 1.698.037 2.119-.112.824.003 1.404-.074c.58-.076 1.384-.497 1.278-.8s-.243-.69-1.278-.433-1.42.398-1.811.199-.912-.317-.982-.317-.046.503-.247.375c-.2-.128-.445-.261-.364-.483.082-.222.149-.27.149-.42 0-.1-.115-.187-.344-.263zm-7.485 12.167c0 .354-.396 1.044-.677.85-.188-.13-.399-.13-.634 0v-.362c0-.185-.333-.652.222-.759.5-.096.882-.302 1.044-.51l.045-.069c.125-.23 0 .496 0 .85zm13.042 0c0-.354-.124-1.08 0-.85l.046.07c.162.207.544.413 1.044.51.555.106.222.573.222.758v.361c-.235-.13-.447-.13-.634 0-.281.195-.678-.495-.678-.85zM14.804 2.122c.282-.194.678.496.678.85s.125 1.079 0 .85c-.124-.23-.533-.473-1.089-.58s-.222-.573-.222-.759v-.36c.235.129.446.129.634 0zm14.398 0c.187.13.399.13.634 0v.361c0 .186.333.652-.222.76-.556.106-.965.35-1.09.578-.124.23 0-.495 0-.85 0-.353.397-1.043.678-.849z"
          />
        </g>
      </svg>
    </Box>
  );
}
