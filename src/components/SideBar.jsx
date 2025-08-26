function SideBar() {
  return (
    <div className="w-64 bg-principal text-white h-full p-4 rounded-r-3xl">
      <h2 className="text-xl font-semibold pb-16 text-center">Menu</h2>
      <ul className="space-y-8">
        <li>
          <a href="#" className="hover:text-gray-300 border-l-2 p-1">
            Menu Principal
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 border-l-2 p-1">
            Receitas
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300 border-l-2 p-1">
            Despesas
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
