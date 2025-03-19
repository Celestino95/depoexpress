"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";
import SuccessMessage from "@/components/Success";

export default function Loading() {
  const router = useRouter();
  const [completed, setCompleted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-white">
      {!completed ? (
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <img src="/logo_principal.png" alt="Logo" className="w-40 h-40 my-5" />

          {/* Progress Bar */}
          <ProgressBar onComplete={() => setCompleted(true)} />
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-6">
          {/* Mensagem de Sucesso */}
          <SuccessMessage />  {/* Botão Voltar */}
            <button
                onClick={() => router.push("/menu/")}
                className="absolute bottom-6 left-6 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
            >
                <ArrowLeft className="w-6 h-6 text-[#FE5A03]" />
            </button>
        </div>
      )}

    
    </div>
  );
}
