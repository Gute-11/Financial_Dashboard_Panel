import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen w-full background-pattern">
      <main className="grid grid-cols-2 px-20 py-32">
        <div className="bg-white items-center flex justify-center rounded-l-3xl">
          <div className="mb-8 w-full mx-16">
            <div className="border-gray-300 border-2 flex h-auto w-8 justify-center rounded-full">
              <Link to={"/home"}>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </button>
              </Link>
            </div>
            <h1 className="text-center pb-14 font-semibold">
              BEM VINDO DE VOLTA!
            </h1>
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
                transition-all duration-150 ease-linear hover:scale-105 hover:bg-green-500 focus:outline-none"
              >
                Logar
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-green-700 items-center justify-center flex h-96 rounded-r-3xl">
          <h1 className="text-white font-bold">É BOM TE VER DENOVO!</h1>
        </div>
      </main>
    </div>
  );
}

export default Login;
