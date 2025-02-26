import React from 'react';
import { useAppContext } from '@/context/AppContext';


const Windows: React.FC = () => {
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
          d="m68.498 480.419 115.304-43.101c2.553-.954 4.114-2.976 4.114-5.335V100.751c0-2.162-1.313-4.063-3.529-5.115L68.498 40.65v439.769zM443.473 480.419l-115.304-43.101c-2.553-.954-4.114-2.976-4.114-5.335V100.751c0-2.162 1.313-4.063 3.529-5.115L443.473 40.65v439.769z"
          fill={accent}
          opacity="1"
          className=""
        ></path>
        <path
          d="M357.777 248.827V123.134c0-.425.253-.802.68-1.016l52.377-26.198c1.025-.513 2.466.248 2.466 1.3v152.013c0 .71-.693 1.281-1.55 1.275l-52.314-.339c-.916-.006-1.659-.607-1.659-1.342zM413.299 277.376v153.236c0 1.005-1.326 1.768-2.36 1.358l-52.37-20.804c-.492-.196-.793-.597-.793-1.061V277.982c0-.735.743-1.339 1.66-1.348l52.314-.527c.857-.009 1.549.56 1.549 1.269z"
          fill="#f7f9f9"
          className=""
        ></path>
        <path
          d="m410.834 95.92-31.255 15.633v137.679c0 .444-.272.834-.685 1.063l32.856.213c.856.006 1.55-.565 1.55-1.275V97.22c-.001-1.052-1.441-1.813-2.466-1.3zM411.75 276.106l-32.679.329c.31.232.508.565.508.941v142.135l31.361 12.458c1.034.411 2.36-.353 2.36-1.358V277.376c-.001-.709-.693-1.278-1.55-1.27z"
          fill="#e4e4e4"
          className=""
        ></path>
        <path
          d="M484.151 11.907C484.151 5.331 478.82 0 472.243 0H39.755c-6.576 0-11.907 5.331-11.907 11.907v468.512h40.65V40.65H443.5v439.769h40.651V11.907z"
          fill={dark}
          opacity="1"
          className=""
        ></path>
        <path
          d="M472.243 0h-34.731c6.576 0 11.907 5.331 11.907 11.907v468.512h34.731V11.907C484.151 5.331 478.82 0 472.243 0z"
          fill={darker}
          opacity="1"
          className=""
        ></path>
        <path
          d="M154.195 248.827V123.134c0-.425-.253-.802-.68-1.016L101.137 95.92c-1.025-.513-2.466.248-2.466 1.3v152.013c0 .71.693 1.281 1.55 1.275l52.314-.339c.916-.006 1.66-.607 1.66-1.342z"
          fill="#fce995"
          className=""
        ></path>
        <path
          d="M98.671 277.376v153.236c0 1.005 1.326 1.768 2.36 1.358l52.37-20.804c.492-.196.793-.597.793-1.061V277.982c0-.735-.743-1.339-1.66-1.348l-52.314-.527c-.856-.009-1.549.56-1.549 1.269zM154.195 248.827V123.134c0-.425-.253-.802-.68-1.016L101.137 95.92c-1.025-.513-2.466.248-2.466 1.3v152.013c0 .71.693 1.281 1.55 1.275l52.314-.339c.916-.006 1.66-.607 1.66-1.342z"
          fill="#f7f9f9"
          className=""
        ></path>
        <path
          d="M154.195 123.134c0-.212-.063-.413-.18-.587a1.296 1.296 0 0 0-.5-.429l-13.797-6.901-20.254-10.131v143.74c0 .251-.088.863-.239 1.558l33.311-.216c.229-.001.447-.04.646-.109.298-.103.551-.274.73-.487.179-.214.283-.471.283-.746V123.134zM152.535 276.633l-33.072-.333v148.348l33.939-13.482c.492-.196.793-.597.793-1.061V277.982c0-.736-.744-1.34-1.66-1.349z"
          fill="#e4e4e4"
          className=""
        ></path>
        <path
          d="M496.995 512H15.004a9.216 9.216 0 0 1-9.216-9.216v-20.227a9.216 9.216 0 0 1 9.216-9.216h481.991a9.216 9.216 0 0 1 9.216 9.216v20.227a9.216 9.216 0 0 1-9.216 9.216z"
          fill={darker}
          opacity="1"
          className=""
        ></path>
        <path
          d="M496.995 473.322H471.48v38.659h25.516a9.216 9.216 0 0 0 9.216-9.216v-20.227a9.217 9.217 0 0 0-9.217-9.216z"
          fill={darker}
          className=""
        ></path>
      </g>
    </svg>
  );
};

export default Windows;
