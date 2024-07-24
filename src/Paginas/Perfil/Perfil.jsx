import { useParams } from 'react-router-dom';
import usersData from './usersData';
import './Perfil.css';

const Perfil = () => {
  const { email } = useParams();
  const user = usersData.find(user => user.email === email);

  return (
    <>
      <main className="principal">
        <div className="main">
          <img id="teucu" src={user.profile.photo} alt={user.profile.name} />

          <div className="dudu">
            <h1>Info</h1>
            <h3>Nome: {user.profile.name}</h3>
            <h3>Creci: {user.profile.creci}</h3>
            <h3>Contato: {user.profile.contato}</h3>
          </div>

          <div id="churrasco">
            <h1>Sobre</h1>
            <p>{user.profile.about}</p>
          </div>
        </div>
        <div className="secundaria">
          <div className="agenciamento">
            <h2 className="conteudo">Agenciamentos</h2>
          </div>
          <div className="meses-container">
            <div className="mes-coluna">
              <h3 className="mes">
                Janeiro <img className="ima" src={user.profile.agenciamentos.janeiro} alt="Janeiro" />
              </h3>
              <h3 className="mes">
                Fevereiro <img className="ima" src={user.profile.agenciamentos.fevereiro} alt="Fevereiro" />
              </h3>
              <h3 className="mes">
                Março <img className="ima" src={user.profile.agenciamentos.marco} alt="Março" />
              </h3>
              <h3 className="mes">
                Abril <img className="ima" src={user.profile.agenciamentos.abril} alt="Abril" />
              </h3>
              <h3 className="mes">
                Maio <img className="ima" src={user.profile.agenciamentos.maio} alt="Maio" />
              </h3>
              <h3 className="mes">
                Junho <img className="ima" src={user.profile.agenciamentos.junho} alt="Junho" />
              </h3>
            </div>
            <div className="mes-coluna">
              <h3 className="mes">
                Julho <img className="ima" src={user.profile.agenciamentos.julho} alt="Julho" />
              </h3>
              <h3 className="mes">
                Agosto <img className="ima" src={user.profile.agenciamentos.agosto} alt="Agosto" />
              </h3>
              <h3 className="mes">
                Setembro <img className="ima" src={user.profile.agenciamentos.setembro} alt="Setembro" />
              </h3>
              <h3 className="mes">
                Outubro <img className="ima" src={user.profile.agenciamentos.outubro} alt="Outubro" />
              </h3>
              <h3 className="mes">
                Novembro <img className="ima" src={user.profile.agenciamentos.novembro} alt="Novembro" />
              </h3>
              <h3 className="mes">
                Dezembro <img className="ima" src={user.profile.agenciamentos.dezembro} alt="Dezembro" />
              </h3>
            </div>
          </div>
          <button className="butao">
            <li><a href="/home">Voltar para Home</a></li>
          </button>
        </div>
      </main>
    </>
  );
}

export default Perfil;
