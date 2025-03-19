import { Eye, ArrowDown} from "lucide-react";

const BalanceConverter = () => {
  return (
    <div className="py-34 items-center justify-center min-h-screen bg-white px-6 relative w-full">
      {/* Cartão de Saldo */}
      <div className="bg-gradient-to-b from-[#FF3A3A] to-[#FF0055] text-white p-6 rounded-xl shadow-lg">
        <p className="text-center font-semibold">Saldo disponível</p>
        <div className="flex justify-center items-center space-x-2 mt-2">
          <span className="text-lg font-bold">KZ</span>
          <Eye className="w-5 h-5" />
        </div>
        <p className="text-center text-2xl font-bold mt-1">20.000,00</p>

        {/* Input de Código do Cartão */}
        <div className="mt-4">
          <label className="block text-sm font-semibold">Código do cartão de saldo</label>
          <input
            type="text"
            className="w-full text-black p-2 bg-gray-200 rounded-md focus:ring-2 focus:ring-[#FF1A5B] outline-none mt-1"
          />
        </div>
      </div>

      {/* Ícone de seta para baixo */}
      <div className="flex justify-center my-6">
        <ArrowDown className="w-8 h-8 text-pink-400" />
      </div>

      {/* Botão Converter */}
      <button className="w-full max-w-sm bg-[#FF1A5B] text-white font-bold py-3 rounded-md shadow-md hover:bg-[#E6004C] transition">
        CONVERTER
      </button>

    </div>
  );
};

export default BalanceConverter;
