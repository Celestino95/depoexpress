import { ArrowLeftCircle } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
  
  interface ModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    message: string;
  }
  
  export default function AlertDialogDemo({ isOpen, setIsOpen, content }: ModalProps) {
    return (
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className=" max-w-full w-full h-full flex flex-col  justify-center items-center">
         
             <div className="w-full h-full flex-1 flex justify-center items-center">
                {content}
             </div>
          
          <AlertDialogFooter className="absolute bottom-6 left-6">
            <ArrowLeftCircle className="w-6 h-6 text-[#FE5A03]" onClick={() => setIsOpen(false)} />
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  