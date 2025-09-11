import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="page bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-gray-400 font-semibold font-sans text-5xl">ALERTA!!! -- PÁGINA NÃO ENCONTRADA --</h1>
        <Link to="/">
          <button className="mt-4 px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-300">Voltar</button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
