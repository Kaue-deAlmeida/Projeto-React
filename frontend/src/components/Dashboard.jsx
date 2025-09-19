function Dashboard(){
    return(
        <div className="min-h-screen bg-gray-100 flex fles-col">
            {/* 
            min-h-screen: Ocupa o mínimo da altuea da tela inteira;
            bg-gray-100: Cor de fundo cinza claro;
            flex flex-col: Layout principal em coluna(cabeçalho em cima, ).
            */}
            
            {/* Cabeçalho */}
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
                {/* 
                bg-blue-600: Cor de fundo azul escuro;
                text-white: Cor do texto;
                p-4: Padding interno do item;
                flex: Ativa o flex box;
                justify-between: Separar o logo e o menu nos extremos entre os dois;
                items-center: Centralizando verticalmente os itens;
                shadow: Adiciona sombra ao cabeçalho.
                */}
                
                <h1 className="text-2xl font-bold">Paonel administrativo</h1>
                {/*
                text-2xl: Tamanho da fonte, neste caso, 2 x o tamanho mormal;
                font-bold: Deixa o texto em negrito.
                 */}

                 <nav className="flex gap-4">
                    <a href="#" className="hover:undeline">Iníco</a>
                    <a href="#" className="hover:undeline">Usuários</a>
                    <a href="#" className="hover:undeline">Relatórios</a>
                 </nav>
            </header>
            
            {/* Layout com neu laterale o conteúdo principal */}
            <div className="flex flex-1">
                {/* 
                flex: Cria um layout em linha;
                flex-1: Ocupa todo o espaço disponível abaixo do cabeçalho.
                */}

                {/* Menu lateral */}
                <aside className="w-64 bg-white p-6 border-r hidden md:block">
                {/*
                w-64: Largura fixa do menu lateral;
                border-r: Criar a borda direita;
                hidden md:block: Escone o menu lateral em telas pequenas.
                */}

                <ul className="space-y-4">
                {/*
                space-y-4; Espaçamento verticl entre os itens da lista não ordenada.
                */}
                    <li><a href="#" className=" block p-2 rounded hover:bg-gray-100">Dashboard</a></li>
                    <li><a href="#" className=" block p-2 rounded hover:bg-gray-100">Clientes</a></li>
                    <li><a href="#" className=" block p-2 rounded hover:bg-gray-100">Configurações</a></li>
                </ul>
                </aside>
                {/* Conteúdo principal */}
                <main className="flex-1 p-6">
                    <h2 className="text-xl font-semibold mb-6">Resumo</h2>

                    {/* Grid de Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap6">
                    {/*
                    grid: Ativa o layout em grid;
                    grid-cols-1: Serve para telas pequenas, apenas uma coluna;
                    md:grid-cols-2: Serve para telas médias, apenas 2 colunas;
                    md:grid-cols-2: Serve para telas grandes, 3 colunas;
                    */}
                    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                        {/* Card 1 */}
                        <h3 className="text-lg font-bold mb:2">Usuários ativos:</h3>
                        <p className="text-gray-600">1.245.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                        {/* Card 2 */}
                        <h3 className="text-lg font-bold mb:2">Novos Clientes:</h3>
                        <p className="text-gray-600">320 este mês.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
                        {/* Card 3 Ocupa mais espaço em tela grande*/}
                        <h3 className="text-lg font-bold mb:2">Vendas:</h3>
                        <p className="text-gray-600">45.800.</p>
                    </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Dashboard