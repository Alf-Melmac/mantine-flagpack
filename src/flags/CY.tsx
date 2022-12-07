import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function CYFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-5ptm6cfr4" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-9p4dkxqyn" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-4s2kn58gk" />
          </mask>
          <path id="mantine-4s2kn58gk" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-5ptm6cfr4)">
          <use fill="#f7fcff" xlinkHref="#mantine-4s2kn58gk" />
          <g mask="url(#mantine-9p4dkxqyn)">
            <path
              fill="#006b49"
              d="M15.948 17.937v.122a.817.817 0 00-.175.091c.274.109.542.239.806.39l-.446.372a8.328 8.328 0 00-.601-.578c-.166.14-.367.334-.601.578l-.446-.371c.263-.152.532-.282.806-.39a.822.822 0 00-.175-.092v-.122c.14.036.28.078.417.125l.113-.038zm1.329-.29c.16.027.443.102.847.225-.235.347-.501.49-.798.43a2.393 2.393 0 01-.865-.374c.383-.213.655-.307.816-.28zm-3.49 0c.16-.026.432.068.816.281a2.393 2.393 0 01-.865.374c-.298.06-.564-.083-.798-.43a7.8 7.8 0 01.846-.224zm-.332-.946a7.8 7.8 0 01.8.36c.14.08.294.324.457.731a2.393 2.393 0 01-.907-.254c-.27-.14-.386-.419-.35-.837zm4.153 0c.036.418-.08.697-.35.837-.269.14-.571.225-.907.254.164-.407.317-.65.458-.732a7.8 7.8 0 01.8-.359zm-5.4.405c.376.003.636.014.78.034.142.02.34.168.595.444-.293.084-.574.112-.842.085s-.446-.215-.533-.563zm6.648 0c-.088.348-.266.536-.534.563s-.548-.001-.841-.085c.254-.276.452-.424.595-.444.143-.02.403-.031.78-.034zm-7.57-.017c.145-.003.364.112.658.345-.276.129-.549.2-.818.216-.269.015-.474-.143-.615-.473.373-.056.631-.085.776-.088zm8.49 0c.145.003.404.032.776.088-.14.33-.346.488-.615.473a2.235 2.235 0 01-.818-.216c.295-.233.514-.348.658-.345zm-9.34-.859c.37.069.624.125.76.17s.308.224.51.54c-.303.031-.584.01-.843-.063s-.402-.289-.428-.647zm10.192 0c-.026.358-.168.574-.428.647-.259.074-.54.094-.843.063.203-.316.372-.496.51-.54s.39-.101.761-.17zm-9.241-.337c.35.137.589.241.715.311s.258.28.397.628c-.304-.027-.575-.101-.816-.223s-.34-.36-.296-.716zm8.29 0c.043.356-.056.595-.296.716s-.513.196-.816.223c.138-.349.27-.558.397-.628.126-.07.364-.174.715-.311zm-10.237.12c.152-.003.425.119.822.365a1.805 1.805 0 01-.785.236c-.278.018-.553-.149-.823-.501.373-.062.635-.095.786-.1zm12.183 0c.152.005.414.038.787.1-.27.352-.545.519-.824.501a1.805 1.805 0 01-.784-.236c.396-.246.67-.368.821-.364zM7.46 14.852c.332-.001.563.007.694.025s.347.16.648.429l-.076-.064a.929.929 0 01.05-.344c.357.191.598.331.724.42s.233.316.323.682a2.589 2.589 0 01-.85-.348.516.516 0 01-.234-.325c-.212.07-.43.093-.651.072-.243-.023-.453-.206-.628-.547zm16.144 0c-.176.341-.385.524-.628.547a1.6 1.6 0 01-.652-.072.513.513 0 01-.234.325 2.575 2.575 0 01-.85.348c.09-.366.199-.594.324-.682s.367-.229.724-.42a.93.93 0 01.05.343l-.077.065c.301-.268.517-.411.648-.429a5.88 5.88 0 01.695-.025zm-14.864.821c.08-.004.224.057.431.184a.996.996 0 01-.42.137c-.148.013-.291-.072-.43-.257.199-.038.339-.06.42-.064zm13.583 0c.08.004.22.026.42.064-.14.185-.283.27-.43.257a.996.996 0 01-.42-.137c.206-.127.35-.188.43-.184zM9.65 14.652c.26.203.438.354.534.452.095.098.207.37.336.816-.218-.06-.417-.176-.598-.348s-.272-.479-.272-.92zm11.764 0c0 .441-.092.748-.273.92s-.38.288-.597.348c.128-.446.24-.718.336-.816s.273-.249.534-.451zM7.364 13.37c.424.241.71.417.858.53.149.11.277.397.384.858-.386-.093-.721-.239-1.006-.437s-.364-.515-.236-.95zm16.335 0c.129.436.05.752-.235.95-.286.2-.621.345-1.006.438.107-.46.235-.747.383-.859s.435-.288.858-.529zm-14.763.484c.073.19.118.324.136.402.018.078-.017.23-.106.456a.996.996 0 01-.208-.39c-.039-.143.02-.299.178-.468zm13.191 0c.158.17.217.325.178.469a.996.996 0 01-.208.39c-.088-.226-.124-.379-.106-.457a3.75 3.75 0 01.136-.402z"
            />
            <path
              fill="#f57a01"
              d="M27.806 3.017c.23.297.23.445 0 .445s-.64.16-1.226.481c-.28.417-.588.672-.926.767-.507.14-.678.666-1.42.885-.743.219-.819.278-.819.5s.127.596-.38.596-.865-.71-1.14 0c-.274.71-.552.918-.172 1.352.38.435.883.85 1.098 1.101.214.25 1.642.985.594.985s-.521-.665-1.328-.422c-.807.243-.344.6-.96.422-.617-.18-1.028-.343-1.22-.261-.19.082-.498-.454-.498.26 0 .715.575.425-.659 1.214-1.234.79-.989.571-1.555.571s-.765.357-1.143.357h-.757c-.425 0 .03-.452-.695 0s-.985.542-.985.716v.633s-.665.38-.665 0-.205-.477-.48-.633c-.276-.157-.826-.044-1.414 0-.588.043-1.253-.594-1.763-.594s-.606-.479-.746-.479.146-.41-.448-.777c-.595-.368-.803-.413-.803-1.007 0-.594-.273-.757-.273-1.118 0-.36.291.133.908.133.616 0 .657-.382 1.362-.741.704-.36.943-.556 1.53-.36s1.167.93 1.647.226c.48-.703.48-1.507.48-1.913s-.284-.522.483-.261c.767.26 1.213.26 2.488.26 1.274 0 2.798.417 3.267 0 .47-.416.972-.76 2.19-.76 1.219 0 1.617-.599 2.436-.885.82-.287-.389.319 1.449-.465 1.225-.522 2.073-.931 2.543-1.228z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
