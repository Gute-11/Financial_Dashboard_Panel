import fotoLogo from "../images/Logo.png";
import "../index.css";

function HomePage() {
  return (
    <div className="">
      <header
        className="bg-white h-28 gap-3 flex items-center
         fixed top-0 w-screen px-4"
      >
        <img
          src={fotoLogo}
          alt="Foto Logo"
          className=" rounded-full
            object-cover w-16 h-16 cursor-pointer border-gray-300
            transition-all duration-300 ease-linear hover:scale-110"
        />
        <h1>FLEXBOARD</h1>
        <a>alguma coisa</a>
      </header>
      <div className="pt-28 h-screen flex w-screen background-pattern">
        <main className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-8">
          <div className="justify-center flex flex-col gap-4 pl-4">
            <h1 className="text-white text-4xl font-bold">
              FLEXBOARD: Seu Dashboard Financeiro, Muito Mais Flexível
            </h1>
            <p className="text-white font-thin">
              Gestão Financeira Simplificada, para Você Focar no que Realmente
              Importa
            </p>
            <p className="text-white font-semibold">
              &quot;Agora, consigo visualizar tudo de forma clara e organizada. O
              FLEXBOARD me deu o controle que eu precisava!&quot; — Gutemberg F. M.,
              Cliente Satisfeito
            </p>
            <button className="mt-4 bg-white text-green-500 py-2 px-6 rounded-lg">COMEÇAR!</button>
          </div>

          <div className="justify-center flex flex-col">
            <h1>COLUNA COLUNA COLUNA IMAGEM AQUI!</h1>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
