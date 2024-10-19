import '../KanBan/Kanban.css';
import { useState } from 'react';
import Header from './Header';

function Kanban() {
  const [cards, setCards] = useState({
    aguardando: [],
    emAtendimento: [
      { name: 'Karen Castanho', status: 'Venda', tag: 'TE077B_IMOB', action: 'Analisar crédito' },
      { name: 'Paola Leal', status: 'Venda', tag: 'CA1888_IMOB', action: 'Analisar crédito' },
    ],
    visita: [
      { name: 'Roanna', status: 'Locação', tag: 'AP3611_IMOB', action: 'Visita Agendada' },
      { name: 'Igor', status: 'Locação', tag: 'AP4164_IMOB', action: 'Visita Realizada' },
    ],
    proposta: [
      { name: 'Lucas Matos', status: 'Venda/Locação', tag: 'SA0252_IMOB', action: 'Proposta' },
    ],
    fechado: [
      { name: 'Maria Amélia Nunes', status: 'Locação', tag: 'AP4064_IMOB', action: 'Fechado' },
    ],
    inativo: [
      { name: 'Roberta Garcia', status: 'Venda', tag: 'ST0007_IMOB', action: 'Venda Perdida' },
    ]
  });

  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleDragStart = (e, task, column) => {
    e.dataTransfer.setData('task', JSON.stringify(task));
    e.dataTransfer.setData('column', column);
  };

  const handleDrop = (e, newColumn) => {
    const task = JSON.parse(e.dataTransfer.getData('task'));
    const oldColumn = e.dataTransfer.getData('column');

    setCards((prevCards) => {
      const updatedCards = { ...prevCards };
      updatedCards[oldColumn] = updatedCards[oldColumn].filter((t) => t.name !== task.name);
      updatedCards[newColumn].push(task);
      return updatedCards;
    });
  };

  const renderCards = (column) => {
    return cards[column].map((card, index) => (
      <div
        key={index}
        className="kanban-card"
        draggable
        onDragStart={(e) => handleDragStart(e, card, column)}
      >
        <div className="card-header">
          <p className="card-status">{card.status}</p>
          <h3 className="card-name">{card.name}</h3>
        </div>
        <div className="card-details">
          <p>{card.tag}</p>
          <button
            className="action-button"
            onClick={() => {
              if (card.name === 'Lucas Matos') {
                setSelectedTask(card);
                setShowModal(true);
              }
            }}
          >
            {card.action}
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="kanban-body">
      <Header /> {/* Cabeçalho com imagem e nome */}
      <div className="center-container-kanban">
        <section className="kanban-board">
          {['aguardando', 'emAtendimento', 'visita', 'proposta', 'fechado', 'inativo'].map((column) => (
            <div
              key={column}
              className="kanban-column"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, column)}
            >
              <h2>{column.charAt(0).toUpperCase() + column.slice(1)}</h2>
              {renderCards(column)}
            </div>
          ))}
        </section>

        {/* Modal para exibir a timeline */}
        {showModal && selectedTask && (
          <div className="modal-backdrop">
            <div className="modal">
              <h2>Timeline de Eventos: {selectedTask.name}</h2>
              <div className="timeline">
                <div className="timeline-event">
                  <p>15/10/2024 - 09:35 : O usuário entrou através do formulário SOS Pelotas.</p>
                </div>
                <div className="timeline-event">
                  <p>15 /10/2024 - 11:30 : Foi realizada uma simulação de financiamento.</p>
                </div>
                <div className="timeline-event">
                  <p>15/10/2024 - 16:30 : A visita a imóveis foi agendada com base no perfil do cliente.</p>
                </div>
              </div>
              <button className="close-button" onClick={() => setShowModal(false)}>
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Kanban;