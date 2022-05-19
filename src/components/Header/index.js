/* eslint-disable react/self-closing-comp */
import './style.scss';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const sampleLocation = useLocation();
  console.log(sampleLocation.pathname);

  const isProjectPage = (sampleLocation == "/projets");
  console.log(isProjectPage);

  return (
    <header className="header">
      {isProjectPage && (
        <>
          <aside className="aside aside--left">
            <h4>Projets</h4>
            <h5>Passés</h5>
          </aside>
          <aside className="aside aside--right">
            <h4>Projets</h4>
            <h5>Future</h5>
          </aside>
        </>
      )}
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
