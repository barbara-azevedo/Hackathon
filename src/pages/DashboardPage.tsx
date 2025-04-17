import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export function DashboardPage() {
      const navigate = useNavigate();
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-purple-300 to-blue-300">
      <Navbar />

      <div className="py-10 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-800 mb-6 flex items-center justify-center">🎓 Painel do Aluno</h1>
        <h1 className="text-3xl font-bold text-white mb-6 flex items-center justify-center">👋 Bem-vindo ao EducaOnline!</h1>

        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 m-auto">
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-purple-700">🎓 Nível</h2>
            <p className="text-2xl font-bold">2</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-lg font-semibold text-blue-700">⚡ XP Acumulado</h2>
            <p className="text-2xl font-bold">450 XP</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md lg:col-span-2">
            <h2 className="text-lg font-semibold text-green-700">🎯 Missões Ativas</h2>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>Completar atividade sobre circuitos elétricos</li>
              <li>Participar do experimento virtual de física</li>
              <li>Responder quiz sobre ecossistemas</li>
            </ul>
          </div>
        </div>
        <button
        className="mt-8 underline text-white items-center justify-center flex m-auto"
        onClick={() => navigate("/simulador")}
      >
        Ir para o Laboratório Virtual
      </button>
      </div>

    </div>
  );
}
