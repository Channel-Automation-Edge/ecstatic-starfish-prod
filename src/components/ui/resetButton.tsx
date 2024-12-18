import React from 'react';
import { Dialog, DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogClose,
  DialogTitle
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ onClick }) => {
  const handleConfirm = () => {
    onClick();
  };

  return (
    <div>
      

      <Dialog>
        <DialogTrigger className="flex items-center text-[#6B7280] hover:text-xorange transition-colors duration-200">
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 md:w-6 h-4 md:h-6"
        >
          <g clipPath="url(#clip0_156861_406)">
            <path d="M256 42.6667C284.299 42.7595 312.298 48.4638 338.378 59.4493C364.458 70.4349 388.1 86.4836 407.936 106.667H341.333C335.675 106.667 330.249 108.914 326.248 112.915C322.248 116.916 320 122.342 320 128C320 133.658 322.248 139.084 326.248 143.085C330.249 147.086 335.675 149.333 341.333 149.333H429.717C440.222 149.328 450.296 145.152 457.724 137.724C465.152 130.296 469.328 120.222 469.333 109.717V21.3334C469.333 15.6754 467.086 10.2492 463.085 6.24842C459.084 2.24764 453.658 2.78622e-05 448 2.78622e-05C442.342 2.78622e-05 436.916 2.24764 432.915 6.24842C428.914 10.2492 426.667 15.6754 426.667 21.3334V65.664C391.406 33.9084 348.002 12.5954 301.314 4.11201C254.626 -4.37142 206.499 0.309616 162.321 17.6309C118.143 34.9522 79.659 64.2298 51.1789 102.185C22.6988 140.14 5.34703 185.275 1.06667 232.533C0.791119 235.504 1.13741 238.5 2.08348 241.329C3.02956 244.159 4.55467 246.761 6.56164 248.968C8.56861 251.176 11.0134 252.941 13.7403 254.152C16.4672 255.363 19.4164 255.992 22.4 256C27.6179 256.067 32.6727 254.183 36.5751 250.719C40.4775 247.254 42.9464 242.458 43.4987 237.269C48.2478 184.165 72.6821 134.756 112.002 98.7486C151.321 62.7408 202.684 42.7369 256 42.6667Z" fill="currentColor"/>
            <path d="M489.621 256C484.404 255.933 479.349 257.817 475.446 261.281C471.544 264.745 469.075 269.541 468.523 274.73C464.996 315.333 449.897 354.071 425.017 386.351C400.136 418.63 366.519 443.095 328.153 456.844C289.786 470.592 248.282 473.047 208.562 463.917C168.843 454.786 132.576 434.455 104.064 405.333H170.667C176.325 405.333 181.751 403.085 185.752 399.085C189.752 395.084 192 389.658 192 384C192 378.342 189.752 372.916 185.752 368.915C181.751 364.914 176.325 362.666 170.667 362.666H82.2828C77.0795 362.664 71.9268 363.686 67.119 365.676C62.3113 367.666 57.943 370.584 54.2638 374.263C50.5845 377.943 47.6665 382.311 45.6766 387.119C43.6867 391.926 42.6639 397.079 42.6668 402.282V490.666C42.6668 496.324 44.9144 501.751 48.9151 505.751C52.9159 509.752 58.3421 512 64.0001 512C69.658 512 75.0843 509.752 79.085 505.751C83.0858 501.751 85.3334 496.324 85.3334 490.666V446.336C120.594 478.091 163.998 499.404 210.686 507.888C257.374 516.371 305.501 511.69 349.679 494.369C393.857 477.048 432.341 447.77 460.821 409.815C489.301 371.859 506.653 326.725 510.933 279.466C511.209 276.496 510.863 273.5 509.917 270.67C508.971 267.841 507.445 265.239 505.438 263.032C503.431 260.824 500.987 259.058 498.26 257.848C495.533 256.637 492.605 256.008 489.621 256Z" fill="currentColor"/>
          </g>
          <defs>
            <clipPath id="clip0_156861_406">
              <rect width="512" height="512" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <h4 className='text-md font-semibold'>Confirm Reset</h4>
            <DialogDescription>
              Are you sure you want to reset your form? All progress will be lost.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button className='bg-gray-200 hover:bg-gray-300 text-gray-800'>Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className='bg-xorange hover:bg-xorangeDark' onClick={handleConfirm}>Reset Form</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResetButton;
