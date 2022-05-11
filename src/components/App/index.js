// == Import
import './styles.css';
import { Routes, Route } from 'react-router-dom';

// Data
import categoriesList from 'src/data/categories';

// Composants
import Header from 'src/components/Header';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';
import Error from 'src/components/Error';

console.log(categoriesList);

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Main categories={categoriesList} />} />
        <Route path="*" element={<Error />} />

      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
