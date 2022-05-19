// == Import
import './styles.scss';
import { Routes, Route } from 'react-router-dom';

// Data
// import categoriesList from 'src/data/categories';
// import projectsList from 'src/data/projects';

// Composants
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import ProjetsList from 'src/components/ProjetsList';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projets" element={<ProjetsList />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
