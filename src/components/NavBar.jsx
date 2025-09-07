import fotoPerfil from "../images/foto_de_perfil.jpg";

function NavBar() {
  return (
    <header
      className="fixed top-0 left-0 w-full h-16 z-50 bg-gradient-to-r
     from-lime-300 to-lime-600 shadow px-6
     flex items-center"
    >
      <div className="ml-auto flex items-center gap-3">
        <span className="text-xl font-bold">Nome de Usuário</span>
        <div className="w-16 h-16">
          <img
            src={fotoPerfil}
            alt="Foto de Perfil"
            className="w-full h-full rounded-full
          object-cover border-2 cursor-pointer border-gray-300"
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
