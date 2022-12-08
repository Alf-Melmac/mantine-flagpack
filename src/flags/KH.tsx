import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function KHFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-59ny08epg" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-59ny08epg)">
          <path fill="#032ea1" fillRule="nonzero" d="M0 0h32v24H0z" />
          <path fill="#e00025" fillRule="nonzero" d="M0 6h32v12H0z" />
          <g stroke="#000" strokeWidth=".06">
            <path
              fill="#fff"
              fillRule="nonzero"
              strokeLinejoin="bevel"
              d="M12.62 11.31h6.828v2.628H12.62z"
            />
            <path
              fill="#fff"
              fillRule="nonzero"
              strokeLinejoin="bevel"
              d="M19.1 12.756h.21v.99h-.21zm-6.48-.486h6.828v.3H12.62zm0-.42h6.828v.276H12.62zm0-.408h6.828v.258H12.62zm1.8 1.314h.216v.99h-.216zm2.94 0h.216v.99h-.216zm-4.68 0h.21v.99h-.21zm.42 0h.21v.99h-.21zm.45 0h.21v.99h-.21zm.45 0h.21v.99H14zm3.768 0h.216v.99h-.216zm.45 0h.216v.99h-.216zm.45 0h.216v.99h-.216z"
            />
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M9.95 14.07a.558.558 0 00.264-.318H21.8c.044.136.139.25.264.318z"
            />
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M15.86 7.308s-.006-.246.138-.252c.138 0 .132.252.132.252zm-.75 3.27v-.33c0-.168-.168-.18-.168-.3 0 0-.024-.18.024-.264.066.24.18.198.18.096 0-.084-.06-.168-.198-.378-.048-.066-.018-.276.042-.354.024.18.054.27.132.27.048 0 .084-.03.084-.12 0-.12-.078-.18-.12-.288a.3.3 0 01.066-.318c.03.18.024.252.102.252.162-.054 0-.288-.036-.348-.036-.066.06-.204.06-.204.048.162.06.174.12.156.072-.018.06-.12-.024-.204-.054-.06-.048-.138.012-.198.06.114.132.108.138.036l-.048-.264h1.044l-.054.258c-.012.072.084.09.144-.03.06.06.066.144.012.198-.084.084-.096.186-.024.204.06.018.072 0 .12-.156 0 0 .09.09.06.204-.036.06-.198.3-.036.348.078 0 .072-.072.102-.252a.3.3 0 01.06.318c-.036.108-.12.168-.12.288 0 .09.042.12.09.12.078 0 .108-.084.132-.27.06.078.09.288.042.36-.138.204-.204.288-.204.372 0 .102.12.144.18-.096.054.084.03.264.03.264 0 .12-.162.132-.168.3v.33zm.432-2.76l-.024-.186h.954l-.024.186zm.06-.192l-.012-.15h.81l-.018.15zm.138-.156l-.018-.156h.54l-.006.156zm1.98 6.6c-.12-.042-.3-.174-.3-.3v-1.458l.156-.204H14.42l.15.204v1.458c0 .126-.12.258-.24.3z"
            />
            <path
              fill="#fff"
              fillRule="nonzero"
              strokeLinejoin="bevel"
              d="M14.972 12.756h.216v.99h-.216zm1.824 0h.216v.99h-.216z"
            />
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M14.36 10.452v1.656h3.24v-1.656a.252.252 0 00-.156.168v.708h-2.922v-.708s-.036-.12-.168-.168z"
            />
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M17.156 14.07c-.108-.042-.336-.174-.336-.3v-1.632c.024-.09.144-.144.222-.204H14.9c.102.06.216.102.258.204v1.632c0 .126-.18.258-.288.3z"
            />
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M17.444 11.952v-1.176h-.294v-.114h-2.328v.12h-.3v1.17zM16.7 14.07c-.108-.042-.258-.174-.258-.3v-1.392l.084-.126h-1.062l.09.12v1.398c0 .126-.156.258-.258.3z"
            />
            <path fill="#fff" fillRule="nonzero" d="M15.722 12.252h.54v1.818h-.54z" />
            <path
              fill="#fff"
              fillRule="nonzero"
              strokeLinejoin="bevel"
              d="M16.544 11.85c0-.12.348-.126.528-.228h-2.16c.18.102.522.108.522.228l.072.234.9.036z"
            />
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M16.964 10.578c0-.294.012-.402.102-.402v.924c-.222.084-.378.36-.378.36h-1.392s-.156-.276-.378-.36v-.93c.108 0 .108.12.108.402zm.102-.12c0-.336.294-.372.294-.372v.3c-.114-.006-.168.096-.168.24 0 .15.09.15.09.15v.852h-.216zm-2.148 0c0-.336-.294-.372-.294-.372v.3c.114-.006.168.096.168.24 0 .15-.09.15-.09.15v.852h.216z"
            />
            <path d="M15.488 8.156h1.032m-1.152.324h1.26m-1.38.39h1.494m-1.62.474h1.77m-1.812.54h1.824m-2.376 1.776h2.916zm.924-.02h1.08v.396h-1.08z" />
            <g fill="#fff" fillRule="nonzero">
              <path d="M15.32 10.752c.18.216.156.582.156.798h1.044c0-.216-.024-.582.156-.798zm.582-2.46l-.144-.078v-.21c.06.018.12.024.132.12.018-.138.06-.126.114-.18.06.054.09.042.114.18 0-.096.072-.102.126-.12v.21l-.138.072z" />
              <path d="M15.89 8.634l-.24-.168V8.28c.09.018.18.03.192.132.024-.15.078-.222.162-.282.078.06.132.132.162.282.006-.102.102-.114.18-.132v.192l-.234.162z" />
              <path d="M15.872 9.168l-.27-.24v-.282c.096.024.204.036.216.186.03-.21.09-.324.18-.408.096.084.156.198.192.408.012-.15.12-.162.216-.186v.282l-.276.24zm.504.318l-.24.342h-.282l-.246-.342zm-.912.57c.12.066.168.204.18.456h.696c.012-.252.06-.39.18-.456z" />
              <path
                strokeLinejoin="bevel"
                d="M16.532 9.48v-.336a.312.312 0 00-.228.198c0-.12-.15-.378-.312-.51-.162.144-.318.384-.312.504-.03-.09-.108-.162-.228-.192v.342z"
              />
              <path
                strokeLinejoin="bevel"
                d="M16.58 10.056V9.72c-.126.036-.21.102-.246.198 0-.12-.162-.378-.342-.51-.18.15-.348.384-.342.51-.03-.09-.12-.162-.246-.198v.342z"
              />
              <path
                strokeLinejoin="bevel"
                d="M16.724 10.758v-.396a.576.576 0 00-.306.228c0-.21-.24-.54-.426-.642-.192.108-.426.444-.426.642a.582.582 0 00-.312-.228v.396z"
              />
              <path
                strokeLinejoin="bevel"
                d="M16.64 11.64v-.408c-.144.054-.18.186-.228.282.018-.414-.228-.852-.42-.966-.192.114-.444.564-.42.96-.048-.084-.09-.222-.228-.276v.402z"
              />
              <path d="M16.544 12.252v-.408c-.15.036-.156.09-.204.18.018-.246-.156-.528-.348-.636a.76.76 0 00-.348.636c-.048-.09-.054-.144-.204-.18v.408zm-6.324 1.5v-1.224c-.042-.156-.18-.3-.276-.324v-1.08l.222.12.258 1.134v1.38z" />
              <path d="M10.22 13.758v-1.23c-.042-.156-.18-.3-.276-.324v-1.152c.15 0 .222.192.222.192l.258 1.134v1.374z" />
              <path d="M10.058 14.07c.102-.042.252-.174.252-.3v-1.536l-.072-.12h2.622l-.102.12v1.536a.36.36 0 00.204.3z" />
              <path d="M12.428 14.07c-.102-.042-.252-.174-.252-.3v-1.458l.216-.204h-1.776l.216.204v1.458c0 .126-.15.258-.252.3z" />
              <path d="M12.182 14.07c-.102-.042-.258-.174-.258-.3v-1.32l.144-.198H10.94l.144.198v1.32c0 .126-.15.258-.258.3z" />
              <path d="M11.24 12.252h.534v1.824h-.54z" />
              <path
                strokeLinejoin="bevel"
                d="M10.502 12.756h.216v.99h-.216zm1.848 0h.21v.99h-.216zm-2.034-1.668h.264v1.02h-.264zm0-.192h.258v.192h-.258zm2.136.414h.366v.78h-.366z"
              />
              <path d="M10.574 12.096v-1.74c.072 0 .084.258.252.258.09 0 .084-.108.03-.192-.042-.078-.096-.18-.024-.378.054.15.186.198.162.108-.042-.162-.168-.192-.072-.438.03.204.162.198.132.078-.036-.138-.114-.198-.018-.39.054.222.12.21.12.072 0-.204 0-.42.252-.498 0 0 .018-.18.114-.18.09 0 .108.18.108.18.258.078.252.3.252.498 0 .138.066.15.12-.072.096.192.018.252-.018.39-.03.12.102.126.132-.078.096.246-.03.276-.072.438-.024.09.108.042.162-.108.072.198.018.3-.024.378-.048.084-.06.192.03.192.168 0 .18-.252.252-.252v1.734zm-.414-1.314v1.326h.15v-1.326c-.054-.03-.102-.03-.15 0z" />
              <path d="M10.172 11.64c.186.096.372.21.42.468h-.42zm2.592-.396v.864h.12v-.864c-.036-.018-.09-.024-.12 0z" />
              <path d="M12.884 11.64c-.186.09-.372.198-.42.462h.42zm-1.236-2.022l.108-.09v-.12c-.036 0-.06.018-.09.06a.3.3 0 00-.15-.18.3.3 0 00-.156.174c-.03-.042-.048-.048-.09-.06v.12l.108.096z" />
              <path d="M11.708 9.912l.048-.114v-.15c-.036 0-.06.018-.09.06a.3.3 0 00-.15-.18.3.3 0 00-.156.174c-.03-.042-.048-.048-.09-.054v.15l.048.114z" />
              <path d="M11.72 10.308l.156-.198v-.192c-.06 0-.09.03-.132.096-.042-.138-.12-.162-.228-.228-.114.06-.192.09-.228.222-.048-.066-.078-.084-.138-.09v.192l.162.198z" />
              <path d="M11.762 10.698s.192-.162.198-.252v-.21c-.072.006-.138.024-.192.114-.048-.174-.12-.222-.252-.3-.138.078-.21.126-.252.3-.06-.09-.12-.108-.198-.12v.216a.9.9 0 00.198.252z" />
              <path d="M11.84 11.418s.264-.282.27-.396v-.324c-.096.012-.192.078-.264.216-.06-.27-.156-.456-.33-.588-.18.132-.276.318-.336.588-.072-.138-.162-.204-.258-.216v.324c.018.114.264.396.264.396z" />
              <path d="M11.84 11.844s.222-.222.27-.318v-.324c-.096.012-.192.078-.264.21a.84.84 0 00-.33-.552c-.18.132-.276.282-.336.552-.072-.132-.162-.198-.258-.21v.324c.06.096.264.318.264.318z" />
              <path d="M11.93 12.096c-.06-.282-.12-.492-.426-.702-.312.21-.366.42-.432.702z" />
              <path d="M12.092 12.252v-.408c-.144.06-.27.138-.318.228-.048-.228-.15-.324-.276-.462-.126.138-.21.24-.264.462-.048-.09-.174-.174-.312-.228v.408zm9.69 1.5v-1.224c.042-.156.18-.3.276-.324v-1.08l-.222.12-.258 1.134v1.38z" />
              <path d="M21.782 13.758v-1.23c.042-.156.18-.3.276-.324v-1.152c-.15 0-.222.192-.222.192l-.258 1.134v1.374z" />
              <path d="M21.944 14.07c-.102-.042-.252-.174-.252-.3v-1.536l.072-.12h-2.622l.102.12v1.536a.36.36 0 01-.204.3z" />
              <path d="M19.574 14.07c.102-.042.252-.174.252-.3v-1.458l-.216-.204h1.776l-.216.204v1.458c0 .126.15.258.252.3z" />
              <path d="M19.82 14.07c.102-.042.258-.174.258-.3v-1.32l-.144-.198h1.128l-.144.198v1.32c0 .126.15.258.258.3z" />
              <path d="M20.762 12.252h-.534v1.824h.54z" />
              <path
                strokeLinejoin="bevel"
                d="M21.5 12.756h-.216v.99h.216zm-1.848 0h-.21v.99h.216zm2.034-1.668h-.264v1.02h.264zm0-.192h-.258v.192h.258zm-2.136.414h-.366v.78h.366z"
              />
              <path d="M21.428 12.096v-1.74c-.072 0-.084.258-.252.258-.09 0-.084-.108-.03-.192.042-.078.096-.18.024-.378-.054.15-.186.198-.162.108.042-.162.168-.192.072-.438-.03.204-.162.198-.132.078.036-.138.114-.198.018-.39-.054.222-.12.21-.12.072 0-.204 0-.42-.252-.498 0 0-.018-.18-.114-.18-.09 0-.108.18-.108.18-.258.078-.252.3-.252.498 0 .138-.066.15-.12-.072-.096.192-.018.252.018.39.03.12-.102.126-.132-.078-.096.246.03.276.072.438.024.09-.108.042-.162-.108-.072.198-.018.3.024.378.048.084.06.192-.03.192-.168 0-.18-.252-.252-.252v1.734zm.414-1.314v1.326h-.15v-1.326c.054-.03.102-.03.15 0z" />
              <path d="M21.83 11.64c-.186.096-.372.21-.42.468h.42zm-2.592-.396v.864h-.12v-.864c.036-.018.09-.024.12 0z" />
              <path d="M19.118 11.64c.186.09.372.198.42.462h-.42zm1.236-2.022l-.108-.09v-.12c.036 0 .06.018.09.06a.3.3 0 01.15-.18.3.3 0 01.156.174c.03-.042.048-.048.09-.06v.12l-.108.096z" />
              <path d="M20.294 9.912l-.048-.114v-.15c.036 0 .06.018.09.06a.3.3 0 01.15-.18.3.3 0 01.156.174c.03-.042.048-.048.09-.054v.15l-.048.114z" />
              <path d="M20.282 10.308l-.156-.198v-.192c.06 0 .09.03.132.096.042-.138.12-.162.228-.228.114.06.192.09.228.222.048-.066.078-.084.138-.09v.192l-.162.198z" />
              <path d="M20.24 10.698s-.192-.162-.198-.252v-.21c.072.006.138.024.192.114.048-.174.12-.222.252-.3.138.078.21.126.252.3.06-.09.12-.108.198-.12v.216a.9.9 0 01-.198.252z" />
              <path d="M20.162 11.418s-.264-.282-.27-.396v-.324c.096.012.192.078.264.216.06-.27.156-.456.33-.588.18.132.276.318.336.588.072-.138.162-.204.258-.216v.324c-.018.114-.264.396-.264.396z" />
              <path d="M20.162 11.844s-.222-.222-.27-.318v-.324c.096.012.192.078.264.21a.84.84 0 01.33-.552c.18.132.276.282.336.552.072-.132.162-.198.258-.21v.324c-.06.096-.264.318-.264.318z" />
              <path d="M20.072 12.096c.06-.282.12-.492.426-.702.312.21.366.42.432.702z" />
              <path d="M19.91 12.252v-.408c.144.06.27.138.318.228.048-.228.15-.324.276-.462.126.138.21.24.264.462.048-.09.174-.174.312-.228v.408zM8.642 15.558H23.36v.75H8.642zm-.39.75H23.75v.75H8.252zm1.164-1.878H22.58v.486H9.416zm-.384.486h13.944v.636H9.032zm.612-.858h12.72v.372H9.644z" />
              <path d="M11.024 14.058h.96v3h-.96z" />
              <path d="M11.24 14.058h.534v3h-.54zm4.26 0h.96v3h-.96z" />
              <path d="M15.722 14.058h.54v3h-.54zm4.29 0h.96v3h-.96z" />
              <path d="M20.222 14.058h.54v3h-.54z" />
            </g>
            <path d="M10.22 13.772H21.8M11.228 16.7h.552m-.552-.378h.552m-.552-.372h.552m-.552-.378h.552m-.552-.372h.552m-.552-.378h.552m-.552-.372h.552m3.948 2.25h.516m-.516-.378h.516m-.516-.372h.516m-.516-.378h.516m-.516-.372h.516m-.516-.378h.516m-.516-.372h.516m3.972 2.25h.552m-.552-.378h.552m-.552-.372h.552m-.552-.378h.552m-.552-.372h.552m-.552-.378h.552m-.552-.372h.552" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
