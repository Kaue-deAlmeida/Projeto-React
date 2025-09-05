import React from 'react'

function Hero() {
  return (
    <section id="home" ClassName="flex flex-col itens-center justify-center text-center bg-gray-100 py-20 px-6">
        {/* Título Principal */}
        <h2 ClassName="text-4xl md:text-6xl font-bold  md-6">
            Bem-Vindo à <span ClassName="text-blue-600">minha empresa</span>.
        </h2>
        {/* Texto de apoio */}
        <p ClassName="text-lg text-gray-700 mb-8 max-w-2xl">
            Oferecemos soluções inovadoras para seu negócio, garantindo tecnologia de ponta, rapidez e confiabilidade.
        </p>
        {/*Botão de ação*/}
        <div ClassName='flex gap-4'>
            <a href="#sobre" ClassNam="bg-blue-600 text white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">Saiba Main</a>
            <a href="#contato" ClassNam="bg-blue-600 text white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">Contato</a>
        </div>
    </section>
  )
}

export default Hero