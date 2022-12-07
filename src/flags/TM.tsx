import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function TMFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-keylsmn02" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-ssg43qk8w" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-lnnk00joo" />
          </mask>
          <mask id="mantine-11oqk4zpv" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-6s1ibcszk" />
          </mask>
          <mask id="mantine-lacroajr5" fill="#fff">
            <path
              fillRule="evenodd"
              d="M1.817.05l-1.772 1v1.655l1.772 1.04h1.919l1.814-1.04V1.05l-1.814-1z"
            />
          </mask>
          <path id="mantine-lnnk00joo" d="M0 0h32v24H0z" />
          <path id="mantine-6s1ibcszk" d="M0 .677h10V27H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-keylsmn02)">
          <use fill="#29c470" xlinkHref="#mantine-lnnk00joo" />
          <g mask="url(#mantine-ssg43qk8w)">
            <g transform="translate(2 -1)">
              <use fill="#c51918" xlinkHref="#mantine-6s1ibcszk" />
              <path
                fill="#e8aa00"
                d="M.168 17.393l.438.64-.113.125.269.274-.124.18-.083-.057.158.263.265-.204.338.567-.34.592-.196-.177v-.128l-.198.308.084.146-.07.218v.158L.048 21 0 20.951l.53-.68v-.137l.002-.013.061-.19-.037-.066-.313.313.603-.938v.32l.115.105.276-.483-.277-.465-.2.154.081.163-.055.038-.452-.755.288.197.05-.074-.275-.28.122-.134-.403-.588zm9.664 0l.052.045-.403.588.122.134-.275.28.05.074.288-.197-.452.755-.055-.038.08-.163-.2-.154-.276.465.276.483.115-.105v-.32l.603.938-.313-.313-.037.066.061.19.002.013v.136l.53.681-.05.049-.545-.702v-.158l-.071-.218.084-.146-.198-.308v.128l-.197.177-.339-.592.338-.567.265.204.158-.263-.083.056-.124-.18.27-.273-.114-.126zm0-4.137l.052.045-.403.588.122.134-.275.28.05.074.288-.196-.452.755-.055-.039.08-.163-.2-.153-.276.464.276.483.115-.104v-.32l.603.937-.313-.312-.037.066.061.19.002.012v.137l.53.68-.05.05-.545-.702v-.158l-.071-.218.084-.147-.198-.308v.128l-.197.178-.339-.593.338-.566.265.203.158-.263-.083.057-.124-.18.27-.274-.114-.125zm-9.664 0l.438.64-.113.125.269.274-.124.18-.083-.057.158.263.265-.203.338.566-.34.593-.196-.178v-.128l-.198.308.084.147-.07.218v.158l-.547.701L0 16.815l.53-.681v-.137l.002-.012.061-.19-.037-.066-.313.312.603-.938v.32l.115.105.276-.483-.277-.464-.2.153.081.163-.055.039-.452-.755.288.196.05-.073-.275-.28.122-.135-.403-.588zm9.664-4.653l.052.045-.403.587.122.135-.275.28.05.074.288-.197-.452.755-.055-.039.08-.162-.2-.154-.276.465.276.483.115-.105v-.32l.603.938-.313-.313-.037.066.061.19.002.013v.136l.53.681-.05.049-.545-.702v-.158l-.071-.218.084-.146-.198-.308v.128l-.197.177-.339-.592.338-.567.265.204.158-.263-.083.056-.124-.18.27-.273-.114-.126zm-9.664 0l.438.64-.113.125.269.273-.124.18-.083-.056.158.263.265-.204.338.567-.34.592-.196-.177v-.128l-.198.308.084.146-.07.218v.158l-.547.702L0 12.16l.53-.68v-.137l.002-.013.061-.19-.037-.066-.313.313.603-.938v.32l.115.105.276-.483-.277-.465-.2.154.081.162-.055.04-.452-.756.288.197.05-.074-.275-.28.122-.135-.403-.587zm9.664-4.58l.052.045-.403.588.122.134-.275.28.05.074.288-.197-.452.755-.055-.038.08-.163-.2-.154-.276.465.276.483.115-.104V5.87l.603.938-.313-.312-.037.066.061.19.002.012v.137l.53.68-.05.05-.545-.702V6.77l-.071-.218.084-.147-.198-.308v.128l-.197.178-.339-.593.338-.567.265.204.158-.263-.083.056-.124-.18.27-.273-.114-.125zm-9.664 0l.438.64-.113.125.269.274-.124.18-.083-.057.158.263.265-.204.338.567-.34.593-.196-.178v-.128l-.198.308.084.147-.07.218v.158l-.547.701L0 7.582.53 6.9v-.137l.002-.013.061-.19-.037-.065-.313.312.603-.938v.32l.115.105.276-.483-.277-.465-.2.154.081.163-.055.038-.452-.755.288.197.05-.073-.275-.281.122-.134-.403-.588zM.168-1l.438.64-.113.125.269.274-.124.18L.555.161l.158.263L.978.22l.338.567-.34.593-.196-.178v-.128l-.198.308.084.147-.07.218v.158l-.547.701L0 2.56l.53-.681V1.74l.002-.013.061-.19-.037-.065-.313.312.603-.938v.32l.115.105.276-.483L.96.324l-.2.154.081.163L.786.68.334-.075.622.12l.05-.073-.275-.28.122-.135-.403-.588zm9.664 0l.052.045-.403.588.122.134-.275.28.05.074.288-.196-.452.755L9.16.64l.08-.162-.2-.154-.276.465.276.483.115-.104v-.32l.603.937-.313-.312-.037.066.061.19.002.012v.137l.53.68-.05.05-.545-.702v-.158l-.071-.218.084-.147-.198-.308v.128l-.197.178-.339-.593.338-.567.265.204.158-.263-.083.056-.124-.18.27-.273-.114-.125z"
                mask="url(#mantine-11oqk4zpv)"
              />
              <g mask="url(#mantine-11oqk4zpv)">
                <path
                  fill="#389f5d"
                  stroke="#e8aa00"
                  strokeWidth=".5"
                  d="M4.93 15.23l.376.334H6.86v.365h.354v.292h.425v.948h-.425v.291H6.86v.292H5.347l-.417.372-.47-.415.049.043H3.108l-.001-.292h-.353l-.001-.291H2.4v-.948h.353l.001-.292h.353l.001-.364 1.443-.001.008-.006.37-.328z"
                />
                <path
                  fill="#c51918"
                  d="M3.315 16.93l.75.644h-.75zm3.158 0v.644h-.75zm-2.407-1.167l-.75.644v-.644zm2.407 0v.644l-.75-.644z"
                />
                <path
                  fill="#af0100"
                  d="M5.17 17.237l-.001.145h.15v.2h-.15v.146H4.65v-.146h-.148v-.2h.148v-.145zm0-1.459l-.001.145.15.001v.2h-.15v.146H4.65v-.147l-.148.001v-.2h.148v-.146z"
                />
                <path
                  fill="#e8aa00"
                  d="M4.146 16.508v.148h.142v.204h-.142v.149h-.494v-.15l-.141.001v-.204h.14l.001-.148zm2.053 0v.148h.142v.204h-.142v.149h-.494v-.15l-.141.001v-.204h.14l.001-.148z"
                />
              </g>
              <g mask="url(#mantine-11oqk4zpv)">
                <path
                  fill="#e8aa00"
                  fillRule="nonzero"
                  d="M.07 1.896h2.762v1.823H.07z"
                  mask="url(#mantine-lacroajr5)"
                  transform="translate(2.4 18.2)"
                />
                <g mask="url(#mantine-lacroajr5)" transform="translate(2.4 18.2)">
                  <path fill="#f9e8e7" d="M-.212.073h3.044v1.823H-.212z" />
                  <path fill="#e8aa00" fillRule="nonzero" d="M.496 1.135l.916-.552v.552z" />
                </g>
                <g mask="url(#mantine-lacroajr5)" transform="translate(2.4 18.2)">
                  <path fill="#e8aa00" d="M5.876.073H2.832v1.823h3.044z" />
                  <path fill="#f9e8e7" fillRule="nonzero" d="M4.956 1.135L4.039.583v.552z" />
                </g>
                <g mask="url(#mantine-lacroajr5)" transform="translate(2.4 18.2)">
                  <path fill="#f9e8e7" d="M5.593 3.719H2.832V1.896h2.76z" />
                  <path fill="#e8aa00" fillRule="nonzero" d="M4.885 2.656l-.917.552v-.552z" />
                </g>
                <path
                  fill="#fcfcfc"
                  fillRule="nonzero"
                  d="M.496 3.104l.916-.552v.552z"
                  mask="url(#mantine-lacroajr5)"
                  transform="matrix(1 0 0 -1 2.4 23.845)"
                />
                <path
                  fill="#c51918"
                  d="M4.24 19.367h.46l.461-.146.46.146h.46v1.385h-.46l-.46.219-.46-.219h-.46z"
                />
                <g fillRule="nonzero">
                  <path
                    fill="#c9343f"
                    d="M6.048 21.017v.282h.103v.2h-.103v.108h-.25v-.59zm.354 0v.59h-.25v-.59zm-2.053 0v.282h.103v.2h-.104l.001.108H4.1v-.59zm.354 0v.59h-.25v-.59zm-1.416-.875v.282h.103v.2h-.103v.108h-.25v-.59zm.354 0v.59h-.25v-.59zm3.54 0v.282h.102v.2H7.18l.001.108h-.25v-.59zm.354 0v.59h-.25v-.59zm-4.248-.73v.283h.103v.2h-.103v.107h-.25v-.59zm.354 0v.59h-.25v-.59zm3.54 0v.283h.102v.2H7.18l.001.107h-.25v-.59zm.354 0v.59h-.25v-.59zm-1.487-.874v.282h.103v.2h-.103v.107h-.25v-.59zm.354 0v.59h-.25v-.59zm-2.053 0v.282h.103v.2h-.104l.001.107H4.1v-.59zm.354 0v.59h-.25v-.59z"
                  />
                  <path
                    fill="#fff"
                    d="M5.096 19.468v.198h-.07v-.125h-.213v.175l.368.319.368-.319v-.175h-.212v.125h-.071v-.198h.354v.227h.291v.325h-.27v-.073h.2v-.18H5.6l-.362.313.36.313h.242v-.178h-.2v-.073h.271v.325H5.62v.226h-.354v-.198h.07v.126h.213v-.176l-.37-.318-.366.318v.176h.212v-.126h.07v.198h-.353v-.226h-.291v-.325h.27v.073h-.2v.179l.24-.001.363-.313-.363-.313h-.24v.18h.2v.073h-.27v-.325h.291v-.227z"
                  />
                </g>
              </g>
              <g mask="url(#mantine-11oqk4zpv)">
                <path
                  fill="#e8aa00"
                  fillRule="nonzero"
                  d="M5.584 5.8v4H4.338v-4zm-2.026.846V8.8H2.78V6.646zm3.663 0V8.8h-.78V6.646z"
                />
                <path
                  fill="#389f5d"
                  d="M4.338 6.108v3.077h-.78V6.108zm2.026 0v3.077h-.78V6.108zm-3.585.846v1.461H2V6.954zm5.221 0v1.461h-.78V6.954z"
                />
                <path
                  fill="#e1e5e8"
                  d="M3.948 8.57c.13 0 .234.103.234.23s-.105.23-.234.23c-.13 0-.234-.103-.234-.23s.105-.23.234-.23zm2.026 0c.13 0 .234.103.234.23s-.105.23-.234.23c-.13 0-.234-.103-.234-.23s.105-.23.234-.23zM2.39 7.876c.129 0 .233.103.233.23 0 .128-.104.231-.233.231s-.234-.103-.234-.23c0-.128.105-.231.234-.231zm5.22 0c.13 0 .234.103.234.23 0 .128-.105.231-.234.231s-.233-.103-.233-.23c0-.128.104-.231.233-.231zM2.39 7.03c.129 0 .233.103.233.23s-.104.231-.233.231-.234-.103-.234-.23.105-.231.234-.231zm5.22 0c.13 0 .234.103.234.23s-.105.231-.234.231-.233-.103-.233-.23.104-.231.233-.231zm-3.662-.77c.13 0 .234.104.234.231s-.105.231-.234.231c-.13 0-.234-.103-.234-.23s.105-.231.234-.231zm2.026 0c.13 0 .234.104.234.231s-.105.231-.234.231c-.13 0-.234-.103-.234-.23s.105-.231.234-.231z"
                />
                <path
                  fill="#c51918"
                  d="M4.961 9.262c.13 0 .234.103.234.23a.232.232 0 01-.234.231.232.232 0 01-.234-.23c0-.128.105-.231.234-.231zM3.169 8.185c.129 0 .234.103.234.23a.232.232 0 01-.234.231.232.232 0 01-.234-.23c0-.128.105-.231.234-.231zm3.662 0c.13 0 .234.103.234.23a.232.232 0 01-.234.231.232.232 0 01-.234-.23c0-.128.105-.231.234-.231zM3.17 6.8c.129 0 .234.103.234.23a.234.234 0 01-.468.001c0-.127.104-.231.234-.231zm3.662 0c.13 0 .234.103.234.23a.234.234 0 01-.468.001c0-.127.105-.231.234-.231zm-1.87-.846c.13 0 .234.103.234.23a.232.232 0 01-.234.231.232.232 0 01-.234-.23c0-.128.105-.231.234-.231z"
                />
                <path
                  fill="#c51918"
                  d="M5.597 6.706l.863.785 1.15.001V7.8H6.492v.016l-.895.91H4.365l-.758-.821-.001-.106-1.294.001v-.308h1.294v-.1l.76-.686z"
                />
                <path
                  fill="#e8aa00"
                  fillRule="nonzero"
                  d="M5.397 6.683l.084.08-.05.05.164.168.116-.09.315.306-.48.456.477.484-.291.307h-.124l-.246.155-.37-.343-.368.343-.247-.155h-.123l-.292-.307.478-.484-.48-.456.315-.306.113.089.166-.166-.05-.05.085-.081.403.409zm.064 1.05l-.385.363.045.042-.044.039.299.276.198-.125h.107l.18-.19zm-.937 0l-.4.405.18.19h.107l.199.125.341-.316zm.468-.474l-.022.02-.364.37.386.366.387-.365-.365-.371zm.375-.345l-.288.266.006.007.119.11-.006.004.266.269.394-.374-.156-.151-.116.091zm-.749 0l-.22.222-.115-.091-.156.151.395.374.384-.39z"
                />
              </g>
            </g>
            <path
              fill="#e8aa00"
              fillRule="nonzero"
              d="M7.939 22c.117.009.226 1.244-1.29 2.184a.486.486 0 01-.156.058c.27.003.626-.043.948-.138-.605.242-1.087.31-1.446.202a.943.943 0 00-.165-.053 1.628 1.628 0 00-.55-.015l.052-.005c.079.037.171.08.278.123v.044a2.418 2.418 0 00-.569-.14c-.1.013-.35.053-.563.14v-.044c.107-.044.199-.086.278-.123l.052.005a1.628 1.628 0 00-.55.015.943.943 0 00-.166.053c-.359.108-.84.04-1.445-.202.286.084.599.13.855.136a.473.473 0 01-.15-.056c-1.517-.94-1.408-2.175-1.29-2.184.091-.007.822 1.104 1.644 1.876.087.122.087.225 0 .308a.216.216 0 01-.112.058c.149-.004.271-.022.35-.055.07-.03.144-.055.223-.072.22-.05.433-.05.687-.023l.1.012a.7.7 0 00.04.004l.049.006.05-.006.012-.001.028-.003c.002 0 .074-.01.1-.012a2.01 2.01 0 01.688.023c.078.017.153.041.224.072a.78.78 0 00.235.048l-.04-.017-.046-.034c-.087-.083-.087-.186 0-.308.822-.772 1.553-1.883 1.645-1.876z"
              mask="url(#mantine-11oqk4zpv)"
              transform="translate(2 -1)"
            />
            <g mask="url(#mantine-11oqk4zpv)" transform="translate(2 -1)">
              <g transform="translate(2 10.6)">
                <path
                  fill="#389f5d"
                  d="M1.764.377L.512 1.481v1.05l1.095 1.1H3.84l1.232-1.173v-.895L3.841.377z"
                />
                <path
                  fill="#750100"
                  d="M.914.242h3.78v.584h.541v2.415h-.541v.499H.914v-.5H.326V.827h.588zm.212.803H.538v1.977h.588v.5h3.355v-.5h.542V1.045H4.48V.46H1.126z"
                />
                <path
                  fill="#389f5d"
                  d="M2.407 3.646v.364h-.354v-.364zm.566 0v.364H2.62v-.364zm.567 0v.364h-.354v-.364zM.36 2.484v.354h-.365v-.354zm5.097 0v.354h-.365v-.354zM.359 1.901v.354h-.364v-.354zm5.098 0v.354h-.365v-.354zM.359 1.318v.354h-.364v-.354zm5.098 0v.354h-.365v-.354zM2.407 0v.365h-.354V0zm.566 0v.365H2.62V0zm.567 0v.365h-.354V0z"
                />
                <path
                  fill="#c51918"
                  d="M1.778.685l-.61.53v1.719l.507.358H3.87l.506-.358V1.216l-.57-.531z"
                />
                <path fill="#e1e5e8" d="M2.803 1.397l-.736.63h.736z" />
                <path fill="#e8aa00" fillRule="nonzero" d="M2.803 2.597l-.736-.63h.736z" />
                <path fill="#e8aa00" d="M2.74 1.397l.736.63h-.737z" />
                <circle cx="2.761" cy="1.969" r="1" fill="#29ae66" />
                <path fill="#e1e5e8" fillRule="nonzero" d="M2.74 2.597l.736-.63h-.737z" />
                <path
                  fill="#c51918"
                  d="M1.204 2.122v.204H.566v-.204zm3.823 0v.204h-.638v-.204zM1.204 1.75v.204H.566V1.75zm3.823 0v.204h-.638V1.75z"
                />
                <path
                  fill="#e8aa00"
                  fillRule="nonzero"
                  d="M1.133 2.275v.223H.566v-.223zm3.823 0v.223h-.567v-.223zm-3.823-.372v.223H.566v-.223zm3.823 0v.223h-.567v-.223zm-3.823-.372v.223H.566v-.223zm3.823 0v.223h-.567v-.223z"
                />
              </g>
            </g>
            <g mask="url(#mantine-11oqk4zpv)" transform="translate(2 -1)">
              <path
                fill="#e8aa00"
                fillRule="nonzero"
                d="M5.905 1.124c.108 0 .31.103.606.31h.753l.348.356v.357l.373.443-.002.406-2.96-.001-.001 1.84h-.928c-.108 0-.31-.103-.606-.31h-.753l-.348-.356v-.357l-.373-.443.002-.405 2.959-.001.002-1.84z"
              />
              <path
                fill="#e1e5e8"
                d="M4.094 1.124c-.108 0-.31.103-.606.31h-.753l-.348.356v.357l-.373.443.002.406 2.959-.001.002 1.84h.928c.108 0 .31-.103.606-.31h.753l.348-.356v-.357l.373-.443-.002-.405-2.959-.001-.002-1.84z"
              />
              <path
                fill="#c51918"
                d="M5.357 4.198c.048.135.091.228.125.275l.54-.112.032.157-.447.103-.01.007.01.032-.089.059a.617.617 0 01-.08-.058l-.022.004c-.076.037-.21.142-.393.313l-.05-.057-.05.057a3.075 3.075 0 00-.319-.269l-.008.01-.09-.059-.614-.142.032-.157.54.112c.034-.047.077-.14.125-.275l.15.044-.06.278.031.008.035.012.037.013a1.1 1.1 0 01-.038.042l.229.212.295-.275-.06-.29zm-1.406-.41l.085.134-.441.295.049.07-.126.094-.054-.077-.175.119-.085-.134.168-.113-.035-.048.126-.095.04.055zm2.045 0l.447.3.04-.055.126.095-.035.048.168.113-.085.134-.175-.118-.054.076-.126-.095.049-.069-.44-.295zm.545-.16l.447.3.04-.055.126.095-.035.048.169.113-.086.134-.175-.119-.054.077-.125-.095.048-.069-.44-.295zm-3.136 0l.085.134-.441.295.05.07-.126.094-.054-.077-.175.119-.085-.134.167-.113-.034-.048.125-.095.04.055zm-.234-.48l.086.134-.442.295.05.07-.126.094-.054-.077-.175.119-.085-.134.168-.113-.035-.048.126-.095.039.055zm3.604 0l.447.3.04-.055.126.095-.035.048.168.113-.085.134-.175-.118-.054.076-.125-.095.048-.069-.44-.295zm.74-.804l.084.134-.168.111.035.05-.126.094-.04-.056-.447.301-.085-.134.44-.296-.049-.068.126-.094.054.074zm-4.927-.08l.175.116.054-.074.126.094-.05.067.441.297-.085.134-.45-.3-.037.055-.126-.094.034-.049-.167-.112zm4.692-.4l.086.134-.17.111.036.05-.125.094-.04-.056-.448.301-.085-.134.44-.296L6.926 2l.125-.094.054.074zm-4.458-.08l.174.116.055-.074.125.094-.05.068.442.296-.085.134-.45-.3-.038.055-.125-.094.034-.05-.167-.111zm3.913-.08l.085.134-.168.111.035.05-.126.094-.04-.056-.447.301-.086-.134.44-.296-.048-.068.126-.094.054.074zm-3.368-.08l.175.116.054-.074.126.094-.05.067.442.297-.086.134-.448-.3-.04.055-.125-.094.035-.05-.168-.111zm1.634-.556l.085.097.015-.017c.183.172.316.277.393.314l.638.147-.032.156-.356-.074.036.032a.342.342 0 00-.038.026l-.041.037-.15-.022.014-.05-.037-.008a1.69 1.69 0 00-.093.223l-.15-.044.061-.29-.338-.318-.237.222c.03.027.06.058.089.093-.025.01-.05.018-.072.025l-.01.002.038.186-.149.044a2.231 2.231 0 00-.057-.147l-.011.004a.44.44 0 00-.08-.063l.042-.039-.02-.03-.539.111-.032-.156.638-.147c.077-.037.21-.142.393-.314z"
              />
              <path
                fill="#c51918"
                d="M5.09 1.685v1.28h2.182l-.52.374v.49H5.93l-.882.468-.001-1.28H2.865l.52-.374v-.49h.823z"
              />
              <path
                fill="#29ae66"
                fillRule="nonzero"
                d="M5.047 1.685v1.28H2.865l.52.374v.49h.823l.882.468.001-1.28h2.181l-.52-.374v-.49H5.93z"
              />
              <path
                fill="#29ae66"
                fillRule="nonzero"
                d="M3.923 2.2l.366.197.101-.15.257.181-.08.117 1.085.58.067-.099.256.182-.045.067.118.062-.144.284-.152-.081-.123.183-.256-.182.1-.15-1.084-.58-.089.133-.256-.182.067-.1-.332-.177z"
              />
              <path
                fill="#c51918"
                d="M5.926 2.134l-.351.22-.112-.142-.243.2.088.11-1.042.655-.074-.095-.243.2.05.063-.113.07.163.274.146-.092.135.174.243-.199-.11-.143 1.04-.654.098.126.244-.2-.074-.094.319-.2z"
              />
            </g>
          </g>
          <g fill="#f7fcff" mask="url(#mantine-ssg43qk8w)">
            <path d="M19.073 2c1.554 3.681 1.64 6.303.26 7.867S15.51 12.06 12 11.759c4.504 2.035 7.738 1.651 9.7-1.15C23.663 7.808 22.787 4.94 19.073 2z" />
            <path d="M14.964 7.872l.246.718.751.015-.598.459.217.727-.616-.434-.617.434.218-.727-.599-.459.75-.015zm-1.875-1.949l.247.718.75.015-.598.46.218.727-.617-.434-.616.434.217-.728-.598-.459.75-.015zm1.875-.155l.246.718.751.016-.598.459.217.727-.616-.434-.617.434.218-.727-.599-.46.75-.015zM17 5.156l.247.717.75.016-.598.459.218.727L17 6.64l-.616.434.217-.727-.598-.46.75-.015zm-2.157-1.393l.247.718.75.015-.598.46.218.726-.617-.434-.616.434.217-.727-.598-.459.75-.015z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
