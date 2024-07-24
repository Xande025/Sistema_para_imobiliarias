import { Link } from 'react-router-dom';

import './Banner.css';

const Banner = () => {
    return (
        <header className="banner">
            <img src="/public/banner.png" alt="O banner principal"/>
           
          <button className='butao'>
              <li><Link to="/home">Voltar para Home</Link></li>
              </button>
        </header>
    )
}

export default Banner;
