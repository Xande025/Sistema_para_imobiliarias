import './loginStyle.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  //role: se for home vai pra centro vai pra home, se for una vai pra pagina do una
  const validUsers = [
    { email: 'Duduenri', password: 'UPimoveis', role: 'home' },
    { email: 'AlexandreR', password: 'UPimoveis', role: 'una'},
    { email: 'MonicaG', password: 'vivamudanca', role: 'una' },
    { email: 'GabrielH', password: 'vivamudanca', role: 'home' },
    { email: 'LeonardoA', password: 'vivamudanca', role: 'una' },
    { email: 'AlexC', password: 'vivamudanca', role: 'home' }, //Administrativo
    { email: 'CarolC', password: 'vivamudanca', role: 'home' },
    { email: 'ClaudioUP', password: 'vivamudanca', role: 'home' },
    { email: 'GabrielM', password: 'vivamudanca', role: 'home' },  
    { email: 'Illie', password: 'vivamudanca', role: 'home' },
    { email: 'MarcioM', password: 'vivamudanca', role: 'home' },
    { email: 'NetoS', password: 'vivamudanca', role: 'home' },
    { email: 'RafaelA', password: 'vivamudanca', role: 'home' },
    { email: 'TheodoroC', password: 'vivamudanca', role: 'home' }, //corretores Centro
    { email: 'AnaBia', password: 'vivamudanca', role: 'una' },
    { email: 'DanmersomS', password: 'vivamudanca', role: 'una' },
    { email: 'JacquesD', password: 'vivamudanca', role: 'una' },
    { email: 'JordanaC', password: 'vivamudanca', role: 'una' },
    { email: 'RafaelP', password: 'vivamudanca', role: 'una' },
    { email: 'RossanaP', password: 'vivamudanca', role: 'una' } // Corretores Una
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = validUsers.find(
      user => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user)); // Armazena o usuário logado
      if (user.role === 'home') {
        navigate('/home');
      } else if (user.role === 'una') {
        navigate('/Unahome');
      }
    } else {
      setError('Login ou senha incorretos');
    }
  };

  return (
    <div className="login-body">
      <div className="center-container">
        <section className="login">
          <img src="/logo.png" alt="Logo" className="logoL" />
          <h1>Faça seu Login</h1>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Login" 
              className="input-field" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Senha" 
              className="input-field" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Entrar" className="submit-button" />
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;