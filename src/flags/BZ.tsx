import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function BZFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-h5j1ygt0j" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-sqqyvmwqu" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-hpjni05du" />
          </mask>
          <mask id="mantine-mc1dip0ww" fill="#fff">
            <path
              fillRule="evenodd"
              d="M0 0h4.053v2.492c0 1.241-.676 2.06-2.027 2.458C.676 4.516 0 3.697 0 2.492V0z"
            />
          </mask>
          <path id="mantine-hpjni05du" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-h5j1ygt0j)">
          <use fill="#0168b4" xlinkHref="#mantine-hpjni05du" />
          <path fill="#e93c43" d="M0 0h32v3H0zm0 21h32v3H0z" mask="url(#mantine-sqqyvmwqu)" />
          <g mask="url(#mantine-sqqyvmwqu)">
            <g transform="translate(8 4)">
              <path fill="#f7fcff" fillRule="nonzero" d="M8 14A6 6 0 118 2a6 6 0 010 12z" />
              <path fill="#fff" fillRule="nonzero" d="M8 16A8 8 0 118 0a8 8 0 010 16z" />
              <circle cx="8" cy="8" r="7" stroke="#9c4c17" strokeWidth=".5" />
              <path
                fill="#5b8c39"
                fillRule="nonzero"
                d="M8.366 14.127l.155.346c-.253.132-.353.276-.353.465 0 .19.097.505.353.644l-.155.335c-.484-.262-.948-.493-.948-.98s.461-.556.948-.81zm-1.747-.14l.054.375c-.28.057-.416.168-.468.35-.053.183-.046.512.162.716l-.242.28c-.392-.386-.775-.736-.641-1.204.135-.469.597-.408 1.135-.518zm3.463-.22l.245.29c-.207.197-.264.363-.212.545.053.183.233.459.517.522l-.057.365c-.537-.12-1.047-.213-1.18-.68-.135-.47.29-.663.687-1.041zm-5.089-.395l-.058.375c-.285-.027-.447.04-.55.198-.104.16-.194.476-.055.733l-.312.196c-.263-.484-.527-.93-.262-1.338.266-.41.69-.216 1.237-.164zm6.618-.432l.318.206c-.14.249-.146.424-.043.583.104.16.357.37.648.348l.052.365c-.549.043-1.064.103-1.329-.305-.266-.41.084-.719.354-1.197zm-8.013-.63l-.16.344c-.265-.104-.44-.085-.582.039-.144.125-.318.405-.254.69l-.355.102c-.12-.537-.25-1.04.117-1.358.369-.32.723-.017 1.234.183zm9.263-.598l.363.11c-.067.278-.024.448.119.571.144.126.445.259.718.157l.15.337c-.514.192-.993.391-1.36.072-.369-.32-.118-.713.01-1.247zm-10.3-.814l-.248.287c-.227-.174-.4-.204-.57-.124-.174.08-.418.302-.436.593H.938c.034-.548.047-1.067.487-1.273.443-.206.7.183 1.136.517zm11.152-.719l.38.006c.012.285.1.437.271.517.173.08.5.125.734-.048l.238.282c-.443.327-.848.65-1.289.445-.442-.206-.31-.653-.334-1.202zM1.96 9.267l-.322.202c-.166-.232-.322-.311-.51-.285-.188.027-.486.167-.588.44l-.353-.108c.192-.515.356-1.007.838-1.075.483-.068.615.38.935.826zm12.492-.89c.095.269.224.388.411.414.189.027.514-.026.687-.26l.31.2c-.327.443-.62.87-1.101.803-.484-.068-.488-.535-.672-1.052zM1.179 6.467c.483.067.487.534.671 1.05l-.364.106c-.096-.269-.224-.388-.411-.414-.19-.027-.514.026-.688.26l-.31-.2c.327-.443.62-.87 1.102-.803zm14.219-.09l.353.107c-.193.515-.356 1.007-.838 1.075-.483.068-.616-.38-.935-.826l.321-.202c.166.232.323.311.51.285.189-.027.487-.167.589-.44zM1.89 4.618c.443.206.31.653.335 1.202l-.38-.006c-.012-.285-.1-.437-.272-.517-.172-.08-.499-.125-.733.048l-.238-.282c.442-.327.848-.65 1.288-.445zM15 4.344c-.034.55-.047 1.068-.487 1.274-.443.206-.7-.183-1.136-.517l.248-.287c.227.174.4.204.57.124.173-.08.418-.302.435-.593zM3.088 3.041c.368.32.118.713-.01 1.247l-.363-.11c.066-.278.023-.448-.12-.571-.143-.126-.444-.259-.717-.157l-.151-.337c.515-.192.994-.391 1.361-.072zm10.604-.526c.119.537.25 1.04-.118 1.358-.368.32-.723.017-1.234-.183l.16-.344c.266.104.44.085.582-.039.144-.125.318-.405.255-.69zm-9.01-.652c.265.41-.084.719-.354 1.197l-.319-.206c.14-.249.146-.424.044-.583-.104-.16-.357-.37-.648-.348l-.052-.365c.548-.043 1.064-.103 1.329.305zm7.239-.737c.262.484.526.93.261 1.338-.265.41-.69.216-1.236.164l.058-.375c.284.027.447-.04.55-.198.103-.16.193-.476.054-.733zM5.363.511c.537.12 1.048.213 1.182.68.134.47-.29.663-.688 1.041l-.245-.29c.207-.196.264-.362.212-.544C5.77 1.215 5.59.94 5.306.876zm4.45-.218c.393.385.776.735.642 1.203-.135.469-.598.408-1.135.518l-.054-.376c.28-.057.416-.168.468-.35.052-.183.046-.512-.162-.716zm-2.24-.21c.483.262.948.493.948.98s-.462.556-.948.81l-.155-.346c.253-.132.353-.276.353-.465 0-.19-.097-.505-.353-.644z"
              />
              <path
                fill="#247805"
                d="M4.279 9.987c-.733-.016-1.1.144-1.1.481 0 .505 0 1.065.55.785.55-.28 1.222-.39 1.578-.195.355.195 1.184.592 2.352.592s1.09-.397 2.166-.397 2.996-.085 2.551-.435c-.444-.35-.968-.571-1.368-.571s-.706 0-1.546-.412c-.84-.412-1.779-.45-2.724-.316s-1.07.468-1.629.468h-.83z"
              />
              <g transform="translate(6.074 6.7)">
                <path
                  stroke="#565656"
                  strokeWidth=".5"
                  d="M4.303-.25v2.742c0 .686-.192 1.253-.564 1.705-.365.443-.91.778-1.642.993C1.22 4.954.677 4.61.314 4.169-.06 3.716-.25 3.159-.25 2.492V-.25z"
                />
                <path
                  fill="#84ceff"
                  d="M.123 3.209l1.933-1.424L4.09 3.37v2.257H.123z"
                  mask="url(#mantine-mc1dip0ww)"
                  opacity=".4"
                />
                <path
                  fill="#006ac9"
                  d="M.184 3.712h3.592v.5H.184z"
                  mask="url(#mantine-mc1dip0ww)"
                />
                <path
                  fill="#59c800"
                  d="M.368 4.207h3.316v.266H.368z"
                  mask="url(#mantine-mc1dip0ww)"
                />
                <path
                  fill="#ffd800"
                  d="M.368 4.537h3.316v.5H.368z"
                  mask="url(#mantine-mc1dip0ww)"
                />
                <path
                  fill="#f7d85d"
                  d="M4.653 3.81l-2.59-1.977v-2.67h2.59z"
                  mask="url(#mantine-mc1dip0ww)"
                />
                <path
                  fill="#f5f6f6"
                  d="M1.474 2.723c.054.283.102.424.144.424s.1-.141.176-.424c.009.283.034.424.076.424.063 0 .056-.356.156-.424.037-.025.083.422.139.424.031.002.085-.14.162-.424.023.283.053.424.089.424s.09-.141.163-.424v1.072H1.474z"
                  mask="url(#mantine-mc1dip0ww)"
                />
                <ellipse
                  cx="2.026"
                  cy="3.919"
                  fill="#892e2e"
                  mask="url(#mantine-mc1dip0ww)"
                  rx="1.013"
                  ry="1"
                />
                <g fillRule="nonzero">
                  <path
                    fill="#a46031"
                    d="M.216.404L.424.242l1.4 1.439-.207.163z"
                    mask="url(#mantine-mc1dip0ww)"
                  />
                  <path
                    fill="#892e2e"
                    d="M.441 2.067L.22 1.92 1.582.288l.221.148z"
                    mask="url(#mantine-mc1dip0ww)"
                  />
                  <path
                    fill="#a46031"
                    d="M2.334.618L2.542.49l1.401 1.143-.208.13z"
                    mask="url(#mantine-mc1dip0ww)"
                  />
                  <path
                    fill="#f5f6f6"
                    d="M2.627 1.786l-.259-.176L3.7.536l.285.234z"
                    mask="url(#mantine-mc1dip0ww)"
                  />
                </g>
              </g>
              <path
                fill="#69f"
                d="M6.567 12.535l.65.204v.561h-.65zm-.465-1.148l.366.204v.561h-.366zm3.438 1.148l-.65.204v.561h.65zm.465-1.148l-.366.204v.561h.366z"
              />
              <g fillRule="nonzero">
                <path
                  fill="#fff"
                  d="M5.748 12.576c-.12 0-.218.003-.332.008-.274.013-.292.013-.367-.018a.626.626 0 01-.157-.103c-.155-.127-.322-.42-.503-.878v-.02c.224-.484.684-.544 1.37-.185.18.095.706.38.701.378.24.128.407.21.572.277.342.137.664.2 1.078.2.248 0 .536-.07.87-.204.195-.077.396-.171.642-.296.033-.016.547-.284.675-.345.223-.107.37-.16.47-.16h.293c.494.006.737.089.737.346 0 .243-.158.572-.473.99l-.015.01c-.623.084-.985.084-1.096-.005-.03-.024-.113-.013-.266.036-.07.022-.44.155-.554.192-.477.158-.885.243-1.3.243-.634 0-1.328-.245-2.08-.736.136.173.05.27-.265.27z"
                />
                <path
                  fill="#666"
                  d="M4.921 12.426a.586.586 0 00.145.096c.066.027.083.027.348.015a6.63 6.63 0 01.334-.009c.376 0 .376-.12-.014-.413l.027-.039c.854.613 1.631.919 2.331.919.41 0 .814-.084 1.287-.241.113-.038.484-.17.554-.193.17-.054.26-.066.309-.028.096.077.45.077 1.051-.003.306-.407.458-.726.458-.954 0-.217-.224-.292-.692-.298a9.652 9.652 0 00-.291 0c-.092 0-.235.05-.452.155-.126.061-.64.328-.673.345-.247.125-.45.22-.645.298-.34.135-.633.207-.888.207-.42 0-.747-.064-1.095-.204a5.782 5.782 0 01-.576-.278c.004.002-.522-.284-.702-.378-.66-.346-1.09-.293-1.301.153.177.447.34.73.485.85zm.827.15c-.12 0-.218.003-.332.008-.274.013-.292.013-.367-.018a.626.626 0 01-.157-.103c-.155-.127-.322-.42-.503-.878v-.02c.224-.484.684-.544 1.37-.185.18.095.706.38.701.378.24.128.407.21.572.277.342.137.664.2 1.078.2.248 0 .536-.07.87-.204.195-.077.396-.171.642-.296.033-.016.547-.284.675-.345.223-.107.37-.16.47-.16h.293c.494.006.737.089.737.346 0 .243-.158.572-.473.99l-.015.01c-.623.084-.985.084-1.096-.005-.03-.024-.113-.013-.266.036-.07.022-.44.155-.554.192-.477.158-.885.243-1.3.243-.634 0-1.328-.245-2.08-.736.136.173.05.27-.265.27z"
                />
                <path
                  fill="#565757"
                  d="M5.028 11.809l-.067-.067c.152-.163.352-.204.594-.124.094.031.707.385.87.468.598.304 1.167.473 1.772.473.869 0 1.708-.274 2.516-.821.305-.248.496-.248.496.037h-.093c0-.17-.09-.17-.349.04-.825.56-1.682.84-2.57.84-.62 0-1.203-.173-1.813-.483-.171-.087-.774-.435-.857-.463-.21-.07-.373-.036-.499.1z"
                />
              </g>
              <path
                fill="#984800"
                fillRule="nonzero"
                d="M7.167 5.84h.001zM8.49 2.944c.005.792-.18 1.311-.565 1.551a4.824 4.824 0 01-.138.082.75.75 0 01.036.223v.05c.083.167.132.388.15.661a.75.75 0 01.18-.164c.277-.178.431-.341.468-.483l.176.038c-.05.19-.23.382-.54.581a.731.731 0 00-.28.386 6.59 6.59 0 01-.063.734l-.034-.005.001.053-.18.004-.002-.046h-.057v-.005l-.03.009-.005-.012-.055.018a5.646 5.646 0 00-.27-.615.864.864 0 00-.092-.141.155.155 0 00-.022-.022l.016.001v-.166c.056 0 .11.036.169.11a2.947 2.947 0 01-.114-.702c0-.28.012-.362.103-.44a.494.494 0 00-.144-.02c-.63 0-1.084-.172-1.354-.519l.148-.096c.232.298.63.45 1.206.45.124 0 .233.023.326.07l.048-.026a6.993 6.993 0 00-.132-.339l-.016-.04c-.235-.579-.282-.818-.064-.947l.097.14c-.098.058-.055.276.137.75l.016.039c.05.125.09.225.121.307.036-.02.067-.04.093-.055.323-.202.49-.671.485-1.413zM7.512 4.73l-.025.017c-.06.043-.067.076-.067.336 0 .232.074.584.222 1.054V4.892a.57.57 0 00-.13-.16z"
              />
              <path
                fill="#247805"
                d="M7.872 5.557c.057-.245.458-.362.896-.261.438.1.747.382.69.628-.056.245-.457.363-.896.262-.438-.102-.747-.383-.69-.629zm-1.24-.5c.496-.06.92.075.949.303.028.227-.352.46-.847.522-.496.06-.921-.074-.949-.302s.351-.461.847-.522zm1.205-.485c.048-.248.624-.344 1.286-.216.662.129 1.16.434 1.112.682-.048.247-.624.343-1.286.215-.662-.129-1.16-.434-1.112-.681zM6.38 3.644c.55.01.991.222.987.474s-.454.449-1.003.44-.992-.222-.987-.475c.004-.252.453-.448 1.003-.439zm1.448-1.02c.032-.204.379-.319.773-.256.395.062.689.278.657.482a.213.213 0 01-.048.102c.193-.056.462-.043.736.051.473.163.783.505.693.766-.09.26-.545.339-1.017.176a1.632 1.632 0 01-.165-.067c-.125.198-.483.303-.88.24-.468-.074-.813-.354-.77-.626s.458-.432.927-.357c.039.006.077.013.114.022l.08.023a.289.289 0 01.058-.098 1.12 1.12 0 01-.501.024 1.118 1.118 0 01-.508-.203l.007.012.007.062c-.004.23-.371.409-.82.4-.45-.007-.812-.2-.808-.429s.372-.408.822-.4c.272.004.513.077.659.185l-.016-.048zm-2.369.384c.35-.194.714-.204.814-.024.1.18-.102.484-.452.678s-.714.204-.814.024c-.1-.18.103-.484.452-.678z"
              />
              <g transform="translate(2.6 3.95)">
                <path
                  fill="#fff"
                  d="M1.645 2.99c-.208 1.98-.313 3.104-.313 3.372s.192.268.576 0c.056-.946.15-1.594.28-1.945.197-.527.29.052.29.36v1.746c.477.065.716.011.716-.161 0-.259-.298-3.373-.298-3.373H1.812z"
                />
                <path
                  fill="#979797"
                  fillRule="nonzero"
                  d="M1.601 2.985l.004-.038h1.331l.004.038.003.036.01.099a489.084 489.084 0 01.145 1.56c.088.96.14 1.571.14 1.682 0 .211-.264.27-.767.202l-.038-.005V4.776a1.53 1.53 0 00-.068-.478c-.035-.086-.057-.076-.135.133-.129.346-.222.991-.278 1.933l-.001.02-.017.012c-.407.284-.646.284-.646-.034 0-.27.104-1.394.313-3.377zm-.225 3.377c0 .215.141.218.49-.022.056-.939.15-1.584.281-1.937.1-.268.225-.32.3-.135.046.113.074.327.074.508v1.71c.427.055.629.006.629-.124 0-.107-.052-.723-.14-1.674L3 4.582a448.832 448.832 0 00-.144-1.551H1.685c-.206 1.954-.309 3.066-.309 3.33z"
                />
                <path
                  fill="#ff863b"
                  d="M.607 1.968c.163.59.282.884.354.884s.329-.18.77-.543v.737h1.23V2.72l.157.326.215-.1.373-.44h-.373c-.072-.469-.108-.74-.108-.815 0-.111.005-.332-.265-.411a.881.881 0 01-.4-.221c.386-.554.432-.83.137-.83-.441 0-.64.106-.64.106v.608c0 .116-.634-.021-.634.337 0 .357-.295.688-.295.688l-.076-.24z"
                />
                <circle cx="2.467" cy=".209" r="1" fill="#000" />
                <path
                  fill="#740000"
                  fillRule="nonzero"
                  d="M.247 2.31l-.199-.165c.383-.415.81-.717 1.278-.904.445-.177 1.025-.46 1.74-.849l.132.218c-.724.393-1.313.68-1.769.862a3.25 3.25 0 00-1.182.838z"
                />
                <path
                  fill="#f9fcff"
                  stroke="#6c6c6c"
                  strokeWidth=".5"
                  d="M3.058.483l.167.784.741-.392-.584-.649z"
                />
              </g>
              <g transform="matrix(-1 0 0 1 13.6 3.95)">
                <path
                  fill="#fff"
                  d="M1.74 3.357c-.206 2.067-.31 3.24-.31 3.52s.19.28.572 0c.055-.987.148-1.664.278-2.03.194-.55.286.054.286.375v1.823c.474.068.711.012.711-.168 0-.27-.296-3.52-.296-3.52H1.906z"
                />
                <path
                  fill="#979797"
                  fillRule="nonzero"
                  d="M1.697 3.353l.004-.04h1.32l.004.04.003.037a371.252 371.252 0 01.145 1.622l.01.11c.086 1 .138 1.64.138 1.755 0 .22-.262.283-.76.211l-.038-.005v-1.86c0-.18-.027-.395-.068-.5-.034-.09-.057-.08-.134.138-.128.362-.22 1.036-.276 2.019l-.001.02-.016.012c-.405.297-.641.297-.641-.035 0-.282.103-1.455.31-3.524zm-.223 3.524c0 .224.14.228.485-.023.056-.98.15-1.653.28-2.022.098-.279.223-.333.298-.14.045.117.073.34.073.53v1.785c.423.056.623.005.623-.13 0-.112-.051-.754-.138-1.747l-.01-.11a492.286 492.286 0 00-.133-1.52l-.01-.1h-1.16c-.205 2.04-.307 3.2-.307 3.476z"
                />
                <path
                  fill="#824028"
                  d="M.69 2.228c.162.615.279.923.35.923s.327-.189.764-.566v.769h1.22v-.341l.156.34.214-.104.369-.458h-.37c-.07-.49-.106-.774-.106-.852 0-.116.004-.346-.263-.43a.864.864 0 01-.398-.23c.383-.577.429-.866.137-.866-.438 0-.636.11-.636.11v.636c0 .12-.628-.022-.628.35 0 .374-.293.719-.293.719l-.075-.25z"
                />
                <circle cx="2.534" cy=".392" r="1" fill="#000" />
                <path
                  fill="#ba611f"
                  fillRule="nonzero"
                  d="M.075 2.396l2.672-1.393c.033-.312.222-.515.566-.61.344-.093.654-.213.928-.358l.235.359c.279-.074-.109.129-1.163.609-1.581.719.06-.39-.39 0z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
