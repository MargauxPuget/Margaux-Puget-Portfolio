import './style.scss';
import HorizontalScroll from 'react-scroll-horizontal';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Projet from './Projet';

function ProjetsList() {
  const projectsList = useSelector((state) => state.projectsList);

  return (
    <main className="projects">
      <HorizontalScroll reverseScroll>
        {projectsList.map((project) => (
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

export default ProjetsList;
