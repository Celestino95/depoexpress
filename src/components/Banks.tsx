import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const bancos = [
  { nome: "BPC", img: "/bpc.png" },
  { nome: "BFA", img: "/BFA.png" },
  { nome: "BAI", img: "/BAI.png" },
];

type Banco = { nome: string; img: string };

type BankCarouselProps = {
  bancoSelecionado: Banco;
  setBancoSelecionado: (banco: Banco) => void;
};

const BankCarousel = ({ bancoSelecionado, setBancoSelecionado }: BankCarouselProps) => {
  const [index, setIndex] = useState(1);

  const prevBank = () => {
    const newIndex = index === 0 ? bancos.length - 1 : index - 1;
    setIndex(newIndex);
    setBancoSelecionado(bancos[newIndex]);
  };

  const nextBank = () => {
    const newIndex = index === bancos.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
    setBancoSelecionado(bancos[newIndex]);
  };

  return (
    <div className="relative w-full max-w-md mx-auto text-center">
      <h2 className="text-lg font-semibold text-white mb-4">Escolher o banco</h2>

      <div className="flex items-center justify-between">
        {/* Botão Esquerdo */}
        <button onClick={prevBank} className="p-2 rounded-full bg-white/20 hover:bg-white/40">
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>

        {/* Bancos */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex space-x-4 items-center"
        >
          {bancos.map((banco) => (
            <div
              key={banco.nome}
              className={`p-3 rounded-lg transition-all ${
                banco.nome === bancoSelecionado.nome ? "bg-white shadow-lg scale-110" : "bg-white/50 scale-90"
              }`}
            >
              <img src={banco.img} alt={banco.nome} className="w-15 h-5 object-contain" />
            </div>
          ))}
        </motion.div>

        {/* Botão Direito */}
        <button onClick={nextBank} className="p-2 rounded-full bg-white/20 hover:bg-white/40">
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default BankCarousel;
