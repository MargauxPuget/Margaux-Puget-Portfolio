import './style.scss';
import PropTypes from 'prop-types';
import HorizontalScroll from 'react-scroll-horizontal';
import { Link } from 'react-router-dom';
import Projet from './Projet';

function ProjetsList({ projetsList }) {
  return (
    <main className="projects">
      <HorizontalScroll reverseScroll>
        {projetsList.map((project) => (
          <Link
            // on ajoute la props to pour que Link sache quelle url utiliser
            to={project.route}
            key={project.title}
          >
            <Projet {... project} />
          </Link>
        ))}
      </HorizontalScroll>
    </main>
  );
}

ProjetsList.propTypes = {
  projetsList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProjetsList;
