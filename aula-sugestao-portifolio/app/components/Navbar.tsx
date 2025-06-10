'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-16 py-4">
        {/* Links de navegação */}
        <div className="flex gap-6 text-sm sm:text-base font-semibold text-white">
          <a href="#sobre" className="hover:text-yellow-200 transition-colors duration-200">Sobre</a>
          <a href="#projetos" className="hover:text-yellow-200 transition-colors duration-200">Projetos</a>
          <a href="#contato" className="hover:text-yellow-200 transition-colors duration-200">Contato</a>
        </div>

        {/* Nome ou logo */}
        <div className="text-white font-bold text-lg sm:text-xl">
          Luigi Cazzeri 🧑‍💻
        </div>
      </div>
    </nav>
  );
}
