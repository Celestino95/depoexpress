"use client"
import { useRouter } from "next/navigation";
import { Bell, LogOut, Settings } from "lucide-react";

const Footer = () => {

  const router = useRouter();
  return (
    <div className="flex justify-center">
        <div className="fixed bottom-0 left-0 w-full">
          {/* Parte superior com gradiente */}
          <div className=""></div>

          {/* Caixa branca arredondada */}
          <div className="relative flex items-center justify-between bg-white rounded-t-4xl p-4 shadow-md px-10 border-2">
            
            {/* Ícone de Logout (mais para dentro) */}
            <LogOut onClick={()=>  router.push("/")} className="w-6 h-6 text-[#FE5A03] rotate-180 ml-6" />

            {/* Ícone central destacado */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-6 border-[#FF1A5B]">
              <Bell className="w-6 h-6 text-[#FE5A03]" />
            </div>

            {/* Ícone de Configurações (mais para dentro) */}
            <Settings className="w-6 h-6 text-[#FE5A03] mr-6" />
          </div>
        </div>
    </div>
  );
};

export default Footer;
