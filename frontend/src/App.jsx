import { useState } from 'react'
import './App.css'

function App() {


  return (
    //Container principal da aplicação
    <>
    <div ClassName="flex flex-col min-h-screen">
      {/* Barra de navegação no topo */}
      </div>
      <Navbar/>
      {/* Conteúdo Principal flex-grow faz ocupar o espaço entre a navbar e footer */}
      <main ClassName="flex-grow">
        <Hero/>
      </main>
      {/* Rodapé no final da página */}
      <footer></footer>
    
    </>
  )
}

export default App
