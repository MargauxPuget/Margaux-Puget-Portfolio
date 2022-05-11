/* eslint-disable react/self-closing-comp */
import './style.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header_title">Margaux Puget</h1>
      </Link>
      <h2 className="header_soustitle">Développeuse en cours de chargement ...</h2>
      <div className="header_progressbar--wrapper">
        <div className="header_progressbar">
        </div>
      </div>
    </header>
  );
}

export default Header;
