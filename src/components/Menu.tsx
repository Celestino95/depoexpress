"use client";
import { useRouter } from "next/navigation";
import { Clock, HelpCircle } from "lucide-react";
import Balance from "./Balance";
import AlertDialogDemo from "./Modal";
import BalanceConverter from "./BalanceConverter";
import { useState, ReactNode } from "react";
import Footer from "./Footer";
import Map from "./map";

const Menu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const handleOpenModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center">

        <div className="fixed top-25">
               <Balance />
        </div>

        <div className="bg-white rounded-t-3xl shadow-lg p-6  w-85 fixed bottom-0 h-110">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "DEPOSITAR", image: "depo.png", path: "/deposit" }, // Somente este redireciona
              { label: "VER AGENTE", image: "gps.jpg", content: <Map /> },
              { label: "HISTORICO", icon: Clock, content: <p>Veja seu histórico de transações.</p> },
              { label: "CARREGAR", image: "saldo.jpg", content: <BalanceConverter /> },
              { label: "AJUDA", icon: HelpCircle, content: <p>Precisa de ajuda? Estamos aqui para você!</p> },
            ].map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  item.path ? router.push(item.path) : handleOpenModal(item.content)
                }
                className="w-35 h-23 bg-[#FF5A3C] rounded-2xl shadow-md flex flex-col items-center justify-center space-y-2 border-2 border-gray-400 cursor-pointer"
              >
                {item.image ? (
                  <img src={item.image} alt={item.label} className="w-10 h-10 rounded-3xl" />
                ) : (
                  item.icon && <item.icon className="w-8 h-8 text-white" />
                )}
                <span className="text-sm font-bold text-white">{item.label}</span>
              </div>
            ))}

            <Footer />
          </div>
        
        </div>
      </div>

      {/* Modal Controlada (Aparece para os outros botões) */}
      <AlertDialogDemo isOpen={isOpen} setIsOpen={setIsOpen} content={modalContent} />
    </>
  );
};

export default Menu;
