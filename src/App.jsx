import NavBar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex h-screen bg-background">
      <div className="hidden md:block pt-16">
        <SideBar />
      </div>

      <div className="flex-1 flex flex-col">
        <NavBar />

        <main className="p-4 pt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div
              className="bg-white shadow p-4 rounded-md text-center transition-transform
            duration-300 hover:scale-110"
            >
              <h2 className="text-lg font-semibold text-gray-700">Ganhos</h2>
              <p className="text-2xl text-green-500">R$ 250,00</p>
            </div>
            <div
              className="bg-white shadow p-4 rounded-md text-center transition-transform
            duration-300 hover:scale-110"
            >
              <h2 className="text-lg font-semibold text-gray-700">Despesas</h2>
              <p className="text-2xl text-red-500">R$ 100,00</p>
            </div>
            <div
              className="bg-white shadow p-4 rounded-md text-center transition-transform
            duration-300 hover:scale-110"
            >
              <h2 className="text-lg font-semibold text-gray-700">Saldo</h2>
              <p className="text-2xl text-blue-500">R$ 150,00</p>
            </div>
          </div>
          <div className="pt-4">
            <h1 className="text-2xl font-bold text-center">
              Site DashBoard em processo de criação!
            </h1>
            <div className="shadow p-2 flex justify-center">
              <button
                className="px-16 py-4 bg-blue-500 hover:bg-blue-700 transition-all
              duration-150 ease-linear hover:scale-105 text-white rounded"
              >
                Em Produção!
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
