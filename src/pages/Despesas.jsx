import NavBar from "../components/navbar";
import SideBar from "../components/SideBar";

function Receitas() {
  return (
    <div className="flex h-screen bg-background">
      <div className="hidden md:block pt-16">
        <SideBar />
      </div>

      <div className="flex-1 flex flex-col">
        <NavBar />

        <main className="p-4 pt-24">
          <div className="pt-4">
            <h1 className="text-2xl font-bold text-center">
              Aba de adição de Despesas em processo de criação!
            </h1>
            <div className="shadow p-2 flex justify-center">
              <button
                className="px-16 py-4 bg-red-600 text-white rounded
               transition-all duration-300 ease-linear hover:scale-105"
              >
                Adicionar Ganho
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Receitas;
