import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function SAFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-hu9n7lkee" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-hu9n7lkee)">
          <path fill="#67bd23" d="M0 0h32v24H0z" />
          <path
            fill="#fff"
            stroke="#fff"
            strokeWidth=".5"
            d="M24.643 4.471c.204-.253.341.016.471.33l.07.171c.036.085.071.167.108.236.196.368-.087.613-.196.784-.11.17.196.441.196 1.07 0 .63.252 1.26.622 1.768.371.507.438 1.102.52 1.693.06.426.08-.243.054-.936l-.01-.23a8.88 8.88 0 00-.043-.527 60.45 60.45 0 01-.059-.525l-.05-.474c-.11-1.107-.239-2.65-.154-3.152.118-.696.253.148.525.53.272.38.303.389.16.612-.142.223-.256-.04-.256.17S27 9.025 27 10.244s-.648 1.695-1.21 1.904-.865 0-.865-.209-.282.209-.485.209c-.204 0-.135-.24 0-.478.134-.237 0-.117 0-.254s0-.276.203-.276c.204 0 .384 0 .188.276s-.049.103.196.254c.244.152.08.033.265.139s.63-.268 1.06-.67c.43-.4-.05-.368-.18-.52-.13-.152-.508-.863-.628-.954-.12-.091.12.683 0 .86-.12.175-.393.4-.517.4-.084 0-.084-.751 0-2.253-.466-.646-.661-.848-.587-.605.11.363-.111 2.704-.427 3.073-.316.368-.974-.104-1.135-.369-.162-.264-.357-.007-.43.265-.074.273-.234.868-.626 1.112-.391.243-.65-.588-.844-.849-.194-.26-.11-.845.068-1.21s.118 0 .118.435.163.512.365.775c.201.263.371 0 .371-.16s.36-.895.619-1.175c.26-.28.474-.112.474 0s.252.476.544.56c.194.056.327-.168.396-.672V7.57c0-.817-.25-.82-.396-.977-.145-.157-.66-.601-.824-.841-.164-.24-.126-.73-.126-1.177 0-.447.618.199.764.447s0 .367 0 .612.186.187.186 0-.112-.955.145-1.06c.258-.103.251.105.48.634.23.53 0 .613 0 1.1 0 .489.481.898.6 1.096s-.119-1.29-.322-1.583c-.204-.294-.092-.98.203-1.35zm-7.823-.35c.233-.195.71.368.8.632.089.263.232-.005.232-.264s.285-.084.42.19.348.392.433.662c.085.27 0 .231-.177.553-.177.321.467 1.4.796 1.934.33.533.566 1.218.84 1.49.275.27-.172-2.973-.274-3.38-.101-.407-.003-1.245.207-1.533.21-.288.278.288.51.584.23.296.105.465 0 .583-.106.119-.134-.118-.232.113-.098.23.138.781.138.885s.446 3.592-.09 4.608-1.447.906-1.655.906c-.208 0-.235-.328-.063-.371.172-.043.491-.3 1.09-.698.597-.398.52-1.122.52-1.396s-.068-.155-.15 0c-.083.155-.099.763-.223.63s-1.1-2.095-1.174-2.159-.108.184 0 .438c.058.137.075.568.078.99v.35c-.001.223-.005.413-.005.514 0 .328-.131.543-.221.695-.09.152-.4.243-.349.101.05-.14.065-1.408.065-1.787 0-.036 0-.085-.002-.144-.112.085-.371.237-.441.491-.133.48-.669.473-1.216.56-.547.09-.867.169-1.021.411-.155.242.452.47.682.646s.025.447-.801.38c-.827-.066-1.562-1.076-1.562-1.076s-1.191 1.304-1.727 1.46c-.357.104-.706-.166-1.048-.81-.293.073-.5.161-.622.265-.181.156-.85.347-1.108.39-.172.028-.07-.125.305-.46.57-.422.983-.688 1.238-.795.382-.16.47-.591.582-.832.11-.24.172.035.172.24s.307-.205.734-.612c.428-.407.054-.863-.165-1.12-.22-.256-.367-.511 0-.921.367-.41.565.009.703.378.14.369-.024.306-.138.306-.114 0 .07.194.254 1.195.183 1.001-1.023 1.366-1.272 1.527-.249.16-.118.285.102.485s1.036-.423 1.612-1.056c.576-.633-.01-1.914-.124-2.004-.113-.09-.429-.673-.162-1.085.214-.329.377-.105.516.188l.069.15.032.074c.163.37.235.554.235.763 0 .21-.133 1.353.281.754.415-.598 1.093-.628 1.314-.665.22-.037.287.037.287-.377s.169-.84.706-.935c.538-.095.633.22.683.935.05.716-.757.737-1.22.9s.01.142.3.234c.29.091.746-.092 1.532-.092.145 0 .235.004.286.014-.007-.197-.02-.476-.037-.765l-.024-.374c-.035-.492-.083-.93-.134-.97-.047-.035-.193-.278-.352-.558l-.16-.286c-.158-.286-.302-.552-.345-.628-.1-.177-.653-1.024-.598-.762.055.26-.212.261-.373.261s.16.731.279.967.458.1.692.01.054.464-.068.646c-.122.181-.3.108-.392 0-.09-.109-.124-.257-.232-.124s-.324.565-.656.626c-.332.061-.54-.501-.742-.572-.203-.07-.353.424-.816.572-.462.148-.669-.484-.713-.626s.044-.605 0-.768-.211.094-.252.247-.194.832-.552.881c-.358.05-.492-.35-.702-.792-.21-.44.017-.995.137-1.28.12-.284.31.13.199.483-.11.353.111.708.252.955s.278-.158.278-.494.388-.992.733-1.197c.345-.205.42.466.307.888-.113.422.068.873.313 1.032.245.158.475-.33.553-.487.078-.156.022-.616-.078-.894s-.145-.9.276-1.024c.421-.124.323.951.26 1.302-.065.352.02.627.165.874s.445.074.606-.158c.16-.232-.16-.739-.374-.951-.214-.212-.172-.582.213-.943.385-.36.457.161.54.36.085.2.147-.006.21-.115.062-.108-.157-.175.075-.369zm-7.213.147c.244-.055.388.316.433 1.113.087.284-.015.37-.306.258-.142-.012-.066.566.23 1.736.022.4.13.494.325.282.15-.06.23.103.24.488.1.153.246-.03.437-.551.134-.19.306-.069.516.366.1.135.253.01.46-.375.279-.179 0 .37 0 .68s-.051.33-.39.486c-.225.103-.372.068-.442-.104-.054-.065-.27.015-.647.238-.143.053-.258.02-.346-.096-.067-.088-.084.155-.087.54v.808c0 .78-1.184 1.758-2.281 1.948-1.097.19-1.615-.669-1.662-1.2s.076-1.043.305-1.043c.152 0 .229.17.229.509.085.696.48 1.06 1.183 1.09.703.032 1.29-.563 1.76-1.785.04-.205.054-.436.043-.693-.128-.27-.153.461-.52 1.282-.365.82-1.143.77-1.6.76s-.826-.77-.866-1.163a1.392 1.392 0 01.092-.702c.242-.253.36-.159.35.284-.012.665.317.774.907.82.59.047 1.026-.858 1.118-1.201.061-.229-.095-.165-.469.19-.152.144-.484.01-.65-.347-.164-.357.166-.779.438-1.07.18-.193.374-.21.579-.052.266.046.452.16.56.34.132.1.127-.125-.017-.673-.091-.23-.192-.714-.304-1.452a3.136 3.136 0 01-.084-.41.6.6 0 00-.053.248c.175.761.137 1.26-.113 1.497-.375.355-.375.355-.804 0s-.45 0-.45.426v1.718c0 .376-.337.213-.482.276l-.025.016.004-.036c.011-.136.025-.331.04-.586l.01-.16c.009-.157-.091-.55-.301-1.182-.185-.157-.385-.432-.603-.827-.05-.293-.128-.363-.235-.208 0 .309-.098.966-.6.772-.334-.128-.407-.792-.22-1.99.135.013.208.172.22.477s.1.57.262.798c.085.221.142-.023.172-.731 0-.29.18-.565.536-.824.198-.106.295.067.29.52.095.3.09.562-.011.787-.013.296.088.368.303.219.151-.008.095-.439-.17-1.292-.127-.302-.156-.587-.085-.854.013-.162.12-.264.32-.306.137.014.206.325.207.934 0 .573.158 1.086.297 1.193.14.106-.023-.323-.139-.443s0-.479 0-.824c0-.346.21-.18.438 0 .229.18.145.505.145.824s.16.536.424.74c.264.205.204-.204.204-.404s-.204-.53-.345-.815c-.14-.284-.022-.345.14-.619s.458.02.57.274l.018.037-.007-.085-.011-.212c-.046-.136.127-.355.52-.658zm-4.204 5.899c.037.39.038.692.004.903-.034.211.04.279.221.202.166-.184.315.156.315.156s-.1.495-.315.547-.54-.052-.617-.547c-.051-.33.08-.75.392-1.261zm9.66-.46c-.12.026-.256.04-.407.04-.227 0-.383-.076-.282.175.1.25.312.803.53.872.218.068.252-.07.295-.27.044-.2.038-.286.329-.423s.335-.354.09-.354c-.164 0-.35-.014-.556-.04zm-4.43-.416c.155-.141.343.065.53.3s.014.417-.08.587c-.093.17-.346.139-.251 0 .095-.14-.026-.494-.199-.586-.173-.092-.154-.16 0-.301zm12.698-.508c.155-.141.326.066.403.37s-.046.502-.14.672-.357.017-.263-.123c.095-.14.173-.526 0-.618-.172-.092-.154-.16 0-.3zm-16.606-.74l.087.012c.07 0 .15.049.242.146.137.147-.338.443-.65.535-.313.092-.726.33-1.06.484s.167-.4.649-.823c.32-.282.593-.396.819-.342zm16.407-.008s.421-.316.504-.169c.083.147-.083.377-.303.617-.22.24-.817.525-.965.448-.148-.077-.11-.179 0-.317.11-.139.764-.579.764-.579zm-14.537.267c-.21.066-.262.148-.157.245.157.147.4.165.4 0 0-.11-.081-.191-.243-.245zm6.484-.808c.168-.006.12.126.166.173.048.046-.004-.126.074-.129.078-.002.097.078.102.208s.108.022.104-.089c-.004-.111.095-.13.184-.132.088-.003-.07.558-.449.572-.252.008-.368-.173-.346-.544-.002-.036.053-.055.165-.06zm7.666-1.24c.106-.24.466.041.559.34.093.297-.093.186-.27.263s0 .562 0 .858c0 .296-.715-.367-.98-.679-.176-.207-.13-.355.14-.443.143 0 .291.064.445.19.231.19 0-.288.106-.528zm-11.287-.066c.154 0-.04.211 0 .349.026.092.078.138.154.138l.197-.072c.156.032.187.097.09.197-.143.15-.309.315-.441.232-.133-.083-.374-.273-.322-.429.052-.156.168-.415.322-.415zm7.704-.036c.168-.006.12.127.167.173.047.047-.005-.126.074-.128.078-.003.096.077.1.207.005.13.11.023.105-.089-.004-.111.096-.129.184-.132.088-.003-.069.559-.448.572-.253.009-.369-.173-.347-.544-.001-.035.054-.055.165-.059zm6.367-.917c.155-.141.325.065.403.37.078.305-.046.502-.14.672s-.357.016-.263-.123c.095-.14.173-.527 0-.619-.173-.092-.154-.16 0-.3zm-14.25-.75c-.066-.22.484-.313.673-.239.189.075.085.601 0 .601s-.19-.086-.19-.142-.06-.161-.135 0c-.074.161.272.235.325.285s0 .4-.25.578c-.251.177-.573.675-.726.727s-.491 0-.692 0 .147-.19.249-.253c.102-.063.746-.607.957-.855.21-.248-.144-.48-.21-.701zm7.688-.07c.154-.14.342.066.53.301.188.236.094.645 0 .815-.093.17-.346.14-.251 0 .094-.14-.106-.723-.28-.815-.172-.092-.154-.16 0-.3zM5.66 4.24c.043-.057.174-.128.366 0 .193.129.127.698 0 .96s-.057-.32-.172-.605-.237-.297-.194-.355zm8.778-.166c.13-.198.236.048.277.24.041.191-.146.439-.341.65-.146.158-.17-.002-.172-.147v-.129c0-.132.106-.416.236-.614zm-1.387-.028c.09 0 0 .243-.167.346-.166.104.072.136.212.212.14.076-.045.273-.259.337-.213.064-.213-.14-.213-.413s.335-.482.427-.482zm-5.054.13c.167 0 .114.131.16.18.046.047 0-.127.078-.127s.094.081.094.211.108.027.108-.085.1-.126.188-.126-.089.556-.468.556c-.253 0-.362-.185-.328-.556 0-.035.056-.053.168-.053zm13.249 11.22c.17 0 .374.03.374.245s-.311.302-.155.302.815.187 1.159.093c.343-.093 1.394 1.076 1.394 1.97 0 .893-.324-.409-.498-.409s.098 1.292-.485 1.292-.282-.213-.832 0c-.55.212-1.558.267-1.694.212-.135-.056-.443-.646-.384-.92.058-.275.12-.412-.252-.412-.373 0-3.495-.278-5.434-.172-1.94.106-4.046.239-4.533.172s-1.884-.355-2.062-.643c-.178-.289-.336-1.543-.06-1.485 1.227.296 5.336.313 6.15.215.248-.03.997-.042 1.922-.044h.52c2.047.003 4.61.044 4.737.044-.085-.073-.128-.144-.128-.215 0-.106.091-.245.261-.245zm-.012 1.978c-.42.519-.44.344-.22.344s.514.236.58.236c.065 0 .168-.172.31-.172s.205.172.341.172.606-.236.403-.408-.513-.172-.749-.172-.244-.519-.665 0z"
          />
        </g>
      </svg>
    </Box>
  );
}
