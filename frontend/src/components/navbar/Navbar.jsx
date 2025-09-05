function Navbar(){
    return(
        <nav ClassName="bg-blue-600 text-white px-6 py-4 flex justify-between intems-center shadow-md">
            {/* Logo da empresa */}
            <h1 ClassName="text-x1 font-bold">Minha Empresa</h1>
            {/* Links do menu de navegação */}
            <ul ClassName="flex gap-6"> 
                <li><a href="#home" ClassName="hover:text-gray-200">Home</a></li>
                <li><a href="#sobre" ClassName="hover:text-gray-200">Sobre</a></li>
                <li><a href="#contato" ClassName="hover:text-gray-200">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Navbar