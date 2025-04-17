import { useNavigate } from "react-router-dom";

export function Simulator() {
  const navigate = useNavigate();

  const simulations = [
    {
      title: "🧲 Circuito Elétrico",
      description: "Monte e simule um circuito com lâmpadas e baterias.",
      path: "/simulador/circuito",
    },
    {
      title: "🧪 Química Interativa",
      description: "Misture substâncias e veja reações químicas!",
      path: "/simulador/quimica",
    },
    {
      title: "⚙️ Desafio de Física",
      description: "Teste seu conhecimento em leis do movimento.",
      path: "/simulador/fisica",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-purple-300 to-blue-300 min-h-screen min-w-screen items-center justify-center place-content-center">
      <h2 className="text-3xl font-bold mb-6 text-purple-700 flex items-center justify-center">
        Escolha uma simulação
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        {simulations.map((sim, index) => (
          <div
            key={index}
            onClick={() => navigate(sim.path)}
            className="bg-white border border-purple-300 p-6 rounded-2xl shadow-md hover:shadow-lg cursor-pointer transition"
          >
            <h3 className="text-xl font-semibold text-purple-800 mb-2">
              {sim.title}
            </h3>
            <p className="text-gray-600 text-sm">{sim.description}</p>
          </div>
        ))}
      </div>
      <button
        className="mt-8 underline text-white  items-center justify-center flex m-auto"
        onClick={() => navigate("/dashboardpage")}
      >
        ← Voltar ao menu
      </button>
    </div>
  );
}
