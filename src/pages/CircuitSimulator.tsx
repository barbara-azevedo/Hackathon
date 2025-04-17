import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CircuitSimulator() {
  const navigate = useNavigate();
  const [hasBattery, setHasBattery] = useState(false);
  const [hasLamp, setHasLamp] = useState(false);
  const [circuitClosed, setCircuitClosed] = useState(false);

  const toggleBattery = () => {
    const newState = !hasBattery;
    setHasBattery(newState);
    setCircuitClosed(newState && hasLamp);
  };

  const toggleLamp = () => {
    const newState = !hasLamp;
    setHasLamp(newState);
    setCircuitClosed(newState && hasBattery);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-purple-300 to-blue-300 min-h-screen min-w-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-purple-700 mb-4">
        🔌 Simulador de Circuito Elétrico
      </h2>

      <div className="mb-6">
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded mr-4"
          onClick={toggleBattery}
        >
          {hasBattery ? "Remover Bateria" : "Adicionar Bateria"}
        </button>

        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={toggleLamp}
        >
          {hasLamp ? "Remover Lâmpada" : "Adicionar Lâmpada"}
        </button>
      </div>

      <div className="border p-6 rounded-xl bg-gray-100 shadow-md w-fit mx-auto">
        <div className="flex items-center gap-8">
          <div>
            🔋 {hasBattery ? "Bateria Presente" : "Sem Bateria"}
          </div>
          <div>
            🔌 {circuitClosed ? "Circuito Fechado" : "Circuito Aberto"}
          </div>
          <div>
            💡 {hasLamp ? (circuitClosed ? "Lâmpada Acesa" : "Lâmpada Apagada") : "Sem Lâmpada"}
          </div>
        </div>
      </div>

      <button
        className="mt-8 underline text-white"
        onClick={() => navigate("/simulador")}
      >
        ← Voltar ao menu
      </button>
    </div>
  );
}
