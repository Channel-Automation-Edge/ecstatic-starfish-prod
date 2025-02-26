import React from 'react';
import { useAppContext } from '@/context/AppContext';


const Shower: React.FC = () => {
    const { contractor } = useAppContext();
  const { accent, dark, darker } = contractor.colors;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className="w-12 h-12 sm:w-14 sm:h-14 sm:mb-4 ml-2 mr-4 sm:ml-0 sm:mr-0"
    >
      <g>
        <path
          d="M425.98 512h30.905v-30.905l-61.811-61.811z"
          fill={darker}
          opacity="1"
          className=""
        ></path>
        <path
          d="M55.115 481.095V512H425.98v-92.716z"
          fill={darker}
          opacity="1"
          className=""
        ></path>
        <path
          d="m425.98 0-61.811 240.547 61.811 240.548h30.905V0z"
          fill={darker}
          opacity="1"
          className=""
        ></path>
        <path
          d="M425.98 481.095V0H256l-61.811 240.547L256 481.095z"
          fill={dark}
          opacity="1"
          className=""
        ></path>
        <path
          d="M256 481.095V0h-30.905l-61.811 240.547 61.811 240.548z"
          fill={accent}
          opacity="1"
          className=""
        ></path>
        <path
          d="M55.115 0v23.179l6.696 7.726-6.696 7.727v442.463h169.98V0z"
          fill="#ffffff"
          opacity="1"
          className=""
        ></path>
        <path
          d="M286.905 294.632a7.725 7.725 0 0 1-7.726-7.726V194.19c0-4.268 3.458-7.726 7.726-7.726s7.726 3.458 7.726 7.726v92.716a7.725 7.725 0 0 1-7.726 7.726z"
          fill={darker}
          opacity="1"
          className=""
        ></path>
        <path
          d="M225.095 294.632a7.725 7.725 0 0 1-7.726-7.726V194.19c0-4.268 3.459-7.726 7.726-7.726s7.726 3.458 7.726 7.726v92.716a7.726 7.726 0 0 1-7.726 7.726z"
          fill={darker}
          opacity="1"
          className=""
        ></path>
        <path
          d="M163.284 99.928h-15.453V61.811c0-12.78-10.398-23.179-23.179-23.179H55.115V23.179h69.537c21.302 0 38.632 17.33 38.632 38.632v38.117z"
          fill={darker}
          opacity="1"
          className=""
        ></path>
        <path
          d="M155.557 179.767a7.725 7.725 0 0 1-7.726-7.726v-15.453a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM124.652 179.767a7.725 7.725 0 0 1-7.726-7.726v-15.453a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.726 7.726 0 0 1-7.726 7.726zM186.463 179.767a7.725 7.725 0 0 1-7.726-7.726v-15.453c0-4.268 3.459-7.726 7.726-7.726s7.726 3.458 7.726 7.726v15.453a7.726 7.726 0 0 1-7.726 7.726zM155.557 226.125a7.725 7.725 0 0 1-7.726-7.726v-15.453a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM124.652 226.125a7.725 7.725 0 0 1-7.726-7.726v-15.453a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.726 7.726 0 0 1-7.726 7.726zM186.463 226.125a7.725 7.725 0 0 1-7.726-7.726v-15.453c0-4.268 3.459-7.726 7.726-7.726s7.726 3.458 7.726 7.726v15.453a7.726 7.726 0 0 1-7.726 7.726zM155.557 272.483a7.725 7.725 0 0 1-7.726-7.726v-15.453a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM124.652 272.483a7.725 7.725 0 0 1-7.726-7.726v-15.453a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM186.463 272.483a7.725 7.725 0 0 1-7.726-7.726v-15.453c0-4.268 3.459-7.726 7.726-7.726s7.726 3.458 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM155.557 318.841a7.725 7.725 0 0 1-7.726-7.726v-15.453a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM124.652 318.841a7.725 7.725 0 0 1-7.726-7.726v-15.453a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM186.463 318.841a7.725 7.725 0 0 1-7.726-7.726v-15.453c0-4.268 3.459-7.726 7.726-7.726s7.726 3.458 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM155.557 365.199a7.725 7.725 0 0 1-7.726-7.726V342.02a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM124.652 365.199a7.725 7.725 0 0 1-7.726-7.726V342.02a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM186.463 365.199a7.725 7.725 0 0 1-7.726-7.726V342.02c0-4.268 3.459-7.726 7.726-7.726s7.726 3.458 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM155.557 411.557a7.725 7.725 0 0 1-7.726-7.726v-15.453a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM124.652 411.557a7.725 7.725 0 0 1-7.726-7.726v-15.453a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM186.463 411.557a7.725 7.725 0 0 1-7.726-7.726v-15.453c0-4.268 3.459-7.726 7.726-7.726s7.726 3.458 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM155.557 457.915a7.725 7.725 0 0 1-7.726-7.726v-15.453a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM124.652 457.915a7.725 7.725 0 0 1-7.726-7.726v-15.453a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726zM186.463 457.915a7.725 7.725 0 0 1-7.726-7.726v-15.453c0-4.268 3.459-7.726 7.726-7.726s7.726 3.458 7.726 7.726v15.453a7.725 7.725 0 0 1-7.726 7.726z"
          fill={darker}
          opacity="1"
          className=""
        ></path>
        <path
          d="m155.557 79.324-10.302 23.179 10.302 23.179h46.358c0-25.603-20.755-46.358-46.358-46.358z"
          fill={dark}
          opacity="1"
          className=""
        ></path>
        <path
          d="M109.199 125.682h46.358V79.324c-25.603 0-46.358 20.755-46.358 46.358z"
          fill={accent}
          opacity="1"
          className=""
        ></path>
        <path
          d="M207.066 133.408H104.048a7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726h103.018a7.725 7.725 0 0 1 7.726 7.726 7.725 7.725 0 0 1-7.726 7.726z"
          fill={darker}
          opacity="1"
          className=""
        ></path>
      </g>
    </svg>
  );
};

export default Shower;
