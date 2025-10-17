import fotoLogo from "../images/Logo.png";
import fotoHomePage from "../images/imagemHomePage.png";
import "../index.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <header
        className="bg-white h-28 gap-3 flex items-center
         fixed top-0 w-screen px-4"
      >
        <img
          src={fotoLogo}
          alt="Foto Logo"
          className=" rounded-full
            object-cover w-20 h-20 cursor-pointer border-gray-300
            transition-all duration-150 ease-linear hover:scale-125"
        />
        <a href="#" className="pr-4 hover:font-bold">
          FLEXBOARD
        </a>
        <a href="#" className=" hover:font-semibold">
          Sobre Nós
        </a>
        <a href="#" className=" hover:font-semibold">
          Contato
        </a>
        <a href="#" className=" hover:font-semibold">
          Fale Conosco
        </a>
        <Link to="/Login">
          <button
            className="bg-green-500 border-green-400 border-2 py-2 ml-auto text-white px-6 rounded-md
          transition-all duration-200 ease-linear hover:scale-105 focus:outline-none
          hover:bg-white hover:text-black"
          >
            Conectar
          </button>
        </Link>
        <p>ou</p>
        <Link to="/Cadastro">
          <button
            className="py-2 px-6 rounded-md border-green-400 border-2 transition-all
          duration-200 ease-linear hover:bg-green-500 hover:scale-105 focus:outline-none
          hover:text-white"
          >
            Cadastrar
          </button>
        </Link>
      </header>

      <div className="pt-28 h-full md:h-screen flex background-pattern">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-8">
          <div className="justify-center flex flex-col gap-4 pl-4">
            <h1 className="text-white text-4xl font-bold">
              <span className="text-black">FLEXBOARD</span>: Seu Dashboard
              Financeiro, Muito Mais{" "}
              <span className="text-black">Flexível</span>
            </h1>
            <p className="text-white font-thin">
              Gestão Financeira Simplificada, para Você Focar no que Realmente
              Importa
            </p>
            <p className="text-white font-semibold">
              &quot;Agora, consigo visualizar tudo de forma clara e organizada.
              O FLEXBOARD me deu o controle que eu precisava!&quot;
              <br />— Gutemberg F. M., Um cliente satisfeito da plataforma!
            </p>
            <button
              className="mt-4 bg-white hover:scale-105 duration-150 text-green-500
            py-2 px-6 rounded-lg hover:bg-slate-100 hover:font-semibold"
            >
              COMEÇAR!
            </button>
          </div>

          <div className="flex flex-col">
            <img
              src={fotoHomePage}
              alt="Foto Home Page"
              className="object-cover m-auto justify-center h-96 w-96
              rounded-3xl ease-linear"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
