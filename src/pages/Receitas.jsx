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
              Site DashBoard em processo de criação
            </h1>
            <div className="shadow p-2 flex justify-center">
              <button className="px-16 py-4 bg-blue-500 text-white rounded">
                Em Produção!
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Receitas;
