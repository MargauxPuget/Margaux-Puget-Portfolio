import './style.scss';
import PropTypes from 'prop-types';
import Category from 'src/components/Category';
import { Link } from 'react-router-dom';

function Main({ categories }) {
  return (
    <main className="main">

      {categories.map((category) => (
        <Link
          // on ajoute la props to pour que Link sache quelle url utiliser
          to={category.route}
          className="main_link"
          key={category.title}
        >
          <Category {...category} />
        </Link>
      ))}

    </main>
  );
}

Main.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    route: PropTypes.string.isRequired,
  })).isRequired,
};

export default Main;
