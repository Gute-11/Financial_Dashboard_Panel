import fotoPerfil from "../images/foto_de_perfil.jpg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header
      className="fixed top-0 left-0 w-full h-16 z-50 bg-gradient-to-r
     from-lime-300 to-lime-600 shadow px-6
     flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <div className="w-16 h-16">
          <img
            src={fotoPerfil}
            alt="Foto de Perfil"
            className="w-full h-full rounded-full
            object-cover border-2 cursor-pointer border-gray-300
            transition-all duration-100 ease-linear hover:scale-110"
          />
        </div>
        <span className="text-xl font-bold">Nome de Usuário</span>
      </div>
      <div>
        <Link to="/Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10 hover:scale-125 transition-all duration-150 ease-linear cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
