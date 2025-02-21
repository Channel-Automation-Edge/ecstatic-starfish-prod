import React, { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

const Remodel: React.FC = () => {
  const appContext = useContext(AppContext);
  if (!appContext) {
    return null;
  }
  const { contractor } = appContext;
  const { accent, dark } = contractor.colors;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 511.055 511.055"
      xmlSpace="preserve"
      className="w-12 h-12 sm:w-14 sm:h-14 sm:mb-4 ml-2 mr-4 sm:ml-0 sm:mr-0"
    >
      <g>
        <path
          fill={accent}
          d="m444.782 41.736 17.625 79.064c2.961 13.285-8.894 25.14-22.179 22.179l-79.064-17.625c-14.306-3.189-19.46-20.911-9.096-31.274l9.272-9.272c-77.439-48.005-180.689-38.441-247.835 28.705-78.307 78.307-78.307 205.722 0 284.03s205.722 78.307 284.03 0c47.252-47.252 67.868-114.691 55.146-180.399-2.87-14.825 6.82-29.17 21.645-32.039 14.824-2.87 29.169 6.82 32.039 21.645 16.179 83.565-10.05 169.344-70.165 229.458-48.261 48.261-112.428 74.84-180.68 74.84s-132.418-26.579-180.68-74.84S0 323.779 0 255.528c.001-68.252 26.579-132.419 74.84-180.68S187.268.008 255.52.008c52.694 0 102.946 15.857 145.331 45.29l12.657-12.657c10.363-10.364 28.085-5.21 31.274 9.095z"
          opacity="1"
          className=""
        ></path>
        <g fill={dark}>
          <path
            d="M452.681 217.144c-2.711-14.001 5.785-27.569 19.226-31.451a27.206 27.206 0 0 0-.585 12.81c12.722 65.707-7.893 133.146-55.146 180.399a202.2 202.2 0 0 1-9.616 8.99c40.803-46.53 58.001-109.391 46.121-170.748zM379.981 66.167l-9.272 9.272c-10.364 10.364-5.21 28.085 9.096 31.274l79.064 17.625c1.349.301 2.683.442 3.988.45.08 11.55-10.694 20.851-22.629 18.191l-79.064-17.625c-14.306-3.189-19.46-20.911-9.096-31.274l9.272-9.272c-73.795-45.746-171.027-39.213-238.121 19.608a202.318 202.318 0 0 1 8.927-9.544c67.147-67.146 170.396-76.711 247.835-28.705zM18.641 236.887c0 68.252 26.579 132.418 74.84 180.68s112.428 74.84 180.68 74.84c63.75-.001 123.931-23.195 170.92-65.58-2.88 3.185-5.825 6.324-8.881 9.381-48.261 48.261-112.428 74.84-180.68 74.84s-132.418-26.579-180.68-74.84S0 323.779 0 255.528c.001-68.252 26.579-132.419 74.84-180.68a260.84 260.84 0 0 1 9.559-9.082c-42.5 47.018-65.758 107.281-65.758 171.121z"
            opacity="1"
            className=""
          ></path>
        </g>
        <path
          fill={accent}
          d="m338.374 206.656-82.846-33.869-82.847 33.869V364.45h165.693z"
          opacity="1"
          className=""
        ></path>
        <path
          fill={dark}
          d="m350.05 239.714-94.522-38.642-94.522 38.642c-7.351 3.005-15.747-.518-18.752-7.869l-8.932-21.848c-3.006-7.351.518-15.747 7.869-18.753l104.43-42.693a26.184 26.184 0 0 1 19.816 0l104.43 42.693c7.351 3.005 10.875 11.401 7.869 18.753l-8.932 21.848c-3.007 7.352-11.403 10.875-18.754 7.869z"
          opacity="1"
          className=""
        ></path>
        <path
          fill="#ffffff"
          d="M214.509 256.384h82.037v63.19h-82.037z"
          opacity="1"
          className=""
        ></path>
        <path
          fill={dark}
          d="M296.546 327.29h-82.037a7.716 7.716 0 0 1-7.716-7.716v-63.19a7.716 7.716 0 0 1 7.716-7.716h82.037a7.716 7.716 0 0 1 7.716 7.716v63.19a7.717 7.717 0 0 1-7.716 7.716zm-74.322-15.431h66.606V264.1h-66.606z"
          opacity="1"
          className=""
        ></path>
      </g>
    </svg>
  );
};

export default Remodel;
