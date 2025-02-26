import React from 'react';
import { useAppContext } from '@/context/AppContext';


const Foundation: React.FC = () => {
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
        <g fill="#5c6c75">
          <path
            d="M177.802 60.011a7.725 7.725 0 0 0-7.726-7.726h-57.131c-.047 0-.092.006-.139.007-.14.003-.28.011-.42.021-.117.009-.234.016-.35.03a8.62 8.62 0 0 0-.392.06c-.121.021-.242.04-.361.066-.124.027-.246.062-.369.095-.121.033-.242.064-.36.103-.119.039-.236.085-.354.13-.117.044-.235.088-.35.138-.113.05-.224.107-.336.162-.115.057-.23.113-.342.176-.105.059-.207.124-.309.188-.114.071-.228.142-.337.219-.094.066-.186.137-.278.208a7.127 7.127 0 0 0-.331.266c-.035.03-.072.055-.107.086-.053.047-.099.1-.15.148a7.101 7.101 0 0 0-.543.565 7.379 7.379 0 0 0-.674.901 7.284 7.284 0 0 0-.377.659 7.395 7.395 0 0 0-.552 1.416 7.951 7.951 0 0 0-.167.73 8.005 8.005 0 0 0-.095.738 7.687 7.687 0 0 0-.02.401c-.002.072-.011.143-.011.216 0 .047.006.093.007.14.003.138.011.277.021.415.008.119.016.237.03.354.015.13.037.259.059.388.021.123.04.245.067.366s.06.241.093.361c.033.123.066.247.105.368.038.117.083.232.127.348.045.119.089.239.14.356.049.112.105.222.16.332.058.116.114.232.178.345.058.104.123.205.186.306.072.115.143.229.221.34.066.094.136.185.206.276.087.113.174.224.267.332.03.035.055.072.086.107l45.692 51.371h-39.918c-.046 0-.09.006-.135.007a7.662 7.662 0 0 0-.428.021c-.114.009-.229.016-.341.029a7.757 7.757 0 0 0-.401.061c-.119.02-.237.039-.354.065-.125.027-.248.062-.372.096-.12.033-.241.064-.359.102s-.234.084-.35.128c-.12.045-.239.09-.356.14-.11.048-.217.104-.325.157-.119.059-.238.117-.354.182-.1.056-.196.118-.294.179a7.44 7.44 0 0 0-.356.23c-.087.061-.172.127-.257.193-.12.092-.239.186-.354.285-.032.027-.066.05-.098.078-.049.043-.09.091-.138.135a7.636 7.636 0 0 0-2.327 4.276 7.514 7.514 0 0 0-.117 1.149c-.002.071-.011.14-.011.211 0 .047.006.092.007.138.002.141.011.281.021.421.008.117.016.234.03.35.015.13.037.26.059.389.021.123.04.246.067.367.026.12.059.238.092.357.034.125.067.251.107.373.037.114.081.225.123.337.047.124.093.248.146.369.046.106.1.21.151.314.061.123.121.246.188.366.054.096.114.189.173.284.076.123.153.245.236.364.06.086.125.169.189.253.093.121.187.241.287.357.027.032.05.066.078.098l45.69 51.364h-39.918c-.046 0-.09.006-.135.007a7.662 7.662 0 0 0-.428.021c-.114.009-.229.016-.341.029a7.757 7.757 0 0 0-.401.061c-.119.02-.237.039-.354.065-.125.027-.248.062-.372.096-.12.033-.241.064-.359.102s-.234.084-.35.128c-.12.045-.239.09-.356.14-.11.048-.217.104-.325.157-.119.059-.238.117-.354.182-.1.056-.196.118-.294.179a7.44 7.44 0 0 0-.356.23c-.087.061-.172.127-.257.193-.12.092-.239.186-.354.285-.032.027-.066.05-.098.078-.049.043-.09.091-.137.135a7.724 7.724 0 0 0-.805.876 7.49 7.49 0 0 0-.809 1.269 6.702 6.702 0 0 0-.31.695 8.106 8.106 0 0 0-.321 1.037 7.963 7.963 0 0 0-.177 1.146c-.01.131-.016.263-.02.394-.002.074-.011.146-.011.22 0 .048.006.095.007.143.003.136.011.271.021.407.009.122.017.242.031.363.015.126.036.252.058.378.021.126.042.253.069.376.026.117.058.232.089.348.035.128.068.257.109.382.036.111.079.22.12.329.048.126.094.252.148.375.046.105.099.208.15.312.061.123.121.247.189.367.054.096.114.19.172.284.076.123.153.245.236.364.06.086.125.169.189.253.093.121.187.241.287.357.027.032.05.066.078.098l57.131 64.227a7.703 7.703 0 0 0 5.774 2.592 7.698 7.698 0 0 0 5.133-1.954 7.725 7.725 0 0 0 .638-10.907l-45.691-51.366h39.921c.246 0 .492-.014.738-.037.088-.009.175-.024.262-.035.154-.02.308-.041.461-.07.104-.02.205-.045.308-.069.134-.031.268-.064.401-.103.105-.031.209-.065.312-.101a7.366 7.366 0 0 0 1.335-.601 7.717 7.717 0 0 0 .909-.609c.102-.079.203-.16.302-.244.034-.03.07-.054.104-.085.049-.043.09-.091.138-.135a7.636 7.636 0 0 0 2.327-4.276 7.514 7.514 0 0 0 .117-1.149c.002-.071.011-.14.011-.211 0-.047-.006-.092-.007-.138a7.368 7.368 0 0 0-.021-.421 6.785 6.785 0 0 0-.03-.35 7.299 7.299 0 0 0-.059-.389c-.021-.123-.04-.246-.067-.367-.026-.12-.059-.238-.092-.357-.034-.125-.067-.251-.107-.374-.037-.113-.08-.223-.122-.335-.047-.125-.093-.25-.147-.371-.046-.106-.099-.208-.15-.312-.061-.123-.121-.246-.188-.366-.054-.097-.114-.19-.173-.285a7.795 7.795 0 0 0-.236-.364c-.06-.086-.125-.169-.189-.253a8.145 8.145 0 0 0-.287-.357c-.027-.032-.05-.066-.078-.098l-45.69-51.364h39.921c.246 0 .492-.014.738-.037.088-.009.174-.024.261-.035.155-.02.31-.041.464-.071.103-.02.203-.045.305-.069.135-.032.27-.064.404-.104.104-.031.206-.065.309-.099a8.689 8.689 0 0 0 .68-.267 7.547 7.547 0 0 0 .99-.536c.096-.062.191-.124.284-.189a8.334 8.334 0 0 0 .584-.454c.037-.032.077-.059.114-.092.053-.047.099-.1.15-.148a7.101 7.101 0 0 0 .543-.565 7.712 7.712 0 0 0 1.212-1.895 7.664 7.664 0 0 0 .391-1.081 7.951 7.951 0 0 0 .167-.73 8.005 8.005 0 0 0 .095-.738c.011-.134.016-.267.02-.401.002-.072.011-.143.011-.216 0-.047-.006-.093-.007-.14a8.234 8.234 0 0 0-.021-.415 6.845 6.845 0 0 0-.03-.354 7.262 7.262 0 0 0-.059-.388c-.021-.123-.04-.245-.067-.366s-.06-.241-.093-.362c-.033-.123-.065-.246-.105-.367-.038-.117-.083-.231-.127-.346-.046-.12-.09-.241-.141-.358-.049-.111-.104-.22-.159-.33-.058-.116-.115-.233-.178-.346-.058-.104-.123-.205-.186-.306-.072-.115-.143-.229-.221-.34-.066-.094-.136-.185-.206-.276a7.75 7.75 0 0 0-.267-.332c-.03-.035-.055-.072-.086-.107L130.162 67.74h39.918a7.728 7.728 0 0 0 7.722-7.729zM399.058 131.97c.246 0 .493-.014.739-.037.088-.009.174-.024.261-.035.155-.02.31-.041.464-.071.103-.02.203-.045.305-.069a7.256 7.256 0 0 0 .713-.203 8.689 8.689 0 0 0 .68-.267 7.547 7.547 0 0 0 .99-.536 7.554 7.554 0 0 0 .589-.417 7.64 7.64 0 0 0 .279-.226c.037-.032.077-.059.114-.092.053-.047.099-.1.15-.148a8.04 8.04 0 0 0 .544-.565 7.379 7.379 0 0 0 .674-.901 7.284 7.284 0 0 0 .538-.994 7.664 7.664 0 0 0 .391-1.081 7.951 7.951 0 0 0 .167-.73 8.005 8.005 0 0 0 .095-.738c.011-.134.017-.267.02-.401.002-.072.011-.143.011-.216 0-.047-.006-.093-.007-.14a8.234 8.234 0 0 0-.021-.415 6.845 6.845 0 0 0-.03-.354 7.262 7.262 0 0 0-.059-.388c-.021-.123-.04-.245-.067-.366s-.06-.241-.093-.362c-.033-.123-.065-.246-.105-.367-.038-.117-.083-.231-.127-.346-.046-.12-.09-.241-.141-.358-.049-.111-.104-.22-.159-.33-.058-.116-.115-.233-.178-.346-.058-.104-.123-.205-.186-.306a7.583 7.583 0 0 0-.22-.34c-.066-.094-.136-.185-.206-.276a7.75 7.75 0 0 0-.267-.332c-.03-.035-.055-.072-.086-.107l-45.692-51.371h39.918a7.726 7.726 0 1 0 0-15.452h-57.131c-.047 0-.092.006-.139.007-.14.003-.28.011-.42.021-.117.009-.233.016-.349.03-.132.016-.264.038-.396.06-.12.02-.239.04-.357.065-.126.028-.25.062-.374.096-.119.033-.238.063-.354.101-.122.039-.241.087-.361.132-.115.044-.231.087-.343.136-.116.05-.229.108-.343.165-.112.056-.225.111-.334.172-.107.06-.211.126-.315.192-.112.07-.224.14-.332.215-.095.066-.187.138-.28.21a7.648 7.648 0 0 0-.33.265c-.035.03-.072.055-.107.086-.053.047-.099.1-.15.148a7.101 7.101 0 0 0-.543.565 7.379 7.379 0 0 0-.674.901 7.284 7.284 0 0 0-.377.659 7.395 7.395 0 0 0-.552 1.416 7.951 7.951 0 0 0-.167.73 8.005 8.005 0 0 0-.095.738 7.687 7.687 0 0 0-.02.401c-.002.072-.011.143-.011.216 0 .047.006.093.007.14.003.138.011.277.021.415.008.119.016.237.03.354.015.13.037.259.059.388.021.123.04.245.067.366s.06.241.093.361c.033.123.066.247.105.368.038.117.083.232.127.348.045.119.089.239.14.356.049.112.105.222.16.332.058.116.114.232.178.345.058.104.123.205.186.306.072.115.143.229.221.34.066.094.136.185.206.276.087.113.174.224.267.332.03.035.055.072.086.107l45.692 51.371h-39.918c-.046 0-.09.006-.135.007a6.838 6.838 0 0 0-.43.022c-.113.008-.227.016-.339.029a7.953 7.953 0 0 0-.406.062c-.116.02-.233.039-.348.064-.128.028-.254.063-.38.098-.117.032-.235.062-.35.1-.121.039-.24.086-.36.131-.116.044-.233.088-.347.137-.113.049-.223.106-.334.161-.116.058-.232.115-.345.178-.102.057-.2.12-.3.182a7.208 7.208 0 0 0-.35.227c-.088.062-.174.128-.26.194-.12.092-.239.185-.353.284-.032.027-.066.05-.098.078-.049.043-.09.091-.138.135a7.636 7.636 0 0 0-2.327 4.276 7.514 7.514 0 0 0-.117 1.149c-.002.071-.011.14-.011.211 0 .047.006.092.007.138.002.141.011.281.021.421.008.117.016.234.03.35.015.13.037.26.059.389.021.123.04.246.067.367.026.12.06.238.092.357.034.125.067.251.107.373.037.114.081.225.123.337.047.124.093.248.146.369.046.106.1.21.151.314.061.123.121.246.188.366.054.096.114.189.173.284.076.123.153.245.236.364.06.086.125.169.189.253.093.121.187.241.287.357.027.032.05.066.078.098l45.69 51.364h-39.918c-.046 0-.09.006-.135.007a6.838 6.838 0 0 0-.43.022c-.113.008-.227.016-.339.029a7.953 7.953 0 0 0-.406.062c-.116.02-.233.039-.348.064-.128.028-.254.063-.38.098-.117.032-.235.062-.35.1-.121.039-.24.086-.36.131-.116.044-.233.088-.347.137-.113.049-.223.106-.334.161-.116.058-.232.115-.345.178-.102.057-.2.12-.3.182a7.208 7.208 0 0 0-.35.227c-.088.062-.174.128-.26.194-.12.092-.239.185-.353.284-.032.027-.066.05-.098.078-.049.043-.09.091-.137.135a7.724 7.724 0 0 0-.805.876 7.49 7.49 0 0 0-.809 1.269 7.825 7.825 0 0 0-.31.695 8.106 8.106 0 0 0-.321 1.037 7.963 7.963 0 0 0-.198 1.54c-.002.074-.011.146-.011.22 0 .048.006.095.007.143.003.136.011.271.021.407.009.122.017.242.031.363.015.126.036.252.058.378.021.126.042.253.069.376.026.117.058.232.089.348.035.128.068.257.109.382.036.111.079.22.12.329.048.126.094.252.148.375.046.105.099.208.15.312.061.123.121.247.189.367.054.096.114.19.172.284.076.123.153.245.236.364.06.086.125.169.189.253.093.121.187.241.287.357.027.032.05.066.078.098l57.131 64.227a7.703 7.703 0 0 0 5.774 2.592 7.698 7.698 0 0 0 5.133-1.954 7.725 7.725 0 0 0 .638-10.907l-45.691-51.366h39.921c.246 0 .492-.014.738-.037.088-.009.175-.024.262-.035.154-.02.308-.041.461-.07.104-.02.205-.045.308-.069.134-.031.268-.064.401-.103.105-.031.209-.065.312-.101a7.366 7.366 0 0 0 1.335-.601 7.717 7.717 0 0 0 .909-.609c.102-.079.203-.16.302-.244.034-.03.07-.054.104-.085.049-.043.09-.091.138-.135.107-.101.213-.203.314-.309a8.079 8.079 0 0 0 1.119-1.499 8.53 8.53 0 0 0 .337-.662 7.651 7.651 0 0 0 .557-1.806 7.514 7.514 0 0 0 .116-1.149c.002-.071.011-.14.011-.211 0-.047-.006-.092-.007-.138a8.413 8.413 0 0 0-.021-.421c-.009-.117-.016-.234-.03-.35a7.299 7.299 0 0 0-.059-.389c-.021-.123-.04-.246-.067-.367-.026-.12-.059-.238-.092-.357-.034-.125-.067-.251-.107-.374-.036-.113-.08-.223-.122-.335-.047-.125-.093-.25-.147-.371-.046-.106-.099-.208-.15-.312-.061-.123-.121-.246-.189-.366-.054-.097-.114-.19-.173-.285a7.795 7.795 0 0 0-.236-.364c-.06-.086-.125-.169-.189-.253a8.933 8.933 0 0 0-.286-.357c-.028-.032-.05-.066-.078-.098l-45.69-51.364h39.917z"
            fill={darker}
            opacity="1"
            className=""
          ></path>
        </g>
        <g fill="#7d8c97">
          <path
            d="M112.945 260.423a7.725 7.725 0 0 1-7.726-7.726V31.135a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v221.561a7.726 7.726 0 0 1-7.726 7.727zM170.077 260.423a7.727 7.727 0 0 1-7.728-7.726V31.135a7.726 7.726 0 1 1 15.452 0v221.561a7.723 7.723 0 0 1-7.724 7.727zM341.925 260.423a7.725 7.725 0 0 1-7.726-7.726V31.135a7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726v221.561a7.726 7.726 0 0 1-7.726 7.727zM399.057 260.423a7.727 7.727 0 0 1-7.728-7.726V31.135a7.726 7.726 0 1 1 15.452 0v221.561a7.724 7.724 0 0 1-7.724 7.727z"
            fill={dark}
            opacity="1"
            className=""
          ></path>
        </g>
        <path
          fill={accent}
          d="M5.151 303.073h501.698a5.15 5.15 0 0 1 5.151 5.151V483.44a5.15 5.15 0 0 1-5.151 5.151H5.151A5.15 5.15 0 0 1 0 483.44V308.224a5.15 5.15 0 0 1 5.151-5.151z"
          opacity="1"
          className=""
        ></path>
        <path
          fill={darker}
          d="M506.849 463.753H5.151A5.15 5.15 0 0 1 0 458.602v24.838a5.15 5.15 0 0 0 5.151 5.151h501.698A5.15 5.15 0 0 0 512 483.44v-24.838a5.15 5.15 0 0 1-5.151 5.151z"
          opacity="1"
          className=""
        ></path>
        <path
          fill={darker}
          d="M506.849 303.073h-28.845a5.15 5.15 0 0 1 5.151 5.151V483.44a5.15 5.15 0 0 1-5.151 5.151h28.845A5.15 5.15 0 0 0 512 483.44V308.224a5.15 5.15 0 0 0-5.151-5.151z"
          opacity="1"
          className=""
        ></path>
        <g fill={darker}>
          <path
            d="M78.946 454.743a7.708 7.708 0 0 1-5.464-2.263l-8.517-8.517a7.729 7.729 0 0 1 0-10.928 7.73 7.73 0 0 1 10.928 0l8.517 8.517a7.729 7.729 0 0 1-5.464 13.191zM151.471 454.743a7.708 7.708 0 0 1-5.464-2.263l-8.517-8.517a7.729 7.729 0 0 1 0-10.928 7.73 7.73 0 0 1 10.928 0l8.517 8.517a7.729 7.729 0 0 1-5.464 13.191zM223.996 454.743a7.708 7.708 0 0 1-5.464-2.263l-8.517-8.517a7.729 7.729 0 0 1 0-10.928 7.73 7.73 0 0 1 10.928 0l8.517 8.517a7.729 7.729 0 0 1-5.464 13.191zM296.521 454.743a7.708 7.708 0 0 1-5.464-2.263l-8.517-8.517a7.729 7.729 0 0 1 0-10.928 7.73 7.73 0 0 1 10.928 0l8.517 8.517a7.729 7.729 0 0 1-5.464 13.191zM369.046 454.743a7.708 7.708 0 0 1-5.464-2.263l-8.517-8.517a7.729 7.729 0 0 1 0-10.928 7.73 7.73 0 0 1 10.928 0l8.517 8.517a7.729 7.729 0 0 1-5.464 13.191zM441.571 454.743a7.708 7.708 0 0 1-5.464-2.263l-8.517-8.517a7.729 7.729 0 0 1 0-10.928 7.73 7.73 0 0 1 10.928 0l8.517 8.517a7.729 7.729 0 0 1-5.464 13.191z"
            className=""
          ></path>
        </g>
        <path
          fill={dark}
          d="M104.048 254.756v98.693h74.924v-98.693a2.06 2.06 0 0 0-2.06-2.06h-70.803a2.06 2.06 0 0 0-2.061 2.06z"
          opacity="1"
          className=""
        ></path>
        <path
          fill={darker}
          d="M176.912 252.696h-18.477a2.06 2.06 0 0 1 2.06 2.06v78.139h-56.447v20.553h74.924v-98.693a2.06 2.06 0 0 0-2.06-2.059z"
          opacity="1"
          className=""
        ></path>
        <path
          fill={dark}
          d="M78.669 392.804V357.57a4.121 4.121 0 0 1 4.121-4.121h117.44a4.121 4.121 0 0 1 4.121 4.121v35.234a4.121 4.121 0 0 1-4.121 4.121H82.79a4.122 4.122 0 0 1-4.121-4.121z"
          opacity="1"
          className=""
        ></path>
        <path
          fill={darker}
          d="M200.23 353.449h-18.477a4.121 4.121 0 0 1 4.121 4.121v35.234a4.121 4.121 0 0 1-4.121 4.121h18.477a4.121 4.121 0 0 0 4.121-4.121V357.57a4.121 4.121 0 0 0-4.121-4.121z"
          opacity="1"
          className=""
        ></path>
        <path
          fill={dark}
          d="M333.028 254.756v98.693h74.924v-98.693a2.06 2.06 0 0 0-2.06-2.06h-70.803a2.06 2.06 0 0 0-2.061 2.06z"
          opacity="1"
          className=""
        ></path>
        <path
          fill={darker}
          d="M405.891 252.696h-18.477a2.06 2.06 0 0 1 2.06 2.06v78.139h-56.447v20.553h74.924v-98.693a2.06 2.06 0 0 0-2.06-2.059z"
          opacity="1"
          className=""
        ></path>
        <path
          fill={dark}
          d="M307.649 392.804V357.57a4.121 4.121 0 0 1 4.121-4.121h117.44a4.121 4.121 0 0 1 4.121 4.121v35.234a4.121 4.121 0 0 1-4.121 4.121H311.77a4.122 4.122 0 0 1-4.121-4.121z"
          opacity="1"
          className=""
        ></path>
        <path
          fill={darker}
          d="M429.21 353.449h-18.477a4.121 4.121 0 0 1 4.121 4.121v35.234a4.121 4.121 0 0 1-4.121 4.121h18.477a4.121 4.121 0 0 0 4.121-4.121V357.57a4.121 4.121 0 0 0-4.121-4.121z"
          opacity="1"
          className=""
        ></path>
      </g>
    </svg>
  );
};

export default Foundation;
