import { useParams } from 'react-router-dom';
import usersData from './usersData';
import { Link } from 'react-router-dom';
import './Perfil.css';

const Perfil = () => {
  const { email } = useParams();
  const user = usersData.find(user => user.email === email);

  return (
    <>
      <main className="container">
        <div className="profile-card">
          <img className="profile-photo" src={user.profile.photo} alt={user.profile.name} />

          <div className="profile-info">
            <h1>Informações</h1>
            <div className="info-item">
              <strong>Nome:</strong> {user.profile.name}
            </div>
            <div className="info-item">
              <strong>Creci:</strong> {user.profile.creci}
            </div>
            <div className="info-item">
              <strong>Contato:</strong> {user.profile.contato}
            </div>
          </div>

          <div className="profile-about">
            <h1>Sobre</h1>
            <p>{user.profile.about}</p>
          </div>
        </div>

        <div className="agency-section">
          <h2 className="content">Agenciamentos</h2>
          <div className="months-container">
            <div className="month-item">
              <h3 className="month">Janeiro</h3>
              <img src={user.profile.agenciamentos.janeiro} alt="Janeiro" />
            </div>
            <div className="month-item">
              <h3 className="month">Fevereiro</h3>
              <img src={user.profile.agenciamentos.fevereiro} alt="Fevereiro" />
            </div>
            <div className="month-item">
              <h3 className="month">Março</h3>
              <img src={user.profile.agenciamentos.marco} alt="Março" />
            </div>
            <div className="month-item">
              <h3 className="month">Abril</h3>
              <img src={user.profile.agenciamentos.abril} alt="Abril" />
            </div>
            <div className="month-item">
              <h3 className="month">Maio</h3>
              <img src={user.profile.agenciamentos.maio} alt="Maio" />
            </div>
            <div className="month-item">
              <h3 className="month">Junho</h3>
              <img src={user.profile.agenciamentos.junho} alt="Junho" />
            </div>
            <div className="month-item">
              <h3 className="month">Julho</h3>
              <img src={user.profile.agenciamentos.julho} alt="Julho" />
            </div>
            <div className="month-item">
              <h3 className="month">Agosto</h3>
              <img src={user.profile.agenciamentos.agosto} alt="Agosto" />
            </div>
            <div className="month-item">
              <h3 className="month">Setembro</h3>
              <img src={user.profile.agenciamentos.setembro} alt="Setembro" />
            </div>
            <div className="month-item">
              <h3 className="month">Outubro</h3>
              <img src={user.profile.agenciamentos.outubro} alt="Outubro" />
            </div>
            <div className="month-item">
              <h3 className="month">Novembro</h3>
              <img src={user.profile.agenciamentos.novembro} alt="Novembro" />
            </div>
            <div className="month-item">
              <h3 className="month">Dezembro</h3>
              <img src={user.profile.agenciamentos.dezembro} alt="Dezembro" />
            </div>
          </div>
          <button className='back-button'>
            <Link to="/home">Voltar para Home</Link>
          </button>
        </div>
      </main>
    </>
  );
}

export default Perfil;
