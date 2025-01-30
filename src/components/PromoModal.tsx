import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from '@/context/AppContext';
import { cn } from "@/lib/utils"

interface PromoModalProps {
  onButtonClick: () => void;
}

const Dialog = DialogPrimitive.Root

const PromoModal: React.FC<PromoModalProps> = ({ onButtonClick }) => {
  const appContext = useContext(AppContext);
  const [open, setOpen] = useState(false);

  // Example check for background image
  const backgroundImage = appContext?.form?.offer?.photo || '';

  useEffect(() => {
    // Set a timeout to show the modal after a few seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000); // Adjust the delay as needed (here it's 3 seconds)

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!open && (
        <aside
          className="fixed bottom-4 end-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-accentColor px-5 py-3 text-white"
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
            className="text-sm font-medium hover:opacity-75"
          >
            Hey! Come Check This Out 👋
          </a>

          <button
            className="rounded bg-white/20 p-1 hover:bg-white/10"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Close</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </aside>
      )}

      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out" />
          <DialogPrimitive.Content
            className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            Limited Offer!
            <button 
              className="mt-4 bg-accentColor text-white py-2 px-4 hover:bg-accentDark rounded-lg"
              onClick={onButtonClick}
            >
              Click Me!
            </button>
            <DialogPrimitive.Close className="absolute right-4 top-4">
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
};

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

export {Dialog, PromoModal, DialogTitle };
