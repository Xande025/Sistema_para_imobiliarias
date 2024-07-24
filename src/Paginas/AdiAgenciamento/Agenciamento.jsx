import { useState, useCallback, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ListaImoveis from './ListaImoveis';
import FormImovel from './FormImovel';
import Header from './Header';
import Sidebar from './Sidebar';
import { Toaster } from 'sonner';

function App() {
    const [open, setOpen] = useState(false);
    const [imoveis, setImoveis] = useState(JSON.parse(localStorage.getItem('imoveis')) || []);
    const [imoveisFiltrados, setImoveisFiltrados] = useState([]);
    const [imoveisOrdenados, setImoveisOrdenados] = useState([]);

    useEffect(() => {
        const storedImoveis = JSON.parse(localStorage.getItem('imoveis')) || [];
        setImoveis(storedImoveis);
    }, []);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const handleFiltrarImoveis = useCallback((filtrados) => {
        setImoveisFiltrados(filtrados);
    }, []);

    const handleOrdenarImoveis = useCallback((criterio) => {
        let ordenados = [...imoveis];
        if (criterio === 'maior-para-menor') {
            ordenados.sort((a, b) => b.valor - a.valor);
        } else if (criterio === 'menor-para-maior') {
            ordenados.sort((a, b) => a.valor - b.valor);
        }
        setImoveisOrdenados(ordenados);
    }, [imoveis]);

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-col lg:flex-row flex-1">
                <div className="lg:w-1/5 w-full bg-gray-200 order-2 lg:order-none">
                    <Sidebar imoveis={imoveis} onFiltrar={handleFiltrarImoveis} onOrdenar={handleOrdenarImoveis} />
                </div>
                <div className="flex-1 p-4 order-3 lg:order-none">
                    <button
                        className="px-4 py-2 bg-yellow-400 text-white font-bold rounded hover:bg-yellow-300 mb-4"
                        onClick={onOpenModal}
                    >
                        Cadastrar Novo Imóvel
                    </button>
                    <ListaImoveis imoveis={imoveisFiltrados.length > 0 ? imoveisFiltrados : imoveisOrdenados.length > 0 ? imoveisOrdenados : imoveis} />
                </div>
            </div>
            <Toaster />
            <Modal open={open} onClose={onCloseModal} center>
                <FormImovel />
            </Modal>
        </div>
    );
}

export default App;
