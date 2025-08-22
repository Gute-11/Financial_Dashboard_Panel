function SideBar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-xl font-semibold mb-4">lista</h2>
      <ul className="space-y-4">
        <li>
          <a href="#" className="hover:text-gray-300">
            Ganhos
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Despesas
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-300">
            Observações
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
