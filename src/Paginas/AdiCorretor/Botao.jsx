import PropTypes from 'prop-types'; // Importando PropTypes
import './Botao.css';

const Botao = (props) => {
    return (
        <button className='botao'>
            {props.children}
        </button>
    );
}

// Definindo as propTypes para o componente
Botao.propTypes = {
    children: PropTypes.node.isRequired, // Validação para children
};

export default Botao;