import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="h-screen w-full background-pattern">
      <main className="grid grid-cols-2 px-20 py-32">
        <div className="bg-green-700 items-center justify-center flex h-96 rounded-l-3xl">
          <h1 className="text-white font-bold">É BOM TE VER DENOVO!</h1>
        </div>
        <div className="bg-white items-center flex justify-center rounded-r-3xl">
          <div className="mb-8 w-full mx-16">
            <h1 className="text-center pb-14 font-semibold">CADRASTRE-SE</h1>
            <input
              className="shadow mb-2 block border border-gray-300 rounded-lg w-full py-2
                focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
              type="text"
              placeholder="Nome de Usuário"
            />
            <input
              className="shadow mb-2 border border-gray-300 rounded-lg w-full py-2
                focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
              type="text"
              placeholder="E-mail"
            />
            <input
              className="shadow mb-8 block border border-gray-300 rounded-lg w-full py-2
                focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out"
              type="text"
              placeholder="Senha"
            />
            <Link to="/Menu">
              <button
                className="w-full h-8 bg-green-700 text-white rounded-full
                transition-all duration-150 ease-linear hover:scale-105 hover:bg-green-500
                focus:outline-none"
              >
                Cadastrar
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cadastro;
