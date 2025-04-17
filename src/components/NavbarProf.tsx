import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export function NavbarProf() {
  const { name, setName } = useUser();
  const navigate = useNavigate();

  function handleLogout() {
    setName(""); // Limpa o nome e localStorage
    localStorage.removeItem("userName");
    navigate("/"); // Volta pra tela de login
  }

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="text-xl font-bold text-purple-700">
        🎓 EducaOnline
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-700">Olá Professor, {name || "Professor"}!</span>
        <button
          onClick={handleLogout}
          className="text-sm text-purple-600 hover:underline"
        >
          Sair
        </button>
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="w-10 h-10 rounded-full border-2 border-purple-300"
        />
      </div>
    </nav>
  );
}
