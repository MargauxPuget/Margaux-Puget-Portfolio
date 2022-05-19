import './style.scss';
import { Link, Routes, Route } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Routes>
        <Route
          path="/projets"
          element={
            (
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
            )
        }
        />
      </Routes>

      <Link to="/">
        <h1 className="header_title">Margaux Puget</h1>
      </Link>
      <h2 className="header_soustitle">Développeuse en cours de chargement ...</h2>
      <div className="header_progressbar--wrapper">
        <div className="header_progressbar" />
      </div>
    </header>
  );
}

export default Header;
