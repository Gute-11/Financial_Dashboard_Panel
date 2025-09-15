import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";

function Receitas() {
  return (
    <div className="flex h-screen bg-background">
      <div className="hidden md:block pt-16">
        <SideBar />
      </div>

      <div className="flex-1 flex flex-col">
        <NavBar />

        <main className="p-4 w-auto pt-24">
          <div className="pt-4">
            <h1 className="text-2xl font-bold text-center">
              Adicione seus Gastos!
            </h1>

            <div className="shadow rounded-lg bg-slate-50 p-2 flex flex-col gap-4 h-auto">
              
              <div className="mb-4">
                <label className="block mb-1">Descrição:</label>
                <input className="w-96 shadow border border-gray-300 rounded-lg px-3 py-2
                focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out" type="text"
                placeholder="Digite a descrição"/>
              </div>

              <div className="mb-4">
                <label className="block mb-1">Valor:</label>
                <input className="border shadow border-gray-300 rounded-lg px-3 py-2
                focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out" type="number"
                placeholder="0"/>
              </div>

              <div className="mb-4 items-center gap-4">
                <label className="block mb-1">Data:</label>
                <input className="border shadow border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ease-in-out" type="date"/>
              </div>

              <div className="mb-4 items-center gap-4">
                <label className="block mb-1">Categoria:</label>
                <select className="w-72 shadow border border-gray-300 rounded-lg focus:ring-2
                focus:ring-blue-500 transition transform hover:scale-105 duration-300 ease-in-out px-3 py-2">
                  <option>Alimentos</option>
                  <option>Compras</option>
                  <option>Boleto</option>
                  <option>Dividas</option>
                  <option>Mensalidade</option>
                  <option>Combustível</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className="flex w-full justify-center">
              <button
                className="px-12 h-16 bg-red-600 text-white rounded
                transition-all duration-300 ease-linear hover:scale-105 focus:outline-none"
              >
                Adicionar Gastos
              </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Receitas;
