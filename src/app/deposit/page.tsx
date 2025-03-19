"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import BankCarousel from "@/components/Banks"
import DepositForm from "@/components/DepositForm"
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
const bancos = [
    { nome: "BPC", img: "/bpc.png" },
    { nome: "BFA", img: "/BFA.png" },
    { nome: "BAI", img: "/BAI.png" },
  ];

export default function Deposit(){

    const [bancoSelecionado, setBancoSelecionado] = useState(bancos.length > 0 ? bancos[0]: null); // Estado inicial
    const router = useRouter();
    
    return(
        <>
            <div className="bg-gradient-to-b from-[#FE5A03] to-[#FF1A5B] w-full h-screen">
            <div className="">
                  <Header />
            </div>
            <div className="fixed top-25 left-0 right-0">
                <BankCarousel bancoSelecionado={bancoSelecionado} setBancoSelecionado={setBancoSelecionado} />
            </div>

            {/* Mostra o banco selecionado no formulário */}
            <div className="mt-13">
                <DepositForm bancoSelecionado={bancoSelecionado} />
            </div>
            {/* Botão Voltar */}
                <div>
                    <button onClick={() => router.push("/menu/")} className="absolute bottom-6 left-6 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
                        <ArrowLeft className="w-6 h-6 text-[#FE5A03]" />
                    </button>
                </div>
            </div>
        </>
    )
}