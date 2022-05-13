import './style.scss';
import PropTypes from 'prop-types';
import Category from 'src/components/Category';

function Main({ categories }) {
  return (
    <main className="main">

      {categories.map((category) => (
        <Category {...category} key={category.title} />
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
