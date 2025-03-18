"use client"
import { useRouter } from "next/navigation";
const DepositForm = ({ bancoSelecionado }) => {
  if (!bancoSelecionado) return null; // Evita erro caso esteja indefinido
  const router = useRouter();
  return (
    <div className="flex items-center justify-center px-2">
      {/* Card Branco */}
      <div className="bg-white rounded-t-2xl shadow-lg p-6 w-85 fixed bottom-0 h-125">
        
        {/* Logo do Banco */}
        <div className="flex justify-center mb-2">
          <img src={bancoSelecionado.img} alt={bancoSelecionado.nome} className="w-100 h-15 rounded-xl shadow-md" />
        </div>

        {/* Campos do Formulário */}
        <form className="space-y-4 text-start">
          <div>
            <label className="block text-gray-700 font-semibold">IBAN ou telefone</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-[#FF1A5B] outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Titular da conta</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-[#FF1A5B] outline-none"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-semibold">
              Valor (50.000 kz máximo por depósito diário)
            </label>
            <div className="relative">
              <input
                type="number"
                className="w-full p-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-[#FF1A5B] outline-none pr-10"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-700 font-semibold">
                Kz
              </span>
            </div>
          </div>

          {/* Botão Confirmar */}
          <button onClick={()=> router.push("/loading/") } className="w-full bg-[#FF1A5B] text-white font-bold py-3 rounded-md shadow-md hover:bg-[#E6004C] transition">
            CONFIRMAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepositForm;
