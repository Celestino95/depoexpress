import { useState, useEffect } from "react";

const ProgressBar = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          onComplete(); // Chama a função quando atinge 100%
          return 100;
        }
        return oldProgress + 1; // Aumenta 1% a cada intervalo
      });
    }, 160); // Tempo entre cada incremento

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="w-50 max-w-sm h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#FF3A3A] to-[#FF1A8C] rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }} // Define a largura dinamicamente
      />
    </div>
  );
};

export default ProgressBar;
