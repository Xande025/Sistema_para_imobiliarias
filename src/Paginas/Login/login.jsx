import './loginStyle.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Novo estado para controle de exibição da senha
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validUsers = [
    { email: 'Duduenri', password: 'UPimoveis', role: 'adm' },
    { email: 'AlexandreR', password: 'UPimoveis', role: 'adm'},
    { email: 'MonicaG', password: 'vivamudanca', role: 'adm' },
    { email: 'GabrielH', password: 'vivamudanca', role: 'adm' },
    { email: 'LeonardoA', password: 'vivamudanca', role: 'adm' },
    { email: 'AlexC', password: 'vivamudanca', role: 'home' }, 
    { email: 'CarolC', password: 'vivamudanca', role: 'home' },
    { email: 'ClaudioUP', password: 'vivamudanca', role: 'home' },
    { email: 'GabrielM', password: 'vivamudanca', role: 'home' },  
    { email: 'Illie', password: 'vivamudanca', role: 'home' },
    { email: 'MarcioM', password: 'vivamudanca', role: 'home' },
    { email: 'NetoS', password: 'vivamudanca', role: 'home' },
    { email: 'RafaelA', password: 'vivamudanca', role: 'home' },
    { email: 'TheodoroC', password: 'vivamudanca', role: 'home' },
    { email: 'AnaBia', password: 'vivamudanca', role: 'una' },
    { email: 'DanmersomS', password: 'vivamudanca', role: 'una' },
    { email: 'JacquesD', password: 'vivamudanca', role: 'una' },
    { email: 'JordanaC', password: 'vivamudanca', role: 'una' },
    { email: 'RafaelP', password: 'vivamudanca', role: 'una' },
    { email: 'RossanaP', password: 'vivamudanca', role: 'una' } 
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = validUsers.find(
      user => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      if (user.role === 'home') {
        navigate('/home');
      } else if (user.role === 'una') {
        navigate('/Unahome');
      } else if (user.role === 'adm') {
        navigate('/home'); // Ajuste conforme necessário para a página de admin
      }
    } else {
      setError('Login ou senha incorretos');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-body">
      <div className="center-container">
        <section className="login">
          <img src="/novalogo.png" alt="Logo" className="logoL" />
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
            <div className="password-container">
              <input 
                type={showPassword ? "text" : "password"}  // Alterna entre 'text' e 'password'
                placeholder="Senha" 
                className="input-field" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button" 
                className="toggle-password" 
                onClick={toggleShowPassword}
              >
                {showPassword ? '👁️' : '👁️'}  {/* Ícone para alternar a exibição */}
              </button>
            </div>
            <input type="submit" value="Entrar" className="submit-button" />
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;
