import './style.scss';
import PropTypes from 'prop-types';
import Category from 'src/components/Category';
import { NavLink } from 'react-router-dom';

function Main({ categories }) {
  return (
    <main className="main">

      {categories.map((category) => (
        <NavLink
          // on ajoute la props to pour que Link sache quelle url utiliser
          to={category.route}
          className="main_link"
          key={category.title}
        >
          <Category {...category} />
        </NavLink>
      ))}

    </main>
  );
}

Main.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
  })).isRequired,
};

export default Main;
