import NavBar from "./components/navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-1 flex flex-col">
        <NavBar />

        <main className="p-4">
          <h1 className="text-2xl font-bold text-center">
            Olá Mundo! site DashBoard em processo de criação
          </h1>
          <div className="shadow p-2 flex justify-center">
            <button className="px-16 py-4 bg-blue-500 text-white rounded">
              Clique aqui!
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
