import { Check,DownloadIcon,Share2Icon } from "lucide-react";
export default function SuccessMessage(){
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="my-6">
        <div className="w-34 h-34 flex flex-col items-center justify-center border-4 border-blue-500 rounded-full">
          <Check className="w-26 h-26 text-green-500" />
        </div>
      </div>
      <div className="my-6 flex">
        <button className="w-30 h-10 bg-[#FF1A5B] text-white mx-2  font-bold flex flex-col items-center justify-center py-3 rounded-md shadow-md hover:bg-[#E6004C] transition">
          <DownloadIcon />
        </button>
        <button className="w-30 h-10 bg-[#FF1A5B] text-white mx-2 font-bold flex flex-col items-center justify-center py-3 rounded-md shadow-md hover:bg-[#E6004C] transition">
          <Share2Icon />
        </button>
      </div>
    </div>
  );
};


