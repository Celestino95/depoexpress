"use client";

import { useState } from "react";

interface KeyboardProps {
  onCorrectPin: () => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onCorrectPin }) => {
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "DEL"];
  const [pin, setPin] = useState<string>("");

  const handleKeyPress = (key: string) => {
    if (key === "DEL") {
      setPin((prev) => prev.slice(0, -1));
    } else if (key !== "" && pin.length < 4) {
      const newPin = pin + key;
      setPin(newPin);

      if (newPin === "1234") {
        setTimeout(() => onCorrectPin(), 200); // Oculta Keyboard e exibe Menu
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-between p-6">
      {/* Indicadores de Senha */}
      <div className="flex space-x-2 mt-10">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={`w-5 h-5 border-2 border-white rounded-full transition ${
                pin.length > i ? "bg-white" : "bg-[#bfbfbf]"
              }`}
            />
          ))}
      </div>

      {/* Teclado Numérico */}
      <div className="grid grid-cols-3 gap-4 py-12">
        {keys.map((key, index) => (
          <button
            key={index}
            className={`bg-white text-black font-bold py-3 w-14 h-14 rounded-xl shadow-md text-xl transition active:scale-95 flex items-center justify-center ${
              key === "" ? "invisible" : ""
            }`}
            onClick={() => handleKeyPress(key)}
          >
            {key}
          </button>
        ))}
      </div>

      {/* Rodapé */}
      <div className="w-full flex flex-col items-center space-y-2 py-4">
        <div className="w-2/3 border-t border-white"></div>
        <p className="text-white text-sm">
          Ainda não tens conta?{" "}
          <a href="#" className="text-blue-300">
            Criar nova conta
          </a>
        </p>
      </div>
    </div>
  );
};

export default Keyboard;
