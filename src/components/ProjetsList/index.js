import './style.scss';
// import PropTypes from 'prop-types';
import HorizontalScroll from 'react-scroll-horizontal';
import Projet from './Projet';

function ProjetsList() {
  return (
    <main className="projects">
      <HorizontalScroll reverseScroll>
        <Projet />
        <Projet />
        <Projet />
        <Projet />
        <Projet />
        <Projet />
      </HorizontalScroll>
    </main>
  );
}

export default ProjetsList;
