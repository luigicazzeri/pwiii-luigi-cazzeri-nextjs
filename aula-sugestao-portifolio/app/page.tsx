import Head from 'next/head';
import Navbar from './components/Navbar';
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="pt-28 px-6 sm:px-16">
          {/* Seção Sobre */}
          <section id="sobre" className="mb-24 text-center">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent mb-6">
              Olá, sou o Luigi Cazzeri
            </h1>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
              Desenvolvedor apaixonado por criar experiências digitais inovadoras e impactantes, sempre buscando o equilíbrio entre funcionalidade e estética.
            </p>
          </section>

          {/* Seção Projetos */}
          <section id="projetos" className="mb-24">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent mb-12 text-center">
              Meus Projetos
            </h2>
            <div className="grid md:grid-cols-2 gap-14">
              {/* Projeto 1 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-500">
                <h3 className="text-2xl font-semibold text-sky-400 mb-4">Projeto 1 - Malams Saloon</h3>
                <p className="text-gray-400 mb-6">
                  Desenvolvimento de um sistema web para gerenciar agendamentos em salão de beleza, com foco em experiência do usuário e eficiência.
                </p>
                <a
                  href="https://github.com/marianneoliveirxr/projeto_malams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded transition-colors"
                >
                  Ver no GitHub
                </a>
              </div>

              {/* Projeto 2 */}
              <div className="bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-500">
                <h3 className="text-2xl font-semibold text-sky-400 mb-4">Projeto 2</h3>
                <p className="text-gray-400 mb-6">
                  Uma aplicação web para otimizar o aprendizado e facilitar a gestão de estudos, com interface limpa e intuitiva.
                </p>
                <a
                  href="#"
                  className="inline-block px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded transition-colors"
                >
                  Ver Detalhes
                </a>
              </div>
            </div>
          </section>

          {/* Seção Contato */}
          <section id="contato" className="mb-20 text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent mb-6">
              Contato
            </h2>
            <p className="text-2xl text-gray-400">
              Entre em contato pelo email:{' '}
              <span className="font-medium">luigi.cazzeri0310@gmail.com</span>
            </p>

            <div className="mt-8 flex justify-center gap-14">
              <a
                href="https://github.com/luigicazzeri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-sky-400 hover:text-sky-300 transition-colors"
              >
                GitHub
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
