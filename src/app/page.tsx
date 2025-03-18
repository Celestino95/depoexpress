"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Keyboard from "@/components/Keyboard";
import dynamic from "next/dynamic";

// Importa o Menu dinamicamente para garantir que ele só será carregado no client-side
const Menu = dynamic(() => import("@/components/Menu"), { ssr: false });

export default function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className="principal h-screen bg-gradient-to-b from-[#FE5A03] to-[#FF1A5B]">
      <div>
        <Header />
      </div>
      {!isMenuVisible && (
        <div>
          <Keyboard onCorrectPin={() => setIsMenuVisible(true)} />
        </div>
      )}
      {isMenuVisible && (
        <div>
          <Menu />
        </div>
      )}
    </div>
  );
}
