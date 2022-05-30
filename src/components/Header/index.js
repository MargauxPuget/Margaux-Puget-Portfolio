import './style.scss';
import { Link, Routes, Route } from 'react-router-dom';

function Header() {
  return (
    <header className="header">

      <Link to="/">
        <h1 className="header_title">Margaux Puget</h1>
      </Link>
      <h2 className="header_soustitle">Développeuse en cours de chargement ...</h2>
      <div className="header_progressbar--wrapper">
        <div className="header_progressbar" />
      </div>

      <Routes>
        <Route
          path="/projets"
          element={
            (
              <div className="asideList">
                <aside className="aside aside--pass">
                  <h4>Projets Passés</h4>
                </aside>
                <aside className="aside aside--now">
                  <h4>Projets En cours</h4>
                </aside>
                <aside className="aside aside--futur">
                  <h4>Projets Future</h4>
                </aside>
              </div>
            )
        }
        />
      </Routes>
    </header>
  );
}

export default Header;
